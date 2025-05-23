import SectionTitle from '@/components/sectionTitle'
import Button from '@/components/Button'

export default function CancelPage() {
  return (
    <main className="container mx-auto mt-44 px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Booking Cancelled
        </div>
        <SectionTitle variant="primary" size="default" as="h1">
          Payment Cancelled
        </SectionTitle>
        <p className="text-gray-600 mt-4 mb-8">
          Your booking process was cancelled. No charges were made to your account.
          If you have any questions or need assistance, please dont hesitate to contact us.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            buttonType="primary"
            textAndLink={{
              text: "Try Again",
              linkType: "internal",
              url: "/"
            }}
          />
          <Button
            buttonType="secondary"
            textAndLink={{
              text: "Contact Support",
              linkType: "internal",
              url: "/contact"
            }}
          />
        </div>
      </div>
    </main>
  )
} 