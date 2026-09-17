import Link from 'next/link'
import { site } from '@/site.config'

const values = [
  { title: 'Honest Estimates', desc: 'We tell you what your roof actually needs, not what generates the biggest invoice.' },
  { title: 'Skilled Crews', desc: 'Our installers average 12+ years of experience. No day-labor subcontractors.' },
  { title: 'Quality Materials', desc: 'We use only GAF and CertainTeed products with full manufacturer warranties.' },
  { title: 'Clear Communication', desc: 'You get a dedicated project manager and updates at every milestone.' },
  { title: 'Spotless Cleanup', desc: 'Magnetic sweeps, tarps, and daily cleanup. We leave your yard better than we found it.' },
  { title: 'Community First', desc: 'We sponsor local little league teams and donate roofing to Habitat for Humanity builds each year.' },
]

const credentials = [
  'GAF Master Elite Certified',
  'CertainTeed SELECT ShingleMaster',
  'BBB A+ Accredited Business',
  'Georgia Residential Contractor License',
  'OSHA Safety Certified',
  'Fully Bonded & Insured',
]

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-primary-900 pt-16 pb-14 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">About Heritage Home Roofing</h1>
          <p className="mt-3 text-primary-300">Family-owned. Atlanta-based. Quality-obsessed.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900">Built on Handshakes, Not Hard Sells</h2>
            <p className="mt-4 text-primary-600 leading-relaxed">
              Heritage Home Roofing started in 2008 when our founder, James Carter, left a large national roofing chain frustrated by high-pressure sales tactics and corner-cutting installs. He believed Atlanta homeowners deserved better: honest assessments, premium materials, and crews who treat every home like their own.
            </p>
            <p className="mt-4 text-primary-600 leading-relaxed">
              What started as a two-person crew operating out of a pickup truck has grown into one of metro Atlanta&rsquo;s most trusted roofing companies, with 1,800+ completed projects and a 4.9-star Google rating. We have never run a single high-pressure promotion, and we never will. Our growth comes from referrals, because quality work speaks for itself.
            </p>
            <p className="mt-4 text-primary-600 leading-relaxed">
              Today, we are still family-owned, still headquartered in Atlanta, and still personally involved in every project. That is not going to change.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80" alt="Heritage Home Roofing crew at work" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 text-center">What We Stand For</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(v => (
              <div key={v.title} className="flex gap-4">
                <svg className="w-6 h-6 text-accent-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-primary-900">{v.title}</h3>
                  <p className="mt-1 text-sm text-primary-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900">Certifications & Credentials</h2>
          <p className="mt-3 text-primary-500">We hold the industry&rsquo;s top certifications so you never have to wonder about our qualifications.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map(c => (
              <div key={c} className="flex items-center gap-3 bg-primary-50 rounded-lg px-5 py-4">
                <svg className="w-5 h-5 text-accent-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-sm font-semibold text-primary-800">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {site.stats.map(s => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-primary-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-primary-900">Ready to Work With a Roofer You Can Trust?</h2>
          <p className="mt-3 text-primary-500">Get a free, no-pressure estimate from our team.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3.5 rounded-lg text-lg transition-colors">
              Schedule Free Inspection
            </Link>
            <a href={site.phoneHref} className="border-2 border-primary-300 hover:border-primary-400 text-primary-800 font-bold px-8 py-3.5 rounded-lg text-lg transition-colors">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
