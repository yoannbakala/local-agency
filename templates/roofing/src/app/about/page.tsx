import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: `Learn about ${site.name} — a locally owned and operated roofing company serving ${site.serviceAreas[0]} and surrounding areas since 2019.`,
}

export default function About() {
  return (
    <>
      <Hero
        title="Who We Are"
        subtitle={`${site.name} is a family-owned roofing company serving ${site.serviceAreas[0]} and the south suburbs around the clock.`}
        showCTA={false}
      />

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">How We Got Here</h2>
          <div className="prose prose-lg text-slate-600 space-y-4">
            <p>
              {site.name} started with a truck, a ladder, and a promise: show up when you say you will, do the work right, and charge a fair price. That was enough to keep the phone ringing, and it still is today.
            </p>
            <p>
              We&apos;re one of the few roofers in the area that works around the clock. Storms don&apos;t wait for Monday morning, and neither do we. Our crew lives in the neighborhoods we serve — when a tree takes out your shingles at 2 AM, we&apos;re 15 minutes away, not an hour.
            </p>
            <p>
              From single-family homes in {site.serviceAreas[0]} to commercial flat roofs in {site.serviceAreas.slice(1, 3).join(' and ')}, we bring the same hands-on approach to every job. No subcontractors, no runaround — just our team on your roof getting it done.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '24/7', label: 'Always Available' },
            { value: '5.0', label: 'Google Rating' },
            { value: '10+', label: 'Cities Served' },
            { value: '100%', label: 'Satisfaction Rate' },
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
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">Our Commitments to You</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Straight Talk',
                text: 'We\'ll tell you exactly what your roof needs — nothing more, nothing less. If a repair saves you thousands over a replacement, that\'s what we recommend.',
              },
              {
                title: 'Built to Last',
                text: 'We only install materials we\'d put on our own homes. Every job comes with a written workmanship guarantee because we stand behind our work.',
              },
              {
                title: 'Respect Your Property',
                text: 'Tarps down before we start, debris hauled away when we finish. We treat your yard like it\'s ours — because we live in this community too.',
              },
            ].map(v => (
              <div key={v.title} className="bg-slate-50 rounded-xl p-8">
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
