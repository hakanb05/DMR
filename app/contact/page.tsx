import type { Metadata } from "next"
import { Suspense } from "react"
import ContactWrapper from "./contact-wrapper"

export const metadata: Metadata = {
  title: "Contact - DMR Administratie",
  description:
    "Neem contact op met DMR Administratie voor al uw vragen over financiële administratie, loonadministratie en belastingadvies. Plan direct een gesprek.",
  icons: {
    icon: "/images/logo/light.png",
  },
}

function ContactPageSkeleton() {
  return (
    <div className="pt-16">
      {/* Hero Section Skeleton */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-8 animate-pulse"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg max-w-3xl mx-auto animate-pulse"></div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information Skeleton */}
            <div className="lg:col-span-1">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg mb-8 animate-pulse"></div>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Skeleton */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg mb-8 animate-pulse"></div>
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactPageSkeleton />}>
      <ContactWrapper />
    </Suspense>
  )
}
