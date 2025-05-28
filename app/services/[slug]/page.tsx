import type { Metadata } from "next"
import ServiceDetailContent from "./service-detail-content"
import { notFound } from "next/navigation"

// Define all available services
const services = [
  {
    slug: "financial-administration",
    title: "Financiële Administratie",
    description: "Krijg grip op uw financiën en verbeter uw bedrijfsresultaten.",
  },
  {
    slug: "payroll-administration",
    title: "Loonadministratie",
    description: "Verlicht uw lasten en zorg voor loonadministratie zonder zorgen.",
  },
  {
    slug: "tax-advice",
    title: "Belastingadvies",
    description: "Minimaliseer belastingen met ons deskundig belastingadvies.",
  },
  {
    slug: "credit-mediation",
    title: "Kredietbemiddeling",
    description: "Ontdek hoe onze kredietbemiddeling uw financiële groei kan versnellen.",
  },
  {
    slug: "business-advice",
    title: "Bedrijfsadvies en -planning",
    description: "Optimaliseer uw bedrijfsstrategie en toekomstige groei.",
  },
  {
    slug: "startup-support",
    title: "Start-up ondersteuning",
    description: "Laat uw start-up gedijen met onze deskundige ondersteuning.",
  },
  {
    slug: "legal-financial-advice",
    title: "Juridisch en Financieel advies",
    description: "Bescherm uw bedrijf en maximaliseer financiële kansen.",
  },
  {
    slug: "individuals",
    title: "Particulieren",
    description: "Ervaar met particuliere financiën, verbeter uw financiële toekomst.",
  },
]

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: "Dienst niet gevonden - DMR Finance",
    }
  }

  return {
    title: `${service.title} - DMR Finance`,
    description: service.description,
  }
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailContent service={service} />
}
