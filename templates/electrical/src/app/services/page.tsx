import Link from 'next/link'
import { site } from '@/site.config'

export default function Services() {
  return (
    <section className="bg-navy-950 pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-volt-500" />
          <span className="text-sm tracking-[0.2em] uppercase text-volt-500 font-semibold">Our Services</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-16">
          What We Do Best
        </h1>

        <div className="space-y-24">
          {site.services.map((service, i) => (
            <div key={service.slug} id={service.slug} className="scroll-mt-32">
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className="h-80 rounded-sm bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="lg:direction-ltr">
                  <h2 className="text-3xl font-extrabold text-white mb-4">{service.title}</h2>
                  <p className="text-navy-300 text-lg leading-relaxed mb-8">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map(f => (
                      <li key={f} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-volt-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-navy-200">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-block bg-volt-500 hover:bg-volt-600 text-navy-950 font-bold tracking-wider px-8 py-3 rounded-sm transition-colors">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
