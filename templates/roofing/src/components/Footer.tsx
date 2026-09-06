import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/site.config'

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-200">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <Image src="/eliot-logo.svg" alt={site.name} width={120} height={120} className="h-14 w-auto mb-2" />
          <p className="text-sm leading-relaxed">{site.tagline}</p>
          <p className="mt-4 text-sm">{site.address}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Home', 'About', 'Services', 'Gallery', 'Contact'].map(l => (
              <li key={l}>
                <Link href={l === 'Home' ? '/' : `/${l.toLowerCase()}`} className="hover:text-accent-400 transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {site.services.map(s => (
              <li key={s.slug}>
                <Link href="/services" className="hover:text-accent-400 transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="text-accent-400 font-semibold text-lg hover:text-accent-300 transition-colors">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent-400 transition-colors">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
          <div className="flex gap-4 mt-5">
            {site.social.google && (
              <a href={site.social.google} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-accent-400 transition-colors" aria-label="Google">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </a>
            )}
            {site.social.facebook && (
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-accent-400 transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
            )}
            {site.social.instagram && (
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-accent-400 transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            )}
            {site.social.yelp && (
              <a href={site.social.yelp} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-accent-400 transition-colors" aria-label="Yelp">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.271 11.826l-2.244-6.665C9.772 4.369 9.156 4 8.479 4H5.87c-.891 0-1.449.92-1.024 1.69l3.39 6.14c.244.441.79.62 1.259.413l2.316-.975c.532-.224.752-.85.46-1.442zm.737 1.96l-2.455.688c-.536.15-.837.725-.673 1.286l1.402 4.774c.243.83 1.35.95 1.767.192l2.06-3.743c.366-.666-.01-1.49-.73-1.689l-1.371-.508zm3.51-2.08l2.149-1.37c.47-.3.575-.93.233-1.371l-2.267-2.93c-.503-.65-1.545-.353-1.623.464l-.506 5.31c-.06.625.567 1.1 1.148.858l.866-.961zm-1.027 3.054l-.566 5.237c-.078.72.744 1.21 1.322.788l3.623-2.643c.404-.295.468-.876.143-1.247l-3.057-2.594c-.458-.389-1.145-.181-1.31.376l-.155.083zm-7.186-.87l-3.51 1.684c-.785.376-.718 1.527.106 1.807l4.908 1.668c.576.196 1.159-.258 1.104-.863l-.49-5.385c-.068-.75-.953-1.095-1.504-.583l-.614.672z"/></svg>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-primary-400">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
