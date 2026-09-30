const tones = {
  'Very High': 'red', High: 'orange', Medium: 'blue', Low: 'slate', Aligned: 'green', 'Needs Update': 'amber', 'At Risk': 'red', 'High Demand': 'purple',
  'Critical Gap': 'red', Emerging: 'purple', Covered: 'green', Critical: 'red', Submitted: 'green', Pending: 'amber', Overdue: 'red',
}
const c = { red: 'bg-red-50 text-red-700', orange: 'bg-orange-50 text-orange-700', blue: 'bg-blue-50 text-blue-700', slate: 'bg-slate-100 text-slate-600', green: 'bg-emerald-50 text-emerald-700', amber: 'bg-amber-50 text-amber-700', purple: 'bg-violet-50 text-violet-700' }
export default function Badge({ children, tone }) {
  return <span className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${c[tone || tones[children] || 'slate']}`}>{children}</span>
}
