// Server-side translation helper
export function getServerTranslations(locale = "nl") {
    // Import your translations directly
    const translations = {
      nl: {
        // Service titles
        financialAdmin: "Financiële Administratie",
        payrollAdmin: "Loonadministratie",
        taxAdvice: "Belastingadvies",
        creditMediation: "Kredietbemiddeling",
        businessAdvice: "Bedrijfsadvies en -planning",
        startupSupport: "Start-up ondersteuning",
        legalFinancialAdvice: "Juridisch en Financieel advies",
        individuals: "Particulieren",

        // Service descriptions
        financialAdminDesc: "Krijg grip op uw financiën en verbeter uw bedrijfsresultaten.",
        payrollAdminDesc: "Verlicht uw lasten en zorg voor loonadministratie zonder zorgen.",
        taxAdviceDesc: "Minimaliseer belastingen met ons deskundig belastingadvies.",
        creditMediationDesc: "Ontdek hoe onze kredietbemiddeling uw financiële groei kan versnellen.",
        businessAdviceDesc: "Optimaliseer uw bedrijfsstrategie en toekomstige groei.",
        startupSupportDesc: "Laat uw start-up gedijen met onze deskundige ondersteuning.",
        legalFinancialAdviceDesc: "Bescherm uw bedrijf en maximaliseer financiële kansen.",
        individualsDesc: "Ervaar met particuliere financiën, verbeter uw financiële toekomst.",
      },
      en: {
        // English translations
        financialAdmin: "Financial Administration",
        payrollAdmin: "Payroll Administration",
        taxAdvice: "Tax Advice",
        creditMediation: "Credit Mediation",
        businessAdvice: "Business Advice & Planning",
        startupSupport: "Startup Support",
        legalFinancialAdvice: "Legal & Financial Advice",
        individuals: "Individuals",

        financialAdminDesc: "Get control of your finances and improve your business results.",
        payrollAdminDesc: "Lighten your burden and ensure worry-free payroll administration.",
        taxAdviceDesc: "Minimize taxes with our expert tax advice.",
        creditMediationDesc: "Discover how our credit mediation can accelerate your financial growth.",
        businessAdviceDesc: "Optimize your business strategy and future growth.",
        startupSupportDesc: "Let your startup thrive with our expert support.",
        legalFinancialAdviceDesc: "Protect your business and maximize financial opportunities.",
        individualsDesc: "Experience with personal finances, improve your financial future.",
      },
    }

    return (key: string) =>
      translations[locale as keyof typeof translations]?.[key as keyof typeof translations.nl] || key
  }
