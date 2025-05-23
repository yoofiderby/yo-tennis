import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yo Tennis | Tennis Classes',
  description: 'Professional tennis classes for all skill levels. Learn tennis with expert coaches in a fun and engaging environment.',
  keywords: 'tennis classes, tennis coaching, tennis lessons, tennis training',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
