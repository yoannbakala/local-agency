'use client'

import { useState } from 'react'
import Link from 'next/link'
import { site } from '@/site.config'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary-950 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Naperville, IL
            </span>
            <span className="text-primary-500">|</span>
            <span>{site.hours}</span>
          </div>
          <a href={site.phoneHref} className="text-accent-400 font-semibold hover:text-accent-300 transition-colors flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {site.phone}
          </a>
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-primary-900">
            <span className="text-accent-500">Summit</span> Heating & Cooling
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-slate-600 hover:text-primary-900 transition-colors font-medium text-sm">
                {l.label}
              </Link>
            ))}
            <a
              href="/contact"
              className="bg-accent-500 text-primary-950 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-accent-400 transition-colors"
            >
              Free Estimate
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-primary-900" aria-label="Menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t border-slate-100 pb-4">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-6 py-3 text-slate-600 hover:bg-primary-50 hover:text-primary-900 transition-colors font-medium">
                {l.label}
              </Link>
            ))}
            <div className="px-6 pt-2">
              <a href="/contact"
                className="block text-center bg-accent-500 text-primary-950 py-3 rounded-xl font-bold">
                Free Estimate
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
