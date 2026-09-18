import { site } from '@/site.config'

export default function About() {
  return (
    <>
      <section className="bg-navy-950 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-volt-500" />
            <span className="text-sm tracking-[0.2em] uppercase text-volt-500 font-semibold">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Three Generations of Green Country Trust
          </h1>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-navy-300 text-lg leading-relaxed">
              <p>
                Walt Dobbins pulled his first permit in 1998 with a used work van and a reputation for showing up when he said he would. That was enough to build a business in Tulsa, because reliable electricians were hard to find then and they are hard to find now.
              </p>
              <p>
                Twenty-six years later, the van has become a fleet, the one-man operation has grown to a crew of twelve licensed journeymen, and the Dobbins name is still the one Tulsa contractors and homeowners call first. We have wired new construction subdivisions in Broken Arrow, rewired historic homes in Maple Ridge, and kept the lights on in restaurants, offices, and warehouses across Green Country.
              </p>
              <p>
                We carry our Oklahoma Master Electrician license ({site.license}), maintain an A+ rating with the Better Business Bureau, and carry full liability and workers&apos; comp insurance on every job. Every electrician on our crew holds a current journeyman or master license — we do not send apprentices unsupervised.
              </p>
            </div>
            <div className="space-y-8">
              {site.stats.map(stat => (
                <div key={stat.label} className="flex items-baseline gap-4 border-b border-navy-800 pb-6">
                  <span className="text-5xl font-extrabold text-volt-500 tracking-tight">{stat.value}</span>
                  <span className="text-lg text-navy-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Master Licensed', desc: 'Oklahoma Master Electrician license with 26 years of continuous good standing. Every job is pulled under our license and inspected to code.' },
              { title: 'Flat-Rate Pricing', desc: 'You know the price before the work starts. If a job takes longer than estimated, we absorb it. No surprise invoices, ever.' },
              { title: 'Clean Job Sites', desc: 'We put down drop cloths, wear shoe covers in finished spaces, and vacuum before we leave. Your home looks better than when we arrived.' },
            ].map(item => (
              <div key={item.title} className="bg-navy-800 border border-navy-700 p-8 rounded-sm">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-navy-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
