'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import Auth from './Auth'
import Logo from './Logo'
import type { User, Session } from '@supabase/supabase-js'

const navLinks = [
  { href: '#features', label: 'Platform' },
  { href: '#how-it-works', label: 'Workflow' },
  { href: '#stats', label: 'Impact' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showAuth, setShowAuth] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    supabase.auth.getUser().then(({ data }) => setUser(data.user))
    const { data: sub } = supabase.auth.onAuthStateChange(
      (_e: string, session: Session | null) => setUser(session?.user ?? null),
    )

    return () => {
      window.removeEventListener('scroll', onScroll)
      sub.subscription.unsubscribe()
    }
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/5 bg-ink-0/80 backdrop-blur-xl py-2.5'
            : 'border-b border-transparent py-4'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span className="text-[15px] font-semibold tracking-tight text-ink-950">
              Neurosci<span className="text-accent">.</span>AI
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-1.5 text-[13.5px] text-ink-800 transition hover:text-ink-950"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {user ? (
              <button
                onClick={signOut}
                className="rounded-md px-3 py-1.5 text-[13.5px] text-ink-800 hover:text-ink-950"
              >
                Sign out
              </button>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="rounded-md px-3 py-1.5 text-[13.5px] text-ink-800 hover:text-ink-950"
              >
                Sign in
              </button>
            )}
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-md bg-accent px-3.5 py-1.5 text-[13.5px] font-medium text-ink-0 transition hover:bg-accent-glow"
            >
              Request access
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-ink-900 md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/5 bg-ink-50 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-ink-800 hover:bg-white/5 hover:text-ink-950"
                >
                  {l.label}
                </a>
              ))}
              <div className="my-2 h-px bg-white/5" />
              {user ? (
                <button
                  onClick={signOut}
                  className="rounded-md px-3 py-2 text-left text-sm text-ink-800 hover:bg-white/5"
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowAuth(true)
                    setOpen(false)
                  }}
                  className="rounded-md px-3 py-2 text-left text-sm text-ink-800 hover:bg-white/5"
                >
                  Sign in
                </button>
              )}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-md bg-accent px-3 py-2 text-center text-sm font-medium text-ink-0"
              >
                Request access
              </a>
            </div>
          </div>
        )}
      </header>

      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </>
  )
}
