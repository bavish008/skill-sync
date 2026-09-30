import { useNavigate } from 'react-router-dom'
import { Layers } from 'lucide-react'
import { trends } from '../data/mockData.js'
import DemandTrendChart from '../components/charts/DemandTrendChart.jsx'
export default function Login() {
  const nav = useNavigate()
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-700 text-white p-12">
        <div className="flex items-center gap-3"><div className="h-10 w-10 bg-white/15 rounded-lg grid place-items-center"><Layers /></div><span className="text-2xl font-bold">SkillSync</span></div>
        <div>
          <h1 className="text-4xl font-bold leading-tight">Bridging Industry Demand with Future-Ready Skills</h1>
          <p className="mt-4 text-indigo-100 max-w-md">Labour market intelligence and curriculum alignment for skill development authorities, institutes, employers and candidates.</p>
          <div className="mt-8 bg-white/10 rounded-xl p-4 backdrop-blur"><DemandTrendChart data={trends} height={200} /></div>
        </div>
        <div className="text-xs text-indigo-200">Smart India Hackathon · SIH26134</div>
      </div>
      <div className="flex items-center justify-center p-6 bg-slate-50">
        <div className="card w-full max-w-sm space-y-4 p-6">
          <h2 className="text-xl font-bold">Sign in to SkillSync</h2>
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <button className="btn w-full" onClick={() => nav('/dashboard')}>Sign In</button>
          <button className="btn-o w-full" onClick={() => nav('/dashboard')}>Continue as Demo Admin</button>
          <p className="text-center text-xs text-slate-400">Prototype • SIH26134</p>
        </div>
      </div>
    </div>
  )
}
