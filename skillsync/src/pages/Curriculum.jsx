import { useState } from 'react'
import PageHeader, { Select } from '../components/common/PageHeader.jsx'
import ProgressBar from '../components/common/ProgressBar.jsx'
import Badge from '../components/common/Badge.jsx'
import Modal from '../components/common/Modal.jsx'
import { useToast } from '../components/common/Toast.jsx'
import { curriculum } from '../data/mockData.js'
export default function Curriculum() {
  const [name, setName] = useState(curriculum[0].course), [modal, setModal] = useState(false), toast = useToast()
  const cur = curriculum.find((c) => c.course === name)
  return (
    <>
      <PageHeader title="Curriculum Alignment Engine" subtitle="Compare industry requirements with existing course content.">
        <Select value={name} onChange={setName} options={curriculum.map((c) => c.course)} />
      </PageHeader>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card space-y-4"><h3 className="font-semibold">Industry Requirements</h3>{cur.items.map(([s, i]) => <ProgressBar key={s} label={s} value={i} />)}</div>
        <div className="card space-y-4"><h3 className="font-semibold">Current Curriculum</h3>{cur.items.map(([s, , c]) => <ProgressBar key={s} label={s} value={c} color={c < 50 ? 'bg-red-500' : 'bg-emerald-500'} />)}</div>
      </div>
      <div className="card mt-4">
        <div className="flex items-center gap-2 mb-3"><h3 className="font-semibold">AI-Assisted Recommendations</h3><Badge tone="purple">Prototype Recommendation</Badge></div>
        <ol className="space-y-2">{cur.recs.map((r, i) => <li key={r} className="flex gap-3 text-sm"><span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center text-xs font-bold shrink-0">{i + 1}</span>{r}</li>)}</ol>
        <div className="mt-5 p-3 bg-slate-50 rounded-lg"><ProgressBar value={(cur.employers[0] / cur.employers[1]) * 100} color="bg-emerald-500" label="Employer Validation" right={`${cur.employers[0]} / ${cur.employers[1]} employers agree`} /></div>
        <div className="flex flex-wrap gap-2 mt-4">
          <button className="btn" onClick={() => toast('Recommendation approved for review.')}>Approve Recommendation</button>
          <button className="btn-o" onClick={() => setModal(true)}>Send for Employer Validation</button>
          <button className="btn-o" onClick={() => toast('Report exported (demo).')}>Export Report</button>
        </div>
      </div>
      <Modal open={modal} onClose={() => setModal(false)} title="Send for Employer Validation">
        <p className="text-sm text-slate-600 mb-4">Send these recommendations to {cur.employers[1]} employers for validation? (Demo only)</p>
        <button className="btn w-full" onClick={() => { setModal(false); toast('Sent for employer validation.') }}>Confirm</button>
      </Modal>
    </>
  )
}
