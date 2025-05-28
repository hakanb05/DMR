import type { Metadata } from "next"
import ContactContent from "./contact-content"

export const metadata: Metadata = {
  title: "Contact - DMR Finance",
  description:
    "Neem contact op met DMR Finance voor al uw vragen over financiële administratie, loonadministratie en belastingadvies. Plan direct een gesprek.",
}

export default function ContactPage() {
  return <ContactContent />
}
