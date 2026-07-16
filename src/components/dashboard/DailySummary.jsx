export default function DailySummary() {
  return (
    <div className="glass-card">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Сегодня</h3>
        <span className="text-sm text-[var(--text-secondary)]">0 / 2000 ккал</span>
      </div>
      <div className="relative h-2 bg-[var(--border)] rounded-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-[var(--primary)] rounded-full transition-all duration-500" style={{ width: '0%' }} />
      </div>
      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="text-center p-2 rounded-xl bg-[var(--primary-light)]">
          <p className="text-lg font-bold text-[var(--primary)]">0г</p>
          <p className="text-xs text-[var(--text-secondary)]">Белки</p>
        </div>
        <div className="text-center p-2 rounded-xl bg-[var(--primary-light)]">
          <p className="text-lg font-bold text-[var(--primary)]">0г</p>
          <p className="text-xs text-[var(--text-secondary)]">Жиры</p>
        </div>
        <div className="text-center p-2 rounded-xl bg-[var(--primary-light)]">
          <p className="text-lg font-bold text-[var(--primary)]">0г</p>
          <p className="text-xs text-[var(--text-secondary)]">Углеводы</p>
        </div>
      </div>
    </div>
  )
}
