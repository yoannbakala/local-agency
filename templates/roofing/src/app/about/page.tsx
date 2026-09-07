import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: `Meet the team behind ${site.name} — Round Lake Beach's trusted roofing crew with 89 five-star reviews.`,
}

export default function About() {
  return (
    <>
      <Hero
        title="The People Behind Brilliant"
        subtitle="Jared, Ernest, and the crew — real roofers who care about doing the job right for every homeowner in Lake County."
        showCTA={false}
      />

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">How We Got Here</h2>
          <div className="prose prose-lg text-slate-600 space-y-4">
            <p>
              Brilliant Roofing started the way most good companies do — a couple of guys who got tired of watching homeowners get overcharged and underserved. Jared and Ernest had seen enough sloppy installs and confusing quotes to know there was a better way.
            </p>
            <p>
              They built Brilliant on a simple promise: show up, be straight about the price, do the work right, and clean up when you&apos;re done. Turns out, that&apos;s all most homeowners want. Word spread through Round Lake Beach and across Lake County, and 89 five-star Google reviews later, the promise hasn&apos;t changed.
            </p>
            <p>
              We&apos;re not a franchise. We&apos;re not a giant operation with layers of management. When you call Brilliant, you talk to the people who actually do the work. That&apos;s the way we like it.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '4.9★', label: 'Google Rating' },
            { value: '89+', label: 'Five-Star Reviews' },
            { value: '12+', label: 'Communities Served' },
            { value: '100%', label: 'Owner-Operated' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-accent-400">{stat.value}</div>
              <div className="mt-2 text-primary-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Honest From the Start',
                text: 'We walk your roof, show you photos of what we find, and give you a price that won\'t change. No surprises on the invoice, no pressure tactics, no upsells you don\'t need.',
              },
              {
                title: 'Quality You Can See',
                text: 'We help you pick the right shingle color and style for your home. Premium materials, proper underlayment, and an install done by our own crew — not a random subcontractor.',
              },
              {
                title: 'Clean When We Leave',
                text: 'Debris cleanup isn\'t an afterthought — it\'s part of the job. We haul everything, run a magnet for nails, and make sure your yard looks better than we found it.',
              },
            ].map(v => (
              <div key={v.title} className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
