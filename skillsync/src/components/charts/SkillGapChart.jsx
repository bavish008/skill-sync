import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts'
export default function SkillGapChart({ data, height = 260 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} layout="vertical" margin={{ left: 20 }}><XAxis type="number" fontSize={12} /><YAxis type="category" dataKey="name" width={110} fontSize={12} /><Tooltip />
        <Bar dataKey="gap" radius={[0, 6, 6, 0]}>{data.map((d, i) => <Cell key={i} fill={d.gap > 55 ? '#ef4444' : '#f59e0b'} />)}</Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
