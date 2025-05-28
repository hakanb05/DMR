"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Target, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FadeInSection from "@/components/fade-in-section"
import AnimatedText from "@/components/animated-text"
import { useLanguage } from "@/lib/contexts/language-context"

interface ServiceDetailContentProps {
  service: {
    slug: string
    title: string
    description: string
  }
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const { t } = useLanguage()

  // Service-specific content
  const serviceContent = {
    "financial-administration": {
      icon: "/placeholder.svg?height=200&width=200&query=financial%20document",
      benefits: [
        "Volledige verwerking van uw financiële administratie",
        "Tijdige en correcte BTW-aangiftes",
        "Inzicht in uw financiële positie",
        "Jaarrekeningen en financiële rapportages",
        "Persoonlijke begeleiding en advies",
      ],
      intro:
        "Onze kernwerkzaamheid betreft het verzorgen van de financiële administratie. Van de diensten die wij bieden is de verwerking van uw administratie voor de aangifte omzetbelasting en inkomstenbelasting onze voornaamste bezigheid.",
      description: [
        "Een goede financiële administratie is de basis voor het succes van uw onderneming. Het geeft u inzicht in uw financiële positie, helpt bij het nemen van strategische beslissingen en zorgt ervoor dat u voldoet aan alle wettelijke verplichtingen.",
        "Bij DMR Finance nemen wij deze complexe taak volledig uit handen. Wij zorgen voor een nauwkeurige verwerking van al uw financiële gegevens, van facturen en bonnetjes tot bankafschriften en kasboeken. Onze ervaren professionals zorgen ervoor dat uw administratie altijd up-to-date en compliant is.",
      ],
      services: [
        "Verwerken van uw dagelijkse administratie",
        "Opstellen en indienen van BTW-aangiftes",
        "Debiteuren- en crediteurenbeheer",
        "Opstellen van jaarrekeningen",
        "Financiële rapportages en analyses",
        "Persoonlijk advies over uw financiële situatie",
      ],
    },
    "payroll-administration": {
      icon: "/placeholder.svg?height=200&width=200&query=payroll%20document",
      benefits: [
        "Correcte en tijdige salarisverwerking",
        "Naleving van alle wet- en regelgeving",
        "Verzorging van alle loonaangiften",
        "Jaaropgaven en loonstroken",
        "Personeelsdossiers en -administratie",
      ],
      intro:
        "Indien u personeel in dienst hebt of van plan bent personeel aan te nemen, krijgt u te maken met de loonadministratie. Hierbij moet u denken aan het verlonen van het personeel en het indienen van de loonaangiften.",
      description: [
        "Een correcte loonadministratie is essentieel voor uw bedrijf. Het zorgt ervoor dat uw medewerkers op tijd en correct worden betaald, en dat u voldoet aan alle wettelijke verplichtingen op het gebied van belastingen en sociale premies.",
        "Bij DMR Finance nemen wij de volledige loonadministratie uit handen. Onze specialisten zorgen ervoor dat alle salarissen correct worden berekend en uitbetaald, en dat alle aangiften op tijd worden ingediend.",
      ],
      services: [
        "Opstellen en verwerken van salarissen",
        "Verzorgen van loonstroken",
        "Indienen van loonaangiften",
        "Jaaropgaven voor werknemers",
        "Bijhouden van personeelsdossiers",
        "Advies over arbeidsvoorwaarden en CAO's",
        "Begeleiding bij in- en uitdiensttreding",
      ],
    },
    "tax-advice": {
      icon: "/placeholder.svg?height=200&width=200&query=tax%20advice",
      benefits: [
        "Minimalisatie van uw belastingdruk",
        "Proactief fiscaal advies",
        "Optimale fiscale structuur",
        "Begeleiding bij belastingcontroles",
        "Up-to-date kennis van fiscale wetgeving",
      ],
      intro:
        "Aangezien de meeste van onze diensten gebaseerd zijn op belastingaangiften, bieden we de mogelijkheid op elke relevante dienst de meest gunstige belastingpositie te behalen.",
      description: [
        "Belastingen vormen een aanzienlijke kostenpost voor zowel bedrijven als particulieren. Met deskundig belastingadvies kunt u echter aanzienlijk besparen en uw fiscale positie optimaliseren.",
        "Bij DMR Finance helpen onze fiscale experts u om binnen de wettelijke kaders uw belastingdruk te minimaliseren. Wij houden de veranderende fiscale wetgeving nauwlettend in de gaten en passen onze adviezen hierop aan.",
      ],
      services: [
        "Opstellen en indienen van belastingaangiften",
        "Fiscale planning en optimalisatie",
        "Advies over BTW-vraagstukken",
        "Begeleiding bij fiscale controles",
        "Advies over bedrijfsopvolging en -overdracht",
        "Fiscale aspecten van investeringen",
        "Internationale fiscale vraagstukken",
      ],
    },
    "credit-mediation": {
      icon: "/placeholder.svg?height=200&width=200&query=financial%20growth",
      benefits: [
        "Toegang tot diverse financieringsopties",
        "Onafhankelijk advies over financieringsmogelijkheden",
        "Begeleiding bij het aanvraagproces",
        "Onderhandeling over gunstige voorwaarden",
        "Snellere toegang tot kapitaal",
      ],
      intro:
        "Wij helpen u bij het vinden van de juiste financieringsoplossingen voor uw bedrijf. Van bedrijfsleningen tot hypotheken, wij bemiddelen voor de beste voorwaarden.",
      description: [
        "Toegang tot kapitaal is cruciaal voor de groei en ontwikkeling van uw onderneming. Of u nu wilt investeren in nieuwe apparatuur, een pand wilt aanschaffen of werkkapitaal nodig heeft, de juiste financiering is essentieel.",
        "Als onafhankelijke kredietbemiddelaar helpt DMR Finance u bij het vinden van de meest geschikte financieringsoplossing. Wij hebben toegang tot een breed netwerk van financiers en kennen de markt door en door.",
      ],
      services: [
        "Analyse van uw financieringsbehoefte",
        "Advies over verschillende financieringsvormen",
        "Opstellen van een financieringsaanvraag",
        "Onderhandelen met financiers",
        "Begeleiding tijdens het gehele aanvraagproces",
        "Herfinanciering van bestaande leningen",
        "Advies over lease- en huurkoopconstructies",
      ],
    },
    "business-advice": {
      icon: "/placeholder.svg?height=200&width=200&query=business%20strategy",
      benefits: [
        "Strategische bedrijfsplanning",
        "Financiële prognoses en budgettering",
        "Kostenanalyse en -optimalisatie",
        "Advies over bedrijfsstructuur",
        "Begeleiding bij groei en expansie",
      ],
      intro:
        "Strategisch advies voor ondernemers die hun bedrijf willen laten groeien. Wij helpen bij bedrijfsplanning, financiële prognoses en strategische beslissingen.",
      description: [
        "Een duidelijke strategie en goede planning zijn essentieel voor het succes en de groei van uw onderneming. Met professioneel bedrijfsadvies kunt u weloverwogen beslissingen nemen en uw doelen effectiever bereiken.",
        "Bij DMR Finance bieden wij uitgebreid bedrijfsadvies op maat. Onze adviseurs hebben jarenlange ervaring in verschillende sectoren en helpen u bij het ontwikkelen en implementeren van effectieve strategieën.",
      ],
      services: [
        "Opstellen van bedrijfsplannen",
        "Financiële prognoses en scenario-analyses",
        "Kostenanalyse en efficiëntieverbeteringen",
        "Advies over bedrijfsstructuur en -organisatie",
        "Begeleiding bij groei en expansie",
        "Strategische planning en doelstellingen",
        "Benchmarking en concurrentieanalyse",
      ],
    },
    "startup-support": {
      icon: "/placeholder.svg?height=200&width=200&query=startup%20launch",
      benefits: [
        "Begeleiding bij het opzetten van uw administratie",
        "Advies over rechtsvorm en bedrijfsstructuur",
        "Ondersteuning bij financiële planning",
        "Hulp bij het aanvragen van subsidies",
        "Netwerk van relevante partners",
      ],
      intro:
        "Speciaal voor startende ondernemers bieden wij uitgebreide ondersteuning bij het opzetten van uw administratie en het maken van de juiste keuzes vanaf het begin.",
      description: [
        "De start van een onderneming is een spannende maar ook uitdagende fase. Er moeten veel beslissingen worden genomen die bepalend zijn voor de toekomst van uw bedrijf. Professionele ondersteuning kan u helpen om de juiste keuzes te maken en kostbare fouten te voorkomen.",
        "DMR Finance biedt specifieke ondersteuning voor startups en beginnende ondernemers. Wij helpen u bij het leggen van een solide financiële basis voor uw onderneming en begeleiden u bij de eerste stappen als ondernemer.",
      ],
      services: [
        "Advies over de keuze van rechtsvorm",
        "Opzetten van uw financiële administratie",
        "Begeleiding bij inschrijving KvK en Belastingdienst",
        "Opstellen van een ondernemingsplan",
        "Financiële prognoses en budgettering",
        "Advies over subsidies en financieringsmogelijkheden",
        "Belastingadvies voor startende ondernemers",
      ],
    },
    "legal-financial-advice": {
      icon: "/placeholder.svg?height=200&width=200&query=legal%20financial%20advice",
      benefits: [
        "Geïntegreerd juridisch en financieel advies",
        "Bescherming van uw bedrijfsbelangen",
        "Optimalisatie van contracten en overeenkomsten",
        "Risicomanagement en -beperking",
        "Compliance met wet- en regelgeving",
      ],
      intro:
        "Combinatie van juridische en financiële expertise om uw bedrijf optimaal te beschermen en kansen te benutten in een complexe regelgeving.",
      description: [
        "In het huidige complexe zakelijke landschap zijn juridische en financiële aspecten vaak nauw met elkaar verweven. Een geïntegreerde aanpak is daarom essentieel om uw bedrijf optimaal te beschermen en kansen te benutten.",
        "DMR Finance biedt een unieke combinatie van juridisch en financieel advies. Onze experts hebben kennis van beide vakgebieden en kunnen u daardoor holistisch adviseren over complexe zakelijke vraagstukken.",
      ],
      services: [
        "Juridische structurering van uw onderneming",
        "Opstellen en beoordelen van contracten",
        "Advies over algemene voorwaarden",
        "Begeleiding bij geschillen en conflicten",
        "Compliance met wet- en regelgeving",
        "Risicomanagement en -beperking",
        "Advies over intellectueel eigendom",
      ],
    },
    individuals: {
      icon: "/placeholder.svg?height=200&width=200&query=personal%20finance",
      benefits: [
        "Persoonlijke begeleiding bij belastingaangiften",
        "Optimalisatie van uw fiscale positie",
        "Advies over vermogensplanning",
        "Begeleiding bij financiële beslissingen",
        "Hulp bij toeslagen en subsidies",
      ],
      intro:
        "Ook voor u als particulier staan wij u bij. Wij kunnen u assisteren bij het indienen van uw particuliere aangifte inkomstenbelasting.",
      description: [
        "Ook als particulier kunt u te maken krijgen met complexe financiële en fiscale vraagstukken. Of het nu gaat om uw belastingaangifte, vermogensplanning of financiële beslissingen, professioneel advies kan u helpen om de juiste keuzes te maken.",
        "Bij DMR Finance bieden wij uitgebreide dienstverlening voor particulieren. Onze adviseurs helpen u bij het optimaliseren van uw financiële situatie en het minimaliseren van uw belastingdruk.",
      ],
      services: [
        "Opstellen en indienen van uw belastingaangifte",
        "Advies over fiscale aftrekposten",
        "Begeleiding bij bezwaar- en beroepsprocedures",
        "Vermogensplanning en -beheer",
        "Advies over schenkingen en erfenissen",
        "Hulp bij aanvragen van toeslagen",
        "Financiële planning voor uw toekomst",
      ],
    },
  }

