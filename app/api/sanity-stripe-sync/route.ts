import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { writeClient } from '@/sanity/lib/client'

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
})

export async function POST(req: Request) {
  try {
    // Parse the webhook payload
    const payload = await req.json()
    
    // Determine the document ID from known fields
    const id =
      payload._id ??
      payload.id ??
      payload.documentId ??
      payload.result?._id ??
      payload.document?._id
    if (!id) {
      console.error('Sanity-Stripe Sync: No document ID provided in webhook payload')
      return NextResponse.json({ error: 'No document ID provided' }, { status: 400 })
    }

    // Obtain the class document: prefer payload result/document, fallback to fetch
    let classDoc: any = payload.result ?? payload.document
    if (!classDoc) {
      classDoc = await writeClient.getDocument(id)
    }
    if (!classDoc) {
      console.error('Sanity-Stripe Sync: Class document not found:', id)
      return NextResponse.json({ error: 'Class not found' }, { status: 404 })
    }

    // Ensure subPackages exists and is an array
    const subPackages = Array.isArray(classDoc.subPackages) ? classDoc.subPackages : []
    if (subPackages.length === 0) {
      return NextResponse.json({ ok: true })
    }

    // Create a shallow copy for patching
    const updatedSubPackages = subPackages.map((pkg: any) => ({ ...pkg }))
    let hasUpdates = false

    for (const pkg of updatedSubPackages) {
      // Only create in Stripe if IDs not already set
      if (!pkg.stripeProductId || !pkg.stripePriceId) {
        // Create Stripe product
        const product = await stripe.products.create({
          name: `${classDoc.title} - ${pkg.title}`,
          description: pkg.description?.[0]?.children?.[0]?.text || '',
          images: classDoc.featuredImage?.asset?.url ? [classDoc.featuredImage.asset.url] : [],
        })

        // Create Stripe price
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: pkg.price * 100, // in cents
          currency: 'usd',
        })

        // Assign back to subPackage
        pkg.stripeProductId = product.id
        pkg.stripePriceId = price.id
        hasUpdates = true
      }
    }

    // If any updates, patch the Sanity document
    if (hasUpdates) {
      await writeClient.patch(id).set({ subPackages: updatedSubPackages }).commit()
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('Sanity-Stripe Sync: Error processing webhook:', err)
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 })
  }
} 