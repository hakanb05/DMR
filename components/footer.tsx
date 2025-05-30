"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/lib/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bedrijfsinformatie */}
          <div>
            <div className="mb-4">
              <img
                src="/images/logo/dark.png"
                alt="DMR Administratie logo"
                className="h-24 object-contain"
              />
            </div>
            <p className="text-gray-300 mb-2">Administratie & Advies</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Amsterdam, {t("Nederland")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@dmrfinance.nl" className="text-gray-300 hover:text-blue-400">
                  Info@dmradministratie.nl
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="https://wa.me/31685295247" className="text-gray-300 hover:text-blue-400">
                  0685295247
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/financial-administration" className="text-gray-300 hover:text-blue-400">
                  {t("financialAdmin")}
                </Link>
              </li>
              <li>
                <Link href="/services/payroll-administration" className="text-gray-300 hover:text-blue-400">
                  {t("payrollAdmin")}
                </Link>
              </li>
              <li>
                <Link href="/services/tax-advice" className="text-gray-300 hover:text-blue-400">
                  {t("taxAdvice")}
                </Link>
              </li>
              <li>
                <Link href="/services/individuals" className="text-gray-300 hover:text-blue-400">
                  {t("individuals")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Openingstijden */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("openingHours")}</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>{t("mondayFriday")}: 8:30 - 18:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>{t("saturdaySunday")}: 9:00 - 13:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>{t("closed")}</span>
              </div>
            </div>
            <div className="mt-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="text-blue-400 border-blue-400 hover:bg-blue-400/10"
              >
                <a href="https://wa.me/31685295247">
                  <span className="mr-2">{t("quickContactWhatsApp")}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {t("rights")}</p>
          <p className="mt-1">
            <a href="https://www.devkan.nl" className="hover:text-blue-400">{t("createdby")}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
