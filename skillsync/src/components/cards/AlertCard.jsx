export default function AlertCard({ a }) {
  return (
    <div className="flex gap-3 py-3 border-b last:border-0">
      <span className={`mt-1.5 h-2.5 w-2.5 rounded-full shrink-0 ${a.color}`} />
      <div><div className="text-sm font-medium">{a.title}</div><div className="text-xs text-slate-500">{a.detail} · {a.time}</div></div>
    </div>
  )
}
