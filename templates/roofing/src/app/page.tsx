import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export default function Home() {
  return (
    <>
      <Hero
        title="Expert Heating & Cooling Solutions. Comfort Guaranteed."
        subtitle="We keep Naperville homes comfortable year-round with honest pricing, same-day service, and 24/7 emergency repair. Licensed, insured, and trusted across the western suburbs."
      />

      {/* About / Welcome */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-600 font-bold text-sm tracking-widest uppercase mb-3">Welcome to Summit HVAC</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight">
                Your home&apos;s comfort system is too important to trust to just anyone.
              </h2>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                Summit Heating &amp; Cooling has been the go-to HVAC team in Naperville and the western suburbs for over 15 years. We don&apos;t upsell, we don&apos;t cut corners, and we don&apos;t leave until the job is done right.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/about" className="inline-flex items-center justify-center gap-2 bg-accent-500 text-primary-950 px-6 py-3 rounded-xl font-bold hover:bg-accent-400 transition-all">
                  Learn More About Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-2xl p-6 text-center border border-primary-100">
                <div className="text-4xl font-bold text-accent-600">5.0</div>
                <div className="text-sm text-primary-700 font-medium mt-1">Google Rating</div>
                <div className="flex justify-center gap-0.5 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="bg-primary-50 rounded-2xl p-6 text-center border border-primary-100">
                <div className="text-4xl font-bold text-accent-600">15+</div>
                <div className="text-sm text-primary-700 font-medium mt-1">Years Experience</div>
              </div>
              <div className="bg-primary-50 rounded-2xl p-6 text-center border border-primary-100">
                <div className="text-4xl font-bold text-accent-600">12+</div>
                <div className="text-sm text-primary-700 font-medium mt-1">Communities</div>
              </div>
              <div className="bg-primary-50 rounded-2xl p-6 text-center border border-primary-100">
                <div className="text-4xl font-bold text-accent-600">24/7</div>
                <div className="text-sm text-primary-700 font-medium mt-1">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-primary-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <p className="text-accent-600 font-bold text-sm tracking-widest uppercase mb-3">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight">
                Complete HVAC Solutions for Every Season
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                From emergency AC repair on the hottest day of summer to furnace installation before winter hits — we handle every heating, cooling, and air quality need for your home.
              </p>
              <a href="/services" className="inline-flex items-center gap-2 mt-6 bg-primary-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-800 transition-all">
                See All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
            <div className="lg:col-span-3 space-y-4">
              {site.services.map(s => (
                <ServiceCard key={s.slug} title={s.title} description={s.short} slug={s.slug} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — Split Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-primary-900 rounded-3xl p-10 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <svg className="w-10 h-10 text-accent-400 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <p className="text-sm font-medium text-primary-200">Licensed & Insured</p>
                </div>
                <div className="bg-primary-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <svg className="w-10 h-10 text-accent-400 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-medium text-primary-200">24/7 Emergency</p>
                </div>
                <div className="bg-primary-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <svg className="w-10 h-10 text-accent-400 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="text-sm font-medium text-primary-200">Family-Owned</p>
                </div>
                <div className="bg-primary-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <svg className="w-10 h-10 text-accent-400 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <p className="text-sm font-medium text-primary-200">Warranty Included</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-accent-600 font-bold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight">
                Naperville&apos;s Trusted HVAC Team
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We don&apos;t just fix systems — we build relationships. Every service call starts with an honest diagnosis and ends with a comfortable home.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { title: 'Certified Technicians', text: 'EPA-certified, NATE-certified, and factory-trained on all major brands — Carrier, Lennox, Trane, and more.' },
                  { title: 'Upfront Pricing', text: 'You get a written quote before any work starts. The price we quote is the price you pay — no surprises.' },
                  { title: 'Same-Day Service', text: 'AC down in July? Furnace out in January? We offer same-day and 24/7 emergency service when you need it most.' },
                ].map(item => (
                  <li key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-primary-950" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm mt-1">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent-400 font-bold text-sm tracking-widest uppercase mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold">How We Keep Your Home Comfortable</h2>
            <p className="mt-4 text-primary-200 max-w-2xl mx-auto">
              From first call to final walkthrough — transparent, professional HVAC service every step of the way.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z', title: 'Call or Book Online', text: 'Reach us anytime — our team answers calls 7 days a week, and we offer same-day scheduling for emergencies.' },
              { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z', title: 'Thorough Diagnosis', text: 'We inspect your entire system, identify the real problem, and explain your options — no jargon, no pressure.' },
              { icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085', title: 'Expert Repair or Install', text: 'Our certified techs handle the work start to finish — quality parts, clean workspace, and on schedule.' },
              { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Comfort Guaranteed', text: 'We test everything, walk you through what we did, and make sure your home is comfortable before we leave.' },
            ].map((item, i) => (
              <div key={item.title} className="bg-primary-800/50 backdrop-blur-sm border border-primary-700/50 rounded-2xl p-6 hover:border-accent-500/30 transition-colors">
                <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-950" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div className="text-accent-400 text-sm font-bold mb-2">Step {String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-primary-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent-600 font-bold text-sm tracking-widest uppercase mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">What Our Customers Say</h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
              Real reviews from real homeowners in Naperville and the western suburbs who trust Summit for their heating and cooling.
            </p>
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent-600 font-bold text-sm tracking-widest uppercase mb-3">Service Area</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight">Serving Naperville & the Western Suburbs</h2>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Based in Naperville, we serve homes and businesses across DuPage County and the surrounding western suburbs. If you&apos;re nearby, we can get to you — often the same day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {site.serviceAreas.map(area => (
                <span key={area} className="bg-primary-50 text-primary-700 px-5 py-2.5 rounded-full font-medium border border-primary-200 hover:border-accent-400 hover:text-accent-700 transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
