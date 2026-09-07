import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: `Learn about ${site.name} — Chicago's go-to team for roofing and landscaping, all under one roof.`,
}

export default function About() {
  return (
    <>
      <Hero
        title="The Crew Behind Courtesy"
        subtitle={`${site.name} is a Chicago-based team that handles roofing and landscaping — so you don't have to hire two companies for one property.`}
        showCTA={false}
      />

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">How It Started</h2>
          <div className="prose prose-lg text-slate-600 space-y-4">
            <p>
              It started the way most good ideas do — a customer asked. We were finishing a roof job and the homeowner said, &quot;While you&apos;re here, any chance you do yards too?&quot; Turns out, we did. And we were good at it.
            </p>
            <p>
              Word got around. Neighbors saw the same truck handling both the roof and the lawn, and they liked the simplicity. One crew, one schedule, one company that actually picks up the phone. That&apos;s how Courtesy became what it is today.
            </p>
            <p>
              We&apos;re not the biggest operation in Chicago, and that&apos;s the point. Every job gets our direct attention — from the estimate to the final walkthrough. No sales reps, no subcontractors, no call centers. Just us, doing the work.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '5.0', label: 'Google Rating' },
            { value: '2-in-1', label: 'Roofing & Landscaping' },
            { value: '10+', label: 'Neighborhoods Served' },
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
                title: 'Show Up, Follow Through',
                text: 'We confirm every appointment, arrive when we say, and finish what we start. If something comes up, you hear it from us first — not the other way around.',
              },
              {
                title: 'Honest Pricing, Always',
                text: 'The number on your estimate is the number on your invoice. We don\'t low-ball to win the job and tack on extras later. What you see is what you pay.',
              },
              {
                title: 'Leave It Better',
                text: 'When we drive away, your property should look better than when we pulled up. That means clean jobsites, trimmed edges, and no surprises hiding in the gutters.',
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
