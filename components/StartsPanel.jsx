import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts'
const data = [
  { name: '1-10 Aug', value: 30 },
  { name: '11-20 Aug', value: 50 },
  { name: '21-30 Aug', value: 35 },
  { name: '', value: 58 },
  { name: '', value: 25 },
]
const mentors = ['Padhang Satrio', 'Zakir Horizontal', 'Leonardo Samsul']

export default function StatsPanel() {
  return (
    <aside className="w-64 bg-white rounded-2xl p-5 space-y-5 shrink-0 overflow-y-auto">
      <h2 className="font-semibold">Statistic</h2>
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-2" />
        <p className="font-semibold">Good Morning Jason 🔥</p>
        <p className="text-xs text-gray-400">Continue your learning to achieve your target!</p>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 10 }} />
          <Bar dataKey="value" fill="#6366f1" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Your mentor</h3>
          <button className="w-6 h-6 bg-gray-100 rounded-full text-sm">+</button>
        </div>
        {mentors.map(m => (
          <div key={m} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <div>
                <p className="text-sm font-medium">{m}</p>
                <p className="text-xs text-gray-400">Mentor</p>
              </div>
            </div>
            <button className="text-xs border px-3 py-1 rounded-full text-indigo-600 border-indigo-200">
              Follow
            </button>
          </div>
        ))}
      </div>
    </aside>
  )
}