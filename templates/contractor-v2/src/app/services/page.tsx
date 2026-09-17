import { site } from '@/site.config'

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-primary-950 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            Everything your roof needs, under one crew.
          </h1>
        </div>
      </section>

      {/* Services List — Alternating layout */}
      <section className="bg-white">
        {site.services.map((service, i) => (
          <div key={service.slug} id={service.slug} className={`py-20 ${i % 2 === 1 ? 'bg-primary-50' : ''}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-accent-600 text-sm font-bold tracking-[0.2em] uppercase mb-3">
                    {String(i + 1).padStart(2, '0')} — Service
                  </p>
                  <h2 className="text-3xl font-bold text-primary-900 mb-4">{service.title}</h2>
                  <p className="text-primary-600 leading-relaxed mb-8">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map(f => (
                      <div key={f} className="flex items-start gap-2 text-sm text-primary-600">
                        <svg className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="text-primary-300 text-lg mb-10">We&apos;ll inspect your roof for free and tell you exactly what it needs — no obligation, no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-accent-500 text-white px-10 py-4 font-bold text-lg hover:bg-accent-600 transition-colors inline-flex items-center justify-center gap-3">
              Schedule Free Inspection
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a href={site.phoneHref} className="border-2 border-white/30 text-white px-10 py-4 font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-3">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
