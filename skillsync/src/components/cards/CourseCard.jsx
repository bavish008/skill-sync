import Badge from '../common/Badge.jsx'
import ProgressBar from '../common/ProgressBar.jsx'
export default function CourseCard({ c, onClick }) {
  return (
    <div onClick={onClick} className="card cursor-pointer hover:shadow-md transition space-y-3">
      <div className="flex justify-between gap-2"><div className="font-semibold">{c.name}</div><Badge>{c.status}</Badge></div>
      <ProgressBar value={c.alignment} label="Industry alignment" />
    </div>
  )
}
