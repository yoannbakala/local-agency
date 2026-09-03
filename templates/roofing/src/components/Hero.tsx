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
    <section className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
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
              className="inline-block bg-accent-500 text-primary-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-400 transition-colors text-center"
            >
              Get Your Free Estimate
            </a>
            <a
              href={site.phoneHref}
              className="inline-block border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-900 transition-colors text-center"
            >
              Call {site.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
