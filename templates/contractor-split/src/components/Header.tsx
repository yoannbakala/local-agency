'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { site } from '@/site.config'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
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
      <div className={`bg-primary-800 text-primary-200 text-xs transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <a href={site.phoneHref} className="hover:text-white transition-colors flex items-center gap-1.5">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="hidden sm:block hover:text-white transition-colors">{site.email}</a>
          <span className="text-accent-400 font-semibold">24/7 Emergency: {site.emergencyPhone}</span>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-primary-50'}`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight text-primary-900 font-serif">
            Ironclad<span className="text-accent-500">.</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-sm font-medium tracking-wide uppercase text-primary-600 hover:text-primary-900 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <a href="/contact" className="hidden lg:inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors">
            Free Estimate
          </a>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-primary-900" aria-label="Menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </nav>

        {open && (
          <div className="lg:hidden bg-white border-t border-primary-100 shadow-lg">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-6 py-4 text-primary-700 hover:bg-primary-50 font-medium border-b border-primary-100">
                {l.label}
              </Link>
            ))}
            <div className="px-6 py-4 space-y-2">
              <a href={site.phoneHref} className="block text-accent-600 font-bold text-lg">{site.phone}</a>
              <a href="/contact" className="block bg-accent-500 text-white text-center py-3 font-semibold">Free Estimate</a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
