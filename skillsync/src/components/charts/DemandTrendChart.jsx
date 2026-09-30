import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'
export default function DemandTrendChart({ data, keys = [['demand', '#4f46e5'], ['supply', '#10b981']], height = 260 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}><CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" /><XAxis dataKey="m" fontSize={12} /><YAxis fontSize={12} /><Tooltip /><Legend />
        {keys.map(([k, col]) => <Line key={k} type="monotone" dataKey={k} stroke={col} strokeWidth={2.5} dot={false} />)}
      </LineChart>
    </ResponsiveContainer>
  )
}
