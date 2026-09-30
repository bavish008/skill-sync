export default function Spark({ data, color = '#4f46e5' }) {
  const mx = Math.max(...data), mn = Math.min(...data)
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * 60},${22 - ((v - mn) / (mx - mn || 1)) * 20}`).join(' ')
  return <svg width="64" height="24"><polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>
}
