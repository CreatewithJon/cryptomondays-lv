// Passthrough layout — login page renders standalone.
// Subpages are protected via (admin) route group layout + proxy.ts cookie check.
export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
