import { createClient } from "@/lib/supabase/server"
import AdminNav from "@/components/admin/AdminNav"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Not authenticated — just render children (login page) with no admin chrome
  if (!user) {
    return <>{children}</>
  }

  // Authenticated — render full admin layout with sidebar
  return (
    <div
      className="min-h-screen flex"
      style={{ backgroundColor: "#060c1a", color: "#f0ead8" }}
    >
      <AdminNav />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
