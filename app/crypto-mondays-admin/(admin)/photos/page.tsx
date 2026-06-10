"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { createClient } from "@/lib/supabase/client"
import AdminTable from "@/components/admin/AdminTable"
import type { CmPhoto } from "@/lib/types/admin"

const SECTIONS = ["hero", "community", "recap", "gallery"]

const EMPTY_FORM: Omit<CmPhoto, "id" | "created_at"> = {
  image_url: "",
  title: null,
  description: null,
  event_date: null,
  event_id: null,
  section: null,
  featured: false,
  published: false,
  sort_order: 0,
}

export default function PhotosAdminPage() {
  const [photos, setPhotos] = useState<CmPhoto[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<CmPhoto | null>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filterSection, setFilterSection] = useState<string>("all")

  async function load() {
    const supabase = createClient()
    const { data, error } = await supabase
      .from("cm_photos")
      .select("*")
      .order("sort_order", { ascending: true })

    if (!error && data) setPhotos(data as CmPhoto[])
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
    const photo = row as CmPhoto
    setEditing(photo)
    setForm({
      image_url: photo.image_url,
      title: photo.title,
      description: photo.description,
      event_date: photo.event_date,
      event_id: photo.event_id,
      section: photo.section,
      featured: photo.featured,
      published: photo.published,
      sort_order: photo.sort_order,
    })
    setError(null)
    setShowForm(true)
  }

  async function handleSave() {
    if (!form.image_url.trim()) {
      setError("Image URL is required.")
      return
    }
    setSaving(true)
    setError(null)
    const supabase = createClient()

    let err
    if (editing) {
      const { error: e } = await supabase
        .from("cm_photos")
        .update({ ...form, event_date: form.event_date || null })
        .eq("id", editing.id)
      err = e
    } else {
      const { error: e } = await supabase
        .from("cm_photos")
        .insert({ ...form, event_date: form.event_date || null })
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
    await supabase.from("cm_photos").delete().eq("id", id)
    await load()
  }

  async function handleTogglePublish(id: string, current: boolean) {
    const supabase = createClient()
    await supabase.from("cm_photos").update({ published: !current }).eq("id", id)
    await load()
  }

  const filtered = filterSection === "all"
    ? photos
    : photos.filter((p) => p.section === filterSection)

  const columns = [
    {
      header: "Photo",
      key: "image_url",
      render: (v: unknown) => {
        const url = String(v ?? "")
        if (!url) return <span style={{ color: "rgba(240,234,216,0.2)" }}>No image</span>
        return (
          <div className="w-14 h-10 relative rounded overflow-hidden" style={{ backgroundColor: "#060c1a" }}>
            <Image src={url} alt="thumb" fill className="object-cover" unoptimized onError={() => {}} />
          </div>
        )
      },
    },
    { header: "Title", key: "title", render: (v: unknown) => String(v ?? "—") },
    { header: "Section", key: "section", render: (v: unknown) => String(v ?? "—") },
    { header: "Sort", key: "sort_order" },
    {
      header: "Featured",
      key: "featured",
      render: (v: unknown) => (
        <span style={{ color: v ? "#c9a84c" : "rgba(240,234,216,0.25)" }}>{v ? "✓" : "—"}</span>
      ),
    },
    {
      header: "Published",
      key: "published",
      render: (v: unknown) => (
        <span style={{ color: v ? "#10b981" : "rgba(240,234,216,0.25)" }}>{v ? "Live" : "Draft"}</span>
      ),
    },
  ]

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-1" style={{ color: "#c9a84c" }}>Admin</p>
          <h1 className="font-bold uppercase" style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "#f0ead8" }}>
            Photos
          </h1>
        </div>
        <button
          onClick={openCreate}
          className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-[0.15em]"
          style={{ background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)", color: "#060c1a" }}
        >
          + Add Photo
        </button>
      </div>

      {/* Section filter */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {["all", ...SECTIONS].map((s) => (
          <button
            key={s}
            onClick={() => setFilterSection(s)}
            className="px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-[0.12em] transition-all"
            style={{
              backgroundColor: filterSection === s ? "rgba(201,168,76,0.12)" : "transparent",
              color: filterSection === s ? "#c9a84c" : "rgba(240,234,216,0.4)",
              border: `1px solid ${filterSection === s ? "rgba(201,168,76,0.3)" : "rgba(201,168,76,0.1)"}`,
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Supabase storage tip */}
      <div
        className="mb-5 px-4 py-3 rounded-xl text-xs border"
        style={{
          backgroundColor: "rgba(201,168,76,0.04)",
          borderColor: "rgba(201,168,76,0.12)",
          color: "rgba(240,234,216,0.45)",
        }}
      >
        <strong style={{ color: "#c9a84c" }}>Tip:</strong> Upload photos to Supabase Storage bucket{" "}
        <code className="px-1 rounded" style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "#c9a84c" }}>
          cm-photos
        </code>{" "}
        and paste the public URL here. URL format:{" "}
        <code className="px-1 rounded" style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "#c9a84c" }}>
          {"{SUPABASE_URL}"}/storage/v1/object/public/cm-photos/{"{filename}"}
        </code>
      </div>

      {loading ? (
        <div className="text-xs" style={{ color: "rgba(240,234,216,0.3)" }}>Loading…</div>
      ) : (
        <AdminTable
          columns={columns}
          rows={filtered as unknown as Record<string, unknown>[]}
          onEdit={openEdit}
          onDelete={handleDelete}
          onTogglePublish={handleTogglePublish}
        />
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(6,12,26,0.9)" }}>
          <div
            className="w-full max-w-xl rounded-2xl border p-7 overflow-y-auto"
            style={{ backgroundColor: "#0d1a35", borderColor: "rgba(201,168,76,0.2)", maxHeight: "90vh" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold uppercase text-sm" style={{ fontFamily: "var(--font-display)", color: "#c9a84c" }}>
                {editing ? "Edit Photo" : "Add Photo"}
              </h2>
              <button onClick={() => setShowForm(false)} style={{ color: "rgba(240,234,216,0.4)" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(240,234,216,0.4)" }}>Image URL *</label>
                <input
                  type="url"
                  value={form.image_url}
                  onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                  placeholder="https://..."
                  className="admin-input"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(240,234,216,0.4)" }}>Title</label>
                  <input value={form.title ?? ""} onChange={(e) => setForm({ ...form, title: e.target.value || null })} className="admin-input" />
                </div>
                <div>
                  <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(240,234,216,0.4)" }}>Section</label>
                  <select
                    value={form.section ?? ""}
                    onChange={(e) => setForm({ ...form, section: e.target.value || null })}
                    className="admin-input"
                    style={{ backgroundColor: "#0d1a35" }}
                  >
                    <option value="">— None —</option>
                    {SECTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(240,234,216,0.4)" }}>Description</label>
                <textarea rows={2} value={form.description ?? ""} onChange={(e) => setForm({ ...form, description: e.target.value || null })} className="admin-input resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(240,234,216,0.4)" }}>Event Date</label>
                  <input type="date" value={form.event_date ?? ""} onChange={(e) => setForm({ ...form, event_date: e.target.value || null })} className="admin-input" />
                </div>
                <div>
                  <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(240,234,216,0.4)" }}>Sort Order</label>
                  <input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} className="admin-input" />
                </div>
              </div>
              <div className="flex gap-8">
                <ToggleField label="Featured" value={form.featured} onChange={(v) => setForm({ ...form, featured: v })} />
                <ToggleField label="Published" value={form.published} onChange={(v) => setForm({ ...form, published: v })} />
              </div>
            </div>

            {error && (
              <div className="mt-4 px-4 py-2.5 rounded-lg text-xs" style={{ backgroundColor: "rgba(239,68,68,0.08)", color: "rgba(252,165,165,0.9)", border: "1px solid rgba(239,68,68,0.2)" }}>{error}</div>
            )}

            <div className="flex gap-3 mt-6">
              <button onClick={handleSave} disabled={saving} className="flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-[0.15em]" style={{ background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)", color: "#060c1a", opacity: saving ? 0.6 : 1 }}>
                {saving ? "Saving…" : "Save Photo"}
              </button>
              <button onClick={() => setShowForm(false)} className="px-5 py-2.5 rounded-xl text-xs font-medium" style={{ color: "rgba(240,234,216,0.5)", border: "1px solid rgba(240,234,216,0.1)" }}>
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
        .admin-input:focus { border-color: rgba(201,168,76,0.4); }
        .admin-input::placeholder { color: rgba(240,234,216,0.2); }
      `}</style>
    </div>
  )
}

function ToggleField({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div>
      <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: "rgba(240,234,216,0.4)" }}>{label}</label>
      <button type="button" onClick={() => onChange(!value)} className="w-10 h-5 rounded-full transition-all relative" style={{ backgroundColor: value ? "#c9a84c" : "rgba(255,255,255,0.1)" }}>
        <span className="absolute top-0.5 w-4 h-4 rounded-full transition-all" style={{ backgroundColor: value ? "#060c1a" : "rgba(240,234,216,0.5)", left: value ? "calc(100% - 18px)" : "2px" }} />
      </button>
    </div>
  )
}
