import Link from 'next/link'
import { site } from '@/site.config'

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-300">
      {/* Red accent line */}
      <div className="h-1 bg-accent-500" />

      {/* Emergency callout */}
      <div className="bg-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-sm tracking-widest uppercase font-medium">24/7 Emergency Storm Damage Line</p>
            <p className="text-3xl font-bold tracking-tight">{site.emergencyPhone}</p>
          </div>
          <a href={site.emergencyPhoneHref} className="bg-white text-accent-600 font-bold tracking-wider uppercase px-8 py-3 text-sm hover:bg-primary-100 transition-colors">
            Call Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Company */}
        <div>
          <p className="text-2xl font-bold uppercase text-white tracking-tight mb-4">
            Titan <span className="text-accent-500">Storm</span>
          </p>
          <p className="text-sm leading-relaxed mb-4">{site.address}</p>
          <p className="text-sm mb-1">{site.hours}</p>
          <a href={site.phoneHref} className="text-accent-500 font-bold text-lg hover:text-accent-400 transition-colors">{site.phone}</a>
          <p className="text-sm mt-2">
            <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">{site.email}</a>
          </p>
        </div>

        {/* Services */}
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

        {/* Service Areas */}
        <div>
          <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-6">Service Areas</h3>
          <ul className="grid grid-cols-2 gap-2">
            {site.serviceAreas.map(area => (
              <li key={area} className="text-sm">{area}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-500">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="tracking-widest uppercase">{site.credentials.join(' · ')}</p>
        </div>
      </div>
    </footer>
  )
}
