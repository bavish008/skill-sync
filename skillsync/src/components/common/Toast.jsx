import { createContext, useContext, useState, useCallback } from 'react'
import { CheckCircle2 } from 'lucide-react'
const Ctx = createContext(() => {})
export const useToast = () => useContext(Ctx)
export function ToastProvider({ children }) {
  const [list, setList] = useState([])
  const push = useCallback((msg) => {
    const id = Date.now() + Math.random()
    setList((l) => [...l, { id, msg }])
    setTimeout(() => setList((l) => l.filter((t) => t.id !== id)), 3000)
  }, [])
  return (
    <Ctx.Provider value={push}>
      {children}
      <div className="fixed bottom-4 right-4 z-[60] space-y-2">
        {list.map((t) => (
          <div key={t.id} className="flex items-center gap-2 bg-slate-900 text-white text-sm px-4 py-3 rounded-lg shadow-lg">
            <CheckCircle2 size={16} className="text-emerald-400" /> {t.msg}
          </div>
        ))}
      </div>
    </Ctx.Provider>
  )
}
