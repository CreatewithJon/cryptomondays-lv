"use client"

import React from "react"

type Column = {
  header: string
  key: string
  render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode
}

type Props = {
  columns: Column[]
  rows: Record<string, unknown>[]
  onEdit: (row: Record<string, unknown>) => void
  onDelete: (id: string) => void
  onTogglePublish?: (id: string, current: boolean) => void
}

export default function AdminTable({ columns, rows, onEdit, onDelete, onTogglePublish }: Props) {
  if (rows.length === 0) {
    return (
      <div
        className="text-center py-16 rounded-xl border"
        style={{
          borderColor: "rgba(201,168,76,0.1)",
          color: "rgba(240,234,216,0.25)",
        }}
      >
        <div className="text-xs uppercase tracking-[0.2em]">No records yet</div>
      </div>
    )
  }

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{ borderColor: "rgba(201,168,76,0.12)" }}
    >
      <table className="w-full text-xs">
        <thead>
          <tr style={{ backgroundColor: "rgba(201,168,76,0.05)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left px-4 py-3 font-semibold uppercase tracking-[0.12em]"
                style={{ color: "rgba(240,234,216,0.4)", fontSize: "9px" }}
              >
                {col.header}
              </th>
            ))}
            <th
              className="text-right px-4 py-3 font-semibold uppercase tracking-[0.12em]"
              style={{ color: "rgba(240,234,216,0.4)", fontSize: "9px" }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={String(row.id)}
              style={{
                borderBottom: i < rows.length - 1 ? "1px solid rgba(201,168,76,0.06)" : "none",
                backgroundColor: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
              }}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-4 py-3"
                  style={{ color: "rgba(240,234,216,0.7)" }}
                >
                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key] ?? "—")}
                </td>
              ))}
              <td className="px-4 py-3">
                <div className="flex items-center justify-end gap-2">
                  {onTogglePublish && (
                    <button
                      onClick={() => onTogglePublish(String(row.id), Boolean(row.published))}
                      title={row.published ? "Unpublish" : "Publish"}
                      className="p-1.5 rounded-lg transition-all"
                      style={{
                        color: row.published ? "#c9a84c" : "rgba(240,234,216,0.3)",
                        backgroundColor: row.published ? "rgba(201,168,76,0.08)" : "transparent",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7s2.5-5 6-5 6 5 6 5-2.5 5-6 5-6-5-6-5z" stroke="currentColor" strokeWidth="1.2" />
                        <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </button>
                  )}
                  <button
                    onClick={() => onEdit(row)}
                    title="Edit"
                    className="p-1.5 rounded-lg transition-all"
                    style={{ color: "#c9a84c", backgroundColor: "rgba(201,168,76,0.06)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M9.5 2.5l2 2L4 12H2v-2l7.5-7.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      if (confirm("Delete this record?")) {
                        onDelete(String(row.id))
                      }
                    }}
                    title="Delete"
                    className="p-1.5 rounded-lg transition-all"
                    style={{ color: "rgba(239,68,68,0.6)", backgroundColor: "rgba(239,68,68,0.06)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 4h10M5 4V2h4v2M6 7v4M8 7v4M3 4l1 8h6l1-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
