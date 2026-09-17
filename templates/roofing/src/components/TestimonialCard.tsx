export default function TestimonialCard({ text, author, rating }: {
  text: string
  author: string
  rating: number
}) {
  const initials = author.split(' ').map(w => w[0]).join('')

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100 hover:shadow-lg transition-shadow">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }, (_, i) => (
          <svg key={i} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-slate-700 leading-relaxed mb-6">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-white text-sm font-bold">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-primary-900">{author}</p>
          <p className="text-xs text-slate-500">Verified Customer</p>
        </div>
      </div>
    </div>
  )
}
