import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader, { Select } from '../components/common/PageHeader.jsx'
import DataTable from '../components/common/DataTable.jsx'
import Drawer from '../components/common/Drawer.jsx'
import Badge from '../components/common/Badge.jsx'
import ProgressBar from '../components/common/ProgressBar.jsx'
import Spark from '../components/common/Spark.jsx'
import { jobs, sectors, districts } from '../data/mockData.js'
export default function LabourMarket() {
  const [q, setQ] = useState(''), [sec, setSec] = useState('All Sectors'), [d, setD] = useState('All Districts'), [exp, setExp] = useState('All Experience'), [tr, setTr] = useState('Last 12 Months'), [sel, setSel] = useState(null)
  const nav = useNavigate()
  const rows = jobs.filter((j) => j.role.toLowerCase().includes(q.toLowerCase()) && (sec === 'All Sectors' || j.sector === sec) && (d === 'All Districts' || j.districts.includes(d)))
  const cols = [
    { k: 'role', label: 'Job Role', render: (r) => <span className="font-medium">{r.role}</span> }, { k: 'sector', label: 'Sector' },
    { k: 'demand', label: 'Demand', render: (r) => <Badge>{r.demand}</Badge> }, { k: 'growth', label: 'Growth', render: (r) => <span className="text-emerald-600">+{r.growth}%</span> },
    { label: 'Top Skills', render: (r) => r.skills.slice(0, 2).map((s) => s[0]).join(', ') }, { label: 'Districts', render: (r) => r.districts.length },
    { k: 'salary', label: 'Avg. Salary', render: (r) => `₹${r.salary} LPA` }, { label: 'Trend', render: (r) => <Spark data={r.trend} /> },
  ]
  return (
    <>
      <PageHeader title="Labour Market Intelligence" subtitle="Track current and emerging employment demand." />
      <div className="flex flex-wrap gap-2 mb-4">
        <input className="input !w-56" placeholder="Search jobs" value={q} onChange={(e) => setQ(e.target.value)} />
        <Select value={d} onChange={setD} options={['All Districts', ...districts]} /><Select value={sec} onChange={setSec} options={['All Sectors', ...sectors]} />
        <Select value={exp} onChange={setExp} options={['All Experience', '0-1 yrs', '1-3 yrs', '3+ yrs']} /><Select value={tr} onChange={setTr} options={['Last 3 Months', 'Last 12 Months']} />
      </div>
      <DataTable cols={cols} rows={rows} onRow={setSel} />
      <Drawer open={!!sel} onClose={() => setSel(null)} title={sel?.role}>
        {sel && <>
          <div className="flex gap-6"><div><div className="text-xs text-slate-500">Demand Level</div><Badge>{sel.demand}</Badge></div><div><div className="text-xs text-slate-500">Growth</div><b className="text-emerald-600">+{sel.growth}%</b></div><div><div className="text-xs text-slate-500">Employers hiring</div><b>{sel.employers}</b></div></div>
          <div className="space-y-3"><h4 className="font-semibold">Top Skills</h4>{sel.skills.map(([s, v]) => <ProgressBar key={s} label={s} value={v} />)}</div>
          <div><h4 className="font-semibold mb-2">District Demand</h4><div className="flex flex-wrap gap-2">{sel.districts.map((x) => <Badge key={x} tone="blue">{x}</Badge>)}</div></div>
          <div className="space-y-3"><h4 className="font-semibold">Experience Distribution</h4>{sel.experience.map(([l, v]) => <ProgressBar key={l} label={l} value={v} color="bg-sky-500" />)}</div>
          <div><h4 className="font-semibold mb-2">Related Courses</h4>{sel.related.map((c) => <div key={c} className="text-sm">• {c}</div>)}</div>
          <div><h4 className="font-semibold mb-2">Emerging Skills</h4><div className="flex gap-2">{sel.emerging.map((x) => <Badge key={x} tone="purple">{x}</Badge>)}</div></div>
          <button className="btn w-full" onClick={() => nav('/courses')}>View Recommended Courses</button>
        </>}
      </Drawer>
    </>
  )
}
