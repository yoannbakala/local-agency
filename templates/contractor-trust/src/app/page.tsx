import Link from 'next/link'
import { site } from '@/site.config'
import EstimateForm from '@/components/EstimateForm'

/* --- SVG icon helpers --- */
const StarIcon = () => (
  <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const trustBadges = [
  {
    label: '4.9 Google Rating',
    icon: <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>,
  },
  {
    label: 'GAF Master Elite',
    icon: <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5h-1.5A3.375 3.375 0 007.875 14.25v4.5m8.625 0H7.875M12 3.75l2.25 3h-4.5L12 3.75z" /></svg>,
  },
  {
    label: 'Licensed & Insured',
    icon: <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  },
  {
    label: 'Lifetime Warranty',
    icon: <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
]

const serviceIcons: Record<string, string> = {
  replacement: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  repair: 'M11.42 15.17l-5.658 5.659a2.25 2.25 0 01-3.182-3.182l5.659-5.658m0 0a6 6 0 018.486-8.486m-8.486 8.486L4.5 21M18.75 3.75l-3 3',
  'storm-damage': 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
  gutters: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636',
  inspections: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
}

const photos = [
  'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=400&h=250&fit=crop&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=250&fit=crop&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop&q=80',
  'https://images.unsplash.com/photo-1585544314038-a0d3769d0193?w=400&h=250&fit=crop&q=80',
  'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=400&h=250&fit=crop&q=80',
]

const values = [
  { title: 'No-Pressure Estimates', desc: 'We give you an honest assessment and a fair price. No sales tactics, no expiring discounts, no pressure.' },
  { title: 'Premium Materials Only', desc: 'We use GAF and CertainTeed products with full manufacturer warranties. No builder-grade shortcuts.' },
  { title: 'Clean Job Sites', desc: 'Our crews run magnets over your yard and do a full cleanup every day. Your property stays spotless.' },
  { title: 'Insurance Claim Help', desc: 'We document damage, meet with your adjuster, and handle the paperwork so you don\'t have to.' },
  { title: 'Lifetime Workmanship Warranty', desc: 'We stand behind every roof we install. If something goes wrong with our work, we fix it. Period.' },
  { title: 'Local & Accountable', desc: 'We live and work in Atlanta. Our reputation is our livelihood, and we protect it on every project.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero (no image, trust-centered) ── */}
      <section className="bg-primary-100 pt-20 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-900 leading-tight">
            Atlanta&rsquo;s Highest-Rated Roofing Contractor
          </h1>
          <p className="mt-5 text-lg text-primary-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by 1,800+ homeowners across metro Atlanta. Licensed, insured, and backed by a lifetime workmanship warranty.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3.5 rounded-lg text-lg transition-colors">
              Schedule Free Inspection
            </Link>
            <a href={site.phoneHref} className="border-2 border-primary-300 hover:border-primary-400 text-primary-800 font-bold px-8 py-3.5 rounded-lg text-lg transition-colors">
              Call {site.phone}
            </a>
          </div>

          {/* Trust badge pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {trustBadges.map(b => (
              <div key={b.label} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-primary-700">
                {b.icon}
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1">
        {photos.map((src, i) => (
          <img key={i} src={src} alt={`Project photo ${i + 1}`} className="w-full h-48 object-cover" />
        ))}
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 text-center">Our Roofing Services</h2>
          <p className="mt-3 text-primary-500 text-center max-w-xl mx-auto">Comprehensive roofing solutions for Atlanta homeowners, from minor repairs to full replacements.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.services.slice(0, 3).map(s => (
              <div key={s.slug} className="bg-white border border-primary-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-8 h-8 text-accent-500 mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={serviceIcons[s.slug]} />
                </svg>
                <h3 className="text-lg font-bold text-primary-900">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-500 leading-relaxed line-clamp-2">{s.description}</p>
                <Link href="/services" className="inline-block mt-4 text-accent-600 font-semibold text-sm hover:text-accent-700 transition-colors">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {site.services.slice(3).map(s => (
              <div key={s.slug} className="bg-white border border-primary-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-8 h-8 text-accent-500 mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={serviceIcons[s.slug]} />
                </svg>
                <h3 className="text-lg font-bold text-primary-900">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-500 leading-relaxed line-clamp-2">{s.description}</p>
                <Link href="/services" className="inline-block mt-4 text-accent-600 font-semibold text-sm hover:text-accent-700 transition-colors">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inline Estimate Form ── */}
      <section className="py-20 bg-primary-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 text-center">Get Your Free Estimate in 24 Hours</h2>
          <p className="mt-3 text-primary-500 text-center max-w-xl mx-auto">
            Tell us about your project and we&rsquo;ll get back to you within one business day with a detailed, no-obligation quote.
          </p>
          <div className="mt-10">
            <EstimateForm />
          </div>
        </div>
      </section>

      {/* ── Google Reviews ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 text-center">What Atlanta Homeowners Say</h2>
          <p className="mt-3 text-primary-500 text-center">380+ five-star reviews on Google</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-primary-200 rounded-xl p-6 shadow-sm flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="text-primary-700 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-primary-100">
                  <p className="font-bold text-primary-900 text-sm">{t.author}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-primary-400">{t.location}</span>
                    <span className="text-xs font-semibold text-accent-600 bg-accent-50 px-2 py-0.5 rounded">Google Review</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Heritage Home ── */}
      <section className="py-20 bg-primary-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 text-center">Why Heritage Home Roofing</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(v => (
              <div key={v.title} className="flex gap-4">
                <svg className="w-6 h-6 text-accent-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-primary-900">{v.title}</h3>
                  <p className="mt-1 text-sm text-primary-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Financing ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900">Flexible Financing Available</h2>
            <p className="mt-4 text-primary-600 leading-relaxed">
              A new roof is a major investment. We partner with trusted lenders to offer 0% APR promotional financing so you can protect your home now and pay over time, with monthly payments that fit your budget.
            </p>
            <Link href="/contact" className="inline-block mt-6 bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">
              Learn About Financing
            </Link>
          </div>
          <div className="bg-primary-50 rounded-xl p-8 text-center border border-primary-200">
            <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider">New Roof Financing</p>
            <p className="mt-3 text-5xl font-extrabold text-primary-900">$99<span className="text-xl font-semibold text-primary-400">/mo</span></p>
            <p className="mt-2 text-primary-500 text-sm">As low as $99/month with approved credit</p>
            <p className="mt-1 text-primary-400 text-xs">0% APR for 18 months available on qualifying projects</p>
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="py-16 bg-primary-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-primary-900 text-center">Proudly Serving Metro Atlanta</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {site.serviceAreas.map(a => (
              <div key={a} className="flex items-center gap-2 text-sm text-primary-600">
                <svg className="w-4 h-4 text-accent-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-primary-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready for a Roof You Can Count On?</h2>
          <p className="mt-4 text-primary-300 text-lg">Schedule your free inspection today or call us directly.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3.5 rounded-lg text-lg transition-colors">
              Schedule Free Inspection
            </Link>
            <a href={site.phoneHref} className="border-2 border-primary-400 hover:border-white text-white font-bold px-8 py-3.5 rounded-lg text-lg transition-colors">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
