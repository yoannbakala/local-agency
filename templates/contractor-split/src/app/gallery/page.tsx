import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/site.config'

const projects = [
  { title: 'Highland Ranch Re-Roof', type: 'Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80' },
  { title: 'Aurora Office Complex', type: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80' },
  { title: 'Lakewood Hail Damage', type: 'Storm Repair', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=700&q=80' },
  { title: 'Park Hill Craftsman', type: 'Residential', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80' },
  { title: 'Centennial Gutter System', type: 'Gutters', image: 'https://images.unsplash.com/photo-1585544314038-a0d3769d0193?w=700&q=80' },
  { title: 'Golden Siding Overhaul', type: 'Exteriors', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80' },
]

export default function Gallery() {
  return (
    <>
      {/* Banner */}
      <section className="bg-primary-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary-400 text-sm mb-2"><Link href="/" className="hover:text-white transition-colors">Home</Link> / Gallery</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white">Our Work</h1>
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <div key={p.title} className="group relative h-72 overflow-hidden cursor-pointer">
                <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/60 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-accent-500 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider mb-2">{p.type}</span>
                  <h3 className="text-white font-serif text-xl">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-2">Client Reviews</p>
          <h2 className="font-serif text-3xl text-primary-900 mb-12">What Homeowners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {site.testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" /></svg>
                  ))}
                </div>
                <p className="text-primary-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-primary-900 text-sm">{t.author}</p>
                  <p className="text-primary-500 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-primary-900">
        <Image src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80" alt="Denver roofing project" fill className="object-cover opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Your Home Could Be Next</h2>
          <p className="text-primary-300 mb-8 text-lg">See why 2,500+ Denver homeowners trust Ironclad with their roofs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={site.phoneHref} className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 font-bold text-sm tracking-wide transition-colors">
              Call {site.phone}
            </a>
            <Link href="/contact" className="bg-white hover:bg-primary-100 text-primary-900 px-8 py-3.5 font-bold text-sm tracking-wide transition-colors">
              Get Your Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
