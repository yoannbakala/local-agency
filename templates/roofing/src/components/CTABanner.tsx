import { site } from '@/site.config'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-500" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20z\' fill=\'%23000\' fill-opacity=\'0.1\'/%3E%3C/svg%3E")' }} />
      <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
          Ready for a Roof That Lasts?
        </h2>
        <p className="text-primary-900/80 text-lg mb-8 max-w-2xl mx-auto">
          Get a free, no-pressure estimate from Round Lake Beach&apos;s most reviewed roofing team. We&apos;ll walk your roof, show you options, and give you an honest price.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block bg-primary-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 transition-colors shadow-lg"
          >
            Get Your Free Estimate
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
