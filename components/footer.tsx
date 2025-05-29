"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react"
import { useLanguage } from "@/lib/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4">DMR Finance</div>
            <p className="text-gray-300 mb-4">Administratie & Advies</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Amsterdam, Nederland</span>
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

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@dmrfinance.nl" className="hover:text-blue-400">
                Info@dmradministratie.nl
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>0685295247</span>
              </div>
              <div className="mt-2">
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

          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-2">{t("followUs")}</h4>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DMR Finance. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
