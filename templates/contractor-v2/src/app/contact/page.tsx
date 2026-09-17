'use client'

import { site } from '@/site.config'

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-primary-950 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            Let&apos;s talk about your roof.
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-primary-900 mb-2">Request a Free Estimate</h2>
              <p className="text-primary-500 mb-8">Fill out the form and we&apos;ll get back to you within one business day. For emergencies, call us directly.</p>

              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1.5">First Name</label>
                    <input type="text" className="w-full border border-primary-200 px-4 py-3 text-primary-900 focus:outline-none focus:border-accent-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1.5">Last Name</label>
                    <input type="text" className="w-full border border-primary-200 px-4 py-3 text-primary-900 focus:outline-none focus:border-accent-500 transition-colors" placeholder="Smith" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1.5">Phone</label>
                    <input type="tel" className="w-full border border-primary-200 px-4 py-3 text-primary-900 focus:outline-none focus:border-accent-500 transition-colors" placeholder="(312) 555-0100" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1.5">Email</label>
                    <input type="email" className="w-full border border-primary-200 px-4 py-3 text-primary-900 focus:outline-none focus:border-accent-500 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1.5">Address</label>
                  <input type="text" className="w-full border border-primary-200 px-4 py-3 text-primary-900 focus:outline-none focus:border-accent-500 transition-colors" placeholder="123 Main St, Chicago, IL" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1.5">Service Needed</label>
                  <select className="w-full border border-primary-200 px-4 py-3 text-primary-900 focus:outline-none focus:border-accent-500 transition-colors bg-white">
                    <option value="">Select a service...</option>
                    {site.services.map(s => (
                      <option key={s.slug} value={s.slug}>{s.title}</option>
                    ))}
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1.5">Tell Us More</label>
                  <textarea rows={4} className="w-full border border-primary-200 px-4 py-3 text-primary-900 focus:outline-none focus:border-accent-500 transition-colors resize-none" placeholder="Describe the issue or what you're looking for..." />
                </div>
                <button type="submit" className="bg-accent-500 text-white px-10 py-4 font-bold text-lg hover:bg-accent-600 transition-colors w-full sm:w-auto">
                  Send Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-primary-950 text-white p-8 mb-6">
                <h3 className="font-bold text-lg mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-primary-400 text-xs uppercase tracking-wider mb-1">Phone</p>
                    <a href={site.phoneHref} className="text-accent-400 font-bold text-xl hover:text-accent-300 transition-colors">
                      {site.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-primary-400 text-xs uppercase tracking-wider mb-1">Email</p>
                    <a href={`mailto:${site.email}`} className="text-white hover:text-accent-400 transition-colors">
                      {site.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-primary-400 text-xs uppercase tracking-wider mb-1">Office</p>
                    <p className="text-primary-200 text-sm">{site.address}</p>
                  </div>
                  <div>
                    <p className="text-primary-400 text-xs uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-primary-200 text-sm">{site.hours}</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-8">
                <h3 className="font-bold text-primary-900 mb-3">Emergency Roof Repair?</h3>
                <p className="text-primary-500 text-sm leading-relaxed mb-4">
                  Storm damage, active leaks, or fallen trees — call us now. We offer emergency tarping and repairs to protect your home immediately.
                </p>
                <a href={site.phoneHref} className="inline-flex items-center gap-2 text-accent-600 font-bold hover:text-accent-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call {site.phone} Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary-900 mb-6">We Serve These Areas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {site.serviceAreas.map(area => (
              <div key={area} className="flex items-center gap-2 text-primary-600 text-sm py-2">
                <svg className="w-4 h-4 text-accent-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
