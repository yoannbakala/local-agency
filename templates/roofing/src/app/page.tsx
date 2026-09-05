import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export default function Home() {
  return (
    <>
      <Hero
        title="24/7 Roofing Protection for Your Home"
        subtitle="Day or night, storm or shine — our crew is ready. From emergency repairs to full replacements, we keep Chicagoland covered around the clock."
      />

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">What We Do Best</h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
              Residential and commercial — flat roofs to shingles, rubber membranes to emergency patches. One call handles it all.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">The Eliot Difference</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Available 24/7',
                text: 'Roof emergencies don\'t wait for business hours. Our team is on call around the clock — nights, weekends, and holidays included.',
              },
              {
                icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21',
                title: 'Flat Roof Specialists',
                text: 'We specialize in rubber and flat roofing systems that most companies shy away from. EPDM, TPO, and modified bitumen — we know them inside out.',
              },
              {
                icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
                title: 'Family Owned & Operated',
                text: `Born and raised in ${site.serviceAreas[0]}. We\'re not a franchise — we\'re your neighbors, and our reputation is everything to us.`,
              },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-sm border border-primary-100">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">Trusted by Your Neighbors</h2>
            <p className="mt-4 text-slate-600 text-lg">See why families across the south suburbs call us first.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Covering the South Suburbs</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Based in {site.serviceAreas[0]}, we travel to you — no job too close, no drive too far across the Chicagoland area.
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
