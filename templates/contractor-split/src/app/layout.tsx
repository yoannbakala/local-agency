import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { site } from '@/site.config'

const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: `Professional roofing services in Denver and surrounding areas. Licensed, insured, and trusted for 30+ years. Call ${site.phone} for a free estimate.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
