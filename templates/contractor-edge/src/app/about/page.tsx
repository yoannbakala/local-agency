import Link from 'next/link'
import { site } from '@/site.config'

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-primary-900 pt-40 pb-28" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-500 text-sm tracking-widest uppercase font-semibold mb-4">Who We Are</p>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">About Titan Storm</h1>
          <div className="w-24 h-1.5 bg-accent-500 mt-6" />
        </div>
      </section>

      {/* Story */}
      <section className="bg-primary-950 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-6">
              Built in the Storm Belt. Hardened by Every Season.
            </h2>
            <div className="w-16 h-1 bg-accent-500 mb-6" />
            <div className="space-y-5 text-primary-300 leading-relaxed">
              <p>
                Titan Storm Roofing was founded in Dallas by roofers who got tired of watching
                storm-chaser companies blow into town, collect insurance checks, and disappear.
                We live here. We work here. When a storm rips through DFW, we&apos;re not driving in
                from out of state — we&apos;re already loading the trucks.
              </p>
              <p>
                Over 15 years, we&apos;ve replaced more than 3,000 roofs across the Dallas-Fort Worth
                metroplex. We&apos;re GAF Master Elite certified — a distinction held by fewer than
                2% of roofing contractors in the country. We don&apos;t just install shingles. We
                install systems designed to survive what Texas throws at them.
              </p>
              <p>
                Our insurance claims team has recovered millions for homeowners who were initially
                underpaid or denied. We fight for full replacements, not patches. And we don&apos;t
                stop until the check matches the damage.
              </p>
            </div>
          </div>
          <div className="relative h-96 lg:h-auto">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80)' }} />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-2">The Titan Storm Code</h2>
          <div className="w-16 h-1 bg-accent-500 mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⚡', title: 'Speed', desc: 'First on the scene. We deploy within hours of a storm, not days.' },
              { icon: '💪', title: 'Integrity', desc: 'No bait-and-switch. No hidden fees. The price we quote is the price you pay.' },
              { icon: '🎯', title: 'Precision', desc: 'Every nail, every shingle, every seal — installed to manufacturer spec.' },
              { icon: '🛡️', title: 'Advocacy', desc: 'We fight your insurance company so you don\'t have to. Full stop.' },
            ].map(v => (
              <div key={v.title}>
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2">{v.title}</h3>
                <p className="text-sm text-primary-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* CTA */}
      <section className="bg-primary-950 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Ready to Work With the Best?
          </h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto mb-8" />
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white font-bold tracking-wider uppercase px-10 py-4 text-lg transition-colors">
              Get Free Inspection
            </Link>
            <a href={site.phoneHref} className="border-2 border-primary-500 text-white hover:border-white font-bold tracking-wider uppercase px-10 py-4 text-lg transition-colors">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
