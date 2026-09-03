import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import { site } from '@/site.config'

export const metadata: Metadata = {
  title: `Our Work | ${site.name}`,
  description: `See examples of our roofing projects in ${site.serviceAreas[0]} and surrounding areas. Quality craftsmanship you can trust.`,
}

const projects = [
  { label: 'Complete Roof Replacement', type: 'Residential', color: 'bg-primary-800' },
  { label: 'Storm Damage Repair', type: 'Residential', color: 'bg-primary-700' },
  { label: 'New Construction', type: 'Commercial', color: 'bg-primary-600' },
  { label: 'Gutter Installation', type: 'Residential', color: 'bg-accent-700' },
  { label: 'Flat Roof Repair', type: 'Commercial', color: 'bg-primary-900' },
  { label: 'Shingle Replacement', type: 'Residential', color: 'bg-primary-500' },
]

export default function Gallery() {
  return (
    <>
      <Hero
        title="Our Work"
        subtitle="Every roof tells a story. Here are some of the projects we're proud of."
        showCTA={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                {/* Placeholder for project photo */}
                <div className={`${project.color} h-56 flex items-center justify-center`}>
                  <div className="text-center text-white/80">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <span className="text-sm">Project Photo</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-accent-600 uppercase tracking-wide">{project.type}</span>
                  <h3 className="text-lg font-bold text-primary-900 mt-1">{project.label}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-slate-50 rounded-xl p-10">
            <h3 className="text-2xl font-bold text-primary-900 mb-3">Want to See More?</h3>
            <p className="text-slate-600 mb-6">We&apos;d love to show you examples of work similar to your project.</p>
            <a href="/contact" className="inline-block bg-accent-500 text-primary-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-400 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
