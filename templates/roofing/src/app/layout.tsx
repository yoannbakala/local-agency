import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { site } from '@/site.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${site.name} | Professional Roofing in Round Lake Beach, IL`,
  description: `Professional roof replacement, repair, and installation in Round Lake Beach and Lake County. Licensed, insured, 4.9 stars on Google. Call ${site.phone} for a free estimate.`,
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
