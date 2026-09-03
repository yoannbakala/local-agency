import Link from 'next/link'
import { site } from '@/site.config'

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-200">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            <span className="text-accent-500">Summit</span> Roofing
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
