import Header from './Header'
import BottomNav from './BottomNav'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen pb-20 bg-[var(--background)]">
      <Header />
      <main className="container max-w-md mx-auto px-4 pt-20">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
