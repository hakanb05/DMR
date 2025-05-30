import type { Metadata } from "next"
import HomeContent from "./home-content"

export const metadata: Metadata = {
  title: "DMR Administratie - Wij beheren uw financiën, u realiseert uw ambities",
  description:
    "DMR Administratie biedt op maat gemaakte financiële oplossingen en professioneel advies. Wij nemen de complexe administratieve taken uit handen zodat u zich kunt richten op uw doelen.",
  keywords: "DMR Administratie, financiële administratie, loonadministratie, belastingadvies, boekhouding, Amsterdam",
  openGraph: {
    title: "DMR Administratie - Administratie & Advies",
    description: "Professionele financiële dienstverlening voor ondernemers en particulieren",
    type: "website",
  },
  icons: {
    icon: "/images/logo/light.png",
  },
}

export default function HomePage() {
  return <HomeContent />
}
