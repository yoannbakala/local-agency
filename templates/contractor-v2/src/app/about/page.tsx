import { site } from '@/site.config'

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-primary-950 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            Two decades of protecting Chicago homes.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Story</h2>
              <p className="text-primary-600 text-lg leading-relaxed mb-4">
                {site.name} started in 2004 with a simple idea: do honest roofing work at a fair price and let the results speak for themselves. No pushy sales tactics, no bait-and-switch estimates, no corners cut where you can&apos;t see.
              </p>
              <p className="text-primary-500 leading-relaxed mb-4">
                What began as a two-person crew working out of a pickup truck has grown into one of Chicago&apos;s most trusted roofing companies — but the principles haven&apos;t changed. Every roof we install is one we&apos;d put on our own home.
              </p>
              <p className="text-primary-500 leading-relaxed">
                We&apos;ve built our reputation on referrals, not advertising. When a homeowner tells their neighbor about us, that means more than any billboard ever could.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="Roofing crew at work"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-900 mb-14 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Honest Assessments',
                text: 'We tell you what your roof actually needs — not what makes us the most money. If a repair will last, we say so. If it won\'t, we\'ll explain why replacement makes more sense.',
              },
              {
                title: 'Premium Materials',
                text: 'We use GAF and CertainTeed shingles, not builder-grade shortcuts. Your roof faces Chicago weather — it deserves materials engineered for the job.',
              },
              {
                title: 'Workmanship Warranty',
                text: 'Every project comes with a 25-year workmanship warranty on top of manufacturer material warranties. We stand behind our work long after the crew leaves.',
              },
              {
                title: 'Clean Job Sites',
                text: 'We run magnets over your lawn, bag every scrap, and leave your property cleaner than we found it. Your neighbors won\'t even know we were there.',
              },
              {
                title: 'Insurance Expertise',
                text: 'Dealing with insurance after storm damage is stressful. We document everything, work directly with your adjuster, and make sure you get what you\'re owed.',
              },
              {
                title: 'Local & Accountable',
                text: 'We\'re not a franchise or a storm-chasing outfit that disappears after the job. We live here, we work here, and our name is on every roof we touch.',
              },
            ].map(item => (
              <div key={item.title} className="group">
                <div className="w-10 h-1 bg-accent-500 mb-5 group-hover:w-16 transition-all duration-300" />
                <h3 className="text-lg font-bold text-primary-900 mb-3">{item.title}</h3>
                <p className="text-primary-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-900 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { number: '500+', label: 'Roofs Completed' },
            { number: '20+', label: 'Years Experience' },
            { number: '5.0', label: 'Google Rating' },
            { number: '100%', label: 'Satisfaction Rate' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-accent-400">{stat.number}</div>
              <div className="text-primary-300 text-sm mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Ready to Work With a Team You Can Trust?</h2>
          <p className="text-primary-500 text-lg mb-10">Get a free inspection and see the difference honest, quality roofing makes.</p>
          <a href="/contact" className="bg-accent-500 text-white px-10 py-4 font-bold text-lg hover:bg-accent-600 transition-colors inline-flex items-center gap-3">
            Get Your Free Estimate
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
