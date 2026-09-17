import Link from 'next/link'
import { site } from '@/site.config'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Trust badges */}
      <div className="border-b border-primary-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-6 text-sm text-primary-300">
          {[
            { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: site.license },
            { icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', label: 'GAF Master Elite' },
            { icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z', label: 'BBB A+ Accredited' },
            { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Fully Insured' },
          ].map(b => (
            <div key={b.label} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
              </svg>
              {b.label}
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h3 className="text-lg font-extrabold mb-3">
            <span className="text-accent-400">Heritage</span> Home Roofing
          </h3>
          <p className="text-primary-400 text-sm leading-relaxed mb-4">
            Family-owned roofing contractor serving metro Atlanta since 2008. Licensed, insured, and committed to quality you can see.
          </p>
          <p className="text-sm text-primary-300">
            <a href={site.phoneHref} className="hover:text-white transition-colors">{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">{site.email}</a>
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-primary-400 mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-300">
            {site.services.map(s => (
              <li key={s.slug}>
                <Link href="/services" className="hover:text-white transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-primary-400 mb-4">Areas We Serve</h4>
          <ul className="space-y-2 text-sm text-primary-300 columns-2">
            {site.serviceAreas.map(a => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-primary-400 mb-4">Business Hours</h4>
          <div className="text-sm text-primary-300 space-y-1">
            <p>Monday &ndash; Friday: 7am &ndash; 6pm</p>
            <p>Saturday: 8am &ndash; 1pm</p>
            <p>Sunday: Closed</p>
            <p className="text-accent-400 font-semibold mt-3">24/7 Emergency Service Available</p>
          </div>
          <div className="mt-4 text-sm text-primary-400">
            <p>{site.address}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-sm text-primary-500">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
