import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Navbar from './Navbar.jsx'
export default function DashboardLayout() {
  const [open, setOpen] = useState(false), [col, setCol] = useState(false)
  return (
    <div className="flex h-screen bg-slate-50 text-slate-800">
      <Sidebar open={open} setOpen={setOpen} col={col} setCol={setCol} />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar onMenu={() => setOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6"><Outlet /></main>
      </div>
    </div>
  )
}
