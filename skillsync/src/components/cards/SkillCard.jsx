import Badge from '../common/Badge.jsx'
import ProgressBar from '../common/ProgressBar.jsx'
export default function SkillCard({ s, onClick }) {
  return (
    <div onClick={onClick} className="card cursor-pointer hover:shadow-md transition space-y-3">
      <div className="flex justify-between"><div><div className="font-semibold">{s.name}</div><div className="text-xs text-slate-500">{s.category}</div></div><Badge>{s.status}</Badge></div>
      <ProgressBar value={s.coverage} label="Training coverage" color="bg-emerald-500" />
      <div className="text-xs text-slate-500">Growth +{s.growth}% · Gap {s.gap}%</div>
    </div>
  )
}
