import Link from 'next/link'
import { site } from '@/site.config'

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-primary-900 pt-40 pb-28" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-500 text-sm tracking-widest uppercase font-semibold mb-4">What We Do</p>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">Our Services</h1>
          <div className="w-24 h-1.5 bg-accent-500 mt-6" />
        </div>
      </section>

      {/* Services */}
      {site.services.map((service, i) => (
        <section key={service.slug} id={service.slug} className={`${i % 2 === 0 ? 'bg-primary-950' : 'bg-primary-900'} py-24`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <span className="text-accent-500/30 text-8xl font-bold leading-none">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white -mt-6 mb-4">{service.title}</h2>
                <div className="w-12 h-1 bg-accent-500 mb-6" />
                <p className="text-primary-300 leading-relaxed text-lg mb-8">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-primary-200">
                      <svg className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold tracking-wider uppercase px-8 py-3 text-sm transition-colors">
                  Get Free Estimate
                </Link>
              </div>
              <div className={`relative h-80 lg:h-96 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-primary-950 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Don&apos;t Wait for the Next Storm
          </h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto mb-6" />
          <p className="text-primary-400 text-lg mb-8">
            Get a free roof inspection today. We&apos;ll document the damage, file your claim, and get the work done — fast.
          </p>
          <Link href="/contact" className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold tracking-wider uppercase px-10 py-4 text-lg transition-colors">
            Schedule Free Inspection
          </Link>
        </div>
      </section>
    </>
  )
}
