import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const actions = [
  { icon: '🧮', label: 'Калькулятор', path: '/calculator' },
  { icon: '🍽️', label: 'Питание', path: '/nutrition' },
  { icon: '💪', label: 'Тренировки', path: '/workouts' },
  { icon: '📊', label: 'Прогресс', path: '/progress' },
]

export default function QuickActions() {
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-4 gap-3">
      {actions.map((action, index) => (
        <motion.button
          key={action.path}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => navigate(action.path)}
          className="glass-card flex flex-col items-center justify-center p-3 hover:bg-[var(--primary-light)] transition-all"
        >
          <span className="text-2xl">{action.icon}</span>
          <span className="text-xs text-[var(--text-secondary)] mt-1">{action.label}</span>
        </motion.button>
      ))}
    </div>
  )
}
