import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { site } from '@/site.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${site.name} | Professional HVAC Service in Naperville, IL`,
  description: `Professional heating, cooling, and air quality service in Naperville and the western suburbs. Licensed, insured, 24/7 emergency service. Call ${site.phone} for a free estimate.`,
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
