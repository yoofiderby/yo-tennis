'use client'

import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="tennis-ball-loader w-48 h-48 relative">
        <Image
          src="/bg.png"
          alt="Loading..."
          fill
          className="object-contain"
          priority
        />
      </div>
      <style jsx>{`
        .tennis-ball-loader {
          animation: spin 5.5s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
