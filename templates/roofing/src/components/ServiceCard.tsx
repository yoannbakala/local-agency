const icons: Record<string, string> = {
  repair: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085',
  replacement: 'M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819',
  flashing: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
  gutters: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12',
}

export default function ServiceCard({ title, description, slug }: {
  title: string
  description: string
  slug: string
}) {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-sm border border-primary-100 hover:shadow-lg hover:border-accent-300 transition-all duration-300">
      <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={icons[slug] || icons.repair} />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-primary-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}
