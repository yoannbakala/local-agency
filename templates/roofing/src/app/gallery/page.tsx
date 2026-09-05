import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: `Our Work | ${site.name}`,
  description: `See examples of our roofing projects in ${site.serviceAreas[0]} and surrounding areas. Quality craftsmanship you can trust.`,
}

const categories = [
  { name: 'Roof Replacement', type: 'Residential', count: 8 },
  { name: 'Rubber Roofing', type: 'Commercial', count: 6 },
  { name: 'Roof Repair', type: 'Residential', count: 7 },
  { name: 'Storm Damage Repair', type: 'Residential', count: 5 },
  { name: 'New Construction', type: 'Commercial', count: 4 },
  { name: 'Attic Inspection', type: 'Residential', count: 3 },
]

export default function Gallery() {
  return (
    <>
      <Hero
        title="Our Work"
        subtitle="Every roof tells a story. Here are some of the projects we're proud of."
        showCTA={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="mb-6">
                <span className="text-xs font-semibold text-accent-600 uppercase tracking-wide">{cat.type}</span>
                <h2 className="text-2xl font-bold text-primary-900 mt-1">{cat.name}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {Array.from({ length: cat.count }, (_, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100 flex items-center justify-center h-56">
                    <div className="text-center text-slate-400">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      <span className="text-sm">Project {i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center bg-slate-50 rounded-xl p-10">
            <h3 className="text-2xl font-bold text-primary-900 mb-3">See What Our Customers Say</h3>
            <p className="text-slate-600 mb-6">Check out our perfect 5-star rating on Google and see why homeowners trust Eliot Roofing.</p>
            <a
              href={site.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent-500 text-primary-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              View Our Google Reviews
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
