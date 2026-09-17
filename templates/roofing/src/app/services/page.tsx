import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

const icons: Record<string, string> = {
  ac: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
  furnace: 'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 009 12a4.5 4.5 0 104.5-4.5c-1.266 0-2.4.52-3.216 1.357',
  heatpump: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
  airquality: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  maintenance: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085',
}

export const metadata: Metadata = {
  title: `Our Services | ${site.name}`,
  description: `AC repair, furnace installation, heat pumps, indoor air quality, and maintenance plans in Naperville and the western suburbs.`,
}

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent-400 font-bold text-sm tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">Heating, Cooling & Air Quality for Every Season</h1>
          <p className="mt-4 text-primary-200 text-lg max-w-xl">From emergency AC repair to full furnace replacement — we handle every part of your home comfort system.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {site.services.map((service) => (
            <div key={service.slug} id={service.slug} className="grid lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icons[service.slug] || icons.maintenance} />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
                <a href="/contact" className="inline-flex items-center gap-2 mt-6 bg-accent-500 text-primary-950 px-6 py-3 rounded-xl font-bold hover:bg-accent-400 transition-all">
                  Get a Free Estimate
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="lg:col-span-3 bg-primary-50 rounded-2xl p-8 border border-primary-100">
                <h3 className="font-bold text-primary-800 mb-5">What&apos;s Included</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map(f => (
                    <div key={f} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary-950" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
