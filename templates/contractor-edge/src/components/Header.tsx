'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { site } from '@/site.config'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility Bar — collapses on scroll */}
      <div className={`bg-primary-950 text-xs tracking-widest uppercase border-b border-primary-800 overflow-hidden transition-all duration-300 ${scrolled ? 'max-h-0 border-b-0' : 'max-h-12'}`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-2">
          <a href={site.phoneHref} className="text-primary-300 hover:text-white transition-colors">
            {site.phone}
          </a>
          <span className="hidden md:block text-primary-400">Licensed &bull; Bonded &bull; Insured</span>
          <span className="text-accent-500 font-semibold">
            24/7 Storm Damage Hotline: <a href={site.emergencyPhoneHref} className="hover:text-accent-400 transition-colors">{site.emergencyPhone}</a>
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-primary-900/95 backdrop-blur-sm shadow-lg shadow-black/30' : 'bg-primary-900/50'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight uppercase text-white">
            TITAN <span className="text-accent-500">STORM</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-sm font-medium tracking-widest uppercase text-primary-300 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-bold tracking-wider uppercase px-6 py-3 transition-colors">
              Get Free Estimate
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white" aria-label="Menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-primary-900 border-t border-primary-800">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-6 py-4 text-primary-200 hover:bg-primary-800 font-medium tracking-wider uppercase text-sm border-b border-primary-800">
              {l.label}
            </Link>
          ))}
          <div className="px-6 py-4 space-y-3">
            <a href={site.phoneHref} className="block text-accent-500 font-bold text-lg">{site.phone}</a>
            <Link href="/contact" className="block text-center bg-accent-500 text-white font-bold tracking-wider uppercase px-6 py-3">
              Get Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
