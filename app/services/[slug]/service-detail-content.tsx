"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
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
      content: `
        <p>Onze kernwerkzaamheid betreft het verzorgen van de financiële administratie. Van de diensten die wij bieden is de verwerking van uw administratie voor de aangifte omzetbelasting en inkomstenbelasting onze voornaamste bezigheid.</p>
        
        <p>Een goede financiële administratie is de basis voor het succes van uw onderneming. Het geeft u inzicht in uw financiële positie, helpt bij het nemen van strategische beslissingen en zorgt ervoor dat u voldoet aan alle wettelijke verplichtingen.</p>
        
        <p>Bij DMR Finance nemen wij deze complexe taak volledig uit handen. Wij zorgen voor een nauwkeurige verwerking van al uw financiële gegevens, van facturen en bonnetjes tot bankafschriften en kasboeken. Onze ervaren professionals zorgen ervoor dat uw administratie altijd up-to-date en compliant is.</p>
        
        <h3>Wat wij voor u kunnen doen:</h3>
        <ul>
          <li>Verwerken van uw dagelijkse administratie</li>
          <li>Opstellen en indienen van BTW-aangiftes</li>
          <li>Debiteuren- en crediteurenbeheer</li>
          <li>Opstellen van jaarrekeningen</li>
          <li>Financiële rapportages en analyses</li>
          <li>Persoonlijk advies over uw financiële situatie</li>
        </ul>
      `,
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
      content: `
        <p>Indien u personeel in dienst hebt of van plan bent personeel aan te nemen, krijgt u te maken met de loonadministratie. Hierbij moet u denken aan het verlonen van het personeel en het indienen van de loonaangiften.</p>
        
        <p>Een correcte loonadministratie is essentieel voor uw bedrijf. Het zorgt ervoor dat uw medewerkers op tijd en correct worden betaald, en dat u voldoet aan alle wettelijke verplichtingen op het gebied van belastingen en sociale premies.</p>
        
        <p>Bij DMR Finance nemen wij de volledige loonadministratie uit handen. Onze specialisten zorgen ervoor dat alle salarissen correct worden berekend en uitbetaald, en dat alle aangiften op tijd worden ingediend.</p>
        
        <h3>Wat wij voor u kunnen doen:</h3>
        <ul>
          <li>Opstellen en verwerken van salarissen</li>
          <li>Verzorgen van loonstroken</li>
          <li>Indienen van loonaangiften</li>
          <li>Jaaropgaven voor werknemers</li>
          <li>Bijhouden van personeelsdossiers</li>
          <li>Advies over arbeidsvoorwaarden en CAO's</li>
          <li>Begeleiding bij in- en uitdiensttreding</li>
        </ul>
      `,
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
      content: `
        <p>Aangezien de meeste van onze diensten gebaseerd zijn op belastingaangiften, bieden we de mogelijkheid op elke relevante dienst de meest gunstige belastingpositie te behalen.</p>
        
        <p>Belastingen vormen een aanzienlijke kostenpost voor zowel bedrijven als particulieren. Met deskundig belastingadvies kunt u echter aanzienlijk besparen en uw fiscale positie optimaliseren.</p>
        
        <p>Bij DMR Finance helpen onze fiscale experts u om binnen de wettelijke kaders uw belastingdruk te minimaliseren. Wij houden de veranderende fiscale wetgeving nauwlettend in de gaten en passen onze adviezen hierop aan.</p>
        
        <h3>Wat wij voor u kunnen doen:</h3>
        <ul>
          <li>Opstellen en indienen van belastingaangiften</li>
          <li>Fiscale planning en optimalisatie</li>
          <li>Advies over BTW-vraagstukken</li>
          <li>Begeleiding bij fiscale controles</li>
          <li>Advies over bedrijfsopvolging en -overdracht</li>
          <li>Fiscale aspecten van investeringen</li>
          <li>Internationale fiscale vraagstukken</li>
        </ul>
      `,
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
      content: `
        <p>Wij helpen u bij het vinden van de juiste financieringsoplossingen voor uw bedrijf. Van bedrijfsleningen tot hypotheken, wij bemiddelen voor de beste voorwaarden.</p>
        
        <p>Toegang tot kapitaal is cruciaal voor de groei en ontwikkeling van uw onderneming. Of u nu wilt investeren in nieuwe apparatuur, een pand wilt aanschaffen of werkkapitaal nodig heeft, de juiste financiering is essentieel.</p>
        
        <p>Als onafhankelijke kredietbemiddelaar helpt DMR Finance u bij het vinden van de meest geschikte financieringsoplossing. Wij hebben toegang tot een breed netwerk van financiers en kennen de markt door en door.</p>
        
        <h3>Wat wij voor u kunnen doen:</h3>
        <ul>
          <li>Analyse van uw financieringsbehoefte</li>
          <li>Advies over verschillende financieringsvormen</li>
          <li>Opstellen van een financieringsaanvraag</li>
          <li>Onderhandelen met financiers</li>
          <li>Begeleiding tijdens het gehele aanvraagproces</li>
          <li>Herfinanciering van bestaande leningen</li>
          <li>Advies over lease- en huurkoopconstructies</li>
        </ul>
      `,
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
      content: `
        <p>Strategisch advies voor ondernemers die hun bedrijf willen laten groeien. Wij helpen bij bedrijfsplanning, financiële prognoses en strategische beslissingen.</p>
        
        <p>Een duidelijke strategie en goede planning zijn essentieel voor het succes en de groei van uw onderneming. Met professioneel bedrijfsadvies kunt u weloverwogen beslissingen nemen en uw doelen effectiever bereiken.</p>
        
        <p>Bij DMR Finance bieden wij uitgebreid bedrijfsadvies op maat. Onze adviseurs hebben jarenlange ervaring in verschillende sectoren en helpen u bij het ontwikkelen en implementeren van effectieve strategieën.</p>
        
        <h3>Wat wij voor u kunnen doen:</h3>
        <ul>
          <li>Opstellen van bedrijfsplannen</li>
          <li>Financiële prognoses en scenario-analyses</li>
          <li>Kostenanalyse en efficiëntieverbeteringen</li>
          <li>Advies over bedrijfsstructuur en -organisatie</li>
          <li>Begeleiding bij groei en expansie</li>
          <li>Strategische planning en doelstellingen</li>
          <li>Benchmarking en concurrentieanalyse</li>
        </ul>
      `,
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
      content: `
        <p>Speciaal voor startende ondernemers bieden wij uitgebreide ondersteuning bij het opzetten van uw administratie en het maken van de juiste keuzes vanaf het begin.</p>
        
        <p>De start van een onderneming is een spannende maar ook uitdagende fase. Er moeten veel beslissingen worden genomen die bepalend zijn voor de toekomst van uw bedrijf. Professionele ondersteuning kan u helpen om de juiste keuzes te maken en kostbare fouten te voorkomen.</p>
        
        <p>DMR Finance biedt specifieke ondersteuning voor startups en beginnende ondernemers. Wij helpen u bij het leggen van een solide financiële basis voor uw onderneming en begeleiden u bij de eerste stappen als ondernemer.</p>
        
        <h3>Wat wij voor u kunnen doen:</h3>
        <ul>
          <li>Advies over de keuze van rechtsvorm</li>
          <li>Opzetten van uw financiële administratie</li>
          <li>Begeleiding bij inschrijving KvK en Belastingdienst</li>
          <li>Opstellen van een ondernemingsplan</li>
          <li>Financiële prognoses en budgettering</li>
          <li>Advies over subsidies en financieringsmogelijkheden</li>
          <li>Belastingadvies voor startende ondernemers</li>
        </ul>
      `,
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
      content: `
        <p>Combinatie van juridische en financiële expertise om uw bedrijf optimaal te beschermen en kansen te benutten in een complexe regelgeving.</p>
        
        <p>In het huidige complexe zakelijke landschap zijn juridische en financiële aspecten vaak nauw met elkaar verweven. Een geïntegreerde aanpak is daarom essentieel om uw bedrijf optimaal te beschermen en kansen te benutten.</p>
        
        <p>DMR Finance biedt een unieke combinatie van juridisch en financieel advies. Onze experts hebben kennis van beide vakgebieden en kunnen u daardoor holistisch adviseren over complexe zakelijke vraagstukken.</p>
        
        <h3>Wat wij voor u kunnen doen:</h3>
        <ul>
          <li>Juridische structurering van uw onderneming</li>
          <li>Opstellen en beoordelen van contracten</li>
          <li>Advies over algemene voorwaarden</li>
          <li>Begeleiding bij geschillen en conflicten</li>
          <li>Compliance met wet- en regelgeving</li>
          <li>Risicomanagement en -beperking</li>
          <li>Advies over intellectueel eigendom</li>
        </ul>
      `,
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
      content: `
        <p>Ook voor u als particulier staan wij u bij. Wij kunnen u assisteren bij het indienen van uw particuliere aangifte inkomstenbelasting.</p>
        
        <p>Ook als particulier kunt u te maken krijgen met complexe financiële en fiscale vraagstukken. Of het nu gaat om uw belastingaangifte, vermogensplanning of financiële beslissingen, professioneel advies kan u helpen om de juiste keuzes te maken.</p>
        
        <p>Bij DMR Finance bieden wij uitgebreide dienstverlening voor particulieren. Onze adviseurs helpen u bij het optimaliseren van uw financiële situatie en het minimaliseren van uw belastingdruk.</p>
        
        <h3>Wat wij voor u kunnen doen:</h3>
        <ul>
          <li>Opstellen en indienen van uw belastingaangifte</li>
          <li>Advies over fiscale aftrekposten</li>
          <li>Begeleiding bij bezwaar- en beroepsprocedures</li>
          <li>Vermogensplanning en -beheer</li>
          <li>Advies over schenkingen en erfenissen</li>
          <li>Hulp bij aanvragen van toeslagen</li>
          <li>Financiële planning voor uw toekomst</li>
        </ul>
      `,
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

      {/* Content Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div
              className="prose prose-lg dark:prose-invert mx-auto"
              dangerouslySetInnerHTML={{ __html: currentService.content }}
            />
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Klaar om te beginnen?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Neem contact met ons op voor een vrijblijvend gesprek over hoe wij u kunnen helpen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="professional-gradient text-white px-8 py-4">
                <Link href="/contact">Plan een gesprek</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4"
              >
                <Link href="/quote">Vraag een offerte aan</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
