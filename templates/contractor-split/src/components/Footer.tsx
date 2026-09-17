import Link from 'next/link'
import { site } from '@/site.config'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-300">
      {/* Credentials strip */}
      <div className="border-b border-primary-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-medium text-primary-400">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
            Licensed &amp; Insured
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
            GAF Certified
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0" /></svg>
            BBB A+ Rated
          </span>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company info */}
        <div>
          <h3 className="text-white text-xl font-bold font-serif mb-4">Ironclad<span className="text-accent-500">.</span></h3>
          <p className="text-sm leading-relaxed mb-4">{site.address}</p>
          <div className="space-y-1.5 text-sm">
            <a href={site.phoneHref} className="block hover:text-white transition-colors">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="block hover:text-white transition-colors">{site.email}</a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {site.services.map(s => (
              <li key={s.slug}><Link href="/services" className="hover:text-white transition-colors">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Service Areas</h4>
          <ul className="space-y-2 text-sm columns-2">
            {site.serviceAreas.map(a => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Hours</h4>
          <p className="text-sm mb-4">{site.hours}</p>
          <div className="bg-primary-800 p-4">
            <p className="text-accent-400 font-semibold text-sm mb-1">24/7 Emergency Service</p>
            <a href={`tel:${site.emergencyPhone.replace(/\D/g, '')}`} className="text-white font-bold text-lg hover:text-accent-400 transition-colors">{site.emergencyPhone}</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-xs text-primary-500">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved. Serving the Denver metro area for over 30 years.
        </div>
      </div>
    </footer>
  )
}
