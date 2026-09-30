export default function ProgressBar({ value, color = 'bg-indigo-500', label, right }) {
  return (
    <div>
      {(label || right !== undefined) && <div className="flex justify-between text-xs text-slate-600 mb-1"><span>{label}</span><span className="font-medium">{right ?? `${value}%`}</span></div>}
      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden"><div className={`h-full rounded-full transition-all duration-700 ${color}`} style={{ width: `${Math.min(100, value)}%` }} /></div>
    </div>
  )
}
