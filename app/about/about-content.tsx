"use client"

import { Users, Award, Clock, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import FadeInSection from "@/components/fade-in-section"
import AnimatedText from "@/components/animated-text"
import { useLanguage } from "@/lib/contexts/language-context"

export default function AboutContent() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Users,
      title: t("personalApproach"),
      description: t("personalApproachDesc"),
    },
    {
      icon: Award,
      title: t("expertiseValue"),
      description: t("expertiseValueDesc"),
    },
    {
      icon: Clock,
      title: t("reliability"),
      description: t("reliabilityDesc"),
    },
    {
      icon: Heart,
      title: t("commitment"),
      description: t("commitmentDesc"),
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text={t("aboutTitle")}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
            />
            <FadeInSection>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t("aboutDescription")}
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              {t("ourValues")}
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInSection key={index}>
                <Card className="service-card h-full border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                {t("ourStory")}
              </h2>
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{t("storyParagraph1")}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{t("storyParagraph2")}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t("storyParagraph3")}</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  )
}
