import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { site } from '@/site.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${site.name} | Professional Roofing Services`,
  description: `Professional roof repair, installation, and inspection services. Licensed, insured, and trusted by homeowners in ${site.serviceAreas[0]} and surrounding areas.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
