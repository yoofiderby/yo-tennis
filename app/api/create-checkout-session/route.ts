import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { client, writeClient } from '@/sanity/lib/client'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      clientName,
      clientEmail,
      clientPhone,
      classId,
      subPackageId,
      timeSlotId,
    } = body

    console.log('Received request with:', {
      classId,
      subPackageId,
      timeSlotId
    })

    // Get class details with time slots
    const query = `*[_type == "class" && _id == $classId][0]{
      _id,
      title,
      timeSlots[]{
        _key,
        availableSeats,
        startTime,
        endTime,
        dayOfWeek,
        maxCapacity,
        isActive,
        startDate,
        endDate
      },
      subPackages[]{
        _key,
        title,
        price,
        stripePriceId,
        stripeProductId
      }
    }`

    const classDoc = await client.fetch(query, { classId })
    if (!classDoc) {
      console.log('Class not found:', classId)
      return NextResponse.json(
        { error: 'Class not found' },
        { status: 404 }
      )
    }

    // Find the selected time slot
    const timeSlot = classDoc.timeSlots.find((slot: any) => slot._key === timeSlotId)
    if (!timeSlot) {
      return NextResponse.json(
        { error: 'Time slot not found' },
        { status: 404 }
      )
    }

    // Check if seats are available
    if (timeSlot.availableSeats <= 0) {
      return NextResponse.json(
        { error: 'No available seats for this time slot' },
        { status: 400 }
      )
    }

    // Find the selected subPackage
    const subPackage = classDoc.subPackages.find(
      (pkg: any) => pkg._key === subPackageId
    )

    if (!subPackage) {
      console.log('Sub package not found:', {
        requestedSubPackageId: subPackageId,
        availableSubPackageIds: classDoc.subPackages.map((pkg: any) => pkg._key)
      })
      return NextResponse.json(
        { error: 'Sub package not found' },
        { status: 404 }
      )
    }

    // Create a temporary booking in Sanity using writeClient
    const booking = await writeClient.create({
      _type: 'booking',
      clientName,
      clientEmail,
      clientPhone,
      class: {
        _type: 'reference',
        _ref: classId,
      },
      subPackageKey: subPackageId,
      timeSlotKey: timeSlotId,
      bookingDate: new Date().toISOString(),
      status: 'pending',
      paymentStatus: 'pending',
      totalAmount: subPackage.price,
    })

    // Update only the availableSeats for the specific time slot
    const timeSlotIndex = classDoc.timeSlots.findIndex((slot: any) => slot._key === timeSlotId)
    if (timeSlotIndex === -1) {
      throw new Error('Time slot not found in array')
    }

    await writeClient
      .patch(classId)
      .set({
        [`timeSlots[${timeSlotIndex}].availableSeats`]: timeSlot.availableSeats - 1
      })
      .commit()

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: subPackage.stripePriceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/cancel`,
      customer_email: clientEmail,
      metadata: {
        bookingId: booking._id,
        timeSlotId: timeSlotId,
        classId: classId,
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
} 