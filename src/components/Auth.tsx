'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import Logo from './Logo'

interface AuthProps {
  onClose?: () => void
}

export default function Auth({ onClose }: AuthProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSignUp, setIsSignUp] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
      }
      onClose?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-0/80 px-4 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-ink-50 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-md text-ink-700 hover:bg-white/5 hover:text-ink-950"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2.5">
          <Logo className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-tight text-ink-950">
            Neurosci<span className="text-accent">.</span>AI
          </span>
        </div>

        <h2 className="mt-6 text-[22px] font-semibold tracking-tight text-ink-950">
          {isSignUp ? 'Create your account' : 'Sign in'}
        </h2>
        <p className="mt-1 text-[13px] text-ink-700">
          {isSignUp
            ? 'Spin up a workspace for your lab.'
            : 'Welcome back. Pick up where you left off.'}
        </p>

        {error && (
          <div className="mt-5 rounded-md border border-signal-pink/30 bg-signal-pink/10 px-3.5 py-2.5 text-[13px] text-signal-pink">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block font-mono text-[11px] uppercase tracking-wider text-ink-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-md border border-white/10 bg-ink-100/60 px-3.5 py-2.5 text-[14px] text-ink-950 outline-none transition focus:border-accent/50 focus:bg-ink-100"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block font-mono text-[11px] uppercase tracking-wider text-ink-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-md border border-white/10 bg-ink-100/60 px-3.5 py-2.5 text-[14px] text-ink-950 outline-none transition focus:border-accent/50 focus:bg-ink-100"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-accent px-4 py-2.5 text-[14px] font-medium text-ink-0 transition hover:bg-accent-glow disabled:opacity-50"
          >
            {loading ? 'Working…' : isSignUp ? 'Create account' : 'Sign in'}
          </button>
        </form>

        <div className="mt-5 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-[13px] text-ink-800 hover:text-accent"
          >
            {isSignUp
              ? 'Already have an account? Sign in'
              : "New here? Create an account"}
          </button>
        </div>
      </div>
    </div>
  )
}
