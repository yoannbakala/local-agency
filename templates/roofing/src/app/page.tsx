import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export default function Home() {
  return (
    <>
      <Hero
        title="Your Roof. Done Right. Done Brilliant."
        subtitle="Round Lake Beach trusts Brilliant Roofing for honest estimates, quality materials, and a crew that treats every home like their own. 4.9 stars, 89 reviews — see why."
      />

      {/* Trust Bar */}
      <section className="bg-primary-50 border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '4.9★', label: 'Google Rating' },
              { value: '89+', label: 'Five-Star Reviews' },
              { value: '100%', label: 'Licensed & Insured' },
              { value: 'Free', label: 'Estimates Always' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-accent-600">{stat.value}</div>
                <div className="text-sm text-primary-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent-600 font-bold text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">Roofing Services You Can Count On</h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
              From full replacements to minor repairs — we handle every part of your roof with the same level of care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {site.services.map(s => (
              <ServiceCard key={s.slug} title={s.title} description={s.short} slug={s.slug} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/services" className="inline-block text-accent-600 font-semibold hover:text-accent-700 transition-colors text-lg">
              See All Services &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent-400 font-bold text-sm tracking-widest uppercase mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold">Simple, Honest, Start to Finish</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Free Inspection', text: 'We walk your roof, take photos, and give you an honest assessment — no sales pressure.' },
              { step: '02', title: 'Clear Estimate', text: 'You get a written quote with exactly what\'s included. The price we quote is the price you pay.' },
              { step: '03', title: 'Expert Install', text: 'Our crew handles the job start to finish — quality materials, clean work, on schedule.' },
              { step: '04', title: 'Final Walkthrough', text: 'We walk the property with you, make sure every detail is right, and leave it spotless.' },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-5 text-primary-950 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-primary-200 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">Why Homeowners Choose Brilliant</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'No Surprises, Ever',
                text: 'We quote what we charge. No hidden fees, no bait-and-switch. You see the price before we touch a single shingle.',
              },
              {
                icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
                title: 'Meet Jared & Ernest',
                text: 'You deal directly with the people doing the work. No call centers, no subcontractors — just two guys who care about doing it right.',
              },
              {
                icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
                title: '89 Five-Star Reviews',
                text: 'Our reputation is built one roof at a time. Check our Google reviews — real homeowners, real results, real happy.',
              },
            ].map(item => (
              <div key={item.title} className="bg-primary-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">What Our Customers Say</h2>
            <p className="mt-4 text-slate-600 text-lg">Real reviews from real Lake County homeowners.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {site.testimonials.map((t, i) => (
              <TestimonialCard key={i} text={t.text} author={t.author} rating={t.rating} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={site.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 transition-colors text-lg"
            >
              Read All 89 Reviews on Google &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Serving Lake County & Beyond</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Based in Round Lake Beach, we work across Lake County and the surrounding suburbs. If you&apos;re nearby, we can get to you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {site.serviceAreas.map(area => (
              <span key={area} className="bg-primary-50 text-primary-700 px-5 py-2 rounded-full font-medium border border-primary-200">
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
