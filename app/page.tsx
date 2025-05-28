import type { Metadata } from "next"
import HomeContent from "./home-content"

export const metadata: Metadata = {
  title: "DMR Finance - Wij beheren uw financiën, u realiseert uw ambities",
  description:
    "DMR Finance biedt op maat gemaakte financiële oplossingen en professioneel advies. Wij nemen de complexe administratieve taken uit handen zodat u zich kunt richten op uw doelen.",
  keywords: "DMR Finance, financiële administratie, loonadministratie, belastingadvies, boekhouding, Amsterdam",
  openGraph: {
    title: "DMR Finance - Administratie & Advies",
    description: "Professionele financiële dienstverlening voor ondernemers en particulieren",
    type: "website",
  },
}

export default function HomePage() {
  return <HomeContent />
}
