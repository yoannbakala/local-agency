import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: `Our Work | ${site.name}`,
  description: `See examples of our roofing projects in ${site.serviceAreas[0]} and surrounding areas. Quality craftsmanship you can trust.`,
}

const categories = [
  {
    name: 'Complete Roof Replacement',
    type: 'Residential',
    photos: [
      ...Array.from({ length: 2 }, (_, i) => `/gallery/Complete Roof Replacement ${i + 1}.jpg`),
      ...Array.from({ length: 6 }, (_, i) => `/gallery/Complete Roof Replacement ${i + 3}.jpg`),
    ],
  },
  {
    name: 'Shingle Replacement',
    type: 'Residential',
    photos: Array.from({ length: 7 }, (_, i) => `/gallery/Shingle Replacement ${i + 1}.jpg`),
  },
  {
    name: 'Storm Damage Repair',
    type: 'Residential',
    photos: [
      ...Array.from({ length: 2 }, (_, i) => `/gallery/Storm damage ${i + 1}.jpg`),
      ...Array.from({ length: 5 }, (_, i) => `/gallery/storm damage ${i + 3}.jpg`),
    ],
  },
  {
    name: 'Flat Roof',
    type: 'Commercial',
    photos: [
      ...Array.from({ length: 2 }, (_, i) => `/gallery/Flat roof ${i + 1}.jpg`),
      ...Array.from({ length: 6 }, (_, i) => `/gallery/flat roof ${i + 3}.jpg`),
    ],
  },
  {
    name: 'New Construction',
    type: 'Commercial',
    photos: Array.from({ length: 5 }, (_, i) => `/gallery/New Construction ${i + 1}.jpg`),
  },
  {
    name: 'Gutter Installation',
    type: 'Residential',
    photos: Array.from({ length: 3 }, (_, i) => `/gallery/Gutter Installation ${i + 1}.jpg`),
  },
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
                {cat.photos.map((photo, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <img
                      src={photo}
                      alt={`${cat.name} project ${i + 1}`}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center bg-slate-50 rounded-xl p-10">
            <h3 className="text-2xl font-bold text-primary-900 mb-3">See More of Our Work</h3>
            <p className="text-slate-600 mb-6">Follow us on Facebook for more project photos, updates, and before &amp; after transformations.</p>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#166FE5] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              View More on Facebook
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
