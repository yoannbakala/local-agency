'use client'

import { useState } from 'react'
import { site } from '@/site.config'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {/* Banner */}
      <section className="bg-primary-900 pt-16 pb-14 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Contact Us</h1>
          <p className="mt-3 text-primary-300">Request your free estimate or give us a call. We respond within one business day.</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-primary-900">Request a Free Estimate</h2>
            <p className="mt-2 text-primary-500 text-sm">Fill out the form below and we&rsquo;ll get back to you within 24 hours.</p>

            {submitted ? (
              <div className="mt-8 bg-accent-50 border border-accent-200 rounded-xl p-8 text-center">
                <svg className="w-12 h-12 text-accent-500 mx-auto" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-xl font-bold text-primary-900">Thank You!</h3>
                <p className="mt-2 text-primary-600">We&rsquo;ve received your request and will be in touch within one business day.</p>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" required className="border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500" />
                  <input type="text" placeholder="Last Name" required className="border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone" required className="border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500" />
                  <input type="email" placeholder="Email" required className="border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500" />
                </div>
                <input type="text" placeholder="Street Address" className="w-full border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500" />
                <select defaultValue="" required className="w-full border border-primary-200 rounded-lg px-4 py-3 text-sm text-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500">
                  <option value="" disabled>Service Needed</option>
                  {site.services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                </select>
                <textarea rows={4} placeholder="Tell us more about your project (optional)" className="w-full border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 resize-none" />
                <button type="submit" className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 rounded-lg text-lg transition-colors">
                  Request Free Estimate
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Card */}
          <div className="space-y-6">
            <div className="bg-primary-900 text-white rounded-xl p-8">
              <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <p className="text-sm text-primary-400">Phone</p>
                    <a href={site.phoneHref} className="font-semibold hover:text-accent-400 transition-colors">{site.phone}</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <p className="text-sm text-primary-400">Email</p>
                    <a href={`mailto:${site.email}`} className="font-semibold hover:text-accent-400 transition-colors text-sm">{site.email}</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-primary-400">Address</p>
                    <p className="font-semibold text-sm">{site.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-primary-400">Hours</p>
                    <p className="font-semibold text-sm">{site.hours}</p>
                    <p className="text-sm text-primary-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent-500 text-white rounded-xl p-6 text-center">
              <p className="font-bold text-lg">Roof Emergency?</p>
              <p className="mt-1 text-accent-100 text-sm">We offer 24/7 emergency tarping and board-up.</p>
              <a href={site.phoneHref} className="inline-block mt-4 bg-white text-accent-700 font-bold px-6 py-3 rounded-lg hover:bg-accent-50 transition-colors">
                Call Now: {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-primary-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-primary-900 text-center">Areas We Serve</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {site.serviceAreas.map(a => (
              <div key={a} className="flex items-center gap-2 text-sm text-primary-600">
                <svg className="w-4 h-4 text-accent-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
