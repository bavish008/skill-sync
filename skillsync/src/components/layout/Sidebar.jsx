import { NavLink } from 'react-router-dom'
import { LayoutDashboard, TrendingUp, Sparkles, BookOpen, GitCompare, MapPin, Building2, GraduationCap, UserSearch, FileText, Settings, ChevronsLeft, ChevronsRight, X, Layers } from 'lucide-react'
export const nav = [
  ['Overview', [['Dashboard', '/dashboard', LayoutDashboard]]],
  ['Intelligence', [['Labour Market', '/labour-market', TrendingUp], ['Skills Intelligence', '/skills', Sparkles], ['Courses', '/courses', BookOpen], ['Curriculum Alignment', '/curriculum', GitCompare]]],
  ['Planning', [['District Planning', '/district-planning', MapPin], ['Employers', '/employers', Building2], ['Trainers', '/trainers', GraduationCap], ['Candidates', '/candidates', UserSearch]]],
  ['Insights', [['Reports', '/reports', FileText]]],
  ['System', [['Settings', '/settings', Settings]]],
]
export default function Sidebar({ open, setOpen, col, setCol }) {
  return (
    <>
      {open && <div className="fixed inset-0 bg-slate-900/40 z-30 md:hidden" onClick={() => setOpen(false)} />}
      <aside className={`fixed md:static inset-y-0 left-0 z-40 w-64 ${col ? 'md:w-[72px]' : 'md:w-64'} bg-slate-900 text-slate-300 flex flex-col transition-all duration-200 ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center gap-3 px-4 h-16 border-b border-slate-800">
          <div className="h-9 w-9 rounded-lg bg-indigo-500 grid place-items-center text-white shrink-0"><Layers size={20} /></div>
          {!col && <div className="leading-tight"><div className="text-white font-bold">SkillSync</div><div className="text-[11px] text-slate-400">Labour Market Intelligence</div></div>}
          <button className="ml-auto md:hidden" onClick={() => setOpen(false)}><X size={18} /></button>
        </div>
        <nav className="flex-1 overflow-y-auto py-3">
          {nav.map(([g, items]) => (
            <div key={g} className="mb-3">
              {!col && <div className="px-5 py-1 text-[10px] tracking-wider uppercase text-slate-500">{g}</div>}
              {items.map(([label, to, Icon]) => (
                <NavLink key={to} to={to} onClick={() => setOpen(false)} title={label}
                  className={({ isActive }) => `flex items-center gap-3 mx-2 px-3 py-2 rounded-lg text-sm ${isActive ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800'}`}>
                  <Icon size={18} className="shrink-0" />{!col && label}
                </NavLink>))}
            </div>))}
        </nav>
        <div className="border-t border-slate-800 p-3 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-indigo-400 text-slate-900 font-bold grid place-items-center shrink-0">DA</div>
          {!col && <div className="leading-tight text-xs"><div className="text-white text-sm">Demo Administrator</div>Skill Development Authority</div>}
        </div>
        <button onClick={() => setCol(!col)} className="hidden md:flex items-center justify-center gap-2 py-2 text-xs border-t border-slate-800 hover:bg-slate-800">
          {col ? <ChevronsRight size={16} /> : <><ChevronsLeft size={16} /> Collapse</>}
        </button>
      </aside>
    </>
  )
}
