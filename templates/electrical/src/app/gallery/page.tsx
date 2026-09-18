import { site } from '@/site.config'

export default function Gallery() {
  return (
    <section className="bg-navy-950 pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-volt-500" />
          <span className="text-sm tracking-[0.2em] uppercase text-volt-500 font-semibold">Our Work</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-16">
          Recent Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {site.gallery.map((project, i) => (
            <div key={i} className="group relative h-72 overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${project.image})` }} />
              <div className="absolute inset-0 bg-navy-950/60 group-hover:bg-navy-950/40 transition-colors" />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="bg-volt-500 text-navy-950 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm">{project.type}</span>
                <p className="text-white font-semibold mt-2">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
