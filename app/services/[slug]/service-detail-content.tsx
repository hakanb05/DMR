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

  // Service-specific content using translation keys
  const serviceContent = {
    "financial-administration": {
      icon: "/images/services/financial.png",
      benefits: [
        t("financialAdminBenefit1"),
        t("financialAdminBenefit2"),
        t("financialAdminBenefit3"),
        t("financialAdminBenefit4"),
        t("financialAdminBenefit5"),
      ],
      intro: t("financialAdminDesc"),
      description: [t("financialAdminDescription1"), t("financialAdminDescription2")],
      services: [
        t("financialAdminService1"),
        t("financialAdminService2"),
        t("financialAdminService3"),
        t("financialAdminService4"),
        t("financialAdminService5"),
        t("financialAdminService6"),
      ],
    },
    "payroll-administration": {
      icon: "/images/services/loon.png",
      benefits: [
        t("payrollAdminBenefit1"),
        t("payrollAdminBenefit2"),
        t("payrollAdminBenefit3"),
        t("payrollAdminBenefit4"),
        t("payrollAdminBenefit5"),
      ],
      intro: t("payrollAdminDesc"),
      description: [t("payrollAdminDescription1"), t("payrollAdminDescription2")],
      services: [
        t("payrollAdminService1"),
        t("payrollAdminService2"),
        t("payrollAdminService3"),
        t("payrollAdminService4"),
        t("payrollAdminService5"),
        t("payrollAdminService6"),
        t("payrollAdminService7"),
      ],
    },
    "tax-advice": {
      icon: "/images/services/belasting.png",
      benefits: [
        t("taxAdviceBenefit1"),
        t("taxAdviceBenefit2"),
        t("taxAdviceBenefit3"),
        t("taxAdviceBenefit4"),
        t("taxAdviceBenefit5"),
      ],
      intro: t("taxAdviceDesc"),
      description: [t("taxAdviceDescription1"), t("taxAdviceDescription2")],
      services: [
        t("taxAdviceService1"),
        t("taxAdviceService2"),
        t("taxAdviceService3"),
        t("taxAdviceService4"),
        t("taxAdviceService5"),
        t("taxAdviceService6"),
        t("taxAdviceService7"),
      ],
    },
    "credit-mediation": {
      icon: "/images/services/krediet.png",
      benefits: [
        t("creditMediationBenefit1"),
        t("creditMediationBenefit2"),
        t("creditMediationBenefit3"),
        t("creditMediationBenefit4"),
        t("creditMediationBenefit5"),
      ],
      intro: t("creditMediationDetails"),
      description: [t("creditMediationDescription1"), t("creditMediationDescription2")],
      services: [
        t("creditMediationService1"),
        t("creditMediationService2"),
        t("creditMediationService3"),
        t("creditMediationService4"),
        t("creditMediationService5"),
        t("creditMediationService6"),
        t("creditMediationService7"),
      ],
    },
    "business-advice": {
      icon: "/images/services/belasting.png",
      benefits: [
        t("businessAdviceBenefit1"),
        t("businessAdviceBenefit2"),
        t("businessAdviceBenefit3"),
        t("businessAdviceBenefit4"),
        t("businessAdviceBenefit5"),
      ],
      intro: t("businessAdviceDetails"),
      description: [t("businessAdviceDescription1"), t("businessAdviceDescription2")],
      services: [
        t("businessAdviceService1"),
        t("businessAdviceService2"),
        t("businessAdviceService3"),
        t("businessAdviceService4"),
        t("businessAdviceService5"),
        t("businessAdviceService6"),
        t("businessAdviceService7"),
      ],
    },
    "startup-support": {
      icon: "/images/services/belasting.png",
      benefits: [
        t("startupSupportBenefit1"),
        t("startupSupportBenefit2"),
        t("startupSupportBenefit3"),
        t("startupSupportBenefit4"),
        t("startupSupportBenefit5"),
      ],
      intro: t("startupSupportDetails"),
      description: [t("startupSupportDescription1"), t("startupSupportDescription2")],
      services: [
        t("startupSupportService1"),
        t("startupSupportService2"),
        t("startupSupportService3"),
        t("startupSupportService4"),
        t("startupSupportService5"),
        t("startupSupportService6"),
        t("startupSupportService7"),
      ],
    },
    "legal-financial-advice": {
      icon: "/images/services/krediet.png",
      benefits: [
        t("legalFinancialAdviceBenefit1"),
        t("legalFinancialAdviceBenefit2"),
        t("legalFinancialAdviceBenefit3"),
        t("legalFinancialAdviceBenefit4"),
        t("legalFinancialAdviceBenefit5"),
      ],
      intro: t("legalFinancialAdviceDetails"),
      description: [t("legalFinancialAdviceDescription1"), t("legalFinancialAdviceDescription2")],
      services: [
        t("legalFinancialAdviceService1"),
        t("legalFinancialAdviceService2"),
        t("legalFinancialAdviceService3"),
        t("legalFinancialAdviceService4"),
        t("legalFinancialAdviceService5"),
        t("legalFinancialAdviceService6"),
        t("legalFinancialAdviceService7"),
      ],
    },
    individuals: {
      icon: "/images/services/loon.png",
      benefits: [
        t("individualsBenefit1"),
        t("individualsBenefit2"),
        t("individualsBenefit3"),
        t("individualsBenefit4"),
        t("individualsBenefit5"),
      ],
      intro: t("individualsDesc"),
      description: [t("individualsDescription1"), t("individualsDescription2")],
      services: [
        t("individualsService1"),
        t("individualsService2"),
        t("individualsService3"),
        t("individualsService4"),
        t("individualsService5"),
        t("individualsService6"),
        t("individualsService7"),
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
                    {t("requestQuote")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </FadeInSection>
            </div>
            <div className="lg:w-1/2">
              <FadeInSection>
                <img
                  src={currentService.icon}
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
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">{t("benefits")}</h2>
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t("aboutThisService")}</h3>
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t("whatWeDo")}</h3>
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
                        <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
                          {t("personalApproachTitle")}
                        </p>
                        <p className="text-sm text-blue-700 dark:text-blue-300">{t("personalApproachText")}</p>
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("howWeWork")}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("howWeWorkDesc")}</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t("step1Title")}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t("step1Desc")}</p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t("step2Title")}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t("step2Desc")}</p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t("step3Title")}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t("step3Desc")}</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t("readyToStart")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{t("readyToStartCta")}</p>
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
