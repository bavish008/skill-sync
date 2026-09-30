import { useState } from 'react'
import PageHeader, { Select } from '../components/common/PageHeader.jsx'
import KPICard from '../components/cards/KPICard.jsx'
import AlertCard from '../components/cards/AlertCard.jsx'
import DemandTrendChart from '../components/charts/DemandTrendChart.jsx'
import SkillGapChart from '../components/charts/SkillGapChart.jsx'
import { kpis, trends, skills, alerts, districts, sectors } from '../data/mockData.js'
export default function Dashboard() {
  const [f, setF] = useState({ state: 'Tamil Nadu', district: 'All Districts', sector: 'All Sectors', period: 'Last 12 Months' })
  const set = (k) => (v) => setF({ ...f, [k]: v })
  const gaps = [...skills].sort((a, b) => b.gap - a.gap).slice(0, 6)
  return (
    <>
      <PageHeader title="Labour Market Overview" subtitle="Monitor industry demand, skill gaps and training readiness across districts.">
        <Select value={f.state} onChange={set('state')} options={['Tamil Nadu']} />
        <Select value={f.district} onChange={set('district')} options={['All Districts', ...districts]} />
        <Select value={f.sector} onChange={set('sector')} options={['All Sectors', ...sectors]} />
        <Select value={f.period} onChange={set('period')} options={['Last 3 Months', 'Last 6 Months', 'Last 12 Months']} />
      </PageHeader>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">{kpis.map((k) => <KPICard key={k.label} {...k} />)}</div>
      <div className="grid lg:grid-cols-3 gap-4 mt-4">
        <div className="card lg:col-span-2"><h3 className="font-semibold mb-2">Demand vs Training Supply</h3><DemandTrendChart data={trends} /></div>
        <div className="card"><h3 className="font-semibold mb-2">Top Skill Gaps (%)</h3><SkillGapChart data={gaps} /></div>
      </div>
      <div className="card mt-4"><h3 className="font-semibold mb-1">Alerts</h3>{alerts.map((a) => <AlertCard key={a.id} a={a} />)}</div>
    </>
  )
}
