import Link from 'next/link'
import { site } from '@/site.config'

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Gallery() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-primary-900 pt-40 pb-28" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-500 text-sm tracking-widest uppercase font-semibold mb-4">Our Work</p>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">Project Gallery</h1>
          <div className="w-24 h-1.5 bg-accent-500 mt-6" />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-primary-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {site.gallery.map((project, i) => (
              <div key={i} className="group relative h-72 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${project.image})` }} />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="bg-accent-500 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 self-start mb-3">{project.type}</span>
                  <h3 className="text-lg font-bold uppercase tracking-wide text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">What Homeowners Say</h2>
          <div className="w-16 h-1 bg-accent-500 mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {site.testimonials.map((t, i) => (
              <div key={i} className="bg-primary-800 p-8">
                <Stars />
                <p className="text-primary-200 leading-relaxed mt-4 mb-6">&ldquo;{t.text}&rdquo;</p>
                <p className="text-accent-500 font-bold uppercase tracking-wider text-sm">{t.author}</p>
                <p className="text-primary-500 text-xs tracking-wider uppercase mt-1">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-950 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Your Roof Could Be Next
          </h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto mb-6" />
          <p className="text-primary-400 text-lg mb-8">
            Join 3,000+ DFW homeowners who trusted Titan Storm with their roof.
          </p>
          <Link href="/contact" className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold tracking-wider uppercase px-10 py-4 text-lg transition-colors">
            Get Free Inspection
          </Link>
        </div>
      </section>
    </>
  )
}
