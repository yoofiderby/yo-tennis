import './globals.css'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import { Plus_Jakarta_Sans, Bebas_Neue } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
})

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
    <html lang="en" className={`${plusJakarta.variable} ${bebasNeue.variable}`}>
      <body className="font-sans">
        <Header />
        <PageHeaderWrapper />
        {children}
        <Footer />
      </body>
    </html>
 )
}
