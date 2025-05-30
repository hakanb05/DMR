"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, FileText, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FadeInSection from "@/components/fade-in-section"
import AnimatedText from "@/components/animated-text"
import { useLanguage } from "@/lib/contexts/language-context"

interface ContactContentProps {
  initialTab: string
}

export default function ContactContent({ initialTab }: ContactContentProps) {
  const { t } = useLanguage()

  // Determine the correct initial tab
  const getInitialTab = (tab: string) => {
    if (tab === "appointment" || tab === "quote") return tab
    return "contact"
  }

  const [activeTab, setActiveTab] = useState(getInitialTab(initialTab))
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    businessType: "",
    services: [] as string[],
    message: "",
  })

  const [quoteData, setQuoteData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    businessType: "",
    employees: "",
    monthlyTransactions: "",
    yearlyInvoices: "",
    services: [] as string[],
    currentAccountant: "",
    startDate: "",
    additionalInfo: "",
  })

  const [contactFormData, setContactFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const services = [
    "Financiële administratie",
    "Loonadministratie",
    "Belastingadvies",
    "Kredietbemiddeling",
    "Bedrijfsadvies en -planning",
    "Start-up ondersteuning",
    "Juridisch en financieel advies",
    "Particuliere ondersteuning",
  ]

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter((s) => s !== service),
    }))
  }

  const handleQuoteServiceChange = (service: string, checked: boolean) => {
    setQuoteData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter((s) => s !== service),
    }))
  }

  const sendEmail = async (type: string, data: any) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, data }),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      return await response.json()
    } catch (error) {
      console.error("Error sending email:", error)
      throw error
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await sendEmail("contact", contactFormData)
      setSubmitStatus({
        type: "success",
        message: t("successMessage"),
      })
      setContactFormData({ name: "", company: "", email: "", phone: "", message: "" })
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t("errorMessage"),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await sendEmail("appointment", formData)
      setSubmitStatus({
        type: "success",
        message: t("appointmentSuccessMessage"),
      })
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        businessType: "",
        services: [],
        message: "",
      })
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t("appointmentErrorMessage"),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await sendEmail("quote", quoteData)
      setSubmitStatus({
        type: "success",
        message: t("quoteSuccessMessage"),
      })
      setQuoteData({
        name: "",
        company: "",
        email: "",
        phone: "",
        businessType: "",
        employees: "",
        monthlyTransactions: "",
        yearlyInvoices: "",
        services: [],
        currentAccountant: "",
        startDate: "",
        additionalInfo: "",
      })
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t("quoteErrorMessage"),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get today's date in YYYY-MM-DD format for min date on date inputs
  const today = new Date().toISOString().split("T")[0]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText
            text={t("contactTitle")}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
          />
          <FadeInSection>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("makeContact")}</p>
          </FadeInSection>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <FadeInSection>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{t("contactInfo")}</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{t("email")}</h3>
                      <a href="mailto:info@dmrfinance.nl" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Info@dmradministratie.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{t("phone")}</h3>
                      <p className="text-gray-600 dark:text-gray-300">06 8529 5247</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-2 text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                      >
                        <a href={`https://wa.me/31638824882?text=${t("whatsappMessage")}`}>
                          <span>{t("quickContactWhatsApp")}</span>
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{t("location")}</h3>
                      <p className="text-gray-600 dark:text-gray-300">Amsterdam, Nederland</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeInSection>
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">{t("howCanWeHelp")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Status Message */}
                    {submitStatus && (
                      <div
                        className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
                          submitStatus.type === "success"
                            ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                            : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                        }`}
                      >
                        {submitStatus.type === "success" && (
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                        )}
                        <p
                          className={`text-sm ${
                            submitStatus.type === "success"
                              ? "text-green-800 dark:text-green-200"
                              : "text-red-800 dark:text-red-200"
                          }`}
                        >
                          {submitStatus.message}
                        </p>
                      </div>
                    )}

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      {/* Mobile-friendly tabs with horizontal scroll */}
                      <div className="mb-8">
                        {/* Desktop tabs (md and up) */}
                        <TabsList className="hidden md:grid md:grid-cols-3 w-full">
                          <TabsTrigger value="contact">{t("contactTab")}</TabsTrigger>
                          <TabsTrigger value="appointment">{t("appointmentTab")}</TabsTrigger>
                          <TabsTrigger value="quote">{t("quoteTab")}</TabsTrigger>
                        </TabsList>

                        {/* Mobile tabs (below md) */}
                        <div className="md:hidden overflow-x-auto">
                          <TabsList className="inline-flex h-auto p-1 bg-gray-100 dark:bg-gray-800 rounded-lg min-w-full">
                            <TabsTrigger
                              value="contact"
                              className="flex-shrink-0 px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-white data-[state=active]:text-gray-900 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                            >
                              {t("contactTab")}
                            </TabsTrigger>
                            <TabsTrigger
                              value="appointment"
                              className="flex-shrink-0 px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-white data-[state=active]:text-gray-900 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                            >
                              {t("appointmentTabShort")}
                            </TabsTrigger>
                            <TabsTrigger
                              value="quote"
                              className="flex-shrink-0 px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-white data-[state=active]:text-gray-900 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                            >
                              {t("quoteTabShort")}
                            </TabsTrigger>
                          </TabsList>
                        </div>
                      </div>

                      {/* Simple Contact Form */}
                      <TabsContent value="contact">
                        <form onSubmit={handleContactSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="contact-name">{t("name")} *</Label>
                              <Input
                                id="contact-name"
                                placeholder={t("yourName")}
                                value={contactFormData.name}
                                onChange={(e) => setContactFormData((prev) => ({ ...prev, name: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="contact-company">{t("companyName")}</Label>
                              <Input
                                id="contact-company"
                                placeholder={t("companyName")}
                                value={contactFormData.company}
                                onChange={(e) => setContactFormData((prev) => ({ ...prev, company: e.target.value }))}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="contact-email">{t("email")} *</Label>
                              <Input
                                id="contact-email"
                                type="email"
                                placeholder={t("yourEmail")}
                                value={contactFormData.email}
                                onChange={(e) => setContactFormData((prev) => ({ ...prev, email: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="contact-phone">{t("phoneNumber")}</Label>
                              <Input
                                id="contact-phone"
                                placeholder={t("phoneNumber")}
                                value={contactFormData.phone}
                                onChange={(e) => setContactFormData((prev) => ({ ...prev, phone: e.target.value }))}
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="contact-message">{t("message")} *</Label>
                            <Textarea
                              id="contact-message"
                              placeholder={t("howCanWeHelpYou")}
                              rows={4}
                              value={contactFormData.message}
                              onChange={(e) => setContactFormData((prev) => ({ ...prev, message: e.target.value }))}
                              required
                            />
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full professional-gradient text-white py-3 text-lg font-semibold"
                          >
                            <Send className="mr-2 h-5 w-5" />
                            {isSubmitting ? t("sending") : t("send")}
                          </Button>
                        </form>
                      </TabsContent>

                      {/* Appointment Form */}
                      <TabsContent value="appointment">
                        <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="name">{t("yourName")} *</Label>
                              <Input
                                id="name"
                                placeholder={t("contactPerson")}
                                value={formData.name}
                                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="company">{t("companyName")}</Label>
                              <Input
                                id="company"
                                placeholder={t("companyName")}
                                value={formData.company}
                                onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="email">{t("email")} *</Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder={t("yourEmail")}
                                value={formData.email}
                                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">{t("phoneNumber")}</Label>
                              <Input
                                id="phone"
                                placeholder={t("phoneNumber")}
                                value={formData.phone}
                                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="preferredDate">{t("preferredDate")}</Label>
                              <Input
                                id="preferredDate"
                                type="date"
                                min={today}
                                value={formData.preferredDate}
                                onChange={(e) => setFormData((prev) => ({ ...prev, preferredDate: e.target.value }))}
                              />
                            </div>
                            <div>
                              <Label htmlFor="preferredTime">{t("preferredTime")}</Label>
                              <Select
                                onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredTime: value }))}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder={t("chooseTimeframe")} />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="morning">{t("morning")}</SelectItem>
                                  <SelectItem value="afternoon">{t("afternoon")}</SelectItem>
                                  <SelectItem value="evening">{t("evening")}</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="businessType">{t("legalForm")}</Label>
                            <Select
                              onValueChange={(value) => setFormData((prev) => ({ ...prev, businessType: value }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder={t("selectLegalForm")} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="zzp">ZZP</SelectItem>
                                <SelectItem value="eenmanszaak">Eenmanszaak</SelectItem>
                                <SelectItem value="vof">V.O.F</SelectItem>
                                <SelectItem value="bv">B.V.</SelectItem>
                                <SelectItem value="holding">Holding</SelectItem>
                                <SelectItem value="other">Anders</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label>{t("servicesNeeded")} *</Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                              {services.map((service) => (
                                <div key={service} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={service}
                                    checked={formData.services.includes(service)}
                                    onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                                  />
                                  <Label htmlFor={service} className="text-sm">
                                    {service}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="message">{t("additionalComments")}</Label>
                            <Textarea
                              id="message"
                              placeholder={t("specificFiscalNeeds")}
                              rows={4}
                              value={formData.message}
                              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                            />
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full professional-gradient text-white py-3 text-lg font-semibold"
                          >
                            <Calendar className="mr-2 h-5 w-5" />
                            {isSubmitting ? t("sending") : t("scheduleAppointment")}
                          </Button>
                        </form>
                      </TabsContent>

                      {/* Quote Request Form */}
                      <TabsContent value="quote">
                        <form onSubmit={handleQuoteSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="quote-name">{t("contactPerson2")} *</Label>
                              <Input
                                id="quote-name"
                                placeholder={t("fullName")}
                                value={quoteData.name}
                                onChange={(e) => setQuoteData((prev) => ({ ...prev, name: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="quote-company">{t("companyName")} *</Label>
                              <Input
                                id="quote-company"
                                placeholder={t("companyName2")}
                                value={quoteData.company}
                                onChange={(e) => setQuoteData((prev) => ({ ...prev, company: e.target.value }))}
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="quote-email">{t("email")} *</Label>
                              <Input
                                id="quote-email"
                                type="email"
                                placeholder={t("yourEmailAddress")}
                                value={quoteData.email}
                                onChange={(e) => setQuoteData((prev) => ({ ...prev, email: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="quote-phone">{t("phoneNumber")}</Label>
                              <Input
                                id="quote-phone"
                                placeholder={t("phoneExample")}
                                value={quoteData.phone}
                                onChange={(e) => setQuoteData((prev) => ({ ...prev, phone: e.target.value }))}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="quote-businessType">{t("legalForm")} *</Label>
                              <Select
                                onValueChange={(value) => setQuoteData((prev) => ({ ...prev, businessType: value }))}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder={t("selectLegalForm")} />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="zzp">ZZP</SelectItem>
                                  <SelectItem value="eenmanszaak">Eenmanszaak</SelectItem>
                                  <SelectItem value="vof">V.O.F</SelectItem>
                                  <SelectItem value="bv">B.V.</SelectItem>
                                  <SelectItem value="holding">Holding</SelectItem>
                                  <SelectItem value="other">Anders</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="quote-employees">{t("employees")}</Label>
                              <Select
                                onValueChange={(value) => setQuoteData((prev) => ({ ...prev, employees: value }))}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder={t("selectNumber")} />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="0">{t("noPersonnel")}</SelectItem>
                                  <SelectItem value="1-5">{t("employees1to5")}</SelectItem>
                                  <SelectItem value="6-10">{t("employees6to10")}</SelectItem>
                                  <SelectItem value="11-25">{t("employees11to25")}</SelectItem>
                                  <SelectItem value="25+">{t("employeesMore25")}</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="quote-monthlyTransactions">{t("monthlyTransactions")}</Label>
                              <Select
                                onValueChange={(value) =>
                                  setQuoteData((prev) => ({ ...prev, monthlyTransactions: value }))
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder={t("estimatedNumber")} />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="0-50">{t("transactions0to50")}</SelectItem>
                                  <SelectItem value="51-100">{t("transactions51to100")}</SelectItem>
                                  <SelectItem value="101-200">{t("transactions101to200")}</SelectItem>
                                  <SelectItem value="201-500">{t("transactions201to500")}</SelectItem>
                                  <SelectItem value="500+">{t("transactionsMore500")}</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="quote-yearlyInvoices">{t("yearlyInvoices")}</Label>
                              <Select
                                onValueChange={(value) => setQuoteData((prev) => ({ ...prev, yearlyInvoices: value }))}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder={t("estimatedNumber")} />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="0-100">{t("invoices0to100")}</SelectItem>
                                  <SelectItem value="101-200">{t("invoices101to200")}</SelectItem>
                                  <SelectItem value="201-300">{t("invoices201to300")}</SelectItem>
                                  <SelectItem value="301-500">{t("invoices301to500")}</SelectItem>
                                  <SelectItem value="500+">{t("invoicesMore500")}</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <Label>{t("desiredServices")} *</Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                              {services.map((service) => (
                                <div key={service} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`quote-${service}`}
                                    checked={quoteData.services.includes(service)}
                                    onCheckedChange={(checked) => handleQuoteServiceChange(service, checked as boolean)}
                                  />
                                  <Label htmlFor={`quote-${service}`} className="text-sm">
                                    {service}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="quote-additionalInfo">{t("additionalInfo")}</Label>
                            <Textarea
                              id="quote-additionalInfo"
                              placeholder={t("additionalInfoPlaceholder")}
                              rows={4}
                              value={quoteData.additionalInfo}
                              onChange={(e) => setQuoteData((prev) => ({ ...prev, additionalInfo: e.target.value }))}
                            />
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full professional-gradient text-white py-3 text-lg font-semibold"
                          >
                            <FileText className="mr-2 h-5 w-5" />
                            {isSubmitting ? t("sending") : t("requestQuoteButton")}
                          </Button>
                        </form>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
