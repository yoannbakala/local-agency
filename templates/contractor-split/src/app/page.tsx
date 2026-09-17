import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/site.config'

const badges = ['Licensed & Insured', 'GAF Master Elite', '2,500+ Roofs']
const whyUs = [
  { icon: 'clipboard', title: 'Honest Estimates', desc: 'Transparent pricing with no hidden fees or surprise charges. We show you exactly what your project costs before work begins.' },
  { icon: 'cube', title: 'Premium Materials', desc: 'GAF and CertainTeed shingles with manufacturer warranties. We never cut corners on materials to pad margins.' },
  { icon: 'sparkles', title: 'Clean Job Sites', desc: 'Magnetic nail sweeps, daily debris removal, and a final walkthrough. Your yard looks better than we found it.' },
  { icon: 'shield', title: 'Workmanship Warranty', desc: 'Every project is backed by our 25-year workmanship guarantee. If something goes wrong, we make it right.' },
]

function Icon({ name, className }: { name: string; className?: string }) {
  const c = className || 'w-6 h-6'
  switch (name) {
    case 'clipboard': return <svg className={c} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>
    case 'cube': return <svg className={c} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
    case 'sparkles': return <svg className={c} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
    case 'shield': return <svg className={c} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
    default: return null
  }
}

export default function Home() {
  const featured = site.services.slice(0, 3)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-primary-900 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[640px]">
          {/* Left — copy */}
          <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 lg:py-28 relative z-10">
            <div className="flex gap-3 mb-6 flex-wrap">
              {badges.map(b => (
                <span key={b} className="inline-flex items-center gap-1.5 bg-primary-800 text-primary-200 text-xs font-semibold px-3 py-1.5 tracking-wide uppercase">
                  <svg className="w-3 h-3 text-accent-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  {b}
                </span>
              ))}
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight text-white mb-5">
              Denver&rsquo;s Most Trusted Roofing Contractor
            </h1>
            <p className="text-primary-300 text-lg max-w-lg mb-8 leading-relaxed">
              Family-owned since 1994. We deliver honest estimates, premium materials, and clean job sites on every project &mdash; residential and commercial.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 bg-white text-primary-900 px-6 py-3 font-bold text-sm tracking-wide hover:bg-primary-100 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                Call {site.phone}
              </a>
            </div>
          </div>

          {/* Right — image + form overlay */}
          <div className="relative hidden lg:block">
            <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" alt="Denver home with new roof" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary-900/40" />

            {/* Lead capture form */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-12 w-[380px] bg-white shadow-2xl p-8 z-20">
              <h2 className="font-serif text-xl text-primary-900 mb-1">Schedule Free Inspection</h2>
              <p className="text-primary-500 text-sm mb-5">Get your no-obligation estimate today.</p>
              <form className="space-y-3">
                <input type="text" placeholder="Full Name" className="w-full border border-primary-200 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-primary-200 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500" />
                <input type="text" placeholder="Address or Zip Code" className="w-full border border-primary-200 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500" />
                <select className="w-full border border-primary-200 px-4 py-2.5 text-sm text-primary-500 focus:outline-none focus:border-accent-500 bg-white">
                  <option>Select Service</option>
                  {site.services.map(s => <option key={s.slug}>{s.title}</option>)}
                </select>
                <button type="submit" className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3 font-bold text-sm tracking-wide transition-colors">
                  Schedule Free Inspection
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile form */}
        <div className="lg:hidden bg-white px-6 py-8 -mt-1">
          <h2 className="font-serif text-xl text-primary-900 mb-1">Schedule Free Inspection</h2>
          <p className="text-primary-500 text-sm mb-5">Get your no-obligation estimate today.</p>
          <form className="space-y-3 max-w-md">
            <input type="text" placeholder="Full Name" className="w-full border border-primary-200 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500" />
            <input type="tel" placeholder="Phone Number" className="w-full border border-primary-200 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500" />
            <input type="text" placeholder="Address or Zip Code" className="w-full border border-primary-200 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500" />
            <select className="w-full border border-primary-200 px-4 py-2.5 text-sm text-primary-500 focus:outline-none focus:border-accent-500 bg-white">
              <option>Select Service</option>
              {site.services.map(s => <option key={s.slug}>{s.title}</option>)}
            </select>
            <button type="submit" className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3 font-bold text-sm tracking-wide transition-colors">
              Schedule Free Inspection
            </button>
          </form>
        </div>
      </section>

      {/* ── Credentials strip ── */}
      <section className="bg-primary-50 border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-semibold text-primary-600">
          {['Licensed & Insured', 'GAF Master Elite Contractor', 'BBB A+ Rated', 'CertainTeed SELECT ShingleMaster'].map(c => (
            <span key={c} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ── Services split sections ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary-900 mb-14">Our Core Services</h2>

          <div className="space-y-20">
            {featured.map((s, i) => (
              <div key={s.slug} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className={`relative h-80 lg:h-[420px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-serif text-2xl text-primary-900 mb-3">{s.title}</h3>
                  <p className="text-primary-600 leading-relaxed mb-5">{s.description}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.slice(0, 3).map(f => (
                      <li key={f} className="flex items-center gap-2 text-primary-700 text-sm">
                        <svg className="w-4 h-4 text-accent-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" className="text-accent-600 font-semibold text-sm hover:text-accent-700 transition-colors">
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-accent-500">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {site.stats.map(s => (
            <div key={s.label}>
              <div className="text-4xl sm:text-5xl font-bold mb-1">{s.value}</div>
              <div className="text-sm font-medium text-white/80 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-2">The Ironclad Difference</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary-900 mb-12">Why Denver Homeowners Choose Us</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {whyUs.map(w => (
              <div key={w.title} className="bg-white p-8">
                <div className="w-12 h-12 bg-accent-50 flex items-center justify-center mb-4 text-accent-600">
                  <Icon name={w.icon} />
                </div>
                <h3 className="font-serif text-lg text-primary-900 mb-2">{w.title}</h3>
                <p className="text-primary-600 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-2">Testimonials</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary-900 mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {site.testimonials.map((t, i) => (
              <div key={i} className="bg-primary-50 p-8">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" /></svg>
                  ))}
                </div>
                <p className="text-primary-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-primary-900 text-sm">{t.author}</p>
                  <p className="text-primary-500 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-2">Coverage</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary-900 mb-10">Serving the Denver Metro Area</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {site.serviceAreas.map(a => (
              <div key={a} className="flex items-center gap-2 bg-white px-4 py-3 text-primary-700 text-sm">
                <svg className="w-4 h-4 text-accent-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433a19.695 19.695 0 002.683-2.006c1.9-1.685 3.945-4.203 3.945-7.343A8 8 0 002 9c0 3.14 2.045 5.658 3.945 7.343a19.695 19.695 0 002.683 2.006 13.1 13.1 0 00.757.433l.281.14.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" /></svg>
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 bg-primary-900">
        <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" alt="Denver roofing project" fill className="object-cover opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Ready to Protect Your Investment?</h2>
          <p className="text-primary-300 mb-8 text-lg">Get a free, no-obligation roof inspection from Denver&rsquo;s most trusted team.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={site.phoneHref} className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 font-bold text-sm tracking-wide transition-colors">
              Call {site.phone}
            </a>
            <Link href="/contact" className="bg-white hover:bg-primary-100 text-primary-900 px-8 py-3.5 font-bold text-sm tracking-wide transition-colors">
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
