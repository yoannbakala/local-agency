import Link from 'next/link'
import { site } from '@/site.config'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="h-1 bg-volt-500" />

      <div className="bg-volt-600 text-navy-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-sm tracking-widest uppercase font-medium">24/7 Emergency Electrical Service</p>
            <p className="text-3xl font-bold tracking-tight">{site.emergencyPhone}</p>
          </div>
          <a href={site.emergencyPhoneHref} className="bg-navy-950 text-volt-500 font-bold tracking-wider uppercase px-8 py-3 text-sm hover:bg-navy-900 transition-colors rounded-sm">
            Call Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-volt-500 rounded-sm flex items-center justify-center">
              <svg className="w-5 h-5 text-navy-950" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold uppercase text-white tracking-tight">Dobbins Electric</span>
          </div>
          <p className="text-sm leading-relaxed mb-4">{site.address}</p>
          <p className="text-sm mb-1">{site.hours}</p>
          <a href={site.phoneHref} className="text-volt-500 font-bold text-lg hover:text-volt-400 transition-colors">{site.phone}</a>
          <p className="text-sm mt-2">
            <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">{site.email}</a>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-6">Services</h3>
          <ul className="space-y-3">
            {site.services.map(s => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-sm hover:text-white transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-6">Service Areas</h3>
          <ul className="grid grid-cols-2 gap-2">
            {site.serviceAreas.map(area => (
              <li key={area} className="text-sm">{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-navy-500">
          <p>&copy; {new Date().getFullYear()} {site.name} All rights reserved.</p>
          <p className="tracking-widest uppercase">{site.credentials.join(' · ')}</p>
        </div>
      </div>
    </footer>
  )
}
