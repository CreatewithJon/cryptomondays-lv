import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import AdminNav from "@/components/admin/AdminNav"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/crypto-mondays-admin")
  }

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
