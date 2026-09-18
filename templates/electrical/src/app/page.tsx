import Link from 'next/link'
import { site } from '@/site.config'

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-volt-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(234,179,8,0.08), transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-volt-500" />
                <span className="text-sm tracking-[0.2em] uppercase text-volt-500 font-semibold">{site.license}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
                Tulsa&apos;s Master Electricians <span className="text-volt-500">Since 1998</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-300 max-w-xl mb-10">
                Residential rewires, commercial build-outs, panel upgrades, EV chargers, and 24/7 emergency calls. Licensed, bonded, and insured across Green Country.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact" className="bg-volt-500 hover:bg-volt-600 text-navy-950 font-bold tracking-wider px-8 py-4 text-lg transition-colors rounded-sm">
                  Get a Free Quote
                </Link>
                <a href={site.phoneHref} className="border-2 border-navy-600 text-white hover:border-volt-500 hover:text-volt-500 font-bold tracking-wider px-8 py-4 text-lg transition-colors rounded-sm">
                  Call {site.phone}
                </a>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {site.stats.map(stat => (
                  <div key={stat.label}>
                    <p className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</p>
                    <p className="text-xs tracking-wider uppercase text-navy-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote form */}
            <div className="bg-navy-900 border border-navy-700 p-8 rounded-sm">
              <h2 className="text-xl font-bold text-white mb-1">Request Your Free Estimate</h2>
              <p className="text-sm text-navy-400 mb-6">We respond to every request within one business day.</p>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 text-sm placeholder:text-navy-500 focus:outline-none focus:border-volt-500 rounded-sm" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 text-sm placeholder:text-navy-500 focus:outline-none focus:border-volt-500 rounded-sm" />
                <input type="email" placeholder="Email" className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 text-sm placeholder:text-navy-500 focus:outline-none focus:border-volt-500 rounded-sm" />
                <select className="w-full bg-navy-800 border border-navy-700 text-navy-400 px-4 py-3 text-sm focus:outline-none focus:border-volt-500 rounded-sm">
                  <option>Select Service Needed</option>
                  {site.services.map(s => <option key={s.slug}>{s.title}</option>)}
                </select>
                <textarea placeholder="Describe your project..." rows={3} className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 text-sm placeholder:text-navy-500 focus:outline-none focus:border-volt-500 rounded-sm resize-none" />
                <button className="w-full bg-volt-500 hover:bg-volt-600 text-navy-950 font-bold tracking-wider py-4 text-sm transition-colors rounded-sm">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="bg-navy-900 py-5 border-y border-navy-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {site.credentials.map(c => (
            <span key={c} className="text-xs tracking-[0.2em] uppercase text-navy-300 font-medium">{c}</span>
          ))}
        </div>
      </section>

      {/* Bento Services Grid */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-volt-500" />
            <span className="text-sm tracking-[0.2em] uppercase text-volt-500 font-semibold">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-12">
            Licensed for Every Job
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* First two services span larger */}
            {site.services.slice(0, 2).map(service => (
              <Link key={service.slug} href={`/services#${service.slug}`}
                className="group relative overflow-hidden rounded-sm bg-navy-900 border border-navy-800 hover:border-volt-500/40 transition-colors">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-navy-300 leading-relaxed line-clamp-3">{service.description}</p>
                  <span className="inline-block mt-4 text-volt-500 text-sm font-semibold tracking-wider group-hover:translate-x-1 transition-transform">
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}

            {/* Third service takes full column on right, taller */}
            <Link href={`/services#${site.services[2].slug}`}
              className="group relative overflow-hidden rounded-sm bg-navy-900 border border-navy-800 hover:border-volt-500/40 transition-colors md:row-span-2 lg:row-span-1">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${site.services[2].image})` }} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{site.services[2].title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed line-clamp-3">{site.services[2].description}</p>
                <span className="inline-block mt-4 text-volt-500 text-sm font-semibold tracking-wider group-hover:translate-x-1 transition-transform">
                  Learn More &rarr;
                </span>
              </div>
            </Link>

            {/* Bottom two smaller services */}
            {site.services.slice(3).map(service => (
              <Link key={service.slug} href={`/services#${service.slug}`}
                className="group flex gap-4 items-start rounded-sm bg-navy-900 border border-navy-800 hover:border-volt-500/40 p-6 transition-colors">
                <div className="w-16 h-16 shrink-0 rounded-sm bg-volt-500/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-volt-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-sm text-navy-300 leading-relaxed line-clamp-2">{service.description}</p>
                  <span className="inline-block mt-2 text-volt-500 text-sm font-semibold tracking-wider group-hover:translate-x-1 transition-transform">
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dobbins */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-volt-500" />
              <span className="text-sm tracking-[0.2em] uppercase text-volt-500 font-semibold">Why Dobbins</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              The Electrician Your Electrician Would Call
            </h2>
            <p className="text-navy-300 text-lg leading-relaxed">
              We have been wiring Tulsa homes and businesses since before Y2K was a concern. Three generations of Green Country families trust us because we show up on time, explain what we are doing in plain English, and never sell work that is not needed.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: '🔌', title: 'Click-to-Call', desc: 'Tap the number on your phone and a licensed electrician answers, not a call center.' },
              { icon: '📋', title: 'Upfront Pricing', desc: 'You see the price before we start. If the job runs long, that is on us, not you.' },
              { icon: '🛡️', title: 'Code Compliant', desc: 'Every job meets or exceeds NEC and Oklahoma state electrical code. Inspections pass the first time.' },
              { icon: '⚡', title: 'Same-Day Service', desc: 'Most residential calls are scheduled same-day or next-day. Emergencies get dispatched immediately.' },
            ].map(item => (
              <div key={item.title} className="bg-navy-800 border border-navy-700 p-6 rounded-sm">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Stars />
          <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mt-6 mb-8">
            &ldquo;{site.testimonials[0].text}&rdquo;
          </blockquote>
          <p className="text-volt-500 font-bold uppercase tracking-wider">{site.testimonials[0].author}</p>
          <p className="text-navy-500 text-sm tracking-wider uppercase mt-1">{site.testimonials[0].location}</p>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">Recent Work</h2>
          <div className="h-1 w-16 bg-volt-500 mb-12" />
          <div className="grid md:grid-cols-3 gap-4">
            {site.gallery.slice(0, 3).map((project, i) => (
              <div key={i} className="group relative h-64 overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${project.image})` }} />
                <div className="absolute inset-0 bg-navy-950/60 group-hover:bg-navy-950/40 transition-colors" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="bg-volt-500 text-navy-950 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm">{project.type}</span>
                  <p className="text-white text-sm font-semibold mt-2">{project.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="text-volt-500 font-semibold tracking-wider hover:text-volt-400 transition-colors">
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-3xl font-bold text-volt-500 mb-8">
            <a href={site.phoneHref} className="hover:text-volt-400 transition-colors">{site.phone}</a>
          </p>
          <Link href="/contact" className="inline-block bg-volt-500 hover:bg-volt-600 text-navy-950 font-bold tracking-wider px-10 py-4 text-lg transition-colors rounded-sm">
            Schedule Service
          </Link>
        </div>
      </section>
    </>
  )
}
