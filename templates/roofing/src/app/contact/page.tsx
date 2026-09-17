import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description: `Contact ${site.name} for a free HVAC estimate. Call ${site.phone} or fill out our online form. Serving Naperville and the western suburbs.`,
}

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent-400 font-bold text-sm tracking-widest uppercase mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">Get Your Free Estimate</h1>
          <p className="mt-4 text-primary-200 text-lg max-w-xl">Call us directly or fill out the form below. We respond within one business day — usually much sooner. 24/7 emergency service available.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Request an Estimate</h2>
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary-900 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-300 text-sm">Phone</p>
                    <a href={site.phoneHref} className="text-accent-400 text-lg font-bold hover:text-accent-300 transition-colors">
                      {site.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-300 text-sm">Email</p>
                    <a href={`mailto:${site.email}`} className="text-white hover:text-accent-400 transition-colors">
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-300 text-sm">Hours</p>
                    <p className="text-white">{site.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-300 text-sm">Address</p>
                    <p className="text-white">{site.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <h3 className="text-lg font-bold text-primary-900 mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {site.serviceAreas.map(area => (
                  <span key={area} className="bg-white text-primary-700 px-3 py-1.5 rounded-full text-sm font-medium border border-primary-200">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
