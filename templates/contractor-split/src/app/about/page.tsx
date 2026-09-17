import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/site.config'

const values = [
  { title: 'Integrity First', desc: 'We tell you what your roof needs, not what makes us the most money. If a repair will last, we say so.' },
  { title: 'Premium Materials', desc: 'GAF, CertainTeed, and Owens Corning only. We never substitute with off-brand products.' },
  { title: 'Clean Job Sites', desc: 'Magnetic sweeps, tarped landscaping, and a final walkthrough on every single project.' },
  { title: 'On-Time Delivery', desc: 'We give you a start date and a finish date, and we hit both. No excuses, no ghosting.' },
  { title: 'Community Roots', desc: 'We live here. Our kids go to school here. Our reputation in Denver is everything to us.' },
  { title: 'Safety Standards', desc: 'OSHA-trained crews, proper harnesses, and a zero-incident track record we take seriously.' },
]

export default function About() {
  return (
    <>
      {/* Banner */}
      <section className="bg-primary-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary-400 text-sm mb-2"><Link href="/" className="hover:text-white transition-colors">Home</Link> / About</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white">About Ironclad</h1>
        </div>
      </section>

      {/* Story — split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-2">Our Story</p>
            <h2 className="font-serif text-3xl text-primary-900 mb-6">Family-Owned Since 1994</h2>
            <div className="space-y-4 text-primary-600 leading-relaxed">
              <p>
                Ironclad Roofing &amp; Exteriors started in a garage in Lakewood with one truck, one ladder, and a simple promise: do honest work at honest prices. Founder Rick Callaghan had spent 15 years working for large roofing companies and watched too many homeowners get sold work they didn&rsquo;t need.
              </p>
              <p>
                Three decades later, we&rsquo;ve grown to a full-service exterior contractor with 30 employees, a fleet of trucks, and more than 2,500 completed roofs across the Denver metro area. Rick&rsquo;s son David now runs day-to-day operations, but the philosophy hasn&rsquo;t changed: give people the same quality you&rsquo;d put on your own home.
              </p>
              <p>
                We hold GAF Master Elite certification (only 3% of contractors qualify), maintain an A+ rating with the BBB, and carry $2M in general liability coverage on every project. When Colorado&rsquo;s hailstorms hit, our phone rings first because Denver homeowners know we&rsquo;ll fight for them with the insurance company, not against them.
              </p>
            </div>
          </div>
          <div className="relative h-96 lg:h-[500px]">
            <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80" alt="Ironclad roofing crew at work" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-2">What Drives Us</p>
          <h2 className="font-serif text-3xl text-primary-900 mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(v => (
              <div key={v.title} className="bg-white p-8">
                <div className="w-10 h-10 bg-accent-50 flex items-center justify-center mb-4 text-accent-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                </div>
                <h3 className="font-serif text-lg text-primary-900 mb-2">{v.title}</h3>
                <p className="text-primary-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl text-primary-900 mb-8">Certifications &amp; Credentials</h2>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-semibold text-primary-700">
            {['GAF Master Elite Contractor', 'CertainTeed SELECT ShingleMaster', 'BBB A+ Accredited', 'Owens Corning Preferred', 'OSHA Safety Certified', 'EPA Lead-Safe Certified'].map(c => (
              <span key={c} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* CTA */}
      <section className="relative py-24 bg-primary-900">
        <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" alt="Denver roofing" fill className="object-cover opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Let&rsquo;s Talk About Your Project</h2>
          <p className="text-primary-300 mb-8 text-lg">Free inspections. Honest estimates. No pressure.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={site.phoneHref} className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 font-bold text-sm tracking-wide transition-colors">
              Call {site.phone}
            </a>
            <Link href="/contact" className="bg-white hover:bg-primary-100 text-primary-900 px-8 py-3.5 font-bold text-sm tracking-wide transition-colors">
              Get Your Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
