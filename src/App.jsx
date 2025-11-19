import Hero from './components/Hero'
import SignupForm from './components/SignupForm'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />

      <main className="px-6">
        <SignupForm />

        <div className="mx-auto mt-10 max-w-md text-center text-sm text-white/50">
          <span className="inline-block h-px w-10 bg-white/10 align-middle mr-3" />
          Minimal. Modern. Fast.
          <span className="inline-block h-px w-10 bg-white/10 align-middle ml-3" />
        </div>
      </main>

      <footer className="mt-16 border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} — Crafted for a clean signup experience
        </div>
      </footer>
    </div>
  )
}

export default App
