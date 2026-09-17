import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { site } from '@/site.config'

const nunito = Nunito_Sans({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: `Trusted roofing contractor in Atlanta, GA. ${site.stats[1].value} roofs completed, ${site.stats[2].value} Google rating. Licensed, insured, and backed by a lifetime warranty. Call ${site.phone} for a free estimate.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased text-primary-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
