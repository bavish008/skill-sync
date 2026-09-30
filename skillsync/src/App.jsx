import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import LabourMarket from './pages/LabourMarket.jsx'
import Skills from './pages/Skills.jsx'
import Courses, { CourseDetail } from './pages/Courses.jsx'
import Curriculum from './pages/Curriculum.jsx'
import DistrictPlanning from './pages/DistrictPlanning.jsx'
import Employers from './pages/Employers.jsx'
import Trainers from './pages/Trainers.jsx'
import Candidates from './pages/Candidates.jsx'
import Reports from './pages/Reports.jsx'
import Settings from './pages/Settings.jsx'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/labour-market" element={<LabourMarket />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/district-planning" element={<DistrictPlanning />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
