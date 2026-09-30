import { useState } from 'react'
import PageHeader from '../components/common/PageHeader.jsx'
import DataTable from '../components/common/DataTable.jsx'
import Drawer from '../components/common/Drawer.jsx'
import Badge from '../components/common/Badge.jsx'
import ProgressBar from '../components/common/ProgressBar.jsx'
import SkillCard from '../components/cards/SkillCard.jsx'
import DemandTrendChart from '../components/charts/DemandTrendChart.jsx'
import SkillDemandChart from '../components/charts/SkillDemandChart.jsx'
import { skills } from '../data/mockData.js'
export default function Skills() {
  const [q, setQ] = useState(''), [view, setView] = useState('table'), [sel, setSel] = useState(null)
  const rows = skills.filter((s) => s.name.toLowerCase().includes(q.toLowerCase()))
  const cols = [
    { k: 'name', label: 'Skill', render: (r) => <b>{r.name}</b> }, { k: 'category', label: 'Category' }, { k: 'demand', label: 'Demand', render: (r) => <Badge>{r.demand}</Badge> },
    { k: 'growth', label: 'Growth', render: (r) => `+${r.growth}%` }, { k: 'coverage', label: 'Training Coverage', render: (r) => <div className="w-32"><ProgressBar value={r.coverage} color="bg-emerald-500" /></div> },
    { k: 'gap', label: 'Gap', render: (r) => `${r.gap}%` }, { k: 'status', label: 'Status', render: (r) => <Badge>{r.status}</Badge> },
  ]
  return (
    <>
      <PageHeader title="Skills Intelligence" subtitle="Searchable skill library with demand, coverage and gap analysis.">
        <input className="input !w-56" placeholder="Search skills" value={q} onChange={(e) => setQ(e.target.value)} />
        <button className="btn-o" onClick={() => setView(view === 'table' ? 'cards' : 'table')}>{view === 'table' ? 'Card view' : 'Table view'}</button>
      </PageHeader>
      {view === 'table' ? <DataTable cols={cols} rows={rows} onRow={setSel} /> : <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">{rows.map((s) => <SkillCard key={s.id} s={s} onClick={() => setSel(s)} />)}</div>}
      <Drawer open={!!sel} onClose={() => setSel(null)} title={sel?.name}>
        {sel && <>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="card"><div className="text-slate-500">Demand Growth</div><b className="text-xl text-emerald-600">+{sel.growth}%</b></div><div className="card"><div className="text-slate-500">Industry Demand</div><Badge>{sel.demand}</Badge></div>
            <div className="card"><div className="text-slate-500">Training Coverage</div><b className="text-xl">{sel.coverage}%</b></div><div className="card"><div className="text-slate-500">Skill Gap</div><b className="text-xl text-red-600">{sel.gap}%</b></div>
          </div>
          <div><h4 className="font-semibold mb-2">Demand Trend</h4><DemandTrendChart data={sel.trend} keys={[['demand', '#4f46e5']]} height={180} /></div>
          <div><h4 className="font-semibold mb-2">Industries Requiring Skill</h4><div className="flex gap-2 flex-wrap">{sel.industries.map((i) => <Badge key={i} tone="blue">{i}</Badge>)}</div></div>
          <div><h4 className="font-semibold mb-2">Top Job Roles</h4>{sel.roles.map((r) => <div key={r} className="text-sm">• {r}</div>)}</div>
          <div><h4 className="font-semibold mb-2">Courses Teaching the Skill</h4>{sel.courses.map((r) => <div key={r} className="text-sm">• {r}</div>)}</div>
          <div><h4 className="font-semibold mb-2">District Demand</h4><SkillDemandChart data={sel.districtDemand} /></div>
          <div className="bg-indigo-50 text-indigo-800 text-sm p-3 rounded-lg"><b>Recommended action:</b> {sel.gap > 55 ? 'Launch a new module and upskill trainers immediately.' : 'Expand practical hours and monitor employer feedback.'}</div>
        </>}
      </Drawer>
    </>
  )
}
