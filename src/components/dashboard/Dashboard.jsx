import { motion } from 'framer-motion'
import DailySummary from './DailySummary'
import QuickActions from './QuickActions'

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[var(--text-secondary)]">Добро пожаловать 👋</p>
          <h2 className="text-2xl font-bold text-[var(--text)]">FitPlan</h2>
        </div>
      </div>

      <DailySummary />
      <QuickActions />
      
      <div className="glass-card">
        <h3 className="font-semibold mb-2">📊 Статистика</h3>
        <p className="text-sm text-[var(--text-secondary)]">Настройте параметры в калькуляторе</p>
      </div>
    </motion.div>
  )
}
