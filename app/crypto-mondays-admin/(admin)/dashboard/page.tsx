"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import type { CmEvent } from "@/lib/types/admin"

type Stats = {
  photos: number
  testimonials: number
  recaps: number
  speakers: number
  sponsors: number
}

const QUICK_LINKS = [
  { href: "/crypto-mondays-admin/events", label: "Events", color: "#c9a84c" },
  { href: "/crypto-mondays-admin/photos", label: "Photos", color: "#c9a84c" },
  { href: "/crypto-mondays-admin/testimonials", label: "Testimonials", color: "#c9a84c" },
  { href: "/crypto-mondays-admin/recaps", label: "Recaps", color: "#c9a84c" },
  { href: "/crypto-mondays-admin/speakers", label: "Speakers", color: "#c9a84c" },
  { href: "/crypto-mondays-admin/sponsors", label: "Sponsors", color: "#c9a84c" },
  { href: "/crypto-mondays-admin/settings", label: "Settings", color: "#c9a84c" },
]

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    photos: 0,
    testimonials: 0,
    recaps: 0,
    speakers: 0,
    sponsors: 0,
  })
  const [nextEvent, setNextEvent] = useState<CmEvent | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdated] = useState(new Date().toLocaleString())

  useEffect(() => {
    async function loadData() {
      const supabase = createClient()

      const [
        { count: photos },
        { count: testimonials },
        { count: recaps },
        { count: speakers },
        { count: sponsors },
        { data: nextEventData },
      ] = await Promise.all([
        supabase.from("cm_photos").select("*", { count: "exact", head: true }),
        supabase.from("cm_testimonials").select("*", { count: "exact", head: true }),
        supabase.from("cm_recaps").select("*", { count: "exact", head: true }),
        supabase.from("cm_speakers").select("*", { count: "exact", head: true }),
        supabase.from("cm_sponsors").select("*", { count: "exact", head: true }),
        supabase.from("cm_events").select("*").eq("is_next_event", true).limit(1),
      ])

      setStats({
        photos: photos ?? 0,
        testimonials: testimonials ?? 0,
        recaps: recaps ?? 0,
        speakers: speakers ?? 0,
        sponsors: sponsors ?? 0,
      })

      if (nextEventData && nextEventData.length > 0) {
        setNextEvent(nextEventData[0] as CmEvent)
      }

      setLoading(false)
    }

    loadData()
  }, [])

  const STAT_CARDS = [
    { label: "Photos", value: stats.photos, href: "/crypto-mondays-admin/photos" },
    { label: "Testimonials", value: stats.testimonials, href: "/crypto-mondays-admin/testimonials" },
    { label: "Recaps", value: stats.recaps, href: "/crypto-mondays-admin/recaps" },
    { label: "Speakers", value: stats.speakers, href: "/crypto-mondays-admin/speakers" },
    { label: "Sponsors", value: stats.sponsors, href: "/crypto-mondays-admin/sponsors" },
  ]

  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-10">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-2"
          style={{ color: "#c9a84c" }}
        >
          Crypto Mondays Las Vegas
        </p>
        <h1
          className="font-bold uppercase tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 3vw, 32px)",
            color: "#f0ead8",
          }}
        >
          Admin Dashboard
        </h1>
        <p className="text-xs mt-1" style={{ color: "rgba(240,234,216,0.3)" }}>
          Last updated: {lastUpdated}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {STAT_CARDS.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-xl p-5 border transition-all group"
            style={{
              backgroundColor: "#0d1a35",
              borderColor: "rgba(201,168,76,0.15)",
            }}
          >
            <div
              className="text-[9px] font-semibold uppercase tracking-[0.18em] mb-3"
              style={{ color: "rgba(240,234,216,0.35)" }}
            >
              {card.label}
            </div>
            <div
              className="text-3xl font-bold"
              style={{ color: loading ? "rgba(201,168,76,0.3)" : "#c9a84c" }}
            >
              {loading ? "—" : card.value}
            </div>
          </Link>
        ))}
      </div>

      {/* Next Event */}
      <div
        className="rounded-xl border p-6 mb-8"
        style={{
          backgroundColor: "#0d1a35",
          borderColor: "rgba(201,168,76,0.15)",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "rgba(240,234,216,0.4)" }}
          >
            Next Event
          </p>
          <Link
            href="/crypto-mondays-admin/events"
            className="text-[10px] uppercase tracking-[0.12em] transition-colors"
            style={{ color: "#c9a84c" }}
          >
            Manage →
          </Link>
        </div>

        {loading ? (
          <div className="text-xs" style={{ color: "rgba(240,234,216,0.25)" }}>
            Loading…
          </div>
        ) : nextEvent ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-[9px] uppercase tracking-[0.15em] mb-1" style={{ color: "rgba(240,234,216,0.3)" }}>
                Title
              </div>
              <div className="text-sm font-semibold" style={{ color: "#f0ead8" }}>
                {nextEvent.title}
              </div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.15em] mb-1" style={{ color: "rgba(240,234,216,0.3)" }}>
                Date &amp; Time
              </div>
              <div className="text-sm" style={{ color: "#f0ead8" }}>
                {nextEvent.event_date ?? "TBD"}
                {nextEvent.start_time && ` · ${nextEvent.start_time}`}
              </div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.15em] mb-1" style={{ color: "rgba(240,234,216,0.3)" }}>
                Venue
              </div>
              <div className="text-sm" style={{ color: "#f0ead8" }}>
                {nextEvent.venue ?? "TBD"}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-xs" style={{ color: "rgba(240,234,216,0.3)" }}>
            No next event set. Go to Events and mark one as &ldquo;Next Event&rdquo;.
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div
        className="rounded-xl border p-6"
        style={{
          backgroundColor: "#0d1a35",
          borderColor: "rgba(201,168,76,0.15)",
        }}
      >
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-5"
          style={{ color: "rgba(240,234,216,0.4)" }}
        >
          Quick Actions
        </p>
        <div className="flex flex-wrap gap-2">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-[0.12em] transition-all border"
              style={{
                color: "#c9a84c",
                backgroundColor: "rgba(201,168,76,0.06)",
                borderColor: "rgba(201,168,76,0.15)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
