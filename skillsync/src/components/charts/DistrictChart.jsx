import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
export default function DistrictChart({ data, height = 260 }) {
  return <ResponsiveContainer width="100%" height={height}><BarChart data={data}><XAxis dataKey="name" fontSize={12} /><YAxis fontSize={12} /><Tooltip /><Legend /><Bar dataKey="cur" name="Current seats" fill="#94a3b8" radius={[4, 4, 0, 0]} /><Bar dataKey="rec" name="Recommended" fill="#4f46e5" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer>
}
