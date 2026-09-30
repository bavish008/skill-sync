import { useState } from 'react'
import PageHeader from '../components/common/PageHeader.jsx'
import Badge from '../components/common/Badge.jsx'
import { useToast } from '../components/common/Toast.jsx'
import { candidateProfile, careerPaths, districts, sectors } from '../data/mockData.js'
export default function Candidates() {
  const [p, setP] = useState(candidateProfile), [i, setI] = useState(0), toast = useToast(), path = careerPaths[i]
  const on = (k) => (e) => setP({ ...p, [k]: e.target.value })
  const Step = ({ t, children, last }) => (
    <div className="flex gap-4"><div className="flex flex-col items-center"><span className="h-4 w-4 rounded-full bg-indigo-600 mt-1" />{!last && <span className="flex-1 w-0.5 bg-indigo-200" />}</div><div className="pb-6"><div className="text-xs uppercase text-slate-500">{t}</div>{children}</div></div>
  )
  return (
    <>
      <PageHeader title="Find Your Future Career" subtitle="Tell us about yourself to see personalised career and training paths." />
      <div className="card grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-5">
        <input className="input" placeholder="Education" value={p.education} onChange={on('education')} />
        <input className="input" placeholder="Current skills" value={p.skills} onChange={on('skills')} />
        <select className="input" value={p.industry} onChange={on('industry')}>{sectors.map((s) => <option key={s}>{s}</option>)}</select>
        <select className="input" value={p.location} onChange={on('location')}>{districts.map((s) => <option key={s}>{s}</option>)}</select>
        <input className="input" placeholder="Experience" value={p.experience} onChange={on('experience')} />
        <button className="btn lg:col-span-5 sm:w-56" onClick={() => toast('Career paths updated.')}>Get Recommendations</button>
      </div>
      <h3 className="font-semibold mb-2">Recommended Career Paths</h3>
      <div className="flex flex-wrap gap-2 mb-4">{careerPaths.map((c, k) => <button key={c.title} onClick={() => setI(k)} className={k === i ? 'btn' : 'btn-o'}>{c.title}</button>)}</div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="card lg:col-span-2">
          <Step t="Current profile"><div className="font-medium">{p.education}</div></Step>
          <Step t="Skill gap"><div className="flex flex-wrap gap-1 mt-1">{path.gaps.map((g) => <Badge key={g} tone="red">{g}</Badge>)}</div></Step>
          <Step t="Recommended training"><div className="font-medium">{path.course}</div><div className="text-sm text-slate-500">{path.duration}</div></Step>
          <Step t="Career opportunities" last><div className="flex flex-wrap gap-1 mt-1">{path.opportunities.map((g) => <Badge key={g} tone="green">{g}</Badge>)}</div></Step>
        </div>
        <div className="card space-y-3 text-sm h-fit">
          <div className="flex justify-between"><span className="text-slate-500">Demand</span><Badge>{path.demand}</Badge></div>
          <div className="flex justify-between"><span className="text-slate-500">Duration</span><b>{path.duration}</b></div>
          <div className="flex justify-between"><span className="text-slate-500">District demand</span><b>{path.districtDemand}</b></div>
          <div><span className="text-slate-500">Skills needed</span><div className="flex flex-wrap gap-1 mt-1">{path.gaps.map((g) => <Badge key={g} tone="purple">{g}</Badge>)}</div></div>
          <button className="btn w-full" onClick={() => toast('Enrolment interest registered (demo).')}>Register Interest</button>
        </div>
      </div>
    </>
  )
}
