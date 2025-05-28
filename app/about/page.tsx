import type { Metadata } from "next"
import AboutContent from "./about-content"

export const metadata: Metadata = {
  title: "Over Ons - DMR Finance",
  description:
    "Leer meer over DMR Finance en ons team van ervaren financiële adviseurs. Persoonlijke benadering en jarenlange ervaring in financiële dienstverlening.",
}

export default function AboutPage() {
  return <AboutContent />
}
