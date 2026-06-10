"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const res = await fetch("/api/cm-admin-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push("/crypto-mondays-admin/dashboard")
    } else {
      setError("Incorrect password.")
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
        <div className="flex justify-center mb-8">
          <Image
            src="/crypto-mondays-logo.png"
            alt="Crypto Mondays Las Vegas"
            width={100}
            height={100}
          />
        </div>

        <div className="text-center mb-8">
          <h1
            className="font-bold uppercase tracking-[0.15em] mb-1"
            style={{ fontFamily: "var(--font-display)", fontSize: "13px", color: "#c9a84c" }}
          >
            Crypto Mondays LV
          </h1>
          <p className="text-xs" style={{ color: "rgba(240,234,216,0.35)" }}>
            Admin Dashboard
          </p>
        </div>

        {/* Form */}
        <div
          className="rounded-2xl p-8 border"
          style={{ backgroundColor: "#0d1a35", borderColor: "rgba(201,168,76,0.15)" }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
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
                autoFocus
                autoComplete="current-password"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  color: "#f0ead8",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)")}
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
              {loading ? "Signing in…" : "Enter Dashboard"}
            </button>
          </form>
        </div>

        <p
          className="text-center text-[10px] mt-6 uppercase tracking-[0.2em]"
          style={{ color: "rgba(240,234,216,0.15)" }}
        >
          Authorized personnel only
        </p>
      </div>
    </div>
  )
}
