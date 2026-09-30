import { Briefcase, Sparkles, AlertTriangle, BookOpen, Users, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react'
const icons = { Briefcase, Sparkles, AlertTriangle, BookOpen, Users, Target }
export default function KPICard({ label, value, delta, up, good, icon }) {
  const Icon = icons[icon] || Target
  return (
    <div className="card hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600"><Icon size={20} /></div>
        {delta && <span className={`flex items-center text-xs font-semibold ${good ? 'text-emerald-600' : 'text-red-600'}`}>{up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}{delta}</span>}
      </div>
      <div className="text-3xl font-bold mt-3">{value}</div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  )
}
