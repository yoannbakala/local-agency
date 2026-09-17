'use client'

import { useEffect, useRef, useState } from 'react'
import { site } from '@/site.config'

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return <div ref={ref}>{count}{suffix}</div>
}

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
    <section className="relative bg-primary-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent-500/15 border border-accent-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              <span className="text-accent-300 text-sm font-medium">Trusted HVAC Experts in the Western Suburbs</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight">
              {title.split('.').filter(Boolean).map((part, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-accent-400">{part.trim()}.</span> : <>{part.trim()}. </>}
                </span>
              ))}
            </h1>

            <p className="mt-6 text-lg text-primary-200 max-w-xl leading-relaxed">
              {subtitle}
            </p>

            {showCTA && (
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent-500 text-primary-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-400 transition-all hover:shadow-lg hover:shadow-accent-500/25"
                >
                  Get Your Free Estimate
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {site.phone}
                </a>
              </div>
            )}
          </div>

          {/* Right: Photo Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-primary-800 rounded-2xl h-48 overflow-hidden border border-primary-700/50">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80" alt="HVAC technician working" className="w-full h-full object-cover" />
              </div>
              <div className="bg-accent-500/10 border border-accent-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center text-primary-950 font-bold border-2 border-primary-900">
                    S
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-medium">Summit HVAC</p>
                    <p className="text-primary-300 text-xs">Family-Owned & Operated</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-accent-300 text-sm ml-2 font-medium">5.0</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-primary-800 rounded-2xl h-52 overflow-hidden border border-primary-700/50">
                <img src="https://images.unsplash.com/photo-1667983453881-4992fe86ab1b?w=400&q=80" alt="Air conditioning unit" className="w-full h-full object-cover" />
              </div>
              <div className="bg-primary-800 rounded-2xl h-40 overflow-hidden border border-primary-700/50">
                <img src="https://images.unsplash.com/photo-1700124113583-81aa99ea2aa2?w=400&q=80" alt="Heating system" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-primary-700/50 pt-10">
          {[
            { end: 15, suffix: '+', label: 'Years of Experience' },
            { end: 12, suffix: '+', label: 'Communities Served' },
            { end: 24, suffix: '/7', label: 'Emergency Service' },
            { end: 0, suffix: '', label: 'Hidden Fees', prefix: '$' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-400">
                {stat.prefix}
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-primary-300 text-sm mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
