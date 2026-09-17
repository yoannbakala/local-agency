import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { site } from '@/site.config'

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: `Dallas-Fort Worth's most aggressive storm damage roofing contractor. 24/7 emergency response, insurance claim experts. Call ${site.phone} for a free inspection.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${oswald.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
