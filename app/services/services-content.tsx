"use client"

import Link from "next/link"
import { Calculator, Users, TrendingUp, Shield, Building, Lightbulb, Scale, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FadeInSection from "@/components/fade-in-section"
import AnimatedText from "@/components/animated-text"
import { useLanguage } from "@/lib/contexts/language-context"

export default function ServicesContent() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Calculator,
      title: "Financiële Administratie",
      description: "Krijg grip op uw financiën en verbeter uw bedrijfsresultaten.",
      details:
        "Onze kernactiviteit betreft het verzorgen van de financiële administratie. Van de diensten die wij bieden is de verwerking van uw administratie voor de aangifte omzetbelasting en inkomstenbelasting onze voornaamste bezigheid.",
      href: "/services/financial-administration",
    },
    {
      icon: Users,
      title: "Loonadministratie",
      description: "Verlicht uw lasten en zorg voor loonadministratie zonder zorgen.",
      details:
        "Indien u personeel in dienst hebt of van plan bent personeel aan te nemen, krijgt u te maken met de loonadministratie. Hierbij moet u denken aan het verlonen van het personeel en het indienen van de loonaangiften.",
      href: "/services/payroll-administration",
    },
    {
      icon: TrendingUp,
      title: "Belastingadvies",
      description: "Minimaliseer belastingen met ons deskundig belastingadvies.",
      details:
        "Aangezien de meeste van onze diensten gebaseerd zijn op belastingaangiften, bieden we de mogelijkheid op elke relevante dienst de meest gunstige belastingpositie te behalen.",
      href: "/services/tax-advice",
    },
    {
      icon: Building,
      title: "Kredietbemiddeling",
      description: "Ontdek hoe onze kredietbemiddeling uw financiële groei kan versnellen.",
      details:
        "Wij helpen u bij het vinden van de juiste financieringsoplossingen voor uw bedrijf. Van bedrijfsleningen tot hypotheken, wij bemiddelen voor de beste voorwaarden.",
      href: "/services/credit-mediation",
    },
    {
      icon: Lightbulb,
      title: "Bedrijfsadvies en -planning",
      description: "Optimaliseer uw bedrijfsstrategie en toekomstige groei.",
      details:
        "Strategisch advies voor ondernemers die hun bedrijf willen laten groeien. Wij helpen bij bedrijfsplanning, financiële prognoses en strategische beslissingen.",
      href: "/services/business-advice",
    },
    {
      icon: Shield,
      title: "Start-up ondersteuning",
      description: "Laat uw start-up gedijen met onze deskundige ondersteuning.",
      details:
        "Speciaal voor startende ondernemers bieden wij uitgebreide ondersteuning bij het opzetten van uw administratie en het maken van de juiste keuzes vanaf het begin.",
      href: "/services/startup-support",
    },
    {
      icon: Scale,
      title: "Juridisch en Financieel advies",
      description: "Bescherm uw bedrijf en maximaliseer financiële kansen.",
      details:
        "Combinatie van juridische en financiële expertise om uw bedrijf optimaal te beschermen en kansen te benutten in een complexe regelgeving.",
      href: "/services/legal-financial-advice",
    },
    {
      icon: User,
      title: "Particulieren",
      description: "Ervaar met particuliere financiën, verbeter uw financiële toekomst.",
      details:
        "Ook voor u als particulier staan wij u bij. Wij kunnen u assisteren bij het indienen van uw particuliere aangifte inkomstenbelasting.",
      href: "/services/individuals",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText
            text={t("servicesTitle")}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
          />
          <FadeInSection>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">{t("servicesSubtitle")}</p>
          </FadeInSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index}>
                <Card className="service-card h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-grow">
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{service.description}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">{service.details}</p>
                    <Button asChild className="w-full mt-auto">
                      <Link href={service.href}>Meer informatie</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Klaar om te beginnen?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Neem contact met ons op en ontdek hoe DMR Finance uw bedrijf kan ondersteunen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="professional-gradient text-white px-8 py-4">
                <Link href="/contact?tab=appointment">{t("planMeeting")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4"
              >
                <Link href="/contact?tab=quote">{t("requestQuote")}</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
