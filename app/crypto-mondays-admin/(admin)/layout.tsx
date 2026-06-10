import AdminNav from "@/components/admin/AdminNav"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const auth = cookieStore.get("cm-admin-auth")

  if (!auth?.value || auth.value !== process.env.CM_ADMIN_PASSWORD) {
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
