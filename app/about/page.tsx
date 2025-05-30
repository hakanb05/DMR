import type { Metadata } from "next"
import AboutContent from "./about-content"

export const metadata: Metadata = {
  title: "Over Ons - DMR Administratie",
  description:
    "Leer meer over DMR Administratie en ons team van ervaren financiële adviseurs. Persoonlijke benadering en jarenlange ervaring in financiële dienstverlening.",
  icons: {
    icon: "/images/logo/light.png",
  },
}

export default function AboutPage() {
  return <AboutContent />
}
