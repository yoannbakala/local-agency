'use client'

import { site } from '@/site.config'

export default function Hero({
  title,
  subtitle,
  showCTA = true,
}: {
  title: string
  subtitle: string
  showCTA?: boolean
}) {
  return (
    <section className="relative bg-primary-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-200 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
        {showCTA && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-block bg-accent-500 text-primary-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-400 transition-colors text-center shadow-lg shadow-accent-500/25"
            >
              Get Your Free Estimate
            </a>
            <a
              href={site.phoneHref}
              className="inline-block border-2 border-white/80 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-900 transition-colors text-center"
            >
              Call {site.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
