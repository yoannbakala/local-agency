import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export default function Home() {
  return (
    <>
      <Hero
        title="Trusted Roofing Experts in Your Area"
        subtitle="Professional roof repair, installation, and inspection. Licensed, insured, and committed to protecting your home — rain or shine."
      />

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">Our Roofing Services</h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
              From small repairs to complete replacements, we handle every roofing job with the same care and attention to detail.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {site.services.map(s => (
              <ServiceCard key={s.slug} title={s.title} description={s.short} slug={s.slug} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/services" className="inline-block text-accent-600 font-semibold hover:text-accent-700 transition-colors text-lg">
              View All Services →
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">Why Homeowners Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
                title: 'Licensed & Insured',
                text: 'Fully licensed, bonded, and insured for your complete peace of mind. We meet every local and state requirement.',
              },
              {
                icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
                title: 'Quality Guaranteed',
                text: 'We use premium materials from trusted manufacturers and stand behind every job with a workmanship warranty.',
              },
              {
                icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
                title: 'Local & Trusted',
                text: `Proudly serving ${site.serviceAreas[0]} and surrounding communities since 2019. Your neighbors trust us — you can too.`,
              },
            ].map(item => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">What Our Customers Say</h2>
            <p className="mt-4 text-slate-600 text-lg">Real reviews from real homeowners.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {site.testimonials.map((t, i) => (
              <TestimonialCard key={i} text={t.text} author={t.author} rating={t.rating} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Serving Your Community</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            We proudly serve homeowners and businesses throughout the greater {site.serviceAreas[0]} area.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {site.serviceAreas.map(area => (
              <span key={area} className="bg-primary-50 text-primary-800 px-5 py-2 rounded-full font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
