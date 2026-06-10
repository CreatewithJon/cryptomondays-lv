"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import AdminTable from "@/components/admin/AdminTable"
import type { CmEvent } from "@/lib/types/admin"

const EMPTY_FORM: Omit<CmEvent, "id" | "created_at" | "updated_at"> = {
  title: "",
  event_date: null,
  start_time: null,
  end_time: null,
  venue: null,
  address: null,
  rsvp_url: null,
  dress_code: null,
  parking_info: null,
  description: null,
  featured_guest: null,
  is_next_event: false,
  published: false,
}

export default function EventsAdminPage() {
  const [events, setEvents] = useState<CmEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<CmEvent | null>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function load() {
    const supabase = createClient()
    const { data, error } = await supabase
      .from("cm_events")
      .select("*")
      .order("event_date", { ascending: false })

    if (!error && data) setEvents(data as CmEvent[])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  function openCreate() {
    setEditing(null)
    setForm(EMPTY_FORM)
    setError(null)
    setShowForm(true)
  }

  function openEdit(row: Record<string, unknown>) {
    const event = row as CmEvent
    setEditing(event)
    setForm({
      title: event.title,
      event_date: event.event_date,
      start_time: event.start_time,
      end_time: event.end_time,
      venue: event.venue,
      address: event.address,
      rsvp_url: event.rsvp_url,
      dress_code: event.dress_code,
      parking_info: event.parking_info,
      description: event.description,
      featured_guest: event.featured_guest,
      is_next_event: event.is_next_event,
      published: event.published,
    })
    setError(null)
    setShowForm(true)
  }

  async function handleSave() {
    if (!form.title.trim()) {
      setError("Title is required.")
      return
    }
    setSaving(true)
    setError(null)
    const supabase = createClient()

    const payload = {
      ...form,
      event_date: form.event_date || null,
      start_time: form.start_time || null,
      end_time: form.end_time || null,
      updated_at: new Date().toISOString(),
    }

    // If marking as next event, clear all others first
    if (form.is_next_event) {
      await supabase
        .from("cm_events")
        .update({ is_next_event: false })
        .neq("id", editing?.id ?? "")
    }

    let err
    if (editing) {
      const { error: e } = await supabase
        .from("cm_events")
        .update(payload)
        .eq("id", editing.id)
      err = e
    } else {
      const { error: e } = await supabase
        .from("cm_events")
        .insert(payload)
      err = e
    }

    if (err) {
      setError(err.message)
      setSaving(false)
      return
    }

    setShowForm(false)
    await load()
    setSaving(false)
  }

  async function handleDelete(id: string) {
    const supabase = createClient()
    await supabase.from("cm_events").delete().eq("id", id)
    await load()
  }

  async function handleTogglePublish(id: string, current: boolean) {
    const supabase = createClient()
    await supabase.from("cm_events").update({ published: !current }).eq("id", id)
    await load()
  }

  const columns = [
    { header: "Date", key: "event_date", render: (v: unknown) => String(v ?? "TBD") },
    { header: "Title", key: "title" },
    { header: "Venue", key: "venue", render: (v: unknown) => String(v ?? "—") },
    {
      header: "Next Event",
      key: "is_next_event",
      render: (v: unknown) => (
        <span style={{ color: v ? "#c9a84c" : "rgba(240,234,216,0.25)" }}>
          {v ? "✓ Yes" : "—"}
        </span>
      ),
    },
    {
      header: "Published",
      key: "published",
      render: (v: unknown) => (
        <span style={{ color: v ? "#10b981" : "rgba(240,234,216,0.25)" }}>
          {v ? "Live" : "Draft"}
        </span>
      ),
    },
  ]

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-1" style={{ color: "#c9a84c" }}>
            Admin
          </p>
          <h1
            className="font-bold uppercase"
            style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "#f0ead8" }}
          >
            Events
          </h1>
        </div>
        <button
          onClick={openCreate}
          className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-[0.15em]"
          style={{
            background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
            color: "#060c1a",
          }}
        >
          + New Event
        </button>
      </div>

      {loading ? (
        <div className="text-xs" style={{ color: "rgba(240,234,216,0.3)" }}>Loading…</div>
      ) : (
        <AdminTable
          columns={columns}
          rows={events as unknown as Record<string, unknown>[]}
          onEdit={openEdit}
          onDelete={handleDelete}
          onTogglePublish={handleTogglePublish}
        />
      )}

      {/* Form modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(6,12,26,0.9)" }}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border p-7 overflow-y-auto"
            style={{
              backgroundColor: "#0d1a35",
              borderColor: "rgba(201,168,76,0.2)",
              maxHeight: "90vh",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                className="font-bold uppercase text-sm"
                style={{ fontFamily: "var(--font-display)", color: "#c9a84c" }}
              >
                {editing ? "Edit Event" : "New Event"}
              </h2>
              <button onClick={() => setShowForm(false)} style={{ color: "rgba(240,234,216,0.4)" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Title *" span="full">
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="admin-input"
                />
              </FormField>
              <FormField label="Event Date">
                <input
                  type="date"
                  value={form.event_date ?? ""}
                  onChange={(e) => setForm({ ...form, event_date: e.target.value || null })}
                  className="admin-input"
                />
              </FormField>
              <FormField label="Start Time">
                <input
                  type="time"
                  value={form.start_time ?? ""}
                  onChange={(e) => setForm({ ...form, start_time: e.target.value || null })}
                  className="admin-input"
                />
              </FormField>
              <FormField label="End Time">
                <input
                  type="time"
                  value={form.end_time ?? ""}
                  onChange={(e) => setForm({ ...form, end_time: e.target.value || null })}
                  className="admin-input"
                />
              </FormField>
              <FormField label="Venue">
                <input
                  value={form.venue ?? ""}
                  onChange={(e) => setForm({ ...form, venue: e.target.value || null })}
                  className="admin-input"
                />
              </FormField>
              <FormField label="Address">
                <input
                  value={form.address ?? ""}
                  onChange={(e) => setForm({ ...form, address: e.target.value || null })}
                  className="admin-input"
                />
              </FormField>
              <FormField label="RSVP URL">
                <input
                  type="url"
                  value={form.rsvp_url ?? ""}
                  onChange={(e) => setForm({ ...form, rsvp_url: e.target.value || null })}
                  className="admin-input"
                />
              </FormField>
              <FormField label="Dress Code">
                <input
                  value={form.dress_code ?? ""}
                  onChange={(e) => setForm({ ...form, dress_code: e.target.value || null })}
                  className="admin-input"
                />
              </FormField>
              <FormField label="Featured Guest">
                <input
                  value={form.featured_guest ?? ""}
                  onChange={(e) => setForm({ ...form, featured_guest: e.target.value || null })}
                  className="admin-input"
                />
              </FormField>
              <FormField label="Parking Info">
                <input
                  value={form.parking_info ?? ""}
                  onChange={(e) => setForm({ ...form, parking_info: e.target.value || null })}
                  className="admin-input"
                />
              </FormField>
              <FormField label="Description" span="full">
                <textarea
                  rows={3}
                  value={form.description ?? ""}
                  onChange={(e) => setForm({ ...form, description: e.target.value || null })}
                  className="admin-input resize-none"
                />
              </FormField>
              <div className="flex gap-6">
                <ToggleField
                  label="Is Next Event"
                  value={form.is_next_event}
                  onChange={(v) => setForm({ ...form, is_next_event: v })}
                />
                <ToggleField
                  label="Published"
                  value={form.published}
                  onChange={(v) => setForm({ ...form, published: v })}
                />
              </div>
            </div>

            {error && (
              <div className="mt-4 px-4 py-2.5 rounded-lg text-xs" style={{ backgroundColor: "rgba(239,68,68,0.08)", color: "rgba(252,165,165,0.9)", border: "1px solid rgba(239,68,68,0.2)" }}>
                {error}
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-[0.15em]"
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
                  color: "#060c1a",
                  opacity: saving ? 0.6 : 1,
                }}
              >
                {saving ? "Saving…" : "Save Event"}
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-medium"
                style={{ color: "rgba(240,234,216,0.5)", border: "1px solid rgba(240,234,216,0.1)" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .admin-input {
          width: 100%;
          padding: 10px 12px;
          border-radius: 10px;
          font-size: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201,168,76,0.12);
          color: #f0ead8;
          outline: none;
          transition: border-color 0.15s;
        }
        .admin-input:focus {
          border-color: rgba(201,168,76,0.4);
        }
        .admin-input::placeholder {
          color: rgba(240,234,216,0.2);
        }
      `}</style>
    </div>
  )
}

function FormField({ label, children, span }: { label: string; children: React.ReactNode; span?: "full" }) {
  return (
    <div className={span === "full" ? "md:col-span-2" : ""}>
      <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(240,234,216,0.4)" }}>
        {label}
      </label>
      {children}
    </div>
  )
}

function ToggleField({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div>
      <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: "rgba(240,234,216,0.4)" }}>
        {label}
      </label>
      <button
        type="button"
        onClick={() => onChange(!value)}
        className="w-10 h-5 rounded-full transition-all relative"
        style={{ backgroundColor: value ? "#c9a84c" : "rgba(255,255,255,0.1)" }}
      >
        <span
          className="absolute top-0.5 w-4 h-4 rounded-full transition-all"
          style={{
            backgroundColor: value ? "#060c1a" : "rgba(240,234,216,0.5)",
            left: value ? "calc(100% - 18px)" : "2px",
          }}
        />
      </button>
    </div>
  )
}
