import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
export default function NotFound() {
    return (
        <>
            <Header />
            <main className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 text-center">
                <div className="relative w-full max-w-[400px] h-[150px] mb-8">

                    <Image
                        src="/icon.svg"
                        alt="404 - Page Not Found"
                        fill
                        className="object-contain"
                        loading="lazy"
                        priority
                    />
                </div>

                <h1 className="text-4xl md:text-5xl font-bebas mb-4 text-primary">
                    Page Not Found
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md">
                    Oops! The page you are looking for seems to have served an ace and gone out of bounds.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-200"
                >
                    Return to Home
                </Link>
            </main>
            <Footer />
        </>
    )
} 