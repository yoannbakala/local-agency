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
        title="About Our Company"
        subtitle={`Locally owned and operated, ${site.name} has been protecting homes and businesses in ${site.serviceAreas[0]} since 2019.`}
        showCTA={false}
      />

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-slate-600 space-y-4">
            <p>
              {site.name} was founded on a simple belief: every homeowner deserves honest, high-quality roofing work at a fair price. What started as a small family operation has grown into one of the most trusted roofing companies in the {site.serviceAreas[0]} area.
            </p>
            <p>
              Over the years, we&apos;ve built our reputation one roof at a time — through quality craftsmanship, clear communication, and a commitment to doing the job right the first time. We treat every home like it&apos;s our own, because your roof is your family&apos;s first line of defense.
            </p>
            <p>
              Today, we&apos;re proud to serve homeowners and businesses across {site.serviceAreas.slice(0, 3).join(', ')}, and the entire Chicagoland area. Our team brings hands-on experience to every project, no matter how big or small.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '6+', label: 'Years in Business' },
            { value: '4.9', label: 'Google Rating' },
            { value: '48+', label: 'Five-Star Reviews' },
            { value: 'A+', label: 'BBB Rating' },
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
                title: 'Integrity',
                text: 'We give you an honest assessment, honest pricing, and honest timelines. No surprises, no hidden fees, no pressure.',
              },
              {
                title: 'Quality',
                text: 'We use premium materials and proven techniques. Every roof we install or repair is built to last and backed by our warranty.',
              },
              {
                title: 'Service',
                text: 'We answer your calls, show up on time, and keep your property clean. Your experience matters to us as much as the finished roof.',
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
