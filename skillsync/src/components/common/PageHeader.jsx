export default function PageHeader({ title, subtitle, children }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
      <div><h2 className="text-2xl font-bold text-slate-900">{title}</h2><p className="text-sm text-slate-500">{subtitle}</p></div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}
export const Select = ({ value, onChange, options, className = '' }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)} className={`input !w-auto ${className}`}>{options.map((o) => <option key={o}>{o}</option>)}</select>
)
