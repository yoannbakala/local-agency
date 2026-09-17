import { site } from '@/site.config'

export default function Home() {
  return (
    <>
      {/* ── HERO — Full-screen cinematic, centered text ── */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1920&q=80"
            alt="Roofing project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 via-primary-950/50 to-primary-950/80" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-6 py-32">
          <p className="text-accent-400 text-sm font-bold tracking-[0.3em] uppercase mb-6">
            Chicago&apos;s Trusted Roofing Experts
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
            Roofs Built to<br />
            <span className="text-accent-400">Outlast</span> the Storm
          </h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto leading-relaxed mb-10">
            {site.tagline} — serving Chicago and the surrounding suburbs with honest work, premium materials, and warranties that mean something.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-accent-500 text-white px-10 py-4 font-bold text-lg hover:bg-accent-600 transition-all inline-flex items-center justify-center gap-3">
              Get a Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a href={site.phoneHref} className="border-2 border-white/30 text-white px-10 py-4 font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {site.phone}
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── TRUST STRIP — Simple horizontal credentials ── */}
      <section className="bg-white border-b border-primary-100">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-3 text-sm font-medium text-primary-500">
          {[
            { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Licensed & Insured' },
            { icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z', label: '5-Star Rated' },
            { icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21', label: '500+ Projects Completed' },
            { icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z', label: 'Family Owned & Operated' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT — Asymmetric split with accent border ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Roofing crew at work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-8 hidden lg:block">
                <div className="text-4xl font-bold">20+</div>
                <div className="text-sm font-medium mt-1">Years in Business</div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div>
                <p className="text-accent-600 text-sm font-bold tracking-[0.2em] uppercase mb-3">About Us</p>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight">
                  We don&apos;t cut corners. We protect them.
                </h2>
              </div>
              <p className="mt-8 text-primary-600 text-lg leading-relaxed">
                {site.name} has been Chicago&apos;s go-to roofing team for over two decades. We started as a two-man crew and grew into one of the most trusted names in the business — not through advertising, but through referrals from homeowners who saw the difference quality makes.
              </p>
              <p className="mt-4 text-primary-500 leading-relaxed">
                Every roof we install is one we&apos;d put on our own home. That means premium materials, proper ventilation, and no shortcuts — even on the parts you&apos;ll never see.
              </p>
              <a href="/about" className="inline-flex items-center gap-2 mt-8 text-accent-600 font-bold hover:text-accent-700 transition-colors group">
                Learn Our Story
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES — Image cards with overlay ── */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent-600 text-sm font-bold tracking-[0.2em] uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">Our Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {site.services.map(s => (
              <a key={s.slug} href={`/services#${s.slug}`} className="group relative h-80 overflow-hidden bg-primary-900">
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-primary-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {s.short}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-accent-400 text-sm font-medium">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS — Bold numbers on accent background ── */}
      <section className="bg-primary-900 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { number: '500+', label: 'Roofs Completed' },
            { number: '20+', label: 'Years Experience' },
            { number: '5.0', label: 'Google Rating' },
            { number: '100%', label: 'Satisfaction Rate' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-accent-400">{stat.number}</div>
              <div className="text-primary-300 text-sm mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS — Horizontal numbered timeline ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent-600 text-sm font-bold tracking-[0.2em] uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">Simple, Transparent Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0">
            {[
              { title: 'Free Inspection', text: 'We come to you, assess the roof, and give you an honest evaluation — no pressure, no obligation.' },
              { title: 'Detailed Estimate', text: 'You get a written quote with material specs, timeline, and warranty details. The price is the price.' },
              { title: 'Expert Installation', text: 'Our certified crew handles everything — tear-off, install, cleanup. We treat your property like our own.' },
              { title: 'Final Walkthrough', text: 'We inspect every detail with you, answer your questions, and make sure you are 100% satisfied.' },
            ].map((step, i) => (
              <div key={step.title} className="relative text-center px-6 py-8">
                {i < 3 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-primary-200" />
                )}
                <div className="relative z-10 w-14 h-14 bg-accent-500 text-white text-xl font-bold flex items-center justify-center mx-auto mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{step.title}</h3>
                <p className="text-primary-500 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL — Single spotlight with large quotes ── */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-accent-600 text-sm font-bold tracking-[0.2em] uppercase mb-8">What Homeowners Say</p>
          <div className="relative">
            <svg className="w-16 h-16 text-accent-500/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-medium text-primary-800 leading-relaxed">
              &ldquo;{site.testimonials[0].text}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-bold text-primary-900">{site.testimonials[0].author}</p>
              <p className="text-primary-500 text-sm">{site.testimonials[0].location}</p>
              <div className="flex justify-center gap-1 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA — Dark section with area columns ── */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-accent-400 text-sm font-bold tracking-[0.2em] uppercase mb-3">Service Area</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Proudly Serving Chicago &amp; Suburbs
              </h2>
              <p className="mt-4 text-primary-300 leading-relaxed">
                Based in Chicago, we serve homeowners and businesses across the greater Chicagoland area. If you&apos;re in our coverage zone, we can usually get to you within 24 hours.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {site.serviceAreas.map(area => (
                <div key={area} className="flex items-center gap-2 text-primary-200 text-sm py-2">
                  <svg className="w-4 h-4 text-accent-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — Clean centered ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Ready to Protect Your Home?
          </h2>
          <p className="text-primary-500 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation roof inspection and estimate. We&apos;ll show you exactly what your roof needs — honest assessment, fair pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-accent-500 text-white px-10 py-4 font-bold text-lg hover:bg-accent-600 transition-colors inline-flex items-center justify-center gap-3">
              Schedule Free Inspection
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a href={site.phoneHref} className="border-2 border-primary-200 text-primary-700 px-10 py-4 font-bold text-lg hover:border-primary-400 transition-colors inline-flex items-center justify-center gap-3">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
