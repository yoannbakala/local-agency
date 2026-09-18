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
      <div className={`bg-navy-950 text-xs tracking-widest uppercase border-b border-navy-800 overflow-hidden transition-all duration-300 ${scrolled ? 'max-h-0 border-b-0' : 'max-h-12'}`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-2">
          <a href={site.phoneHref} className="text-navy-300 hover:text-white transition-colors">
            {site.phone}
          </a>
          <span className="hidden md:block text-navy-400">{site.license} &bull; Licensed &bull; Bonded &bull; Insured</span>
          <span className="text-volt-500 font-semibold">
            24/7 Emergency: <a href={site.emergencyPhoneHref} className="hover:text-volt-400 transition-colors">{site.emergencyPhone}</a>
          </span>
        </div>
      </div>

      <nav className={`transition-all duration-300 ${scrolled ? 'bg-navy-900/95 backdrop-blur-sm shadow-lg shadow-black/30' : 'bg-navy-900/50'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-volt-500 rounded-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-navy-950" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight uppercase text-white leading-none block">Dobbins</span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-volt-500 font-semibold leading-none">Electric Co.</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-sm font-medium tracking-wider text-navy-300 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-volt-500 hover:bg-volt-600 text-navy-950 text-sm font-bold tracking-wider px-6 py-3 rounded-sm transition-colors">
              Get a Quote
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
        <div className="lg:hidden bg-navy-900 border-t border-navy-800">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-6 py-4 text-navy-200 hover:bg-navy-800 font-medium tracking-wider text-sm border-b border-navy-800">
              {l.label}
            </Link>
          ))}
          <div className="px-6 py-4 space-y-3">
            <a href={site.phoneHref} className="block text-volt-500 font-bold text-lg">{site.phone}</a>
            <Link href="/contact" className="block text-center bg-volt-500 text-navy-950 font-bold tracking-wider px-6 py-3 rounded-sm">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
