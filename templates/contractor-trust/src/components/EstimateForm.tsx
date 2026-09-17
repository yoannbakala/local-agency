'use client'

import { useState } from 'react'
import { site } from '@/site.config'

export default function EstimateForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="bg-accent-50 border border-accent-200 rounded-xl p-8 text-center">
        <svg className="w-12 h-12 text-accent-500 mx-auto" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 text-xl font-bold text-primary-900">Thank You!</h3>
        <p className="mt-2 text-primary-600">We&rsquo;ve received your request and will be in touch within one business day.</p>
      </div>
    )
  }

  return (
    <form className="bg-white rounded-xl shadow-sm border border-primary-200 p-8" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500" />
        <input type="text" placeholder="Last Name" className="border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <input type="tel" placeholder="Phone" className="border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500" />
        <input type="email" placeholder="Email" className="border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500" />
      </div>
      <input type="text" placeholder="Street Address" className="mt-4 w-full border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500" />
      <select defaultValue="" className="mt-4 w-full border border-primary-200 rounded-lg px-4 py-3 text-sm text-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500">
        <option value="" disabled>Service Needed</option>
        {site.services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
      </select>
      <textarea rows={3} placeholder="Tell us more about your project (optional)" className="mt-4 w-full border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 resize-none" />
      <button type="submit" className="mt-6 w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 rounded-lg text-lg transition-colors">
        Request Free Estimate
      </button>
    </form>
  )
}
