"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const supabase = createClient()
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) {
        setError(authError.message)
        setLoading(false)
        return
      }

      router.push("/crypto-mondays-admin/dashboard")
    } catch {
      setError("An unexpected error occurred. Please try again.")
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#060c1a" }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 border"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.05) 100%)",
              borderColor: "rgba(201,168,76,0.25)",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="10" stroke="#c9a84c" strokeWidth="1.5" />
              <path d="M10 14c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="14" cy="14" r="2" fill="#c9a84c" />
            </svg>
          </div>
          <h1
            className="font-bold uppercase tracking-[0.15em] mb-1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "14px",
              color: "#c9a84c",
            }}
          >
            Crypto Mondays LV
          </h1>
          <p className="text-xs" style={{ color: "rgba(240,234,216,0.4)" }}>
            Admin Dashboard
          </p>
        </div>

        {/* Form card */}
        <div
          className="rounded-2xl p-8 border"
          style={{
            backgroundColor: "#0d1a35",
            borderColor: "rgba(201,168,76,0.15)",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-[10px] font-semibold uppercase tracking-[0.18em] mb-2"
                style={{ color: "rgba(240,234,216,0.45)" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-3 rounded-xl text-sm transition-colors outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  color: "#f0ead8",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)"
                }}
                placeholder="admin@cryptomondayslv.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-[10px] font-semibold uppercase tracking-[0.18em] mb-2"
                style={{ color: "rgba(240,234,216,0.45)" }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full px-4 py-3 rounded-xl text-sm transition-colors outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  color: "#f0ead8",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)"
                }}
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div
                className="px-4 py-3 rounded-xl text-xs"
                style={{
                  backgroundColor: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  color: "rgba(252,165,165,0.9)",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-[0.18em] transition-all"
              style={{
                background: loading
                  ? "rgba(201,168,76,0.3)"
                  : "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
                color: loading ? "rgba(240,234,216,0.5)" : "#060c1a",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>

        <p
          className="text-center text-[10px] mt-6 uppercase tracking-[0.2em]"
          style={{ color: "rgba(240,234,216,0.2)" }}
        >
          Authorized personnel only
        </p>
      </div>
    </div>
  )
}
