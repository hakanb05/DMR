"use client"

import Link from "next/link"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FadeInSection from "@/components/fade-in-section"
import AnimatedText from "@/components/animated-text"
import { useLanguage } from "@/lib/contexts/language-context"

export default function PricingContent() {
  const { t } = useLanguage()

  const pricingPlans = [
    {
      name: "ZZP",
      price: "125",
      popular: false,
      features: [
        t("pricingFeature200BankTransactions"),
        t("pricingFeature200InvoicesPerYear"),
        t("pricingFeatureWithVatAndTax"),
        t("pricingFeatureBestForZZP"),
        t("pricingFeatureExcludingPersonnel"),
      ],
    },
    {
      name: "EENMANSZAAK",
      price: "150",
      popular: true,
      features: [
        t("pricingFeature500BankTransactions"),
        t("pricingFeature300InvoicesPerYear"),
        t("pricingFeatureWithVatAndTax"),
        t("pricingFeatureEenmanszaakBookkeeping"),
        t("pricingFeatureExcludingPersonnel"),
        t("zakelijkAuto"),
        t("posthelp"),
      ],
    },
    {
      name: "V.O.F",
      price: "185",
      showFromText: true,
      popular: false,
      features: [
        t("pricingFeature500BankTransactions"),
        t("pricingFeature300InvoicesPerYear"),
        t("pricingFeatureWithVatAndTax"),
        t("pricingFeatureMaxTwoPartners"),
        t("pricingFeatureExcludingPersonnel"),
        t("zakelijkAuto"),
        t("posthelp"),
      ],
    },
    {
      name: "B.V.",
      price: "325",
      showFromText: true,
      popular: false,
      features: [
        t("pricingFeature500BankTransactions"),
        t("pricingFeature300InvoicesPerYear"),
        t("pricingFeatureWithVatAndTax"),
        t("pricingFeatureIncludingDGAPayslip"),
        t("pricingFeatureExcludingPersonnel"),
        t("zakelijkAuto"),
        t("posthelp"),
      ],
    },
    {
      name: "PERSONEEL",
      price: "50",
      popular: false,
      features: [
        t("pricingFeaturePayslip"),
        t("pricingFeature4Personnel"),
        t("pricingFeatureIncludingInOut"),
        t("pricingFeatureAnnualStatement"),
        t("pricingFeaturePayrollJournal"),
        t("pricingFeaturePensionAdmin"),
        t("zakelijkAuto"),
        t("posthelp"),
      ],
    },
    {
      name: t("particulierenTitle"),
      price: t("particulierenPrice"),
      popular: false,
      features: [
        t("particulierenFeature1"),
        t("particulierenFeature2"),
        t("particulierenFeature3"),
        t("particulierenFeature4"),
        t("particulierenFeature5"),
        t("particulierenFeature6"),
        t("posthelp"),
      ],
    },
    {
      name: t("startupSupportTitle"),
      price: t("pricingNOTK"),
      smallPriceText: true,
      popular: false,
      features: [
        t("startupSupportShortDesc"),
        t("startupSupportFeature1"),
        t("startupSupportFeature2"),
        t("startupSupportFeature3"),
        t("startupSupportFeature4"),
        t("startupSupportFeature5"),
        t("posthelp"),
      ],
    },
    {
      name: t("legalFinancialAdviceTitle"),
      price: t("pricingNOTK"),
      smallPriceText: true,
      popular: false,
      features: [
        t("legalFinancialAdviceShortDesc"),
        t("legalFinancialAdviceFeature1"),
        t("legalFinancialAdviceFeature2"),
        t("legalFinancialAdviceFeature3"),
        t("legalFinancialAdviceFeature4"),
        t("legalFinancialAdviceFeature5"),
        t("legalFinancialAdviceFeature6"),
        t("legalFinancialAdviceFeature7"),
        t("legalFinancialAdviceFeature8"),
        t("posthelp"),
      ],
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText
            text={t("pricing")}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
          />
          <FadeInSection>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("pricingQuestionsDesc")}</p>
          </FadeInSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FadeInSection key={index}>
                <Card
                  className={`service-card h-full relative flex flex-col ${plan.popular ? "border-blue-500 border-2" : "border-gray-200 dark:border-gray-700"}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      {t("mostPopular")}
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                    <div className="mt-4">
                      {plan.showFromText && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">{t("from")}</span>
                      )}
                      {!plan.smallPriceText && (
                        <span className="font-bold text-4xl text-blue-600 dark:text-blue-400">
                          €{plan.price}
                        </span>
                      )}
                      {!plan.smallPriceText && (
                        <span className="text-gray-600 dark:text-gray-300 ml-2">{t("perMonth")}</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-grow">
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full mt-auto ${plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"}`}
                    >
                      <Link href="/contact?tab=quote">{t("requestQuote")}</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              {t("pricingQuestions")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{t("pricingQuestionsDesc")}</p>
            <Button asChild size="lg" className="professional-gradient text-white px-8 py-4">
              <Link href="/contact?tab=contact">{t("contactUs")}</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
