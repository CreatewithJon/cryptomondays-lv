"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import type { CmSiteSetting } from "@/lib/types/admin"

const DEFAULT_KEYS = [
  { key: "next_event_date", label: "Next Event Date", placeholder: "e.g. Monday, June 9, 2026" },
  { key: "rsvp_url", label: "RSVP URL", placeholder: "https://luma.com/..." },
  { key: "event_time", label: "Event Time", placeholder: "e.g. 6:00 PM – 9:00 PM" },
  { key: "venue", label: "Venue", placeholder: "e.g. Legacy Club Rooftop — Circa Resort" },
  { key: "dress_code", label: "Dress Code", placeholder: "e.g. Smart Casual" },
  { key: "welcome_message", label: "Welcome Message", placeholder: "Short description shown on the site" },
]

export default function SettingsAdminPage() {
  const [settings, setSettings] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<Record<string, boolean>>({})
  const [savingAll, setSavingAll] = useState(false)
  const [saved, setSaved] = useState<Record<string, boolean>>({})
  const [error, setError] = useState<string | null>(null)

  async function load() {
    const supabase = createClient()
    const { data } = await supabase.from("cm_site_settings").select("*")
    if (data) {
      const map: Record<string, string> = {}
      ;(data as CmSiteSetting[]).forEach((row) => {
        map[row.key] = row.value ?? ""
      })
      setSettings(map)
    }
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function saveSetting(key: string) {
    setSaving((prev) => ({ ...prev, [key]: true }))
    setError(null)
    const supabase = createClient()

    const { error: err } = await supabase
      .from("cm_site_settings")
      .upsert(
        { key, value: settings[key] ?? "", updated_at: new Date().toISOString() },
        { onConflict: "key" }
      )

    if (err) {
      setError(err.message)
    } else {
      setSaved((prev) => ({ ...prev, [key]: true }))
      setTimeout(() => setSaved((prev) => ({ ...prev, [key]: false })), 2000)
    }

    setSaving((prev) => ({ ...prev, [key]: false }))
  }

  async function saveAll() {
    setSavingAll(true)
    setError(null)
    const supabase = createClient()

    const upsertData = Object.entries(settings).map(([key, value]) => ({
      key,
      value,
      updated_at: new Date().toISOString(),
    }))

    // Also include any default keys not yet in settings
    DEFAULT_KEYS.forEach(({ key }) => {
      if (!settings[key] === undefined) {
        upsertData.push({ key, value: "", updated_at: new Date().toISOString() })
      }
    })

    const { error: err } = await supabase
      .from("cm_site_settings")
      .upsert(upsertData, { onConflict: "key" })

    if (err) {
      setError(err.message)
    } else {
      const allSaved: Record<string, boolean> = {}
      DEFAULT_KEYS.forEach(({ key }) => { allSaved[key] = true })
      setSaved(allSaved)
      setTimeout(() => setSaved({}), 2000)
    }

    setSavingAll(false)
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-1" style={{ color: "#c9a84c" }}>Admin</p>
          <h1 className="font-bold uppercase" style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "#f0ead8" }}>Site Settings</h1>
        </div>
        <button
          onClick={saveAll}
          disabled={savingAll}
          className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-[0.15em]"
          style={{
            background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
            color: "#060c1a",
            opacity: savingAll ? 0.6 : 1,
          }}
        >
          {savingAll ? "Saving All…" : "Save All"}
        </button>
      </div>

      {loading ? (
        <div className="text-xs" style={{ color: "rgba(240,234,216,0.3)" }}>Loading…</div>
      ) : (
        <div
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: "rgba(201,168,76,0.12)" }}
        >
          {DEFAULT_KEYS.map(({ key, label, placeholder }, i) => (
            <div
              key={key}
              className="flex items-center gap-4 px-5 py-4"
              style={{
                borderBottom: i < DEFAULT_KEYS.length - 1 ? "1px solid rgba(201,168,76,0.08)" : "none",
                backgroundColor: i % 2 === 0 ? "rgba(13,26,53,0.6)" : "rgba(13,26,53,0.3)",
              }}
            >
              {/* Key label */}
              <div className="w-44 flex-shrink-0">
                <div className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: "#c9a84c" }}>{label}</div>
                <div className="text-[9px] mt-0.5" style={{ color: "rgba(240,234,216,0.25)" }}>{key}</div>
              </div>

              {/* Value input */}
              <input
                value={settings[key] ?? ""}
                onChange={(e) => setSettings((prev) => ({ ...prev, [key]: e.target.value }))}
                placeholder={placeholder}
                className="flex-1 px-3 py-2 rounded-lg text-xs outline-none transition-colors"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  color: "#f0ead8",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)" }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)" }}
              />

              {/* Save button */}
              <button
                onClick={() => saveSetting(key)}
                disabled={saving[key]}
                className="flex-shrink-0 px-3 py-2 rounded-lg text-[10px] font-semibold uppercase tracking-[0.12em] transition-all"
                style={{
                  backgroundColor: saved[key] ? "rgba(16,185,129,0.1)" : "rgba(201,168,76,0.08)",
                  color: saved[key] ? "#10b981" : "#c9a84c",
                  border: `1px solid ${saved[key] ? "rgba(16,185,129,0.2)" : "rgba(201,168,76,0.2)"}`,
                  opacity: saving[key] ? 0.6 : 1,
                  minWidth: "52px",
                }}
              >
                {saving[key] ? "…" : saved[key] ? "Saved" : "Save"}
              </button>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="mt-4 px-4 py-2.5 rounded-lg text-xs" style={{ backgroundColor: "rgba(239,68,68,0.08)", color: "rgba(252,165,165,0.9)", border: "1px solid rgba(239,68,68,0.2)" }}>
          {error}
        </div>
      )}

      <p className="text-[10px] mt-5" style={{ color: "rgba(240,234,216,0.25)" }}>
        These settings control key content on the public website. Changes are saved immediately to Supabase.
      </p>
    </div>
  )
}