  // Get content for current service
  const currentService = serviceContent[service.slug as keyof typeof serviceContent]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <AnimatedText
                text={service.title}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              />
              <FadeInSection>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{service.description}</p>
                <Button asChild size="lg" className="professional-gradient text-white px-8 py-4">
                  <Link href="/contact">
                    Vraag een offerte aan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </FadeInSection>
            </div>
            <div className="lg:w-1/2">
              <FadeInSection>
                <img
                  src={currentService.icon || "/placeholder.svg"}
                  alt={service.title}
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Voordelen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentService.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="mt-1">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Content Section - Redesigned */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description */}
            <FadeInSection>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Over deze dienst</h3>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium leading-relaxed">
                      {currentService.intro}
                    </p>

                    {currentService.description.map((paragraph, index) => (
                      <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>

            {/* Right Column - Services List */}
            <FadeInSection>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Wat wij voor u doen</h3>
                  </div>

                  <div className="space-y-4">
                    {currentService.services.map((serviceItem, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="mt-1.5">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{serviceItem}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">Persoonlijke aanpak</p>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Elke situatie is uniek. Daarom stemmen wij onze dienstverlening volledig af op uw specifieke
                          behoeften en doelstellingen.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Hoe werken wij?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Ons proces is transparant en efficiënt, zodat u altijd weet waar u aan toe bent.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Kennismaking</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We bespreken uw situatie en wensen tijdens een vrijblijvend gesprek.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Op maat advies</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We stellen een persoonlijk plan op dat perfect aansluit bij uw behoeften.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Uitvoering</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We nemen de werkzaamheden uit handen en houden u op de hoogte van de voortgang.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Klaar om te beginnen?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Neem contact met ons op voor een vrijblijvend gesprek over hoe wij u kunnen helpen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="professional-gradient text-white px-8 py-4">
                <Link href="/contact?tab=appointment">Plan een gesprek</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4"
              >
                <Link href="/contact?tab=quote">Vraag een offerte aan</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
