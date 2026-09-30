import { useState } from 'react'
import PageHeader, { Select } from '../components/common/PageHeader.jsx'
import DataTable from '../components/common/DataTable.jsx'
import ProgressBar from '../components/common/ProgressBar.jsx'
import Badge from '../components/common/Badge.jsx'
import DistrictChart from '../components/charts/DistrictChart.jsx'
import { districts, districtData } from '../data/mockData.js'
export default function DistrictPlanning() {
  const [d, setD] = useState('Coimbatore'), x = districtData[d]
  const cols = [{ k: 'course', label: 'Course' }, { k: 'cur', label: 'Current Seats' }, { k: 'proj', label: 'Projected Demand' }, { k: 'rec', label: 'Recommended Seats' }, { k: 'gap', label: 'Gap' }, { k: 'priority', label: 'Priority', render: (r) => <Badge>{r.priority}</Badge> }]
  return (
    <>
      <PageHeader title="District Planning" subtitle="Plan training capacity against projected industry demand."><Select value={d} onChange={setD} options={districts} /></PageHeader>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[['Industry Demand', x.demand, 'bg-indigo-500'], ['Training Capacity', x.capacity, 'bg-amber-500'], ['Trainer Availability', x.trainers, 'bg-rose-500'], ['Equipment Readiness', x.equipment, 'bg-emerald-500']].map(([l, v, c]) => <div key={l} className="card"><ProgressBar label={l} value={v} color={c} /></div>)}
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-4">
        <div className="card"><h3 className="font-semibold mb-3">Sector Demand</h3>{x.sectors.map(([s, l]) => <div key={s} className="flex justify-between py-2 border-b last:border-0 text-sm"><span>{s}</span><Badge>{l}</Badge></div>)}</div>
        <div className="card lg:col-span-2"><h3 className="font-semibold mb-2">District Training Plan</h3><DistrictChart data={x.plan.map((p) => ({ name: p.course, cur: p.cur, rec: p.rec }))} /></div>
      </div>
      <h3 className="font-semibold mt-5 mb-2">Recommended Training Capacity</h3>
      <DataTable cols={cols} rows={x.plan} />
    </>
  )
}
