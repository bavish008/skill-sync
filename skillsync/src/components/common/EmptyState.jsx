export default function EmptyState({ text = 'No results match your filters.' }) {
  return <div className="text-center text-sm text-slate-500 py-10">{text}</div>
}
