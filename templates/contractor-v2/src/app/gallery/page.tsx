import { site } from '@/site.config'

const projects = [
  {
    title: 'Full Roof Replacement — Oak Park',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&q=80',
  },
  {
    title: 'Storm Damage Repair — Evanston',
    type: 'Emergency',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
  },
  {
    title: 'Commercial Flat Roof — Schaumburg',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
  {
    title: 'Gutter & Siding Install — Berwyn',
    type: 'Exterior',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
  },
  {
    title: 'New Construction Roof — Arlington Heights',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    title: 'TPO Membrane — Chicago',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1585544314038-a0d3769d0193?w=600&q=80',
  },
]

export default function Gallery() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-primary-950 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            500+ roofs and counting.
          </h1>
          <p className="text-primary-300 text-lg mt-4 max-w-xl">
            Every project gets the same attention to detail — from a small repair to a full commercial install.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map(project => (
              <div key={project.title} className="group relative h-80 overflow-hidden bg-primary-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                    {project.type}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-900 mb-14 text-center">What Homeowners Say About Our Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {site.testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-primary-600 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-primary-900 text-sm">{t.author}</p>
                  <p className="text-primary-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Your Roof Could Be Next</h2>
          <p className="text-primary-500 text-lg mb-10">Get a free estimate and see what we can do for your home.</p>
          <a href="/contact" className="bg-accent-500 text-white px-10 py-4 font-bold text-lg hover:bg-accent-600 transition-colors inline-flex items-center gap-3">
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
