import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/', icon: '🏠', label: 'Главная' },
  { path: '/calculator', icon: '🧮', label: 'Кальк' },
  { path: '/nutrition', icon: '🍽️', label: 'Питание' },
  { path: '/workouts', icon: '💪', label: 'Тренировки' },
  { path: '/progress', icon: '📊', label: 'Прогресс' },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card rounded-none border-t border-[var(--border)]">
      <div className="container max-w-md mx-auto px-2 h-16 flex items-center justify-around">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all ${
                isActive
                  ? 'text-[var(--primary)] font-semibold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text)]'
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
