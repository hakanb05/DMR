"use client"

import { useSearchParams } from "next/navigation"
import ContactContent from "./contact-content"

export default function ContactWrapper() {
  const searchParams = useSearchParams()
  const initialTab = searchParams.get("tab") || "contact"

  return <ContactContent initialTab={initialTab} />
}
