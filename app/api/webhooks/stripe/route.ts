import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { writeClient } from '@/sanity/lib/client'

// Disable the built-in request body parser so we can verify Stripe signatures
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
})
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const buf = await req.arrayBuffer()
  const sig = req.headers.get('stripe-signature')
  if (!sig) {
    console.error('Stripe webhook signature missing')
    return NextResponse.json({ error: 'Signature header missing' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(Buffer.from(buf), sig, webhookSecret)
  } catch (err: any) {
    console.error('Stripe webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Signature verification failed' }, { status: 400 })
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const bookingId = session.metadata?.bookingId
    if (!bookingId) {
      console.error('Stripe webhook: No bookingId in metadata')
      return NextResponse.json({ received: true })
    }
    console.log('Stripe webhook: Payment completed for bookingId:', bookingId)
  
    try {
      await writeClient
        .patch(bookingId)
        .set({ paymentStatus: 'completed', status: 'confirmed' })
        .commit()
      console.log('Stripe webhook: Booking updated with paymentStatus completed')
    } catch (err: any) {
      console.error('Stripe webhook: Failed to update booking:', err)
    }
  }

  return NextResponse.json({ received: true })
} 