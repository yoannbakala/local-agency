import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export default function Home() {
  return (
    <>
      <Hero
        title="Your Roof and Your Yard — Handled by One Crew"
        subtitle="Courtesy Roofing And Landscaping keeps Chicago properties covered from the rooftop down to the curb. Two trades, one team, zero runaround."
        videoSrcs={['/hero-video.mp4', '/hero-video-2.mp4']}
      />

      {/* Services */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent-500 font-bold text-sm tracking-widest uppercase mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">Two Trades, One Trusted Crew</h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
              From the top of your house to the edge of your property — we keep it all looking sharp.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {site.services.map(s => (
              <ServiceCard key={s.slug} title={s.title} description={s.short} slug={s.slug} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/services" className="inline-block text-accent-600 font-semibold hover:text-accent-700 transition-colors text-lg">
              See Everything We Do →
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">Why Homeowners Choose Courtesy</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085',
                title: 'One Call Does It All',
                text: 'Stop juggling a roofer and a landscaper. We handle both trades in-house, so your whole property gets the same level of care.',
              },
              {
                icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'No Surprises',
                text: 'We quote what we charge and charge what we quote. Every job gets a written estimate up front — no hidden fees, no bait-and-switch.',
              },
              {
                icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
                title: 'Chicago Through and Through',
                text: 'We live and work in the neighborhoods we serve. When you call Courtesy, you get locals who know the city and care about the block.',
              },
            ].map(item => (
              <div key={item.title} className="bg-primary-50 rounded-xl p-8 text-center">
                <div className="w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-5">
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
            <p className="mt-4 text-slate-600 text-lg">Real reviews from real Chicago homeowners.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Serving Chicago and Beyond</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Based in Chicago, we work across the city and into the near-west suburbs. If you can see the skyline, we can get to you.
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
