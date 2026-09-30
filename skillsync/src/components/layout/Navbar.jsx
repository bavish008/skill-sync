import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Menu, Search, Bell, HelpCircle } from 'lucide-react'
import { nav } from './Sidebar.jsx'
import { alerts } from '../../data/mockData.js'
import { useToast } from '../common/Toast.jsx'
import AlertCard from '../cards/AlertCard.jsx'
export default function Navbar({ onMenu }) {
  const { pathname } = useLocation(), toast = useToast(), [bell, setBell] = useState(false), [q, setQ] = useState('')
  const title = nav.flatMap(([, i]) => i).find(([, to]) => pathname.startsWith(to))?.[0] || 'SkillSync'
  return (
    <header className="h-16 bg-white border-b flex items-center gap-3 px-4 md:px-6 shrink-0">
      <button className="md:hidden" onClick={onMenu}><Menu /></button>
      <div className="leading-tight"><div className="font-semibold">{title}</div><div className="text-xs text-slate-400"><Link to="/dashboard">SkillSync</Link> / {title}</div></div>
      <div className="ml-auto flex items-center gap-2 relative">
        <div className="hidden sm:flex items-center gap-2 border rounded-lg px-3 py-1.5 bg-slate-50">
          <Search size={16} className="text-slate-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && toast(`Search for "${q}" (demo)`)} placeholder="Search..." className="bg-transparent text-sm outline-none w-40" />
        </div>
        <button className="p-2 rounded-lg hover:bg-slate-100 relative" onClick={() => setBell(!bell)}><Bell size={18} /><span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full" /></button>
        <button className="p-2 rounded-lg hover:bg-slate-100" onClick={() => toast('Help center is a demo placeholder')}><HelpCircle size={18} /></button>
        <div className="h-8 w-8 rounded-full bg-indigo-600 text-white text-xs font-bold grid place-items-center">DA</div>
        {bell && (
          <div className="absolute right-0 top-12 w-80 max-w-[90vw] card shadow-xl z-30">
            <div className="font-semibold mb-1">Notifications</div>
            {alerts.map((a) => <AlertCard key={a.id} a={a} />)}
          </div>)}
      </div>
    </header>
  )
}
