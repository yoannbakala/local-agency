import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: `Our Services | ${site.name}`,
  description: `Professional roofing services including repair, installation, inspection, and gutter services. Serving ${site.serviceAreas[0]} and surrounding areas.`,
}

export default function Services() {
  return (
    <>
      <Hero
        title="Our Roofing Services"
        subtitle="From emergency repairs to complete roof replacements, we deliver expert craftsmanship on every project."
        showCTA={false}
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 space-y-20">
          {site.services.map((service, i) => (
            <div key={service.slug} id={service.slug} className={i > 0 ? 'pt-8 border-t border-slate-200' : ''}>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">{service.title}</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.description}</p>

              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="font-semibold text-primary-800 mb-4">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <a href="/contact" className="inline-block bg-accent-500 text-primary-950 px-6 py-3 rounded-lg font-bold hover:bg-accent-400 transition-colors">
                  Get a Free {service.title} Estimate
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
