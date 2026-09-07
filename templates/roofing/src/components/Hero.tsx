'use client'

import { useRef, useState } from 'react'
import { site } from '@/site.config'

export default function Hero({
  title,
  subtitle,
  showCTA = true,
  videoSrcs,
}: {
  title: string
  subtitle: string
  showCTA?: boolean
  videoSrcs?: string[]
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleEnded() {
    if (!videoSrcs || videoSrcs.length <= 1) return
    const next = (currentIndex + 1) % videoSrcs.length
    setCurrentIndex(next)
    if (videoRef.current) {
      videoRef.current.src = videoSrcs[next]
      videoRef.current.play()
    }
  }

  return (
    <section className="relative bg-primary-900 text-white overflow-hidden">
      {videoSrcs && videoSrcs.length > 0 && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop={videoSrcs.length === 1}
          playsInline
          onEnded={handleEnded}
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrcs[0]}
        />
      )}
      {videoSrcs && <div className="absolute inset-0 bg-black/60" />}

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
