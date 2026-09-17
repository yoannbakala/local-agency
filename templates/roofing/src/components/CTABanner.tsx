import { site } from '@/site.config'

export default function CTABanner() {
  return (
    <section className="bg-accent-500">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-3">
              Ready for Year-Round Comfort?
            </h2>
            <p className="text-primary-900/70 text-lg max-w-xl">
              Get a free, no-pressure estimate from Naperville&apos;s trusted HVAC team — heating, cooling, and air quality.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-800 transition-colors shadow-lg"
            >
              Get Your Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
