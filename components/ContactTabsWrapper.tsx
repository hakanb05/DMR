"use client"

import { useSearchParams } from "next/navigation"

export default function ContactTabsWrapper({
  children,
}: {
  children: (tab: string) => React.ReactNode
}) {
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab") || "contact"
  return <>{children(tab)}</>
}
