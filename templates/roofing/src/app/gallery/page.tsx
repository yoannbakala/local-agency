import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: `Our Work | ${site.name}`,
  description: `See examples of our roofing and landscaping projects across Chicago. Quality work you can trust.`,
}

const categories = [
  {
    name: 'Complete Roof Replacement',
    type: 'Roofing',
    photos: Array.from({ length: 8 }, (_, i) => `/gallery/Complete Roof Replacement ${i + 1}.jpg`),
  },
  {
    name: 'Shingle Replacement',
    type: 'Roofing',
    photos: Array.from({ length: 7 }, (_, i) => `/gallery/Shingle Replacement ${i + 1}.jpg`),
  },
  {
    name: 'Storm Damage Repair',
    type: 'Roofing',
    photos: [
      ...Array.from({ length: 2 }, (_, i) => `/gallery/Storm damage ${i + 1}.jpg`),
      ...Array.from({ length: 5 }, (_, i) => `/gallery/storm damage ${i + 3}.jpg`),
    ],
  },
  {
    name: 'Flat Roof',
    type: 'Roofing',
    photos: [
      ...Array.from({ length: 2 }, (_, i) => `/gallery/Flat roof ${i + 1}.jpg`),
      ...Array.from({ length: 6 }, (_, i) => `/gallery/flat roof ${i + 3}.jpg`),
    ],
  },
  {
    name: 'New Construction',
    type: 'Roofing',
    photos: Array.from({ length: 5 }, (_, i) => `/gallery/New Construction ${i + 1}.jpg`),
  },
]

export default function Gallery() {
  return (
    <>
      <Hero
        title="Projects We Stand Behind"
        subtitle="Every job — roof or yard — gets the same attention. Here are some we're especially proud of."
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

          <div className="text-center bg-primary-50 rounded-xl p-10">
            <h3 className="text-2xl font-bold text-primary-900 mb-3">Want to See More?</h3>
            <p className="text-slate-600 mb-6">Check out our Google Business page for more photos and reviews from customers across Chicago.</p>
            <a
              href={site.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              Find Us on Google
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
