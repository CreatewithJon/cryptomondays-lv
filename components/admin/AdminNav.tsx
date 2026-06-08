"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

const NAV_ITEMS = [
  {
    href: "/crypto-mondays-admin/dashboard",
    label: "Dashboard",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    href: "/crypto-mondays-admin/events",
    label: "Events",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="3" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 1v4M11 1v4M1 7h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/crypto-mondays-admin/photos",
    label: "Photos",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="2" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="5.5" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M1 11l4-3.5 3 3 2.5-2.5 4.5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/crypto-mondays-admin/testimonials",
    label: "Testimonials",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 6h4M4 9h8M2 2h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5l-3 2V3a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/crypto-mondays-admin/recaps",
    label: "Recaps",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 2h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 6h6M5 9h6M5 12h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/crypto-mondays-admin/speakers",
    label: "Speakers",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M8 9v2M6.5 10.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/crypto-mondays-admin/sponsors",
    label: "Sponsors",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1l2 4.5H15l-4 3 1.5 4.5L8 11l-4.5 2 1.5-4.5-4-3H6L8 1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/crypto-mondays-admin/settings",
    label: "Settings",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.93 2.93l1.41 1.41M11.66 11.66l1.41 1.41M2.93 13.07l1.41-1.41M11.66 4.34l1.41-1.41" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/crypto-mondays-admin")
  }

  return (
    <nav
      className="w-56 flex-shrink-0 flex flex-col h-full border-r"
      style={{
        backgroundColor: "#0d1a35",
        borderColor: "rgba(201,168,76,0.12)",
      }}
    >
      {/* Logo */}
      <div
        className="px-5 py-6 border-b"
        style={{ borderColor: "rgba(201,168,76,0.1)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.2) 0%, rgba(201,168,76,0.05) 100%)",
              borderColor: "rgba(201,168,76,0.3)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5" stroke="#c9a84c" strokeWidth="1.2" />
              <circle cx="7" cy="7" r="2" fill="#c9a84c" />
            </svg>
          </div>
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-display)", color: "#c9a84c" }}
            >
              CM Admin
            </div>
            <div className="text-[9px]" style={{ color: "rgba(240,234,216,0.3)" }}>
              Las Vegas
            </div>
          </div>
        </div>
      </div>

      {/* Nav items */}
      <div className="flex-1 overflow-y-auto py-3">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/crypto-mondays-admin/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-xs font-medium transition-all"
              style={{
                color: isActive ? "#c9a84c" : "rgba(240,234,216,0.45)",
                backgroundColor: isActive ? "rgba(201,168,76,0.08)" : "transparent",
              }}
            >
              <span
                style={{ color: isActive ? "#c9a84c" : "rgba(240,234,216,0.3)" }}
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          )
        })}
      </div>

      {/* Sign out */}
      <div
        className="p-3 border-t"
        style={{ borderColor: "rgba(201,168,76,0.1)" }}
      >
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-xs font-medium transition-all"
          style={{ color: "rgba(240,234,216,0.3)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "rgba(239,68,68,0.8)"
            e.currentTarget.style.backgroundColor = "rgba(239,68,68,0.06)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(240,234,216,0.3)"
            e.currentTarget.style.backgroundColor = "transparent"
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 14H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3M10.5 11.5L14 8l-3.5-3.5M14 8H6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Sign Out
        </button>
      </div>
    </nav>
  )
}
