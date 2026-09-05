import { site } from '@/site.config'

export default function CTABanner() {
  return (
    <section className="bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Protect Your Home?
        </h2>
        <p className="text-primary-300 text-lg mb-8 max-w-2xl mx-auto">
          Get a free, no-obligation estimate. We&apos;ll inspect your roof, explain your options, and give you an honest price.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block bg-accent-500 text-primary-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-400 transition-colors"
          >
            Request Free Estimate
          </a>
          <a
            href={site.phoneHref}
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-900 transition-colors"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
