import { NextResponse } from 'next/server'
import { client, writeClient } from '@/sanity/lib/client'

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

    console.log('Received booking request:', body)

    // Get class details using regular client for reading
    const classDoc = await client.getDocument(classId)
    console.log('Found class:', classDoc)

    if (!classDoc) {
      return NextResponse.json(
        { error: 'Class not found' },
        { status: 404 }
      )
    }

    // Find the selected subPackage
    const subPackage = classDoc.subPackages.find(
      (pkg: any) => pkg._key === subPackageId
    )

    if (!subPackage) {
      return NextResponse.json(
        { error: 'Sub package not found' },
        { status: 404 }
      )
    }

    // Find the time slot from the class document
    const timeSlot = classDoc.timeSlots.find(
      (slot: any) => slot._key === timeSlotId
    )

    if (!timeSlot) {
      console.log('Time slot not found. Available slots:', classDoc.timeSlots)
      return NextResponse.json(
        { error: 'Time slot not found' },
        { status: 404 }
      )
    }

    // Check if time slot is available
    if (!timeSlot.isActive || timeSlot.availableSeats <= 0) {
      return NextResponse.json(
        { error: 'Time slot is not available or fully booked' },
        { status: 400 }
      )
    }

    // Create booking in Sanity using writeClient for mutations
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

    console.log('Created booking:', booking)

    // Update time slot available seats using writeClient for mutations
    await writeClient
      .patch(classId)
      .set({
        [`timeSlots[_key == "${timeSlotId}"].availableSeats`]: timeSlot.availableSeats - 1
      })
      .commit()

    return NextResponse.json({ success: true, booking })
  } catch (error) {
    console.error('Error creating booking:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
} 