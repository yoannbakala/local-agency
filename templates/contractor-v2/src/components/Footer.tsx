import Link from 'next/link'
import { site } from '@/site.config'

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              {site.name.split(' ').slice(0, -1).join(' ')}<span className="text-accent-500">.</span>
            </h3>
            <p className="text-sm leading-relaxed mb-4">{site.tagline}</p>
            <p className="text-sm">{site.address}</p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'Services', 'About', 'Projects', 'Contact'].map(l => (
                <li key={l}>
                  <Link href={l === 'Home' ? '/' : `/${l.toLowerCase()}`} className="hover:text-accent-400 transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-5">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <a href={site.phoneHref} className="block text-accent-400 font-bold text-xl hover:text-accent-300 transition-colors">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block hover:text-accent-400 transition-colors">
                {site.email}
              </a>
              <p>{site.hours}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-800/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-500">
          <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Licensed &amp; Insured &bull; IL License #104-0XXXXX</span>
        </div>
      </div>
    </footer>
  )
}
