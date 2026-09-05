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
          <span className="hidden sm:inline">Licensed &amp; Insured · Free Estimates</span>
          <a href={site.phoneHref} className="text-accent-400 font-semibold hover:text-accent-300 transition-colors">
            {site.phone}
          </a>
        </div>
      </div>

      <nav className="bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-black tracking-tight">
              <span className="text-accent-500">Eliot</span> Roofing
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="hover:text-accent-400 transition-colors font-medium">
                {l.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="bg-accent-500 text-primary-950 px-5 py-2.5 rounded-lg font-bold hover:bg-accent-400 transition-colors"
            >
              Call Now
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-primary-800 border-t border-primary-700 pb-4">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-6 py-3 hover:bg-primary-700 transition-colors font-medium">
                {l.label}
              </Link>
            ))}
            <div className="px-6 pt-2">
              <a href={site.phoneHref}
                className="block text-center bg-accent-500 text-primary-950 py-3 rounded-lg font-bold">
                Call {site.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
