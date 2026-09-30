import { useState } from 'react'
import PageHeader from '../components/common/PageHeader.jsx'
import DataTable from '../components/common/DataTable.jsx'
import Drawer from '../components/common/Drawer.jsx'
import Badge from '../components/common/Badge.jsx'
import ProgressBar from '../components/common/ProgressBar.jsx'
import EmployerTable from '../components/tables/EmployerTable.jsx'
import { useToast } from '../components/common/Toast.jsx'
import { employers, employerKpis, employerSkills, sectors } from '../data/mockData.js'
export default function Employers() {
  const [sel, setSel] = useState(null), toast = useToast(), empty = { name: '', industry: sectors[0], importance: 'High', demand: 'High', comments: '' }, [f, setF] = useState(empty)
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value })
  return (
    <>
      <PageHeader title="Employer Portal" subtitle="Employer skill requirements, surveys and emerging technology reports." />
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">{employerKpis.map(([l, v]) => <div key={l} className="card"><div className="text-3xl font-bold">{v}</div><div className="text-sm text-slate-500">{l}</div></div>)}</div>
      <EmployerTable rows={employers} onRow={setSel} />
      <form className="card mt-5 grid sm:grid-cols-2 gap-3" onSubmit={(e) => { e.preventDefault(); toast('Emerging skill reported successfully.'); setF(empty) }}>
        <h3 className="font-semibold sm:col-span-2">Report Emerging Skill</h3>
        <input required className="input" placeholder="Skill name" value={f.name} onChange={on('name')} />
        <select className="input" value={f.industry} onChange={on('industry')}>{sectors.map((s) => <option key={s}>{s}</option>)}</select>
        <select className="input" value={f.importance} onChange={on('importance')}>{['Critical', 'High', 'Medium', 'Low'].map((s) => <option key={s}>{s}</option>)}</select>
        <select className="input" value={f.demand} onChange={on('demand')}>{['Very High', 'High', 'Medium', 'Low'].map((s) => <option key={s}>{s}</option>)}</select>
        <textarea className="input sm:col-span-2" rows={3} placeholder="Comments" value={f.comments} onChange={on('comments')} />
        <button className="btn sm:col-span-2 sm:w-40">Submit</button>
      </form>
      <Drawer open={!!sel} onClose={() => setSel(null)} title={sel?.company}>
        {sel && <>
          <div className="flex gap-2"><Badge tone="blue">{sel.sector}</Badge><Badge>{sel.status}</Badge></div>
          <div className="text-sm">Open roles: <b>{sel.openRoles}</b> · Top skill: <b>{sel.topSkill}</b></div>
          <h4 className="font-semibold">Employer Skill Requirements</h4>
          {employerSkills.map(([s, i, a]) => <div key={s} className="card space-y-2"><div className="flex justify-between text-sm font-medium"><span>{s}</span><span className="text-red-600">Gap {i - a}%</span></div><ProgressBar label="Importance" value={i} /><ProgressBar label="Availability" value={a} color="bg-emerald-500" /></div>)}
        </>}
      </Drawer>
    </>
  )
}
