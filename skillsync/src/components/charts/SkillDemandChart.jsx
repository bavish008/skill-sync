import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
export default function SkillDemandChart({ data, x = 'd', y = 'v', height = 200 }) {
  return <ResponsiveContainer width="100%" height={height}><BarChart data={data}><XAxis dataKey={x} fontSize={11} /><YAxis fontSize={11} /><Tooltip /><Bar dataKey={y} fill="#6366f1" radius={[6, 6, 0, 0]} /></BarChart></ResponsiveContainer>
}
