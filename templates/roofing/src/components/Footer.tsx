import Link from 'next/link'
import { site } from '@/site.config'

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-200">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            <span className="text-accent-500">Courtesy</span> Roofing & Landscaping
          </h3>
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
