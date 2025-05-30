import type { Metadata } from "next"
import ServicesContent from "./services-content"

export const metadata: Metadata = {
  title: "Diensten - DMR Administratie",
  description:
    "Ontdek alle diensten van DMR Administratie: financiële administratie, loonadministratie, belastingadvies en meer. Professionele ondersteuning voor uw bedrijf.",
}

export default function ServicesPage() {
  return <ServicesContent />
}
