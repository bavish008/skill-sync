import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import EmptyState from './EmptyState.jsx'
// cols: [{ k, label, render?, sortable? }]
export default function DataTable({ cols, rows, onRow, pageSize = 6 }) {
  const [sk, setSk] = useState(null), [asc, setAsc] = useState(true), [p, setP] = useState(0)
  const r = [...rows]
  if (sk) r.sort((a, b) => (a[sk] > b[sk] ? 1 : -1) * (asc ? 1 : -1))
  const pages = Math.max(1, Math.ceil(r.length / pageSize)), pg = Math.min(p, pages - 1)
  const view = r.slice(pg * pageSize, (pg + 1) * pageSize)
  const sort = (k) => { if (sk === k) setAsc(!asc); else { setSk(k); setAsc(true) } }
  return (
    <div className="card p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
            <tr>{cols.map((c) => (
              <th key={c.label} onClick={() => c.k && sort(c.k)} className={`text-left px-4 py-3 font-medium whitespace-nowrap ${c.k ? 'cursor-pointer select-none' : ''}`}>
                <span className="inline-flex items-center gap-1">{c.label}{sk === c.k && (asc ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}</span>
              </th>))}</tr>
          </thead>
          <tbody>
            {view.map((row, i) => (
              <tr key={i} onClick={() => onRow?.(row)} className={`border-t border-slate-100 hover:bg-indigo-50/40 ${onRow ? 'cursor-pointer' : ''}`}>
                {cols.map((c) => <td key={c.label} className="px-4 py-3 whitespace-nowrap">{c.render ? c.render(row) : row[c.k]}</td>)}
              </tr>))}
          </tbody>
        </table>
      </div>
      {!view.length && <EmptyState />}
      <div className="flex items-center justify-between px-4 py-2 border-t text-xs text-slate-500">
        <span>{r.length} results</span>
        <div className="flex items-center gap-2">
          <button disabled={pg === 0} onClick={() => setP(pg - 1)} className="btn-o !py-1 disabled:opacity-40">Prev</button>
          <span>{pg + 1} / {pages}</span>
          <button disabled={pg >= pages - 1} onClick={() => setP(pg + 1)} className="btn-o !py-1 disabled:opacity-40">Next</button>
        </div>
      </div>
    </div>
  )
}
