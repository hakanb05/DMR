"use client"

import Link from "next/link"
import { ArrowRight, Calculator, Users, TrendingUp, Shield, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedText from "@/components/animated-text"
import FadeInSection from "@/components/fade-in-section"
import { useLanguage } from "@/lib/contexts/language-context"
import PartnersSection from "@/components/partner-section"

export default function HomeContent() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Calculator,
      title: t("financialAdmin"),
      description: t("financialAdminDesc"),
      href: "/services/financial-administration",
    },
    {
      icon: Users,
      title: t("payrollAdmin"),
      description: t("payrollAdminDesc"),
      href: "/services/payroll-administration",
    },
    {
      icon: TrendingUp,
      title: t("taxAdvice"),
      description: t("taxAdviceDesc"),
      href: "/services/tax-advice",
    },
    {
      icon: Shield,
      title: t("individuals"),
      description: t("individualsDesc"),
      href: "/services/individuals",
    },
  ]

  const whyChooseUs = [
    { icon: Star, text: t("experience") },
    { icon: TrendingUp, text: t("optimizedFinance") },
    { icon: CheckCircle, text: t("youSendWeDo") },
    { icon: Shield, text: t("expertise") },
    { icon: Users, text: t("clients") },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text={t("heroTitle")}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            />
            <AnimatedText
              text={t("heroSubtitle")}
              className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-8"
              delay={1000}
            />

            <FadeInSection className="mb-8">
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t("heroDescription")}
              </p>
            </FadeInSection>

            <FadeInSection className="mb-12">
              <Button
                asChild
                size="lg"
                className="animated-button professional-gradient text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact?tab=appointment" className="inline-flex items-center">
                  {t("planMeeting")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t("servicesTitle")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("servicesSubtitle")}</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index}>
                <Card className="service-card h-full border-0 shadow-lg bg-white dark:bg-gray-800 flex flex-col">
                  <CardContent className="p-6 text-center flex flex-col flex-grow">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <Button asChild variant="outline" className="w-full mt-auto">
                      <Link href={service.href}>{t("moreInfo")}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">{t("whyDmrTitle")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="animated-button professional-gradient text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Link href="/contact?tab=contact">
                  {t("contactUs")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Working Method Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                {t("workingMethodTitle")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{t("workingMethodDesc")}</p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Link href="/contact?tab=quote">{t("requestQuote")}</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />
    </div>
  )
}