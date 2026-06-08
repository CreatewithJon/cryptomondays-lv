"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import AdminTable from "@/components/admin/AdminTable"
import type { CmTestimonial } from "@/lib/types/admin"

const EMPTY_FORM: Omit<CmTestimonial, "id" | "created_at"> = {
  name: "",
  title: null,
  company: null,
  quote: "",
  headshot_url: null,
  featured: false,
  published: false,
  sort_order: 0,
}

export default function TestimonialsAdminPage() {
  const [records, setRecords] = useState<CmTestimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<CmTestimonial | null>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function load() {
    const supabase = createClient()
    const { data } = await supabase
      .from("cm_testimonials")
      .select("*")
      .order("sort_order", { ascending: true })
    if (data) setRecords(data as CmTestimonial[])
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
    const r = row as CmTestimonial
    setEditing(r)
    setForm({ name: r.name, title: r.title, company: r.company, quote: r.quote, headshot_url: r.headshot_url, featured: r.featured, published: r.published, sort_order: r.sort_order })
    setError(null)
    setShowForm(true)
  }

  async function handleSave() {
    if (!form.name.trim() || !form.quote.trim()) {
      setError("Name and quote are required.")
      return
    }
    setSaving(true)
    setError(null)
    const supabase = createClient()
    let err
    if (editing) {
      const { error: e } = await supabase.from("cm_testimonials").update(form).eq("id", editing.id)
      err = e
    } else {
      const { error: e } = await supabase.from("cm_testimonials").insert(form)
      err = e
    }
    if (err) { setError(err.message); setSaving(false); return }
    setShowForm(false)
    await load()
    setSaving(false)
  }

  async function handleDelete(id: string) {
    const supabase = createClient()
    await supabase.from("cm_testimonials").delete().eq("id", id)
    await load()
  }

  async function handleTogglePublish(id: string, current: boolean) {
    const supabase = createClient()
    await supabase.from("cm_testimonials").update({ published: !current }).eq("id", id)
    await load()
  }

  const columns = [
    { header: "Name", key: "name" },
    { header: "Company", key: "company", render: (v: unknown) => String(v ?? "—") },
    {
      header: "Quote",
      key: "quote",
      render: (v: unknown) => (
        <span style={{ color: "rgba(240,234,216,0.6)" }} className="line-clamp-1">
          {String(v ?? "").slice(0, 60)}{String(v ?? "").length > 60 ? "…" : ""}
        </span>
      ),
    },
    { header: "Sort", key: "sort_order" },
    { header: "Featured", key: "featured", render: (v: unknown) => <span style={{ color: v ? "#c9a84c" : "rgba(240,234,216,0.25)" }}>{v ? "✓" : "—"}</span> },
    { header: "Published", key: "published", render: (v: unknown) => <span style={{ color: v ? "#10b981" : "rgba(240,234,216,0.25)" }}>{v ? "Live" : "Draft"}</span> },
  ]

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-1" style={{ color: "#c9a84c" }}>Admin</p>
          <h1 className="font-bold uppercase" style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "#f0ead8" }}>Testimonials</h1>
        </div>
        <button onClick={openCreate} className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-[0.15em]" style={{ background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)", color: "#060c1a" }}>
          + New Testimonial
        </button>
      </div>

      {loading ? <div className="text-xs" style={{ color: "rgba(240,234,216,0.3)" }}>Loading…</div> : (
        <AdminTable columns={columns} rows={records as unknown as Record<string, unknown>[]} onEdit={openEdit} onDelete={handleDelete} onTogglePublish={handleTogglePublish} />
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(6,12,26,0.9)" }}>
          <div className="w-full max-w-xl rounded-2xl border p-7 overflow-y-auto" style={{ backgroundColor: "#0d1a35", borderColor: "rgba(201,168,76,0.2)", maxHeight: "90vh" }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold uppercase text-sm" style={{ fontFamily: "var(--font-display)", color: "#c9a84c" }}>{editing ? "Edit Testimonial" : "New Testimonial"}</h2>
              <button onClick={() => setShowForm(false)} style={{ color: "rgba(240,234,216,0.4)" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(240,234,216,0.4)" }}>Name *</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="admin-input" />
                </div>
                <div>
                  <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(240,234,216,0.4)" }}>Title</label>
                  <input value={form.title ?? ""} onChange={(e) => setForm({ ...form, title: e.target.value || null })} className="admin-input" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(240,234,216,0.4)" }}>Company</label>
                  <input value={form.company ?? ""} onChange={(e) => setForm({ ...form, company: e.target.value || null })} className="admin-input" />
                </div>
                <div>
                  <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(240,234,216,0.4)" }}>Headshot URL</label>
                  <input type="url" value={form.headshot_url ?? ""} onChange={(e) => setForm({ ...form, headshot_url: e.target.value || null })} className="admin-input" />
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(240,234,216,0.4)" }}>Quote *</label>
                <textarea rows={4} value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} className="admin-input resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
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

            {error && <div className="mt-4 px-4 py-2.5 rounded-lg text-xs" style={{ backgroundColor: "rgba(239,68,68,0.08)", color: "rgba(252,165,165,0.9)", border: "1px solid rgba(239,68,68,0.2)" }}>{error}</div>}

            <div className="flex gap-3 mt-6">
              <button onClick={handleSave} disabled={saving} className="flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-[0.15em]" style={{ background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)", color: "#060c1a", opacity: saving ? 0.6 : 1 }}>
                {saving ? "Saving…" : "Save Testimonial"}
              </button>
              <button onClick={() => setShowForm(false)} className="px-5 py-2.5 rounded-xl text-xs font-medium" style={{ color: "rgba(240,234,216,0.5)", border: "1px solid rgba(240,234,216,0.1)" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .admin-input { width: 100%; padding: 10px 12px; border-radius: 10px; font-size: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(201,168,76,0.12); color: #f0ead8; outline: none; transition: border-color 0.15s; }
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
