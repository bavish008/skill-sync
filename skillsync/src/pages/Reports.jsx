import { FileText } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import { useToast } from '../components/common/Toast.jsx'
import { reports } from '../data/mockData.js'
export default function Reports() {
  const toast = useToast()
  return (
    <>
      <PageHeader title="Reports" subtitle="Generate demo reports for authorities, institutes and employers." />
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {reports.map((r) => (
          <div key={r.id} className="card space-y-3">
            <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center"><FileText size={20} /></div>
            <div className="font-semibold">{r.title}</div><p className="text-sm text-slate-500">{r.description}</p>
            <div className="text-xs text-slate-400">Last generated: {r.last}</div>
            <button className="btn w-full" onClick={() => toast('Demo report generated successfully.')}>Generate Report</button>
          </div>))}
      </div>
    </>
  )
}
