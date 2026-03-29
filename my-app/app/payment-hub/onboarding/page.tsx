import type { Metadata } from "next"
import { Sidebar } from "@/components/payment-hub/Sidebar"
import { Topbar } from "@/components/payment-hub/Topbar"
import { NewUserWelcomePanel } from "@/components/payment-hub/onboarding/new-user-welcome-panel"

export const metadata: Metadata = {
  title: "Welcome | Payment Dashboard",
  description: "Set up payments and preview your hub before your first transaction.",
}

export default function PaymentHubOnboardingPage() {
  return (
    <div className="flex h-full min-h-0 overflow-hidden bg-slate-100/70 text-foreground">
      <Sidebar />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-slate-50">
        <Topbar />

        <main className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#ECEEF2] p-4">
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden overscroll-y-contain rounded-[12px] border border-white bg-white p-4 shadow-[0_12px_16px_-4px_rgba(16,24,40,0.08),0_4px_6px_-2px_rgba(16,24,40,0.03)]">
            <div className="mx-auto flex w-full min-w-0 max-w-[1160px] flex-col gap-6">
              <NewUserWelcomePanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
