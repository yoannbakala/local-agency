'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { site } from '@/site.config'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Utility bar */}
      <div className="bg-primary-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="hidden sm:inline text-primary-300">Serving Atlanta Since 2008 &bull; {site.license}</span>
          <span className="sm:hidden text-primary-300 text-xs">{site.license}</span>
          <a href={site.phoneHref} className="font-semibold hover:text-accent-400 transition-colors">
            {site.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-primary-900">
            <span className="text-accent-500">Heritage</span> Home Roofing
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-sm font-semibold text-primary-600 hover:text-primary-900 transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors">
              Get Free Quote
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-primary-700" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-white border-t border-primary-100">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-6 py-4 text-primary-700 hover:bg-primary-50 font-medium border-b border-primary-50">
                {l.label}
              </Link>
            ))}
            <div className="px-6 py-4">
              <Link href="/contact" onClick={() => setOpen(false)}
                className="block text-center bg-accent-500 text-white font-bold py-3 rounded-lg">
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
