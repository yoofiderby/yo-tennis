import { redirect } from 'next/navigation'
import SectionTitle from '@/components/sectionTitle'

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id: string }
}) {
  const sessionId = searchParams.session_id

  if (!sessionId) {
    redirect('/')
  }

  return (
    <main className="container mx-auto mt-44 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Payment Successful
          </div>
          <SectionTitle variant="primary" size="default" as="h1">
            Booking Confirmed!
          </SectionTitle>
          <p className="text-gray-800 mt-2 text-lg">
            Our team will contact you with further details about your class.
          </p>
        </div>
      </div>
    </main>
  )
} 