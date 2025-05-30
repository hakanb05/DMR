import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/contexts/language-context"
import { ThemeProvider } from "@/lib/contexts/theme-context"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DMR Finance - Administratie & Advies",
  description:
    "DMR Finance biedt professionele financiële administratie, loonadministratie en belastingadvies voor ondernemers en particulieren.",
  keywords: "administratie, boekhouding, belastingadvies, loonadministratie, DMR Finance",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
