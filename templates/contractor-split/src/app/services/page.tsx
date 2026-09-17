import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/site.config'

export default function Services() {
  return (
    <>
      {/* Banner */}
      <section className="bg-primary-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary-400 text-sm mb-2"><Link href="/" className="hover:text-white transition-colors">Home</Link> / Services</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white">Our Services</h1>
        </div>
      </section>

      {/* Services — alternating splits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {site.services.map((s, i) => (
            <div key={s.slug} className="grid lg:grid-cols-2 gap-10 items-center">
              <div className={`relative h-80 lg:h-[440px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image src={s.image} alt={s.title} fill className="object-cover" />
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="text-accent-500 font-semibold text-sm tracking-widest">
                  {String(i + 1).padStart(2, '0')} &mdash; {s.title}
                </span>
                <h2 className="font-serif text-3xl text-primary-900 mt-2 mb-4">{s.title}</h2>
                <p className="text-primary-600 leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2.5">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-primary-700 text-sm">
                      <svg className="w-4 h-4 text-accent-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-primary-900">
        <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" alt="Denver roofing" fill className="object-cover opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Need a Roof You Can Count On?</h2>
          <p className="text-primary-300 mb-8 text-lg">Every project starts with a free inspection and an honest estimate.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={site.phoneHref} className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 font-bold text-sm tracking-wide transition-colors">
              Call {site.phone}
            </a>
            <Link href="/contact" className="bg-white hover:bg-primary-100 text-primary-900 px-8 py-3.5 font-bold text-sm tracking-wide transition-colors">
              Schedule Free Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
