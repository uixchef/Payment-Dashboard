import { redirect } from "next/navigation"

/** `/payment-hub` resolves to the active dashboard. */
export default function PaymentHubIndexPage() {
  redirect("/payment-hub/active")
}
