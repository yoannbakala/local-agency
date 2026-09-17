'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { site } from '@/site.config'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Banner */}
      <section className="bg-primary-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary-400 text-sm mb-2"><Link href="/" className="hover:text-white transition-colors">Home</Link> / Contact</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white">Contact Us</h1>
        </div>
      </section>

      {/* Split — form + info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-serif text-2xl text-primary-900 mb-2">Get Your Free Estimate</h2>
            <p className="text-primary-500 mb-8">Fill out the form and we&rsquo;ll get back to you within one business day.</p>

            {submitted ? (
              <div className="bg-accent-50 border border-accent-200 p-8 text-center">
                <svg className="w-12 h-12 text-accent-500 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="font-serif text-xl text-primary-900 mb-2">Thank You!</h3>
                <p className="text-primary-600">We&rsquo;ve received your request and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">First Name</label>
                    <input type="text" required className="w-full border border-primary-200 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Last Name</label>
                    <input type="text" required className="w-full border border-primary-200 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Phone</label>
                    <input type="tel" required className="w-full border border-primary-200 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Email</label>
                    <input type="email" required className="w-full border border-primary-200 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">Property Address</label>
                  <input type="text" className="w-full border border-primary-200 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">Service Needed</label>
                  <select className="w-full border border-primary-200 px-4 py-2.5 text-sm text-primary-500 focus:outline-none focus:border-accent-500 bg-white">
                    <option>Select a service</option>
                    {site.services.map(s => <option key={s.slug}>{s.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full border border-primary-200 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500 resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3.5 font-bold text-sm tracking-wide transition-colors">
                  Submit Request
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-primary-900 text-primary-200 p-8">
              <h3 className="text-white font-serif text-xl mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href={site.phoneHref} className="hover:text-white transition-colors">{site.phone}</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">{site.email}</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <div>
                    <p className="text-white font-semibold">Office</p>
                    <p>{site.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <p className="text-white font-semibold">Hours</p>
                    <p>{site.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency box */}
            <div className="bg-accent-50 border-2 border-accent-300 p-8 text-center">
              <svg className="w-10 h-10 text-accent-500 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
              <h3 className="font-serif text-lg text-primary-900 mb-1">Roof Emergency?</h3>
              <p className="text-primary-600 text-sm mb-4">Storm damage, active leaks, or fallen trees &mdash; we respond 24/7.</p>
              <a href={`tel:${site.emergencyPhone.replace(/\D/g, '')}`} className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 font-bold text-sm tracking-wide transition-colors">
                Call {site.emergencyPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-primary-900 mb-8 text-center">We Serve the Entire Denver Metro Area</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {site.serviceAreas.map(a => (
              <div key={a} className="flex items-center gap-2 bg-white px-4 py-3 text-primary-700 text-sm">
                <svg className="w-4 h-4 text-accent-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433a19.695 19.695 0 002.683-2.006c1.9-1.685 3.945-4.203 3.945-7.343A8 8 0 002 9c0 3.14 2.045 5.658 3.945 7.343a19.695 19.695 0 002.683 2.006 13.1 13.1 0 00.757.433l.281.14.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" /></svg>
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
