import Link from 'next/link'
import { site } from '@/site.config'

const StarIcon = () => (
  <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const projects = [
  { src: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&q=80', title: 'Full Replacement', loc: 'Buckhead' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', title: 'Storm Damage Repair', loc: 'Decatur' },
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', title: 'Roof Inspection', loc: 'Marietta' },
  { src: 'https://images.unsplash.com/photo-1585544314038-a0d3769d0193?w=600&q=80', title: 'Gutter System', loc: 'Roswell' },
  { src: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=600&q=80', title: 'Shingle Replacement', loc: 'Sandy Springs' },
  { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80', title: 'Complete Reroof', loc: 'Alpharetta' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-primary-900 pt-16 pb-14 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Our Work & Reviews</h1>
          <p className="mt-3 text-primary-300">See the quality for yourself, then hear it from our customers.</p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20 bg-primary-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 text-center">Recent Projects</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <div key={p.title} className="group relative rounded-xl overflow-hidden shadow-sm">
                <img src={p.src} alt={p.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/60 transition-colors flex items-end">
                  <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-bold">{p.title}</p>
                    <p className="text-primary-300 text-sm">{p.loc}, GA</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 text-center">What Our Customers Say</h2>
          <p className="mt-3 text-primary-500 text-center">380+ five-star reviews on Google</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-primary-200 rounded-xl p-6 shadow-sm flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="text-primary-700 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-primary-100">
                  <p className="font-bold text-primary-900 text-sm">{t.author}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-primary-400">{t.location}</span>
                    <span className="text-xs font-semibold text-accent-600 bg-accent-50 px-2 py-0.5 rounded">Google Review</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Be Our Next Success Story?</h2>
          <p className="mt-4 text-primary-300 text-lg">Get a free estimate and see why Atlanta homeowners trust Heritage Home.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3.5 rounded-lg text-lg transition-colors">
              Schedule Free Inspection
            </Link>
            <a href={site.phoneHref} className="border-2 border-primary-400 hover:border-white text-white font-bold px-8 py-3.5 rounded-lg text-lg transition-colors">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
