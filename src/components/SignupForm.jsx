import { useState } from 'react'
import { Eye, EyeOff, Mail, User, Lock } from 'lucide-react'

function Input({ label, type = 'text', icon: Icon, value, onChange, name, placeholder }) {
  const [show, setShow] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword && show ? 'text' : type

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm text-white/80">
        {label}
      </label>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-white/40">
          {Icon && <Icon size={18} />}
        </div>
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-white placeholder-white/30 outline-none transition focus:border-orange-400/40 focus:ring-2 focus:ring-orange-400/20"
          autoComplete="off"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/50 hover:text-white"
            aria-label={show ? 'Hide password' : 'Show password'}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  )
}

function SignupForm() {
  const [form, setForm] = useState({ username: '', name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setMessage(null)

    // Basic client-side validation
    if (!form.username || !form.name || !form.email || !form.password) {
      setMessage({ type: 'error', text: 'Please fill in all fields.' })
      return
    }

    const emailOk = /[^@\s]+@[^@\s]+\.[^@\s]+/.test(form.email)
    if (!emailOk) {
      setMessage({ type: 'error', text: 'Please enter a valid email.' })
      return
    }

    setLoading(true)

    // Simulate async submit (since no backend required)
    await new Promise((r) => setTimeout(r, 900))

    setLoading(false)
    setMessage({ type: 'success', text: "You're all set! Welcome aboard." })
    setForm({ username: '', name: '', email: '', password: '' })
  }

  return (
    <div className="relative mx-auto -mt-12 w-full max-w-md">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 backdrop-blur-xl shadow-2xl">
        <form onSubmit={onSubmit} className="space-y-5">
          <Input
            label="Username"
            name="username"
            placeholder="yourhandle"
            value={form.username}
            onChange={update}
            icon={User}
          />
          <Input
            label="Name"
            name="name"
            placeholder="Jane Doe"
            value={form.name}
            onChange={update}
            icon={User}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            value={form.email}
            onChange={update}
            icon={Mail}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={update}
            icon={Lock}
          />

          <button
            type="submit"
            disabled={loading}
            className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3 font-medium text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="relative z-10">{loading ? 'Creating account…' : 'Create account'}</span>
            <span className="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
          </button>
        </form>

        {message && (
          <div
            className={`mt-4 rounded-lg px-3 py-2 text-sm ${
              message.type === 'success'
                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-300/20'
                : 'bg-rose-500/10 text-rose-300 border border-rose-300/20'
            }`}
          >
            {message.text}
          </div>
        )}

        <p className="mt-4 text-center text-xs text-white/50">
          By continuing you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  )
}

export default SignupForm
