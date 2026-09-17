'use client'

import { useState } from 'react'
import { site } from '@/site.config'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">We&apos;ve received your request and will contact you within one business day.</p>
        <p className="text-green-700 mt-2">Need immediate help? Call <a href={site.phoneHref} className="font-semibold underline">{site.phone}</a></p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
      className="space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
          <input id="name" name="name" required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
          <input id="phone" name="phone" type="tel" required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
        <input id="email" name="email" type="email"
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none" />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
        <select id="service" name="service"
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none bg-white">
          <option value="">Select a service...</option>
          {site.services.map(s => (
            <option key={s.slug} value={s.slug}>{s.title}</option>
          ))}
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
        <textarea id="message" name="message" rows={4}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none resize-y" />
      </div>
      <button type="submit"
        className="w-full bg-accent-500 text-primary-950 py-4 rounded-xl font-bold text-lg hover:bg-accent-400 transition-colors cursor-pointer">
        Send My Request
      </button>
      <p className="text-sm text-slate-500 text-center">We respond within one business day. No spam, ever.</p>
    </form>
  )
}
