import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: `Meet the team behind ${site.name} — Naperville's trusted HVAC company with 15+ years of experience.`,
}

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent-400 font-bold text-sm tracking-widest uppercase mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">The Team Behind Summit</h1>
          <p className="mt-4 text-primary-200 text-lg max-w-xl">Real HVAC professionals who care about keeping your family comfortable — every season, every year.</p>
        </div>
      </section>

      {/* Story — Split Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-600 font-bold text-sm tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight">
                Built on Honest Service Since Day One
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Summit Heating &amp; Cooling started the way most good companies do — a veteran HVAC tech who got tired of watching big companies overcharge homeowners for simple fixes. After 10 years working for corporate outfits, he decided Naperville deserved better.
                </p>
                <p>
                  The idea was simple: show up on time, diagnose honestly, price fairly, and stand behind the work. Fifteen years and thousands of happy homes later, that&apos;s still the playbook. We&apos;ve grown from one truck to a full crew of certified technicians, but the promise hasn&apos;t changed.
                </p>
              </div>
            </div>
            <div className="bg-primary-900 rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80" alt="HVAC technician at work" className="w-full h-64 object-cover" />
              <div className="p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-primary-950 font-bold text-lg border-3 border-primary-900">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-lg">Summit HVAC</p>
                    <p className="text-primary-300 text-sm">Family-Owned Since 2011</p>
                  </div>
                </div>
                <p className="text-primary-200 leading-relaxed">
                  &ldquo;We treat every home like our own. When we recommend a repair, it&apos;s because your system needs it — not because we need the sale. That&apos;s the Summit difference.&rdquo;
                </p>
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-accent-300 ml-2 text-sm">5.0 on Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '5.0★', label: 'Google Rating' },
            { value: '15+', label: 'Years Experience' },
            { value: '12+', label: 'Communities Served' },
            { value: '24/7', label: 'Emergency Service' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-accent-400">{stat.value}</div>
              <div className="mt-2 text-primary-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent-600 font-bold text-sm tracking-widest uppercase mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
                title: 'Honest Diagnosis',
                text: 'We tell you what\'s wrong, show you why, and give you a price before we touch anything. No scare tactics, no invented problems.',
              },
              {
                icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z',
                title: 'Quality Parts & Work',
                text: 'We use OEM and premium-grade parts, and every install follows manufacturer specs. No shortcuts, no off-brand substitutes.',
              },
              {
                icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z',
                title: 'Respect Your Home',
                text: 'Shoe covers on every visit. Drop cloths down. Equipment cleaned up. Your home looks the same when we leave — just more comfortable.',
              },
            ].map(v => (
              <div key={v.title} className="bg-primary-50 rounded-2xl p-8 border border-primary-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
