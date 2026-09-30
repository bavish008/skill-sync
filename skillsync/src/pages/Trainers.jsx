import PageHeader from '../components/common/PageHeader.jsx'
import ProgressBar from '../components/common/ProgressBar.jsx'
import Badge from '../components/common/Badge.jsx'
import { useToast } from '../components/common/Toast.jsx'
import { trainers, trainerKpis } from '../data/mockData.js'
export default function Trainers() {
  const toast = useToast()
  return (
    <>
      <PageHeader title="Trainer Readiness" subtitle="Track trainer skills against emerging technology needs." />
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">{trainerKpis.map(([l, v]) => <div key={l} className="card"><div className="text-3xl font-bold">{v}</div><div className="text-sm text-slate-500">{l}</div></div>)}</div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {trainers.map((t) => (
          <div key={t.id} className="card space-y-3">
            <div className="flex justify-between"><div><div className="font-semibold">{t.name}</div><div className="text-xs text-slate-500">{t.specialization}</div></div>{t.readiness < 70 ? <Badge tone="amber">Upskilling required</Badge> : <Badge tone="green">Ready</Badge>}</div>
            <div><div className="text-xs text-slate-500 mb-1">Current</div><div className="flex flex-wrap gap-1">{t.current.map((s) => <Badge key={s} tone="slate">{s}</Badge>)}</div></div>
            <div><div className="text-xs text-slate-500 mb-1">Recommended</div><div className="flex flex-wrap gap-1">{t.recommended.map((s) => <Badge key={s} tone="purple">{s}</Badge>)}</div></div>
            <ProgressBar label="Readiness" value={t.readiness} color={t.readiness < 70 ? 'bg-amber-500' : 'bg-emerald-500'} />
            <button className="btn-o w-full" onClick={() => toast(`Upskilling plan assigned to ${t.name}.`)}>Assign Upskilling</button>
          </div>))}
      </div>
    </>
  )
}
