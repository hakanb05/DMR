"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/contexts/language-context"
import { useTheme } from "@/lib/contexts/theme-context"
import type { Language } from "@/lib/translations"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "nl", name: "Nederlands", flag: "🇳🇱" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "bg", name: "Български", flag: "🇧🇬" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  ]

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/pricing", label: t("pricing") },
    { href: "/contact", label: t("contact") },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">DMR Finance</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? "bg-blue-50 dark:bg-blue-900" : ""}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            {/* CTA Button */}
            <Button asChild className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contact">{t("planMeeting")}</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  {t("planMeeting")}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
