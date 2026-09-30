import DataTable from '../common/DataTable.jsx'
import Badge from '../common/Badge.jsx'
export default function EmployerTable({ rows, onRow }) {
  const cols = [{ k: 'company', label: 'Company', render: (r) => <b>{r.company}</b> }, { k: 'sector', label: 'Sector' }, { k: 'openRoles', label: 'Open Roles' }, { k: 'topSkill', label: 'Top Skill' }, { k: 'status', label: 'Survey Status', render: (r) => <Badge>{r.status}</Badge> }]
  return <DataTable cols={cols} rows={rows} onRow={onRow} />
}
