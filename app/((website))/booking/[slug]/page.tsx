import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import BookingPage from './BookingPage'
import { getBookingDataQuery } from '@/queries/bookingQueries'

async function getBookingData(slug: string) {
  return client.fetch(getBookingDataQuery, { slug })
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getBookingData(params.slug)

  if (!data?.subPackage) {
    notFound()
  }

  return <BookingPage initialData={data} />
} 