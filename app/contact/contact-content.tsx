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
        message: "Uw bericht is succesvol verzonden! We nemen zo spoedig mogelijk contact met u op.",
      })
      setContactFormData({ name: "", company: "", email: "", phone: "", message: "" })
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het opnieuw.",
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
        message:
          "Uw afspraakverzoek is succesvol verzonden! We nemen zo spoedig mogelijk contact met u op om de afspraak in te plannen.",
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
        message: "Er is een fout opgetreden bij het verzenden van uw afspraakverzoek. Probeer het opnieuw.",
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
        message:
          "Uw offerteaanvraag is succesvol verzonden! We stellen een passende offerte voor u samen en nemen binnen 24 uur contact met u op.",
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
        message: "Er is een fout opgetreden bij het verzenden van uw offerteaanvraag. Probeer het opnieuw.",
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
          <AnimatedText text="Contact" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8" />
          <FadeInSection>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Neem contact op met DMR Finance voor al uw vragen over financiële administratie, loonadministratie en
              belastingadvies.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <FadeInSection>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contactgegevens</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <a href="mailto:info@dmrfinance.nl" className="text-blue-600 dark:text-blue-400 hover:underline">
                        info@dmrfinance.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Telefoon</h3>
                      <p className="text-gray-600 dark:text-gray-300">06 3882 4882</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-2 text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                      >
                        <a href="https://wa.me/31638824882">
                          <span>Snel contact via WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Locatie</h3>
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
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">Hoe kunnen wij u helpen?</CardTitle>
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
                          <TabsTrigger value="contact">Contact</TabsTrigger>
                          <TabsTrigger value="appointment">Afspraak inplannen</TabsTrigger>
                          <TabsTrigger value="quote">Offerte aanvragen</TabsTrigger>
                        </TabsList>

                        {/* Mobile tabs (below md) */}
                        <div className="md:hidden overflow-x-auto">
                          <TabsList className="inline-flex h-auto p-1 bg-gray-100 dark:bg-gray-800 rounded-lg min-w-full">
                            <TabsTrigger
                              value="contact"
                              className="flex-shrink-0 px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-white data-[state=active]:text-gray-900 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                            >
                              Contact
                            </TabsTrigger>
                            <TabsTrigger
                              value="appointment"
                              className="flex-shrink-0 px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-white data-[state=active]:text-gray-900 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                            >
                              Afspraak
                            </TabsTrigger>
                            <TabsTrigger
                              value="quote"
                              className="flex-shrink-0 px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-white data-[state=active]:text-gray-900 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                            >
                              Offerte
                            </TabsTrigger>
                          </TabsList>
                        </div>
                      </div>

                      {/* Simple Contact Form */}
                      <TabsContent value="contact">
                        <form onSubmit={handleContactSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="contact-name">Naam *</Label>
                              <Input
                                id="contact-name"
                                placeholder="Uw naam"
                                value={contactFormData.name}
                                onChange={(e) => setContactFormData((prev) => ({ ...prev, name: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="contact-company">Bedrijfsnaam</Label>
                              <Input
                                id="contact-company"
                                placeholder="Bedrijfsnaam"
                                value={contactFormData.company}
                                onChange={(e) => setContactFormData((prev) => ({ ...prev, company: e.target.value }))}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="contact-email">Email *</Label>
                              <Input
                                id="contact-email"
                                type="email"
                                placeholder="Uw email"
                                value={contactFormData.email}
                                onChange={(e) => setContactFormData((prev) => ({ ...prev, email: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="contact-phone">Telefoonnummer</Label>
                              <Input
                                id="contact-phone"
                                placeholder="Telefoonnummer"
                                value={contactFormData.phone}
                                onChange={(e) => setContactFormData((prev) => ({ ...prev, phone: e.target.value }))}
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="contact-message">Uw vraag of opmerking *</Label>
                            <Textarea
                              id="contact-message"
                              placeholder="Hoe kunnen wij u van dienst zijn?"
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
                            {isSubmitting ? "Versturen..." : "Versturen"}
                          </Button>
                        </form>
                      </TabsContent>

                      {/* Appointment Form */}
                      <TabsContent value="appointment">
                        <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="name">Uw naam *</Label>
                              <Input
                                id="name"
                                placeholder="Naam contactpersoon"
                                value={formData.name}
                                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="company">Bedrijfsnaam</Label>
                              <Input
                                id="company"
                                placeholder="Bedrijfsnaam"
                                value={formData.company}
                                onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="email">Email *</Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="Uw email"
                                value={formData.email}
                                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Telefoonnummer</Label>
                              <Input
                                id="phone"
                                placeholder="Telefoonnummer"
                                value={formData.phone}
                                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="preferredDate">Voorkeursdatum afspraak</Label>
                              <Input
                                id="preferredDate"
                                type="date"
                                min={today}
                                value={formData.preferredDate}
                                onChange={(e) => setFormData((prev) => ({ ...prev, preferredDate: e.target.value }))}
                              />
                            </div>
                            <div>
                              <Label htmlFor="preferredTime">Voorkeurstijd</Label>
                              <Select
                                onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredTime: value }))}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Kies tijdframe" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="morning">Ochtend (09:00-12:00)</SelectItem>
                                  <SelectItem value="afternoon">Middag (12:00-17:00)</SelectItem>
                                  <SelectItem value="evening">Avond (17:00-20:00)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="businessType">Rechtsvorm</Label>
                            <Select
                              onValueChange={(value) => setFormData((prev) => ({ ...prev, businessType: value }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecteer rechtsvorm" />
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
                            <Label>Welke diensten heeft u nodig? *</Label>
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
                            <Label htmlFor="message">Aanvullende opmerkingen of vragen:</Label>
                            <Textarea
                              id="message"
                              placeholder="Heeft u specifieke fiscale behoeften of vragen?"
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
                            {isSubmitting ? "Versturen..." : "Afspraak inplannen"}
                          </Button>
                        </form>
                      </TabsContent>

                      {/* Quote Request Form */}
                      <TabsContent value="quote">
                        <form onSubmit={handleQuoteSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="quote-name">Contactpersoon *</Label>
                              <Input
                                id="quote-name"
                                placeholder="Voor- en achternaam"
                                value={quoteData.name}
                                onChange={(e) => setQuoteData((prev) => ({ ...prev, name: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="quote-company">Bedrijfsnaam *</Label>
                              <Input
                                id="quote-company"
                                placeholder="Naam van uw bedrijf"
                                value={quoteData.company}
                                onChange={(e) => setQuoteData((prev) => ({ ...prev, company: e.target.value }))}
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="quote-email">Email *</Label>
                              <Input
                                id="quote-email"
                                type="email"
                                placeholder="uw.email@bedrijf.nl"
                                value={quoteData.email}
                                onChange={(e) => setQuoteData((prev) => ({ ...prev, email: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="quote-phone">Telefoonnummer</Label>
                              <Input
                                id="quote-phone"
                                placeholder="06 12345678"
                                value={quoteData.phone}
                                onChange={(e) => setQuoteData((prev) => ({ ...prev, phone: e.target.value }))}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="quote-businessType">Rechtsvorm *</Label>
                              <Select
                                onValueChange={(value) => setQuoteData((prev) => ({ ...prev, businessType: value }))}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecteer rechtsvorm" />
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
                              <Label htmlFor="quote-employees">Aantal medewerkers</Label>
                              <Select
                                onValueChange={(value) => setQuoteData((prev) => ({ ...prev, employees: value }))}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecteer aantal" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="0">Geen personeel</SelectItem>
                                  <SelectItem value="1-5">1-5 medewerkers</SelectItem>
                                  <SelectItem value="6-10">6-10 medewerkers</SelectItem>
                                  <SelectItem value="11-25">11-25 medewerkers</SelectItem>
                                  <SelectItem value="25+">Meer dan 25</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="quote-monthlyTransactions">Banktransacties per maand</Label>
                              <Select
                                onValueChange={(value) =>
                                  setQuoteData((prev) => ({ ...prev, monthlyTransactions: value }))
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Geschat aantal" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="0-50">0-50</SelectItem>
                                  <SelectItem value="51-100">51-100</SelectItem>
                                  <SelectItem value="101-200">101-200</SelectItem>
                                  <SelectItem value="201-500">201-500</SelectItem>
                                  <SelectItem value="500+">Meer dan 500</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="quote-yearlyInvoices">Facturen per jaar</Label>
                              <Select
                                onValueChange={(value) => setQuoteData((prev) => ({ ...prev, yearlyInvoices: value }))}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Geschat aantal" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="0-100">0-100</SelectItem>
                                  <SelectItem value="101-200">101-200</SelectItem>
                                  <SelectItem value="201-300">201-300</SelectItem>
                                  <SelectItem value="301-500">301-500</SelectItem>
                                  <SelectItem value="500+">Meer dan 500</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <Label>Gewenste diensten *</Label>
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
                            <Label htmlFor="quote-additionalInfo">Aanvullende informatie</Label>
                            <Textarea
                              id="quote-additionalInfo"
                              placeholder="Vertel ons meer over uw specifieke wensen of situatie..."
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
                            {isSubmitting ? "Versturen..." : "Offerte Aanvragen"}
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
