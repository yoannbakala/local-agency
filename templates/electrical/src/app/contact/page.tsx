import { site } from '@/site.config'

export default function Contact() {
  return (
    <section className="bg-navy-950 pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-volt-500" />
          <span className="text-sm tracking-[0.2em] uppercase text-volt-500 font-semibold">Contact Us</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-16">
          Get in Touch
        </h1>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-navy-900 border border-navy-800 p-8 rounded-sm space-y-4">
              <input type="text" placeholder="Full Name" className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 text-sm placeholder:text-navy-500 focus:outline-none focus:border-volt-500 rounded-sm" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 text-sm placeholder:text-navy-500 focus:outline-none focus:border-volt-500 rounded-sm" />
              <input type="email" placeholder="Email" className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 text-sm placeholder:text-navy-500 focus:outline-none focus:border-volt-500 rounded-sm" />
              <select className="w-full bg-navy-800 border border-navy-700 text-navy-400 px-4 py-3 text-sm focus:outline-none focus:border-volt-500 rounded-sm">
                <option>Select Service Needed</option>
                {site.services.map(s => <option key={s.slug}>{s.title}</option>)}
              </select>
              <textarea placeholder="Describe your project or issue..." rows={5} className="w-full bg-navy-800 border border-navy-700 text-white px-4 py-3 text-sm placeholder:text-navy-500 focus:outline-none focus:border-volt-500 rounded-sm resize-none" />
              <button className="w-full bg-volt-500 hover:bg-volt-600 text-navy-950 font-bold tracking-wider py-4 text-sm transition-colors rounded-sm">
                Send Request
              </button>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-volt-500 mb-3">Office</h3>
              <p className="text-navy-200 text-lg">{site.address}</p>
              <p className="text-navy-400 mt-1">{site.hours}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-volt-500 mb-3">Phone</h3>
              <a href={site.phoneHref} className="text-white text-2xl font-bold hover:text-volt-500 transition-colors">{site.phone}</a>
              <p className="text-navy-400 mt-2">
                Emergency: <a href={site.emergencyPhoneHref} className="text-volt-500 font-semibold hover:text-volt-400">{site.emergencyPhone}</a>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-volt-500 mb-3">Email</h3>
              <a href={`mailto:${site.email}`} className="text-navy-200 hover:text-white transition-colors text-lg">{site.email}</a>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-volt-500 mb-3">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {site.serviceAreas.map(area => (
                  <span key={area} className="bg-navy-900 border border-navy-800 text-navy-300 text-sm px-3 py-1 rounded-sm">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
