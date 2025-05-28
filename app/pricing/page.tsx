import type { Metadata } from "next"
import PricingContent from "./pricing-content"

export const metadata: Metadata = {
  title: "Tarieven - DMR Finance",
  description:
    "Transparante tarieven voor onze financiële dienstverlening. Van ZZP tot BV, wij hebben een passend pakket voor elke onderneming.",
}

export default function PricingPage() {
  return <PricingContent />
}
