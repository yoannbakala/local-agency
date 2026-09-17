import Link from 'next/link'
import { site } from '@/site.config'

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="relative min-h-screen flex items-center" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523772354886-34a1dc2f0285?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32 w-full">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] tracking-tight text-white mb-2">
              When the Storm Hits, We&apos;re Already on the Way.
            </h1>
            <div className="w-24 h-1.5 bg-accent-500 my-6" />
            <p className="text-xl md:text-2xl text-primary-400 max-w-2xl mb-10 font-light">
              Dallas-Fort Worth&apos;s fastest storm damage response. Insurance experts. Zero out-of-pocket on approved claims.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white font-bold tracking-wider uppercase px-8 py-4 text-lg transition-colors">
                Get Free Inspection
              </Link>
              <a href={site.phoneHref} className="border-2 border-white text-white hover:bg-white hover:text-primary-950 font-bold tracking-wider uppercase px-8 py-4 text-lg transition-colors">
                Call {site.phone}
              </a>
            </div>

            {/* Inline estimate form */}
            <div className="bg-primary-900/80 backdrop-blur-sm p-6">
              <p className="text-sm tracking-widest uppercase text-accent-500 font-semibold mb-4">Request Your Free Estimate</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <input type="text" placeholder="Full Name" className="bg-primary-800 border border-primary-700 text-white px-4 py-3 text-sm placeholder:text-primary-500 focus:outline-none focus:border-accent-500" />
                <input type="tel" placeholder="Phone" className="bg-primary-800 border border-primary-700 text-white px-4 py-3 text-sm placeholder:text-primary-500 focus:outline-none focus:border-accent-500" />
                <input type="text" placeholder="Zip Code" className="bg-primary-800 border border-primary-700 text-white px-4 py-3 text-sm placeholder:text-primary-500 focus:outline-none focus:border-accent-500" />
                <select className="bg-primary-800 border border-primary-700 text-primary-400 px-4 py-3 text-sm focus:outline-none focus:border-accent-500">
                  <option>Select Service</option>
                  {site.services.map(s => <option key={s.slug}>{s.title}</option>)}
                </select>
                <button className="bg-accent-500 hover:bg-accent-600 text-white font-bold tracking-wider uppercase px-6 py-3 text-sm transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="bg-primary-800 py-6 -mt-1">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-3">
          {site.credentials.map(c => (
            <span key={c} className="text-sm tracking-[0.2em] uppercase text-primary-300 font-medium">{c}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-primary-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">Our Services</h2>
          <div className="w-16 h-1 bg-accent-500 mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {site.services.map(service => (
              <Link key={service.slug} href={`/services#${service.slug}`} className="group relative h-72 overflow-hidden flex items-end">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/70 transition-colors" />
                <div className="relative z-10 p-6 w-full transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white">{service.title}</h3>
                  <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mt-2 inline-block">Learn More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Diagonal Band */}
      <section className="relative bg-accent-500 py-20" style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {site.stats.map(stat => (
              <div key={stat.label}>
                <p className="text-5xl md:text-6xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-sm tracking-widest uppercase mt-2 font-medium opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Titan Storm */}
      <section className="bg-primary-900 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.05]">
              We Don&apos;t Chase Storms. We Fight Them.
            </h2>
            <div className="w-16 h-1 bg-accent-500 my-6" />
            <p className="text-primary-400 text-lg">
              While other roofers are still loading their trucks, our crews are already on your roof. That&apos;s the Titan Storm difference.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: '⚡', title: 'Fast Response', desc: '2-hour arrival for emergencies. 24-hour estimates for storm damage.' },
              { icon: '🛡️', title: 'Insurance Experts', desc: 'We negotiate directly with your adjuster so you get what you\'re owed.' },
              { icon: '🔩', title: 'Military-Grade Materials', desc: 'GAF Timberline HDZ, ice shields, proper ventilation. No shortcuts.' },
              { icon: '✅', title: 'Lifetime Warranty', desc: 'Our workmanship warranty covers you for as long as you own the home.' },
            ].map(item => (
              <div key={item.title}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2">{item.title}</h3>
                <p className="text-sm text-primary-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Spotlight */}
      <section className="bg-primary-950 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Stars />
          <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mt-6 mb-8">
            &ldquo;{site.testimonials[0].text}&rdquo;
          </blockquote>
          <p className="text-accent-500 font-bold uppercase tracking-wider">{site.testimonials[0].author}</p>
          <p className="text-primary-500 text-sm tracking-wider uppercase mt-1">{site.testimonials[0].location}</p>
        </div>
      </section>

      {/* Before/After Strip */}
      <section className="bg-primary-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">Recent Projects</h2>
          <div className="w-16 h-1 bg-accent-500 mb-12" />
          <div className="grid md:grid-cols-3 gap-1">
            {site.gallery.slice(0, 3).map((project, i) => (
              <div key={i} className="group relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${project.image})` }} />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="bg-accent-500 text-white text-xs font-bold tracking-widest uppercase px-3 py-1">{project.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-950 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Call Now or Schedule Online
          </h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto mb-6" />
          <p className="text-3xl font-bold text-accent-500 mb-8">
            <a href={site.phoneHref} className="hover:text-accent-400 transition-colors">{site.phone}</a>
          </p>
          <Link href="/contact" className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold tracking-wider uppercase px-10 py-4 text-lg transition-colors">
            Schedule Emergency Repair
          </Link>
        </div>
      </section>
    </>
  )
}
