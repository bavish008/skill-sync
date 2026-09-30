import { useState } from 'react'
import PageHeader from '../components/common/PageHeader.jsx'
import { useToast } from '../components/common/Toast.jsx'
const Toggle = ({ label, on, set }) => (
  <label className="flex items-center justify-between py-2 text-sm cursor-pointer">{label}
    <span onClick={() => set(!on)} className={`w-10 h-6 rounded-full p-0.5 transition ${on ? 'bg-indigo-600' : 'bg-slate-300'}`}><span className={`block h-5 w-5 bg-white rounded-full transition ${on ? 'translate-x-4' : ''}`} /></span>
  </label>
)
export default function Settings() {
  const toast = useToast(), [t, setT] = useState({ email: true, alerts: true, weekly: false, compact: false, autoRefresh: true, s1: true, s2: true, s3: false })
  const tg = (k, label) => <Toggle key={k} label={label} on={t[k]} set={(v) => setT({ ...t, [k]: v })} />
  const Sec = ({ title, children }) => <div className="card"><h3 className="font-semibold mb-2">{title}</h3>{children}</div>
  return (
    <>
      <PageHeader title="Settings" subtitle="Frontend-only preferences (nothing is saved)."><button className="btn" onClick={() => toast('Settings saved (demo).')}>Save Changes</button></PageHeader>
      <div className="grid lg:grid-cols-2 gap-4">
        <Sec title="Profile"><div className="space-y-3"><input className="input" defaultValue="Demo Administrator" /><input className="input" defaultValue="admin@skillsync.demo" /><input className="input" defaultValue="Skill Development Authority" /></div></Sec>
        <Sec title="Dashboard Preferences">{tg('compact', 'Compact tables')}{tg('autoRefresh', 'Auto-refresh KPIs')}<select className="input mt-2"><option>Tamil Nadu</option></select></Sec>
        <Sec title="Notification Preferences">{tg('email', 'Email notifications')}{tg('alerts', 'Skill demand alerts')}{tg('weekly', 'Weekly digest')}</Sec>
        <Sec title="Data Sources">{tg('s1', 'Job portal feeds (mock)')}{tg('s2', 'Employer surveys (mock)')}{tg('s3', 'Training centre records (mock)')}</Sec>
        <Sec title="System Configuration"><div className="space-y-3"><select className="input"><option>English</option><option>தமிழ்</option></select><select className="input"><option>IST (UTC+5:30)</option></select><select className="input"><option>Light theme</option></select></div></Sec>
      </div>
    </>
  )
}
