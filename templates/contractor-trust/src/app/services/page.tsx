import Link from 'next/link'
import { site } from '@/site.config'

export default function ServicesPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-primary-900 pt-16 pb-14 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Our Roofing Services</h1>
          <p className="mt-3 text-primary-300">Comprehensive solutions from inspection to full replacement. Every project backed by our lifetime workmanship warranty.</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-primary-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {site.services.map((s, i) => (
            <div key={s.slug} className="bg-white rounded-xl shadow-sm border border-primary-200 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              {/* Image — swap order on even indices */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <img src={s.image} alt={s.title} className="w-full h-64 lg:h-full object-cover" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-extrabold text-primary-900">{s.title}</h2>
                <p className="mt-3 text-primary-600 leading-relaxed">{s.description}</p>
                <ul className="mt-5 space-y-2">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-primary-700">
                      <svg className="w-5 h-5 text-accent-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-6 inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-lg transition-colors self-start">
                  Request Free Estimate
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Not Sure What You Need?</h2>
          <p className="mt-4 text-primary-300 text-lg">Schedule a free inspection and we&rsquo;ll give you an honest assessment with no obligation.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3.5 rounded-lg text-lg transition-colors">
              Schedule Free Inspection
            </Link>
            <a href={site.phoneHref} className="border-2 border-primary-400 hover:border-white text-white font-bold px-8 py-3.5 rounded-lg text-lg transition-colors">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
