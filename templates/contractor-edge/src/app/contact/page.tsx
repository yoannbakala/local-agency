'use client'

import { useState, FormEvent } from 'react'
import { site } from '@/site.config'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="relative bg-primary-900 pt-40 pb-28" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-500 text-sm tracking-widest uppercase font-semibold mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">Contact Us</h1>
          <div className="w-24 h-1.5 bg-accent-500 mt-6" />
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-primary-950 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-primary-900 p-12 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">Request Received</h2>
                <p className="text-primary-400">We&apos;ll contact you within 1 business hour. For emergencies, call <a href={site.emergencyPhoneHref} className="text-accent-500 font-bold">{site.emergencyPhone}</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name *" required className="w-full bg-primary-900 border border-primary-700 text-white px-4 py-3 text-sm placeholder:text-primary-500 focus:outline-none focus:border-accent-500" />
                  <input type="tel" placeholder="Phone *" required className="w-full bg-primary-900 border border-primary-700 text-white px-4 py-3 text-sm placeholder:text-primary-500 focus:outline-none focus:border-accent-500" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="email" placeholder="Email" className="w-full bg-primary-900 border border-primary-700 text-white px-4 py-3 text-sm placeholder:text-primary-500 focus:outline-none focus:border-accent-500" />
                  <input type="text" placeholder="Property Address" className="w-full bg-primary-900 border border-primary-700 text-white px-4 py-3 text-sm placeholder:text-primary-500 focus:outline-none focus:border-accent-500" />
                </div>
                <select className="w-full bg-primary-900 border border-primary-700 text-primary-400 px-4 py-3 text-sm focus:outline-none focus:border-accent-500">
                  <option>Select a Service</option>
                  {site.services.map(s => <option key={s.slug}>{s.title}</option>)}
                </select>
                <textarea rows={5} placeholder="Describe the damage or work needed..." className="w-full bg-primary-900 border border-primary-700 text-white px-4 py-3 text-sm placeholder:text-primary-500 focus:outline-none focus:border-accent-500 resize-none" />
                <button type="submit" className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold tracking-wider uppercase px-8 py-4 text-lg transition-colors">
                  Submit Request
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary-900 p-8">
              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-6">Contact Info</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-primary-500 tracking-widest uppercase text-xs mb-1">Phone</p>
                  <a href={site.phoneHref} className="text-white font-bold text-lg hover:text-accent-500 transition-colors">{site.phone}</a>
                </div>
                <div>
                  <p className="text-primary-500 tracking-widest uppercase text-xs mb-1">Email</p>
                  <a href={`mailto:${site.email}`} className="text-primary-200 hover:text-white transition-colors">{site.email}</a>
                </div>
                <div>
                  <p className="text-primary-500 tracking-widest uppercase text-xs mb-1">Address</p>
                  <p className="text-primary-200">{site.address}</p>
                </div>
                <div>
                  <p className="text-primary-500 tracking-widest uppercase text-xs mb-1">Hours</p>
                  <p className="text-primary-200">{site.hours}</p>
                </div>
              </div>
            </div>

            {/* Emergency callout */}
            <div className="bg-accent-600 p-8 text-white">
              <p className="text-sm tracking-widest uppercase font-medium mb-2">24/7 Emergency Line</p>
              <a href={site.emergencyPhoneHref} className="text-3xl font-bold tracking-tight hover:text-accent-100 transition-colors">{site.emergencyPhone}</a>
              <p className="text-accent-200 text-sm mt-3">Tree damage, active leaks, storm damage — we dispatch immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-primary-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-2">Service Areas</h2>
          <div className="w-16 h-1 bg-accent-500 mb-12" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {site.serviceAreas.map(area => (
              <div key={area} className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-200 text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
