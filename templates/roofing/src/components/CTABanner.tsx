import { site } from '@/site.config'

export default function CTABanner() {
  return (
    <section className="bg-accent-500">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
          Ready to Protect Your Home?
        </h2>
        <p className="text-primary-800 text-lg mb-8 max-w-2xl mx-auto">
          Get a free, no-obligation estimate. We&apos;ll inspect your roof, explain your options, and give you an honest price.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block bg-primary-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 transition-colors"
          >
            Request Free Estimate
          </a>
          <a
            href={site.phoneHref}
            className="inline-block bg-white text-primary-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
