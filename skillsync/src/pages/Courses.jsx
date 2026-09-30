import { useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import PageHeader, { Select } from '../components/common/PageHeader.jsx'
import DataTable from '../components/common/DataTable.jsx'
import Badge from '../components/common/Badge.jsx'
import ProgressBar from '../components/common/ProgressBar.jsx'
import CourseCard from '../components/cards/CourseCard.jsx'
import { courses, evMatrix } from '../data/mockData.js'
export default function Courses() {
  const nav = useNavigate(), [st, setSt] = useState('All Status'), [view, setView] = useState('table')
  const rows = courses.filter((c) => st === 'All Status' || c.status === st)
  const cols = [
    { k: 'name', label: 'Course', render: (r) => <b>{r.name}</b> }, { k: 'sector', label: 'Sector' }, { k: 'enrolled', label: 'Enrolled', render: (r) => r.enrolled.toLocaleString() },
    { k: 'placement', label: 'Placement Rate', render: (r) => `${r.placement}%` }, { k: 'alignment', label: 'Industry Alignment', render: (r) => <div className="w-28"><ProgressBar value={r.alignment} right={`${r.alignment}%`} /></div> },
    { k: 'demand', label: 'Demand', render: (r) => <Badge>{r.demand}</Badge> }, { k: 'status', label: 'Status', render: (r) => <Badge>{r.status}</Badge> },
  ]
  return (
    <>
      <PageHeader title="Course Intelligence" subtitle="Track alignment, placement and demand for every course.">
        <Select value={st} onChange={setSt} options={['All Status', 'Aligned', 'Needs Update', 'At Risk', 'High Demand']} />
        <button className="btn-o" onClick={() => setView(view === 'table' ? 'cards' : 'table')}>{view === 'table' ? 'Card view' : 'Table view'}</button>
      </PageHeader>
      {view === 'table' ? <DataTable cols={cols} rows={rows} onRow={(r) => nav(`/courses/${r.id}`)} /> : <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">{rows.map((c) => <CourseCard key={c.id} c={c} onClick={() => nav(`/courses/${c.id}`)} />)}</div>}
    </>
  )
}
export function CourseDetail() {
  const { id } = useParams(), c = courses[Number(id)] || courses[0]
  return (
    <>
      <Link to="/courses" className="text-sm text-indigo-600">← Back to courses</Link>
      <PageHeader title={c.name} subtitle={`${c.sector} · ${c.enrolled.toLocaleString()} enrolled`} />
      <div className="grid sm:grid-cols-3 gap-4 mb-4">
        <div className="card"><div className="text-sm text-slate-500">Industry Alignment</div><b className="text-2xl">{c.alignment}%</b></div>
        <div className="card"><div className="text-sm text-slate-500">Placement Rate</div><b className="text-2xl">{c.placement}%</b></div>
        <div className="card"><div className="text-sm text-slate-500">Current Demand</div><div className="mt-1"><Badge>{c.demand}</Badge></div></div>
      </div>
      <div className="card">
        <h3 className="font-semibold mb-3">Skill Coverage Matrix</h3>
        <div className="overflow-x-auto"><table className="w-full text-sm min-w-[560px]">
          <thead className="text-xs text-slate-500 uppercase"><tr><th className="text-left py-2">Skill</th><th className="text-left">Industry Demand</th><th className="text-left">Curriculum Coverage</th><th className="text-right">Gap</th></tr></thead>
          <tbody>{evMatrix.map(([s, d, cv]) => (
            <tr key={s} className="border-t"><td className="py-3 font-medium">{s}</td><td className="pr-4 w-1/4"><ProgressBar value={d} /></td><td className="pr-4 w-1/4"><ProgressBar value={cv} color="bg-emerald-500" /></td>
              <td className={`text-right font-semibold ${d - cv > 40 ? 'text-red-600' : d - cv > 20 ? 'text-amber-600' : 'text-emerald-600'}`}>{d - cv}%</td></tr>))}</tbody>
        </table></div>
      </div>
    </>
  )
}
