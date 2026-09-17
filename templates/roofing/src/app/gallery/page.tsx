import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: `Our Work | ${site.name}`,
  description: `See examples of AC installations, furnace replacements, heat pump systems, and more across the western suburbs.`,
}

const categories = [
  {
    name: 'AC Installation & Repair',
    type: 'Cooling',
    photos: [
      'https://images.unsplash.com/photo-1667983453881-4992fe86ab1b?w=600&q=80',
      'https://images.unsplash.com/photo-1651474738521-efacfb201039?w=600&q=80',
      'https://images.unsplash.com/photo-1718203862467-c33159fdc504?w=600&q=80',
      'https://images.unsplash.com/photo-1691351582808-329cde17ffa2?w=600&q=80',
      'https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f?w=600&q=80',
      'https://images.unsplash.com/photo-1681042803902-f79c240d8f03?w=600&q=80',
    ],
  },
  {
    name: 'Furnace & Heating Systems',
    type: 'Heating',
    photos: [
      'https://images.unsplash.com/photo-1700124113583-81aa99ea2aa2?w=600&q=80',
      'https://images.unsplash.com/photo-1605359848061-682b4cae1e7a?w=600&q=80',
      'https://images.unsplash.com/photo-1633596879450-e98a1a4d0c80?w=600&q=80',
      'https://images.unsplash.com/photo-1547186577-a3f4fa07c2ef?w=600&q=80',
      'https://images.unsplash.com/photo-1669162366936-c480b29f1835?w=600&q=80',
      'https://images.unsplash.com/photo-1639866496281-573747d7051f?w=600&q=80',
    ],
  },
  {
    name: 'HVAC Technicians at Work',
    type: 'Service',
    photos: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80',
      'https://images.unsplash.com/photo-1615774925655-a0e97fc85c14?w=600&q=80',
      'https://images.unsplash.com/photo-1625148230889-8195e85aae6b?w=600&q=80',
      'https://images.unsplash.com/photo-1660330589693-99889d60181e?w=600&q=80',
      'https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?w=600&q=80',
    ],
  },
]

export default function Gallery() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent-400 font-bold text-sm tracking-widest uppercase mb-3">Our Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">Featured Completed Projects</h1>
          <p className="mt-4 text-primary-200 text-lg max-w-xl">Explore our portfolio to see real HVAC projects across the western suburbs — every one done right and backed by our warranty.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-accent-600 uppercase tracking-wide">{cat.type}</span>
                  <h2 className="text-2xl font-bold text-primary-900">{cat.name}</h2>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.photos.map((photo, i) => (
                  <div key={i} className="group rounded-2xl overflow-hidden border border-primary-100 hover:border-accent-300 hover:shadow-lg transition-all">
                    <img
                      src={photo}
                      alt={`${cat.name} project ${i + 1}`}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-primary-900 rounded-3xl p-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
            <p className="text-primary-200 mb-6 max-w-lg mx-auto">Whether it&apos;s a repair, replacement, or new installation — get a free estimate from the team Naperville trusts.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-accent-500 text-primary-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-400 transition-colors"
            >
              Get Your Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
