export type Language = "nl" | "en" | "bg" | "tr"

export type TranslationKey = keyof typeof translations.nl

export const translations = {
  nl: {
    // Navigation
    home: "Home",
    about: "Over ons",
    services: "Diensten",
    pricing: "Tarieven",
    contact: "Contact",
    quote: "Offerte",
    rights: "2025 DMR Administratie. Alle rechten voorbehouden.",
    createdby: "Gemaakt door DevKan",

    makeContact:
      "Neem contact op met DMR Administratie voor al uw vragen over financiële administratie, loonadministratie en belastingadvies.",

    // Hero Section
    heroTitle: "Wij beheren uw financiën,",
    Nederland: "Nederland",
    heroSubtitle: "u realiseert uw ambities",
    heroDescription:
      "DMR Administratie biedt op maat gemaakte financiële oplossingen en professioneel advies om uw onderneming te ondersteunen bij groei en succes. Wij nemen de complexe administratieve taken uit handen, zodat u zich volledig kunt richten op het verwezenlijken van uw doelen.",
    planMeeting: "Plan een gesprek",
    zakelijkAuto: "Zakelijke auto  op de zaak",

    // Services
    servicesTitle: "Onze diensten",
    servicesSubtitle:
      "DMR Administratie is een administratie- en advieskantoor dat verschillende diensten biedt aan bedrijven, ondernemers en particulieren.",
    moreInfo: "Meer informatie",

    financialAdmin: "Financiële Administratie",
    financialAdminDesc:
      "Onze kernactiviteit betreft het verzorgen van de financiële administratie. Van de diensten die wij bieden is de verwerking van uw administratie voor de aangifte omzetbelasting en inkomstenbelasting onze voornaamste bezigheid.",
    financialAdminShort: "Krijg grip op uw financiën en verbeter uw bedrijfsresultaten.",

    payrollAdmin: "Loonadministratie",
    payrollAdminDesc:
      "Indien u personeel in dienst hebt of van plan bent personeel aan te nemen, krijgt u te maken met de loonadministratie. Hierbij moet u denken aan het verlonen van het personeel en het indienen van de loonaangiften.",
    payrollAdminShort: "Verlicht uw lasten en zorg voor loonadministratie zonder zorgen.",

    taxAdvice: "Belastingadvies",
    taxAdviceDesc:
      "Aangezien de meeste van onze diensten gebaseerd zijn op belastingaangiften, bieden we de mogelijkheid op elke relevante dienst de meest gunstige belastingpositie te behalen.",
    taxAdviceShort: "Minimaliseer belastingen met ons deskundig belastingadvies.",

    individuals: "Particulieren",
    individualsDesc:
      "Ook voor u als particulier staan wij u bij. Wij kunnen u assisteren bij het indienen van uw particuliere aangifte inkomstenbelasting.",

    // Services page
    creditMediation: "Kredietbemiddeling",
    creditMediationDesc: "Ontdek hoe onze kredietbemiddeling uw financiële groei kan versnellen.",
    creditMediationDetails:
      "Wij helpen u bij het vinden van de juiste financieringsoplossingen voor uw bedrijf. Van bedrijfsleningen tot hypotheken, wij bemiddelen voor de beste voorwaarden.",
    businessAdvice: "Bedrijfsadvies en -planning",
    businessAdviceDesc: "Optimaliseer uw bedrijfsstrategie en toekomstige groei.",
    businessAdviceDetails:
      "Strategisch advies voor ondernemers die hun bedrijf willen laten groeien. Wij helpen bij bedrijfsplanning, financiële prognoses en strategische beslissingen.",
    startupSupport: "Start-up ondersteuning",
    startupSupportDesc: "Laat uw start-up gedijen met onze deskundige ondersteuning.",
    startupSupportDetails:
      "Speciaal voor startende ondernemers bieden wij uitgebreide ondersteuning bij het opzetten van uw administratie en het maken van de juiste keuzes vanaf het begin.",
    legalFinancialAdvice: "Juridisch en Financieel advies",
    legalFinancialAdviceDesc: "Bescherm uw bedrijf en maximaliseer financiële kansen.",
    legalFinancialAdviceDetails:
      "Combinatie van juridische en financiële expertise om uw bedrijf optimaal te beschermen en kansen te benutten in een complexe regelgeving.",
    individualsShort: "Ervaar met particuliere financiën, verbeter uw financiële toekomst.",
    readyToStart: "Klaar om te beginnen?",
    readyToStartDesc: "Neem contact met ons op en ontdek hoe DMR Administratie uw bedrijf kan ondersteunen.",

    // New startup support content
    startupSupportTitle: "Start-up ondersteuning",
    startupSupportShortDesc: "Laat uw start-up gedijen met onze deskundige ondersteuning.",
    startupSupportLongDesc:
      "Bij DMR begrijpen we dat de reis van een start-up ondernemer uitdagend en opwindend kan zijn. Het begint met een idee, groeit uit tot een visie en bloeit uiteindelijk op tot een volwaardig bedrijf.",

    // New legal financial advice content
    legalFinancialAdviceTitle: "Juridisch en Financieel advies",
    legalFinancialAdviceShortDesc: "Bescherm uw bedrijf en maximaliseer financiële kansen.",
    legalFinancialAdviceLongDesc:
      "Bij DMR administratie & advies geloven we dat solide juridisch en financieel advies de hoeksteen is van elk succesvol bedrijf.",

    optimizedFinance: "Geoptimaliseerde financiën",

    // Service detail page
    requestQuote: "Vraag een offerte aan",
    benefits: "Voordelen",
    aboutThisService: "Over deze dienst",
    whatWeDo: "Wat wij voor u doen",
    personalApproachTitle: "Persoonlijke aanpak",
    personalApproachText:
      "Elke situatie is uniek. Daarom stemmen wij onze dienstverlening volledig af op uw specifieke behoeften en doelstellingen.",
    howWeWork: "Hoe werken wij?",
    howWeWorkDesc: "Ons proces is transparant en efficiënt, zodat u altijd weet waar u aan toe bent.",
    step1Title: "Kennismaking",
    step1Desc: "We bespreken uw situatie en wensen tijdens een vrijblijvend gesprek.",
    step2Title: "Op maat advies",
    step2Desc: "We stellen een persoonlijk plan op dat perfect aansluit bij uw behoeften.",
    step3Title: "Uitvoering",
    step3Desc: "We nemen de werkzaamheden uit handen en houden u op de hoogte van de voortgang.",
    readyToStartCta: "Neem contact met ons op voor een vrijblijvend gesprek over hoe wij u kunnen helpen.",
    serviceNotFound: "Dienst niet gevonden - DMR Administratie",

    // Service detail specific content
    financialAdminBenefit1: "Volledige verwerking van uw financiële administratie",
    financialAdminBenefit2: "Tijdige en correcte BTW-aangiftes",
    financialAdminBenefit3: "Inzicht in uw financiële positie",
    financialAdminBenefit4: "Jaarrekeningen en financiële rapportages",
    financialAdminBenefit5: "Persoonlijke begeleiding en advies",
    financialAdminDescription1:
      "Een goede financiële administratie is de basis voor het succes van uw onderneming. Het geeft u inzicht in uw financiële positie, helpt bij het nemen van strategische beslissingen en zorgt ervoor dat u voldoet aan alle wettelijke verplichtingen.",
    financialAdminDescription2:
      "Bij DMR Administratie nemen wij deze complexe taak volledig uit handen. Wij zorgen voor een nauwkeurige verwerking van al uw financiële gegevens, van facturen en bonnetjes tot bankafschriften en kasboeken. Onze ervaren professionals zorgen ervoor dat uw administratie altijd up-to-date en compliant is.",
    financialAdminService1: "Verwerken van uw dagelijkse administratie",
    financialAdminService2: "Opstellen en indienen van BTW-aangiftes",
    financialAdminService3: "Debiteuren- en crediteurenbeheer",
    financialAdminService4: "Opstellen van jaarrekeningen",
    financialAdminService5: "Financiële rapportages en analyses",
    financialAdminService6: "Persoonlijk advies over uw financiële situatie",

    payrollAdminBenefit1: "Correcte en tijdige salarisverwerking",
    payrollAdminBenefit2: "Naleving van alle wet- en regelgeving",
    payrollAdminBenefit3: "Verzorging van alle loonaangiften",
    payrollAdminBenefit4: "Jaaropgaven en loonstroken",
    payrollAdminBenefit5: "Personeelsdossiers en -administratie",
    payrollAdminDescription1:
      "Een correcte loonadministratie is essentieel voor uw bedrijf. Het zorgt ervoor dat uw medewerkers op tijd en correct worden betaald, en dat u voldoet aan alle wettelijke verplichtingen op het gebied van belastingen en sociale premies.",
    payrollAdminDescription2:
      "Bij DMR Administratie nemen wij de volledige loonadministratie uit handen. Onze specialisten zorgen ervoor dat alle salarissen correct worden berekend en uitbetaald, en dat alle aangiften op tijd worden ingediend.",
    payrollAdminService1: "Opstellen en verwerken van salarissen",
    payrollAdminService2: "Verzorgen van loonstroken",
    payrollAdminService3: "Indienen van loonaangiften",
    payrollAdminService4: "Jaaropgaven voor werknemers",
    payrollAdminService5: "Bijhouden van personeelsdossiers",
    payrollAdminService6: "Advies over arbeidsvoorwaarden en CAO's",
    payrollAdminService7: "Begeleiding bij in- en uitdiensttreding",

    taxAdviceBenefit1: "Minimalisatie van uw belastingdruk",
    taxAdviceBenefit2: "Proactief fiscaal advies",
    taxAdviceBenefit3: "Optimale fiscale structuur",
    taxAdviceBenefit4: "Begeleiding bij belastingcontroles",
    taxAdviceBenefit5: "Up-to-date kennis van fiscale wetgeving",
    taxAdviceDescription1:
      "Belastingen vormen een aanzienlijke kostenpost voor zowel bedrijven als particulieren. Met deskundig belastingadvies kunt u echter aanzienlijk besparen en uw fiscale positie optimaliseren.",
    taxAdviceDescription2:
      "Bij DMR Administratie helpen onze fiscale experts u om binnen de wettelijke kaders uw belastingdruk te minimaliseren. Wij houden de veranderende fiscale wetgeving nauwlettend in de gaten en passen onze adviezen hierop aan.",
    taxAdviceService1: "Opstellen en indienen van belastingaangiften",
    taxAdviceService2: "Fiscale planning en optimalisatie",
    taxAdviceService3: "Advies over BTW-vraagstukken",
    taxAdviceService4: "Begeleiding bij fiscale controles",
    taxAdviceService5: "Advies over bedrijfsopvolging en -overdracht",
    taxAdviceService6: "Fiscale aspecten van investeringen",
    taxAdviceService7: "Internationale fiscale vraagstukken",

    creditMediationBenefit1: "Toegang tot diverse financieringsopties",
    creditMediationBenefit2: "Onafhankelijk advies over financieringsmogelijkheden",
    creditMediationBenefit3: "Begeleiding bij het aanvraagproces",
    creditMediationBenefit4: "Onderhandeling over gunstige voorwaarden",
    creditMediationBenefit5: "Snellere toegang tot kapitaal",
    creditMediationDescription1:
      "Toegang tot kapitaal is cruciaal voor de groei en ontwikkeling van uw onderneming. Of u nu wilt investeren in nieuwe apparatuur, een pand wilt aanschaffen of werkkapitaal nodig heeft, de juiste financiering is essentieel.",
    creditMediationDescription2:
      "Als onafhankelijke kredietbemiddelaar helpt DMR Administratie u bij het vinden van de meest geschikte financieringsoplossing. Wij hebben toegang tot een breed netwerk van financiers en kennen de markt door en door.",
    creditMediationService1: "Analyse van uw financieringsbehoefte",
    creditMediationService2: "Advies over verschillende financieringsvormen",
    creditMediationService3: "Opstellen van een financieringsaanvraag",
    creditMediationService4: "Onderhandelen met financiers",
    creditMediationService5: "Begeleiding tijdens het gehele aanvraagproces",
    creditMediationService6: "Herfinanciering van bestaande leningen",
    creditMediationService7: "Advies over lease- en huurkoopconstructies",

    businessAdviceBenefit1: "Strategische bedrijfsplanning",
    businessAdviceBenefit2: "Financiële prognoses en budgettering",
    businessAdviceBenefit3: "Kostenanalyse en -optimalisatie",
    businessAdviceBenefit4: "Advies over bedrijfsstructuur",
    businessAdviceBenefit5: "Begeleiding bij groei en expansie",
    businessAdviceDescription1:
      "Een duidelijke strategie en goede planning zijn essentieel voor het succes en de groei van uw onderneming. Met professioneel bedrijfsadvies kunt u weloverwogen beslissingen nemen en uw doelen effectiever bereiken.",
    businessAdviceDescription2:
      "Bij DMR Administratie bieden wij uitgebreid bedrijfsadvies op maat. Onze adviseurs hebben jarenlange ervaring in verschillende sectoren en helpen u bij het ontwikkelen en implementeren van effectieve strategieën.",
    businessAdviceService1: "Opstellen van bedrijfsplannen",
    businessAdviceService2: "Financiële prognoses en scenario-analyses",
    businessAdviceService3: "Kostenanalyse en efficiëntieverbeteringen",
    businessAdviceService4: "Advies over bedrijfsstructuur en -organisatie",
    businessAdviceService5: "Begeleiding bij groei en expansie",
    businessAdviceService6: "Strategische planning en doelstellingen",
    businessAdviceService7: "Benchmarking en concurrentieanalyse",

    openingTimeTitle: "Openingstijden",
    openingTimeDays: "maandag t/m vrijdag",
    openingTimeWeekdays: "08:30 – 18:00",
    openingTimeSaturday: "zaterdag",
    openingTimeSaturdayHours: "09:00 – 13:00",
    openingTimeSunday: "zondag",
    openingTimeSundayHours: "gesloten",

    startupSupportBenefit1: "Begeleiding bij het opzetten van uw administratie",
    startupSupportBenefit2: "Advies over rechtsvorm en bedrijfsstructuur",
    startupSupportBenefit3: "Ondersteuning bij financiële planning",
    startupSupportBenefit4: "Hulp bij het aanvragen van subsidies",
    startupSupportBenefit5: "Netwerk van relevante partners",
    startupSupportDescription1:
      "De start van een onderneming is een spannende maar ook uitdagende fase. Er moeten veel beslissingen worden genomen die bepalend zijn voor de toekomst van uw bedrijf. Professionele ondersteuning kan u helpen om de juiste keuzes te maken en kostbare fouten te voorkomen.",
    startupSupportDescription2:
      "DMR Administratie biedt specifieke ondersteuning voor startups en beginnende ondernemers. Wij helpen u bij het leggen van een solide financiële basis voor uw onderneming en begeleiden u bij de eerste stappen als ondernemer.",
    startupSupportService1: "Advies over de keuze van rechtsvorm",
    startupSupportService2: "Opzetten van uw financiële administratie",
    startupSupportService3: "Begeleiding bij inschrijving KvK en Belastingdienst",
    startupSupportService4: "Opstellen van een ondernemingsplan",
    startupSupportService5: "Financiële prognoses en budgettering",
    startupSupportService6: "Advies over subsidies en financieringsmogelijkheden",
    startupSupportService7: "Belastingadvies voor startende ondernemers",

    legalFinancialAdviceBenefit1: "Geïntegreerd juridisch en financieel advies",
    legalFinancialAdviceBenefit2: "Bescherming van uw bedrijfsbelangen",
    legalFinancialAdviceBenefit3: "Optimalisatie van contracten en overeenkomsten",
    legalFinancialAdviceBenefit4: "Risicomanagement en -beperking",
    legalFinancialAdviceBenefit5: "Compliance met wet- en regelgeving",
    legalFinancialAdviceDescription1:
      "In het huidige complexe zakelijke landschap zijn juridische en financiële aspecten vaak nauw met elkaar verweven. Een geïntegreerde aanpak is daarom essentieel om uw bedrijf optimaal te beschermen en kansen te benutten.",
    legalFinancialAdviceDescription2:
      "DMR Administratie biedt een unieke combinatie van juridisch en financieel advies. Onze experts hebben kennis van beide vakgebieden en kunnen u daardoor holistisch adviseren over complexe zakelijke vraagstukken.",
    legalFinancialAdviceService1: "Juridische structurering van uw onderneming",
    legalFinancialAdviceService2: "Opstellen en beoordelen van contracten",
    legalFinancialAdviceService3: "Advies over algemene voorwaarden",
    legalFinancialAdviceService4: "Begeleiding bij geschillen en conflicten",
    legalFinancialAdviceService5: "Compliance met wet- en regelgeving",
    legalFinancialAdviceService6: "Risicomanagement en -beperking",
    legalFinancialAdviceService7: "Advies over intellectueel eigendom",

    individualsBenefit1: "Persoonlijke begeleiding bij belastingaangiften",
    individualsBenefit2: "Optimalisatie van uw fiscale positie",
    individualsBenefit3: "Advies over vermogensplanning",
    individualsBenefit4: "Begeleiding bij financiële beslissingen",
    individualsBenefit5: "Hulp bij toeslagen en subsidies",
    individualsDescription1:
      "Ook als particulier kunt u te maken krijgen met complexe financiële en fiscale vraagstukken. Of het nu gaat om uw belastingaangifte, vermogensplanning of financiële beslissingen, professioneel advies kan u helpen om de juiste keuzes te maken.",
    individualsDescription2:
      "Bij DMR Administratie bieden wij uitgebreide dienstverlening voor particulieren. Onze adviseurs helpen u bij het optimaliseren van uw financiële situatie en het minimaliseren van uw belastingdruk.",
    individualsService1: "Opstellen en indienen van uw belastingaangifte",
    individualsService2: "Advies over fiscale aftrekposten",
    individualsService3: "Begeleiding bij bezwaar- en beroepsprocedures",
    individualsService4: "Vermogensplanning en -beheer",
    individualsService5: "Advies over schenkingen en erfenissen",
    individualsService6: "Hulp bij aanvragen van toeslagen",
    individualsService7: "Financiële planning voor uw toekomst",

    // Particulieren pricing features
    particulierenTitle: "Particulieren",
    particulierenPrice: "35",
    particulierenFeature1: "Aanvraag zorgtoeslag",
    particulierenFeature2: "Aanvraag huurtoeslag",
    particulierenFeature3: "Aanvraag kindgebonden budget",
    particulierenFeature4: "Aanvraag gemeentelijke formulieren",
    particulierenFeature5: "Aangifte inkomstenbelasting €50",
    particulierenFeature6: "Met partner +€25",

    // NOTK pricing
    pricingNOTK: "NOTK (nader overeen te komen)",

    // Why DMR
    whyDmrTitle: "Waarom DMR Administratie?",
    experience: "10+ jaar ervaring",
    minimalTax: "Minimale belasting betalen",
    youSendWeDo: "U stuurt, wij doen",
    expertise: "Expertise & advies",
    clients: "100+ tevreden klanten",

    // Contact CTA
    contactUs: "Neem contact met ons op",

    // Working Method
    workingMethodTitle: "Werkwijze",
    workingMethodDesc:
      "Om een juiste financiële weergave van uw onderneming tot stand te brengen is het bijhouden van uw administratie essentieel. Na kennismaking leggen we u uit hoe een administratie wordt bijgehouden, richten uw administratie in en voorzien u van relevante informatie.",

    // Footer
    openingHours: "Openingstijden",
    mondayFriday: "Maandag t/m Vrijdag",
    saturdaySunday: "Zaterdag en Zondag",
    closed: "Gesloten",
    followUs: "Volg ons",

    // Pricing
    perMonth: "Per maand",
    bankTransactions: "banktransacties",
    invoicesPerYear: "facturen per jaar",
    withVatAndTax: "Met BTW en jaaraangifte IB",
    excludingPersonnel: "Exclusief personeel",
    mostPopular: "Meest Populair",

    // About
    aboutTitle: "Over DMR Administratie",
    aboutDescription:
      "Bij DMR Administratie houden we de lijnen kort. Hierdoor hebt u een persoonlijke benadering bij het verzorgen van uw financiële administratie. In de vele jaren ervaring als financiële dienstverleners hebben we ondervonden dat communicatie van groot belang is.",

    // About page
    ourValues: "Onze Waarden",
    ourStory: "Ons Verhaal",
    personalApproach: "Persoonlijke Benadering",
    personalApproachDesc: "Wij houden de lijnen kort voor een persoonlijke service",
    expertiseValue: "Expertise",
    expertiseValueDesc: "10+ jaar ervaring in financiële dienstverlening",
    reliability: "Betrouwbaarheid",
    reliabilityDesc: "Altijd op tijd en volgens afspraak",
    commitment: "Betrokkenheid",
    commitmentDesc: "Uw succes is ons succes",
    storyParagraph1:
      "DMR Administratie is ontstaan uit de passie voor het helpen van ondernemers en particulieren bij hun financiële administratie. Met meer dan 10 jaar ervaring in de sector hebben wij een diepgaand begrip ontwikkeld van de uitdagingen waarmee onze klanten worden geconfronteerd.",
    storyParagraph2:
      "Wij geloven dat goede communicatie en persoonlijke aandacht de sleutel zijn tot succesvol partnerschap. Daarom werken wij met een klein, toegewijd team dat elke klant de aandacht geeft die hij of zij verdient.",
    storyParagraph3:
      "Ons doel is eenvoudig: uw administratieve lasten verlichten zodat u zich kunt concentreren op wat u het beste doet - uw bedrijf runnen en uw dromen realiseren.",

    // Contact page translations
    contactTitle: "Contact",
    quickContactWhatsApp: "Snel contact via WhatsApp",
    contactInfo: "Contactgegevens",
    email: "Email",
    phone: "Telefoon",
    location: "Locatie",
    howCanWeHelp: "Hoe kunnen wij u helpen?",
    successMessage: "Uw bericht is succesvol verzonden! We nemen zo spoedig mogelijk contact met u op.",
    appointmentSuccessMessage:
      "Uw afspraakverzoek is succesvol verzonden! We nemen zo spoedig mogelijk contact met u op om de afspraak in te plannen.",
    quoteSuccessMessage:
      "Uw offerteaanvraag is succesvol verzonden! We stellen een passende offerte voor u samen en nemen binnen 24 uur contact met u op.",
    errorMessage: "Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het opnieuw.",
    appointmentErrorMessage: "Er is een fout opgetreden bij het verzenden van uw afspraakverzoek. Probeer het opnieuw.",
    quoteErrorMessage: "Er is een fout opgetreden bij het verzenden van uw offerteaanvraag. Probeer het opnieuw.",
    sending: "Versturen...",
    send: "Versturen",
    name: "Naam",
    yourName: "Uw naam",
    companyName: "Bedrijfsnaam",
    emailAddress: "Email",
    yourEmail: "Uw email",
    phoneNumber: "Telefoonnummer",
    message: "Uw vraag of opmerking",
    howCanWeHelpYou: "Hoe kunnen wij u van dienst zijn?",
    contactTab: "Contact",
    appointmentTab: "Afspraak inplannen",
    quoteTab: "Offerte aanvragen",
    appointmentTabShort: "Afspraak",
    quoteTabShort: "Offerte",
    contactPerson: "Naam contactpersoon",
    preferredDate: "Voorkeursdatum afspraak",
    preferredTime: "Voorkeurstijd",
    chooseTimeframe: "Kies tijdframe",
    morning: "Ochtend (09:00-12:00)",
    afternoon: "Middag (12:00-17:00)",
    evening: "Avond (17:00-20:00)",
    legalForm: "Rechtsvorm",
    selectLegalForm: "Selecteer rechtsvorm",
    servicesNeeded: "Welke diensten heeft u nodig?",
    additionalComments: "Aanvullende opmerkingen of vragen:",
    specificFiscalNeeds: "Heeft u specifieke fiscale behoeften of vragen?",
    scheduleAppointment: "Afspraak inplannen",
    contactPerson2: "Contactpersoon",
    fullName: "Voor- en achternaam",
    companyName2: "Naam van uw bedrijf",
    yourEmailAddress: "uw.email@bedrijf.nl",
    phoneExample: "06 12345678",
    employees: "Aantal medewerkers",
    selectNumber: "Selecteer aantal",
    noPersonnel: "Geen personeel",
    employees1to5: "1-5 medewerkers",
    employees6to10: "6-10 medewerkers",
    employees11to25: "11-25 medewerkers",
    employeesMore25: "Meer dan 25",
    monthlyTransactions: "Banktransacties per maand",
    estimatedNumber: "Geschat aantal",
    transactions0to50: "0-50",
    transactions51to100: "51-100",
    transactions101to200: "101-200",
    transactions201to500: "201-500",
    transactionsMore500: "Meer dan 500",
    yearlyInvoices: "Facturen per jaar",
    invoices0to100: "0-100",
    invoices101to200: "101-200",
    invoices201to300: "201-300",
    invoices301to500: "301-500",
    invoicesMore500: "Meer dan 500",
    desiredServices: "Gewenste diensten",
    additionalInfo: "Aanvullende informatie",
    additionalInfoPlaceholder: "Vertel ons meer over uw specifieke wensen of situatie...",
    requestQuoteButton: "Offerte Aanvragen",
    pricingQuestions: "Heeft u vragen over onze tarieven?",
    pricingQuestionsDesc: "Neem contact met ons op voor een persoonlijk advies en maatwerk offerte.",

    // Pricing features
    pricingFeature200BankTransactions: "200 banktransacties",
    pricingFeature200InvoicesPerYear: "200 facturen per jaar",
    pricingFeatureWithVatAndTax: "Met BTW en jaaraangifte IB",
    pricingFeatureBestForZZP: "Beste voor ZZP boekhouding",
    pricingFeatureExcludingPersonnel: "Exclusief personeel",
    pricingFeature500BankTransactions: "500 banktransacties",
    pricingFeature300InvoicesPerYear: "300 facturen per jaar",
    pricingFeatureEenmanszaakBookkeeping: "Boekhouding eenmanszaak",
    pricingFeatureMaxTwoPartners: "Tot maximaal 2 vennoten",
    pricingFeatureIncludingDGAPayslip: "Inclusief DGA loonstrook",
    pricingFeatureIncludingDGAPayroll: "Inclusief DGA verloning",
    pricingFeature40InvoicesPerYear: "40 facturen per jaar",
    pricingFeature100BankTransactionsPerYear: "100 banktransacties per jaar",
    pricingFeaturePayslip: "Loonstrook",
    pricingFeature4Personnel: "4 Personeel",
    pricingFeatureIncludingInOut: "Inclusief in/uitdienst",
    pricingFeatureAnnualStatement: "Jaaropgave",
    pricingFeaturePayrollJournal: "Loon journaal",
    pricingFeaturePensionAdmin: "Pensioen administratie",

    // WhatsApp message
    whatsappMessage:
      "Beste DMR administratie,%0A%0AIk had een vraag over uw dienstverlening. Kunt u mij meer informatie geven?%0A%0AMet vriendelijke groet",

    // Service titles and descriptions for metadata
    serviceFinancialAdminTitle: "Financiële Administratie",
    serviceFinancialAdminDescription: "Krijg grip op uw financiën en verbeter uw bedrijfsresultaten.",
    servicePayrollAdminTitle: "Loonadministratie",
    servicePayrollAdminDescription: "Verlicht uw lasten en zorg voor loonadministratie zonder zorgen.",
    serviceTaxAdviceTitle: "Belastingadvies",
    serviceTaxAdviceDescription: "Minimaliseer belastingen met ons deskundig belastingadvies.",
    serviceCreditMediationTitle: "Kredietbemiddeling",
    serviceCreditMediationDescription: "Ontdek hoe onze kredietbemiddeling uw financiële groei kan versnellen.",
    serviceBusinessAdviceTitle: "Bedrijfsadvies en -planning",
    serviceBusinessAdviceDescription: "Optimaliseer uw bedrijfsstrategie en toekomstige groei.",
    serviceStartupSupportTitle: "Start-up ondersteuning",
    serviceStartupSupportDescription: "Laat uw start-up gedijen met onze deskundige ondersteuning.",
    serviceLegalFinancialAdviceTitle: "Juridisch en Financieel advies",
    serviceLegalFinancialAdviceDescription: "Bescherm uw bedrijf en maximaliseer financiële kansen.",
    serviceIndividualsTitle: "Particulieren",
    serviceIndividualsDescription: "Ervaar met particuliere financiën, verbeter uw financiële toekomst.",

    // Partners section
    partnersTitle: "Bedrijven waarmee wij samenwerken",
    partnersSubtitle: "Wij werken samen met toonaangevende softwareleveranciers om u de beste service te bieden.",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About us",
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
    quote: "Quote",
    moreInfo: "More information",

    // Hero Section
    heroTitle: "We manage your finances,",
    heroSubtitle: "you realize your ambitions",
    heroDescription:
      "DMR Administration offers tailor-made financial solutions and professional advice to support your business in growth and success. We take care of complex administrative tasks, so you can fully focus on achieving your goals.",
    planMeeting: "Schedule a meeting",

    // Services
    servicesTitle: "Our services",
    servicesSubtitle:
      "DMR Administration is an administration and advisory office that offers various services to companies, entrepreneurs and individuals.",

    financialAdmin: "Financial Administration",
    financialAdminDesc:
      "Our core activity involves providing financial administration. Of the services we offer, processing your administration for VAT and income tax returns is our main occupation.",
    financialAdminShort: "Get control of your finances and improve your business results.",

    payrollAdmin: "Payroll Administration",
    payrollAdminDesc:
      "If you have staff or plan to hire staff, you will deal with payroll administration. This includes paying staff and submitting payroll returns.",
    payrollAdminShort: "Relieve your burden and ensure worry-free payroll administration.",

    taxAdvice: "Tax Advice",
    taxAdviceDesc:
      "Since most of our services are based on tax returns, we offer the possibility to achieve the most favorable tax position on every relevant service.",
    taxAdviceShort: "Minimize taxes with our expert tax advice.",

    individuals: "Individuals",
    individualsDesc:
      "We also assist you as an individual. We can assist you in filing your personal income tax return.",

    // Services page
    creditMediation: "Credit Mediation",
    creditMediationDesc: "Discover how our credit mediation can accelerate your financial growth.",
    creditMediationDetails:
      "We help you find the right financing solutions for your business. From business loans to mortgages, we mediate for the best conditions.",
    businessAdvice: "Business Advice and Planning",
    businessAdviceDesc: "Optimize your business strategy and future growth.",
    businessAdviceDetails:
      "Strategic advice for entrepreneurs who want to grow their business. We help with business planning, financial forecasts and strategic decisions.",
    startupSupport: "Start-up Support",
    startupSupportDesc: "Let your start-up thrive with our expert support.",
    startupSupportDetails:
      "Especially for starting entrepreneurs, we offer extensive support in setting up your administration and making the right choices from the beginning.",
    legalFinancialAdvice: "Legal and Financial Advice",
    legalFinancialAdviceDesc: "Protect your business and maximize financial opportunities.",
    legalFinancialAdviceDetails:
      "Combination of legal and financial expertise to optimally protect your business and seize opportunities in complex regulations.",
    individualsShort: "Experience with personal finances, improve your financial future.",
    readyToStart: "Ready to get started?",
    readyToStartDesc: "Contact us and discover how DMR Administration can support your business.",

    // New startup support content
    startupSupportTitle: "Start-up Support",
    startupSupportShortDesc: "Let your start-up thrive with our expert support.",
    startupSupportLongDesc:
      "At DMR we understand that the journey of a start-up entrepreneur can be challenging and exciting. It starts with an idea, grows into a vision and eventually blossoms into a full-fledged company.",

    // New legal financial advice content
    legalFinancialAdviceTitle: "Legal and Financial Advice",
    legalFinancialAdviceShortDesc: "Protect your business and maximize financial opportunities.",
    legalFinancialAdviceLongDesc:
      "At DMR administration & advice we believe that solid legal and financial advice is the cornerstone of any successful business.",

    optimizedFinance: "Optimized finances",

    // Service detail page
    requestQuote: "Request a quote",
    benefits: "Benefits",
    aboutThisService: "About this service",
    whatWeDo: "What we do for you",
    personalApproachTitle: "Personal approach",
    personalApproachText:
      "Every situation is unique. That's why we tailor our services completely to your specific needs and objectives.",
    howWeWork: "How do we work?",
    howWeWorkDesc: "Our process is transparent and efficient, so you always know where you stand.",
    step1Title: "Getting acquainted",
    step1Desc: "We discuss your situation and wishes during a non-committal conversation.",
    step2Title: "Tailored advice",
    step2Desc: "We create a personal plan that perfectly matches your needs.",
    step3Title: "Execution",
    step3Desc: "We take care of the work and keep you informed of the progress.",
    readyToStartCta: "Contact us for a non-committal conversation about how we can help you.",
    serviceNotFound: "Service not found - DMR Administration",

    // Service detail specific content
    financialAdminBenefit1: "Full processing of your financial administration",
    financialAdminBenefit2: "Timely and correct VAT returns",
    financialAdminBenefit3: "Insight into your financial position",
    financialAdminBenefit4: "Annual accounts and financial reports",
    financialAdminBenefit5: "Personal guidance and advice",
    financialAdminDescription1:
      "Good financial administration is the basis for the success of your company. It gives you insight into your financial position, helps you make strategic decisions and ensures that you meet all legal obligations.",
    financialAdminDescription2:
      "At DMR Administration, we take this complex task completely off your hands. We ensure accurate processing of all your financial data, from invoices and receipts to bank statements and cash books. Our experienced professionals ensure that your administration is always up-to-date and compliant.",
    financialAdminService1: "Processing your daily administration",
    financialAdminService2: "Preparing and submitting VAT returns",
    financialAdminService3: "Debtor and creditor management",
    financialAdminService4: "Preparation of annual accounts",
    financialAdminService5: "Financial reports and analyses",
    financialAdminService6: "Personal advice on your financial situation",

    payrollAdminBenefit1: "Correct and timely salary processing",
    payrollAdminBenefit2: "Compliance with all laws and regulations",
    payrollAdminBenefit3: "Taking care of all payroll returns",
    payrollAdminBenefit4: "Annual statements and payslips",
    payrollAdminBenefit5: "Personnel files and administration",
    payrollAdminDescription1:
      "Correct payroll administration is essential for your company. It ensures that your employees are paid on time and correctly, and that you meet all legal obligations in the field of taxes and social security contributions.",
    payrollAdminDescription2:
      "At DMR Administration, we take care of the complete payroll administration. Our specialists ensure that all salaries are calculated and paid correctly, and that all returns are submitted on time.",
    payrollAdminService1: "Preparing and processing salaries",
    payrollAdminService2: "Taking care of payslips",
    payrollAdminService3: "Submitting payroll returns",
    payrollAdminService4: "Annual statements for employees",
    payrollAdminService5: "Maintaining personnel files",
    payrollAdminService6: "Advice on employment conditions and collective labor agreements",
    zakelijkAuto: "Company car for business",
    payrollAdminService7: "Guidance with hiring and termination of employment",

    taxAdviceBenefit1: "Minimization of your tax burden",
    taxAdviceBenefit2: "Proactive tax advice",
    taxAdviceBenefit3: "Optimal tax structure",
    taxAdviceBenefit4: "Guidance with tax audits",
    taxAdviceBenefit5: "Up-to-date knowledge of tax legislation",
    taxAdviceDescription1:
      "Taxes are a significant cost item for both companies and individuals. However, with expert tax advice you can save considerably and optimize your tax position.",
    taxAdviceDescription2:
      "At DMR Administration, our tax experts help you to minimize your tax burden within the legal frameworks. We closely monitor the changing tax legislation and adjust our advice accordingly.",
    taxAdviceService1: "Preparing and submitting tax returns",
    taxAdviceService2: "Tax planning and optimization",
    taxAdviceService3: "Advice on VAT issues",
    taxAdviceService4: "Guidance with tax audits",
    taxAdviceService5: "Advice on business succession and transfer",
    taxAdviceService6: "Tax aspects of investments",
    taxAdviceService7: "International tax issues",

    creditMediationBenefit1: "Access to various financing options",
    creditMediationBenefit2: "Independent advice on financing options",
    creditMediationBenefit3: "Guidance during the application process",
    creditMediationBenefit4: "Negotiation of favorable terms",
    creditMediationBenefit5: "Faster access to capital",
    creditMediationDescription1:
      "Access to capital is crucial for the growth and development of your company. Whether you want to invest in new equipment, purchase a property or need working capital, the right financing is essential.",
    creditMediationDescription2:
      "As an independent credit intermediary, DMR Administration helps you find the most suitable financing solution. We have access to a broad network of financiers and know the market inside and out.",
    creditMediationService1: "Analysis of your financing needs",
    creditMediationService2: "Advice on different forms of financing",
    creditMediationService3: "Preparing a financing application",
    creditMediationService4: "Negotiating with financiers",
    creditMediationService5: "Guidance throughout the entire application process",
    creditMediationService6: "Refinancing existing loans",
    creditMediationService7: "Advice on lease and hire purchase constructions",

    businessAdviceBenefit1: "Strategic business planning",

    businessAdviceBenefit2: "Financial forecasts and budgeting",
    businessAdviceBenefit3: "Cost analysis and optimization",
    businessAdviceBenefit4: "Advice on business structure",
    businessAdviceBenefit5: "Guidance with growth and expansion",
    businessAdviceDescription1:
      "A clear strategy and good planning are essential for the success and growth of your company. With professional business advice you can make informed decisions and achieve your goals more effectively.",
    businessAdviceDescription2:
      "At DMR Administration, we offer comprehensive business advice tailored to your needs. Our advisors have years of experience in various sectors and help you develop and implement effective strategies.",
    businessAdviceService1: "Preparing business plans",
    businessAdviceService2: "Financial forecasts and scenario analyses",
    businessAdviceService3: "Cost analysis and efficiency improvements",
    businessAdviceService4: "Advice on business structure and organization",
    businessAdviceService5: "Guidance with growth and expansion",
    businessAdviceService6: "Strategic planning and objectives",
    nederland: "Netherlands",
    businessAdviceService7: "Benchmarking and competition analysis",

    startupSupportBenefit1: "Guidance with setting up your administration",
    startupSupportBenefit2: "Advice on legal form and business structure",
    startupSupportBenefit3: "Support with financial planning",
    startupSupportBenefit4: "Assistance with applying for subsidies",
    startupSupportBenefit5: "Network of relevant partners",
    startupSupportDescription1:
      "Starting a business is an exciting but also challenging phase. Many decisions have to be made that determine the future of your company. Professional support can help you make the right choices and avoid costly mistakes.",
    startupSupportDescription2:
      "DMR Administration offers specific support for startups and starting entrepreneurs. We help you lay a solid financial foundation for your company and guide you through the first steps as an entrepreneur.",
    startupSupportService1: "Advice on the choice of legal form",
    startupSupportService2: "Setting up your financial administration",
    startupSupportService3: "Guidance with registration at the Chamber of Commerce and Tax Authorities",
    startupSupportService4: "Preparing a business plan",
    startupSupportService5: "Financial forecasts and budgeting",
    startupSupportService6: "Advice on subsidies and financing options",
    startupSupportService7: "Tax advice for starting entrepreneurs",

    legalFinancialAdviceBenefit1: "Integrated legal and financial advice",
    legalFinancialAdviceBenefit2: "Protection of your business interests",
    legalFinancialAdviceBenefit3: "Optimization of contracts and agreements",
    legalFinancialAdviceBenefit4: "Risk management and mitigation",
    legalFinancialAdviceBenefit5: "Compliance with laws and regulations",
    legalFinancialAdviceDescription1:
      "In today's complex business landscape, legal and financial aspects are often closely intertwined. An integrated approach is therefore essential to optimally protect your company and seize opportunities.",
    legalFinancialAdviceDescription2:
      "DMR Administration offers a unique combination of legal and financial advice. Our experts have knowledge of both fields and can therefore advise you holistically on complex business issues.",
    legalFinancialAdviceService1: "Legal structuring of your company",
    legalFinancialAdviceService2: "Drafting and reviewing contracts",
    legalFinancialAdviceService3: "Advice on general terms and conditions",
    legalFinancialAdviceService4: "Guidance with disputes and conflicts",
    legalFinancialAdviceService5: "Compliance with laws and regulations",
    legalFinancialAdviceService6: "Risk management and mitigation",
    legalFinancialAdviceService7: "Advice on intellectual property",

    individualsBenefit1: "Personal guidance with tax returns",
    individualsBenefit2: "Optimization of your tax position",
    individualsBenefit3: "Advice on wealth planning",
    individualsBenefit4: "Guidance with financial decisions",
    individualsBenefit5: "Assistance with allowances and subsidies",
    individualsDescription1:
      "Even as an individual, you may face complex financial and tax issues. Whether it concerns your tax return, wealth planning or financial decisions, professional advice can help you make the right choices.",
    individualsDescription2:
      "At DMR Administration, we offer comprehensive services for individuals. Our advisors help you optimize your financial situation and minimize your tax burden.",
    individualsService1: "Preparing and submitting your tax return",
    individualsService2: "Advice on tax deductions",
    individualsService3: "Guidance with objection and appeal procedures",
    individualsService4: "Wealth planning and management",
    individualsService5: "Advice on donations and inheritances",
    individualsService6: "Assistance with applying for allowances",
    individualsService7: "Financial planning for your future",

    // Particulieren pricing features
    particulierenTitle: "Individuals",
    particulierenPrice: "35",
    particulierenFeature1: "Healthcare allowance application",
    particulierenFeature2: "Housing allowance application",
    particulierenFeature3: "Child benefit application",
    particulierenFeature4: "Municipal forms application",
    particulierenFeature5: "Income tax return €50",
    particulierenFeature6: "With partner +€25",

    // NOTK pricing
    pricingNOTK: "TBD (to be determined)",

    // Why DMR
    whyDmrTitle: "Why DMR Administration?",
    experience: "10+ years experience",
    minimalTax: "Minimal tax payment",
    youSendWeDo: "You send, we do",
    expertise: "Expertise & advice",
    clients: "100+ satisfied clients",

    // Contact CTA
    contactUs: "Contact us",

    // Working Method
    workingMethodTitle: "Working Method",
    workingMethodDesc:
      "To create an accurate financial representation of your business, maintaining your administration is essential. After getting acquainted, we explain how an administration is maintained, set up your administration and provide you with relevant information.",

    // Footer
    openingHours: "Opening Hours",
    mondayFriday: "Monday to Friday",
    saturdaySunday: "Saturday and Sunday",
    closed: "Closed",
    followUs: "Follow us",
    quickContactWhatsApp: "quick contact via WhatsApp",

    // Pricing
    perMonth: "Per month",
    bankTransactions: "bank transactions",
    invoicesPerYear: "invoices per year",
    withVatAndTax: "With VAT and annual tax return",
    excludingPersonnel: "Excluding personnel",
    mostPopular: "Most Popular",

    // About
    aboutTitle: "About DMR Administration",
    rights: "2024 DMR Administration. All rights reserved.",
    aboutDescription:
      "At DMR Administration we keep the lines short. This gives you a personal approach when providing your financial administration. In our many years of experience as financial service providers, we have found that communication is of great importance.",

    // About page
    ourValues: "Our Values",
    ourStory: "Our Story",
    personalApproach: "Personal Approach",
    personalApproachDesc: "We keep the lines short for a personal service",
    expertiseValue: "Expertise",
    expertiseValueDesc: "10+ years of experience in financial services",
    createdby: "Created by Devkan",
    reliability: "Reliability",
    reliabilityDesc: "Always on time and as agreed",
    commitment: "Commitment",
    commitmentDesc: "Your success is our success",
    storyParagraph1:
      "DMR Administration was born out of a passion for helping entrepreneurs and individuals with their financial administration. With over 10 years of experience in the industry, we have developed a deep understanding of the challenges our clients face.",
    storyParagraph2:
      "We believe that good communication and personal attention are key to a successful partnership. That's why we work with a small, dedicated team that gives each client the attention they deserve.",
    storyParagraph3:
      "Our goal is simple: to relieve your administrative burden so you can focus on what you do best - running your business and realizing your dreams.",
    makeContact:
      "Contact DMR Administration for all your questions about financial administration, payroll administration, and tax advice.",

    openingTimeTitle: "Opening Hours",
    openingTimeDays: "Monday to Friday",
    openingTimeWeekdays: "08:30 – 18:00",
    openingTimeSaturday: "Saturday",
    openingTimeSaturdayHours: "09:00 – 13:00",
    openingTimeSunday: "Sunday",
    openingTimeSundayHours: "Closed",

    // Contact page translations
    contactTitle: "Contact",
    contactInfo: "Contact Information",
    email: "Email",
    phone: "Phone",
    location: "Location",
    howCanWeHelp: "How can we help you?",
    successMessage: "Your message has been sent successfully! We will contact you as soon as possible.",
    appointmentSuccessMessage:
      "Your appointment request has been sent successfully! We will contact you as soon as possible to schedule the appointment.",
    quoteSuccessMessage:
      "Your quote request has been sent successfully! We will prepare a suitable quote for you and contact you within 24 hours.",
    errorMessage: "An error occurred while sending your message. Please try again.",
    appointmentErrorMessage: "An error occurred while sending your appointment request. Please try again.",
    quoteErrorMessage: "An error occurred while sending your quote request. Please try again.",
    sending: "Sending...",
    send: "Send",
    name: "Name",
    yourName: "Your name",
    companyName: "Company name",
    emailAddress: "Email",
    yourEmail: "Your email",
    phoneNumber: "Phone number",
    message: "Your question or comment",
    howCanWeHelpYou: "How can we be of service?",
    contactTab: "Contact",
    appointmentTab: "Schedule appointment",
    quoteTab: "Request quote",
    appointmentTabShort: "Appointment",
    quoteTabShort: "Quote",
    contactPerson: "Contact person name",
    preferredDate: "Preferred appointment date",
    preferredTime: "Preferred time",
    chooseTimeframe: "Choose timeframe",
    morning: "Morning (09:00-12:00)",
    afternoon: "Afternoon (12:00-17:00)",
    evening: "Evening (17:00-20:00)",
    legalForm: "Legal form",
    selectLegalForm: "Select legal form",
    servicesNeeded: "Which services do you need?",
    additionalComments: "Additional comments or questions:",
    specificFiscalNeeds: "Do you have specific fiscal needs or questions?",
    scheduleAppointment: "Schedule appointment",
    contactPerson2: "Contact person",
    fullName: "First and last name",
    companyName2: "Name of your company",
    yourEmailAddress: "your.email@company.com",
    phoneExample: "06 12345678",
    employees: "Number of employees",
    selectNumber: "Select number",
    noPersonnel: "No personnel",
    employees1to5: "1-5 employees",
    employees6to10: "6-10 employees",
    employees11to25: "11-25 employees",
    employeesMore25: "More than 25",
    monthlyTransactions: "Bank transactions per month",
    estimatedNumber: "Estimated number",
    transactions0to50: "0-50",
    transactions51to100: "51-100",
    transactions101to200: "101-200",
    transactions201to500: "201-500",
    transactionsMore500: "More than 500",
    yearlyInvoices: "Invoices per year",
    invoices0to100: "0-100",
    invoices101to200: "101-200",
    invoices201to300: "201-300",
    invoices301to500: "301-500",
    invoicesMore500: "More than 500",
    desiredServices: "Desired services",
    additionalInfo: "Additional information",
    additionalInfoPlaceholder: "Tell us more about your specific wishes or situation...",
    requestQuoteButton: "Request Quote",
    pricingQuestions: "Do you have questions about our rates?",
    pricingQuestionsDesc: "Contact us for personal advice and a custom quote.",

    // Pricing features
    pricingFeature200BankTransactions: "200 bank transactions",
    pricingFeature200InvoicesPerYear: "200 invoices per year",
    pricingFeatureWithVatAndTax: "With VAT and annual tax return",
    pricingFeatureBestForZZP: "Best for freelancer bookkeeping",
    pricingFeatureExcludingPersonnel: "Excluding personnel",
    pricingFeature500BankTransactions: "500 bank transactions",
    pricingFeature300InvoicesPerYear: "300 invoices per year",
    pricingFeatureEenmanszaakBookkeeping: "Sole proprietorship bookkeeping",
    pricingFeatureMaxTwoPartners: "Up to maximum 2 partners",
    pricingFeatureIncludingDGAPayslip: "Including DGA payslip",
    pricingFeatureIncludingDGAPayroll: "Including DGA payroll",
    pricingFeature40InvoicesPerYear: "40 invoices per year",
    pricingFeature100BankTransactionsPerYear: "100 bank transactions per year",
    pricingFeaturePayslip: "Payslip",
    pricingFeature4Personnel: "4 Personnel",
    pricingFeatureIncludingInOut: "Including hire/termination",
    pricingFeatureAnnualStatement: "Annual statement",
    pricingFeaturePayrollJournal: "Payroll journal",
    pricingFeaturePensionAdmin: "Pension administration",

    // WhatsApp message
    whatsappMessage:
      "Dear DMR administration,%0A%0AI have a question about your services. Could you provide me with more information?%0A%0AKind regards",

    // Service titles and descriptions for metadata
    serviceFinancialAdminTitle: "Financial Administration",
    serviceFinancialAdminDescription: "Get control of your finances and improve your business results.",
    servicePayrollAdminTitle: "Payroll Administration",
    servicePayrollAdminDescription: "Relieve your burden and ensure worry-free payroll administration.",
    serviceTaxAdviceTitle: "Tax Advice",
    serviceTaxAdviceDescription: "Minimize taxes with our expert tax advice.",
    serviceCreditMediationTitle: "Credit Mediation",
    serviceCreditMediationDescription: "Discover how our credit mediation can accelerate your financial growth.",
    serviceBusinessAdviceTitle: "Business Advice and Planning",
    serviceBusinessAdviceDescription: "Optimize your business strategy and future growth.",
    serviceStartupSupportTitle: "Start-up Support",
    serviceStartupSupportDescription: "Let your start-up thrive with our expert support.",
    serviceLegalFinancialAdviceTitle: "Legal and Financial Advice",
    serviceLegalFinancialAdviceDescription: "Protect your business and maximize financial opportunities.",
    serviceIndividualsTitle: "Individuals",
    serviceIndividualsDescription: "Experience with personal finances, improve your financial future.",

    // Partners section
    partnersTitle: "Companies we work with",
    partnersSubtitle: "We collaborate with leading software providers to offer you the best service.",
  },
  bg: {
    // Navigation
    home: "Начало",
    about: "За нас",
    services: "Услуги",
    pricing: "Цени",
    contact: "Контакт",
    quote: "Оферта",
    moreInfo: "Повече информация",
    makeContact:
      "Свържете се с DMR Administratie за всички ваши въпроси относно финансовата администрация, администрацията на заплатите и данъчните консултации.",

    // Hero Section
    heroTitle: "Ние управляваме вашите финанси,",
    heroSubtitle: "вие реализирате амбициите си",
    heroDescription:
      "DMR Administratie предлага персонализирани финансови решения и професионални съвети за подкрепа на вашия бизнес в растежа и успеха. Ние поемаме сложните административни задачи, за да можете да се съсредоточите изцяло върху постигането на целите си.",
    planMeeting: "Планирайте среща",
    createdby: "Създадено от DevKan",

    // Services
    servicesTitle: "Нашите услуги",
    servicesSubtitle:
      "DMR Administratie е административна и консултантска кантора, която предлага различни услуги на компании, предприемачи и частни лица.",

    financialAdmin: "Финансова администрация",
    financialAdminDesc:
      "Основната ни дейност включва предоставяне на финансова администрация. От услугите, които предлагаме, обработката на вашата администрация за ДДС и данъчни декларации е основното ни занимание.",
    financialAdminShort: "Получете контрол върху финансите си и подобрете бизнес резултатите си.",

    payrollAdmin: "Заплатна администрация",
    payrollAdminDesc:
      "Ако имате персонал или планирате да наемете персонал, ще се занимавате със заплатна администрация. Това включва заплащане на персонала и подаване на заплатни декларации.",
    payrollAdminShort: "Облекчете тежестта си и осигурете безпроблемна заплатна администрация.",

    taxAdvice: "Данъчни съвети",
    taxAdviceDesc:
      "Тъй като повечето от нашите услуги се основават на данъчни декларации, предлагаме възможност за постигане на най-благоприятната данъчна позиция при всяка релевантна услуга.",
    taxAdviceShort: "Минимизирайте данъците с нашите експертни данъчни съвети.",

    individuals: "Частни лица",
    individualsDesc:
      "Ние също ви помагаме като частно лице. Можем да ви помогнем при подаването на вашата лична данъчна декларация.",

    // Services page
    creditMediation: "Кредитно посредничество",
    creditMediationDesc: "Открийте как нашето кредитно посредничество може да ускори вашия финансов растеж.",
    creditMediationDetails:
      "Помагаме ви да намерите правилните решения за финансиране на вашия бизнес. От бизнес кредити до ипотеки, ние посредничим за най-добрите условия.",
    businessAdvice: "Бизнес съвети и планиране",
    businessAdviceDesc: "Оптимизирайте вашата бизнес стратегия и бъдещ растеж.",
    businessAdviceDetails:
      "Стратегически съвети за предприемачи, които искат да развият бизнеса си. Помагаме с бизнес планиране, финансови прогнози и стратегически решения.",
    startupSupport: "Поддръжка за стартъпи",
    startupSupportDesc: "Нека вашият стартъп процъфтява с нашата експертна поддръжка.",
    startupSupportDetails:
      "Специално за начинаещи предприемачи предлагаме обширна поддръжка при създаването на вашата администрация и вземането на правилните решения от самото начало.",
    legalFinancialAdvice: "Правни и финансови съвети",
    legalFinancialAdviceDesc: "Защитете бизнеса си и максимизирайте финансовите възможности.",
    legalFinancialAdviceDetails:
      "Комбинация от правна и финансова експертиза за оптимална защита на вашия бизнес и използване на възможностите в сложните регулации.",
    individualsShort: "Опит с лични финанси, подобрете финансовото си бъдеще.",
    readyToStart: "Готови ли сте да започнете?",
    readyToStartDesc: "Свържете се с нас и открийте как DMR Administratie може да подкрепи вашия бизнес.",

    // New startup support content
    startupSupportTitle: "Поддръжка за стартъпи",
    startupSupportShortDesc: "Нека вашият стартъп процъфтява с нашата експертна поддръжка.",
    startupSupportLongDesc:
      "В DMR разбираме, че пътуването на стартъп предприемача може да бъде предизвикателно и вълнуващо. То започва с идея, израства до визия и в крайна сметка разцъфтява в пълноценна компания.",

    // New legal financial advice content
    legalFinancialAdviceTitle: "Правни и финансови съвети",
    legalFinancialAdviceShortDesc: "Защитете бизнеса си и максимизирайте финансовите възможности.",
    legalFinancialAdviceLongDesc:
      "В DMR администрация и съвети вярваме, че солидните правни и финансови съвети са краеъгълният камък на всеки успешен бизнес.",

    optimizedFinance: "Оптимизирани финанси",

    // Service detail page
    requestQuote: "Заявете оферта",
    rights: "2024 DMR Administratie. Всички права запазени.",
    benefits: "Предимства",
    aboutThisService: "За тази услуга",
    whatWeDo: "Какво правим за вас",
    personalApproachTitle: "Личен подход",
    personalApproachText:
      "Всяка ситуация е уникална. Затова ние напълно адаптираме услугите си към вашите специфични нужди и цели.",
    howWeWork: "Как работим?",
    howWeWorkDesc: "Нашият процес е прозрачен и ефективен, така че винаги знаете къде стоите.",
    step1Title: "Запознаване",
    step1Desc: "Обсъждаме вашата ситуация и желания по време на необвързващ разговор.",
    step2Title: "Персонализиран съвет",
    step2Desc: "Създаваме личен план, който перфектно отговаря на вашите нужди.",
    step3Title: "Изпълнение",
    step3Desc: "Поемаме работата и ви държим в течение за напредъка.",
    readyToStartCta: "Свържете се с нас за необвързващ разговор за това как можем да ви помогнем.",
    serviceNotFound: "Услугата не е намерена - DMR Administratie",

    // Service detail specific content
    financialAdminBenefit1: "Пълна обработка на вашата финансова администрация",
    financialAdminBenefit2: "Навременни и коректни ДДС декларации",
    financialAdminBenefit3: "Поглед върху вашето финансово състояние",
    financialAdminBenefit4: "Годишни отчети и финансови доклади",
    financialAdminBenefit5: "Лично ръководство и съвети",
    financialAdminDescription1:
      "Добрата финансова администрация е основата за успеха на вашата компания. Тя ви дава представа за вашето финансово състояние, помага ви да вземате стратегически решения и гарантира, че спазвате всички законови задължения.",
    financialAdminDescription2:
      "В DMR Administratie ние напълно поемаме тази сложна задача. Ние гарантираме точна обработка на всички ваши финансови данни, от фактури и разписки до банкови извлечения и касови книги. Нашите опитни професионалисти гарантират, че вашата администрация е винаги актуална и съвместима.",
    financialAdminService1: "Обработка на вашата ежедневна администрация",
    financialAdminService2: "Съставяне и подаване на ДДС декларации",
    financialAdminService3: "Управление на дебитори и кредитори",
    financialAdminService4: "Съставяне на годишни отчети",
    financialAdminService5: "Финансови отчети и анализи",
    financialAdminService6: "Лични съвети относно вашето финансово състояние",

    payrollAdminBenefit1: "Коректна и навременна обработка на заплатите",
    payrollAdminBenefit2: "Спазване на всички закони и разпоредби",
    payrollAdminBenefit3: "Грижа за всички декларации за заплати",
    payrollAdminBenefit4: "Годишни извлечения и фишове за заплати",
    payrollAdminBenefit5: "Лични досиета и администрация",
    payrollAdminDescription1:
      "Правилната администрация на заплатите е от съществено значение за вашата компания. Тя гарантира, че вашите служители са платени навреме и правилно и че спазвате всички законови задължения в областта на данъците и социалните осигуровки.",
    payrollAdminDescription2:
      "В DMR Administratie ние се грижим за цялата администрация на заплатите. Нашите специалисти гарантират, че всички заплати са изчислени и изплатени правилно и че всички декларации са подадени навреме.",
    payrollAdminService1: "Съставяне и обработка на заплати",
    payrollAdminService2: "Грижа за фишове за заплати",
    payrollAdminService3: "Подаване на декларации за заплати",
    payrollAdminService4: "Годишни извлечения за служители",
    payrollAdminService5: "Поддържане на лични досиета",
    payrollAdminService6: "Съвети относно условията на труд и колективните трудови договори",
    payrollAdminService7: "Насоки при наемане и прекратяване на работа",

    taxAdviceBenefit1: "Минимизиране на вашата данъчна тежест",
    taxAdviceBenefit2: "Проактивни данъчни съвети",
    taxAdviceBenefit3: "Оптимална данъчна структура",
    taxAdviceBenefit4: "Насоки при данъчни одити",
    taxAdviceBenefit5: "Актуализирани познания за данъчното законодателство",
    taxAdviceDescription1:
      "Данъците са значителен разход както за компаниите, така и за физическите лица. С експертни данъчни съвети обаче можете да спестите значително и да оптимизирате данъчната си позиция.",
    taxAdviceDescription2:
      "В DMR Administratie нашите данъчни експерти ви помагат да минимизирате данъчната си тежест в рамките на законовите рамки. Ние следим отблизо променящото се данъчно законодателство и съответно коригираме нашите съвети.",
    taxAdviceService1: "Съставяне и подаване на данъчни декларации",
    taxAdviceService2: "Данъчно планиране и оптимизация",
    taxAdviceService3: "Съвети относно въпроси, свързани с ДДС",
    taxAdviceService4: "Насоки при данъчни одити",
    taxAdviceService5: "Съвети относно наследяване и прехвърляне на бизнес",
    taxAdviceService6: "Данъчни аспекти на инвестициите",
    taxAdviceService7: "Международни данъчни въпроси",

    creditMediationBenefit1: "Достъп до различни възможности за финансиране",
    creditMediationBenefit2: "Независими съвети относно възможностите за финансиране",
    creditMediationBenefit3: "Насоки по време на процеса на кандидатстване",
    creditMediationBenefit4: "Договаряне на изгодни условия",
    creditMediationBenefit5: "По-бърз достъп до капитал",
    creditMediationDescription1:
      "Достъпът до капитал е от решаващо значение за растежа и развитието на вашата компания. Независимо дали искате да инвестирате в ново оборудване, да закупите имот или се нуждаете от оборотен капитал, правилното финансиране е от съществено значение.",
    creditMediationDescription2:
      "Като независим кредитен посредник, DMR Administratie ви помага да намерите най-подходящото решение за финансиране. Имаме достъп до широка мрежа от финансисти и познаваме пазара отвътре и отвън.",
    creditMediationService1: "Анализ на вашите нужди от финансиране",
    creditMediationService2: "Съвети относно различни форми на финансиране",
    creditMediationService3: "Подготовка на заявление за финансиране",
    creditMediationService4: "Преговори с финансисти",
    creditMediationService5: "Насоки по време на целия процес на кандидатстване",
    creditMediationService6: "Рефинансиране на съществуващи заеми",
    creditMediationService7: "Съвети относно лизинг и конструкции за покупка на лизинг",

    businessAdviceBenefit1: "Стратегическо бизнес планиране",
    businessAdviceBenefit2: "Финансови прогнози и бюджетиране",
    businessAdviceBenefit4: "Съвети относно бизнес структурата",
    businessAdviceBenefit5: "Насоки при растеж и разширяване",
    businessAdviceDescription1:
      "Ясна стратегия и добро планиране са от съществено значение за успеха и растежа на вашата компания. С професионални бизнес съвети можете да вземате информирани решения и да постигате целите си по-ефективно.",
    businessAdviceDescription2:
      "В DMR Administratie предлагаме изчерпателни бизнес съвети, съобразени с вашите нужди. Нашите съветници имат дългогодишен опит в различни сектори и ви помагат да разработите и приложите ефективни стратегии.",
    businessAdviceService1: "Подготовка на бизнес планове",
    businessAdviceService2: "Финансови прогнози и анализи на сценарии",
    businessAdviceService3: "Анализ на разходите и подобрения на ефективността",
    businessAdviceService4: "Съвети относно бизнес структурата и организацията",
    businessAdviceService5: "Насоки при растеж и разширяване",
    businessAdviceService6: "Стратегическо планиране и цели",
    businessAdviceService7: "Бенчмаркинг и анализ на конкуренцията",

    startupSupportBenefit1: "Насоки при създаването на вашата администрация",
    startupSupportBenefit2: "Съвети относно правната форма и бизнес структурата",
    businessAdviceBenefit3: "Подкрепа при финансовото планиране",
    startupSupportBenefit4: "Помощ при кандидатстване за субсидии",
    startupSupportBenefit5: "Мрежа от съответни партньори",
    startupSupportDescription1:
      "Стартирането на бизнес е вълнуваща, но и предизвикателна фаза. Трябва да се вземат много решения, които определят бъдещето на вашата компания. Професионалната подкрепа може да ви помогне да направите правилния избор и да избегнете скъпи грешки.",
    startupSupportDescription2:
      "DMR Administratie предлага специфична подкрепа за стартиращи фирми и начинаещи предприемачи. Ние ви помагаме да поставите солидна финансова основа за вашата компания и ви напътстваме през първите стъпки като предприемач.",
    startupSupportService1: "Съвети относно избора на правна форма",
    startupSupportService2: "Създаване на вашата финансова администрация",
    startupSupportService3: "Насоки при регистрация в Търговската камара и данъчните органи",
    startupSupportService4: "Подготовка на бизнес план",
    startupSupportService5: "Финансови прогнози и бюджетиране",
    startupSupportService6: "Съвети относно субсидии и възможности за финансиране",
    startupSupportService7: "Данъчни съвети за начинаещи предприемачи",

    legalFinancialAdviceBenefit1: "Интегрирани правни и финансови съвети",
    legalFinancialAdviceBenefit2: "Защита на вашите бизнес интереси",
    legalFinancialAdviceBenefit3: "Оптимизация на договори и споразумения",
    legalFinancialAdviceBenefit4: "Управление и ограничаване на риска",
    legalFinancialAdviceBenefit5: "Съответствие със закони и разпоредби",
    legalFinancialAdviceDescription1:
      "В днешния сложен бизнес пейзаж правните и финансовите аспекти често са тясно преплетени. Интегрираният подход затова е от съществено значение за оптимална защита на вашата компания и използване на възможностите.",
    legalFinancialAdviceDescription2:
      "DMR Administratie предлага уникална комбинация от правни и финансови съвети. Нашите експерти имат познания и в двете области и затова могат да ви дават холистични съвети по сложни бизнес въпроси.",
    legalFinancialAdviceService1: "Правно структуриране на вашата компания",
    legalFinancialAdviceService2: "Изготвяне и преглед на договори",
    legalFinancialAdviceService3: "Съвети относно общи условия",
    legalFinancialAdviceService4: "Насоки при спорове и конфликти",
    legalFinancialAdviceService5: "Съответствие със закони и разпоредби",
    legalFinancialAdviceService6: "Управление и ограничаване на риска",
    legalFinancialAdviceService7: "Съвети относно интелектуална собственост",

    individualsBenefit1: "Лично ръководство при данъчни декларации",
    individualsBenefit2: "Оптимизация на вашата данъчна позиция",
    individualsBenefit3: "Съвети относно планиране на богатството",
    individualsBenefit4: "Насоки при финансови решения",
    individualsBenefit5: "Помощ при помощи и субсидии",
    individualsDescription1:
      "Дори като частно лице можете да се сблъскате със сложни финансови и данъчни въпроси. Независимо дали става въпрос за вашата данъчна декларация, планиране на богатството или финансови решения, професионалните съвети могат да ви помогнат да направите правилните избори.",
    individualsDescription2:
      "В DMR Administratie предлагаме изчерпателни услуги за частни лица. Нашите съветници ви помагат да оптимизирате финансовата си ситуация и да минимизирате данъчната си тежест.",
    individualsService1: "Подготовка и подаване на вашата данъчна декларация",
    individualsService2: "Съвети относно данъчни приспадания",
    individualsService3: "Насоки при процедури за възражение и обжалване",
    individualsService4: "Планиране и управление на богатството",
    individualsService5: "Съвети относно дарения и наследства",
    individualsService6: "Помощ при кандидатстване за помощи",
    Nederland: "Нидерландия",
    individualsService7: "Финансово планиране за вашето бъдеще",

    // Particulieren pricing features
    particulierenTitle: "Частни лица",
    particulierenPrice: "35",
    particulierenFeature1: "Заявление за здравна помощ",
    particulierenFeature2: "Заявление за жилищна помощ",
    particulierenFeature3: "Заявление за детски надбавки",
    particulierenFeature4: "Заявление за общински формуляри",
    particulierenFeature5: "Данъчна декларация за доходи €50",
    particulierenFeature6: "С партньор +€25",

    // NOTK pricing
    pricingNOTK: "ДСУД (да се уговори допълнително)",

    // Why DMR
    whyDmrTitle: "Защо DMR Administratie?",
    experience: "10+ години опит",
    minimalTax: "Минимални данъчни плащания",
    youSendWeDo: "Вие изпращате, ние правим",
    expertise: "Експертиза и съвети",
    clients: "100+ доволни клиенти",

    // Contact CTA
    contactUs: "Свържете се с нас",

    // Working Method
    workingMethodTitle: "Метод на работа",
    workingMethodDesc:
      "За да се създаде точно финансово представяне на вашия бизнес, поддържането на вашата администрация е от съществено значение. След запознаване ви обясняваме как се поддържа администрация, настройваме вашата администрация и ви предоставяме съответната информация.",

    // Footer
    openingHours: "Работно време",
    mondayFriday: "Понеделник до петък",
    saturdaySunday: "Събота и неделя",
    closed: "Затворено",
    followUs: "Последвайте ни",
    quickContactWhatsApp: "бърз контакт чрез WhatsApp",

    // Pricing
    perMonth: "На месец",
    bankTransactions: "банкови транзакции",
    invoicesPerYear: "фактури годишно",
    withVatAndTax: "С ДДС и годишна данъчна декларация",
    excludingPersonnel: "Без персонал",
    mostPopular: "Най-популярен",

    // About
    aboutTitle: "За DMR Administratie",
    aboutDescription:
      "В DMR Administratie поддържаме кратките линии. Това ви дава личен подход при предоставянето на вашата финансова администрация. В нашия дългогодишен опит като доставчици на финансови услуги установихме, че комуникацията е от голямо значение.",

    // About page
    ourValues: "Нашите ценности",
    ourStory: "Нашата история",
    personalApproach: "Личен подход",
    personalApproachDesc: "Поддържаме кратките линии за персонализирана услуга",
    expertiseValue: "Експертиза",
    expertiseValueDesc: "10+ години опит във финансовите услуги",
    reliability: "Надеждност",
    reliabilityDesc: "Винаги навреме и както е уговорено",
    commitment: "Ангажираност",
    commitmentDesc: "Вашият успех е нашият успех",
    storyParagraph1:
      "DMR Administratie се роди от страстта за помощ на предприемачи и частни лица с тяхната финансова администрация. С над 10 години опит в индустрията, развихме дълбоко разбиране на предизвикателствата, пред които са изправени нашите клиенти.",
    storyParagraph2:
      "Вярваме, че добрата комуникация и личното внимание са ключът към успешно партньорство. Затова работим с малък, отдаден екип, който дава на всеки клиент вниманието, което заслужава.",
    storyParagraph3:
      "Нашата цел е проста: да облекчим вашата административна тежест, за да можете да се съсредоточите върху това, което правите най-добре - управлявате бизнеса си и реализирате мечтите си.",

    openingTimeTitle: "Работно време",
    openingTimeDays: "Понеделник до петък",
    openingTimeWeekdays: "08:30 – 18:00",
    openingTimeSaturday: "Събота",
    openingTimeSaturdayHours: "09:00 – 13:00",
    openingTimeSunday: "Неделя",
    openingTimeSundayHours: "Затворено",

    // Contact page translations
    contactTitle: "Контакт",
    contactInfo: "Информация за контакт",
    email: "Имейл",
    phone: "Телефон",
    location: "Местоположение",
    howCanWeHelp: "Как можем да ви помогнем?",
    successMessage: "Вашето съобщение беше изпратено успешно! Ще се свържем с вас възможно най-скоро.",
    appointmentSuccessMessage:
      "Вашата заявка за среща беше изпратена успешно! Ще се свържем с вас възможно най-скоро, за да насрочим срещата.",
    quoteSuccessMessage:
      "Вашата заявка за оферта беше изпратена успешно! Ще подготвим подходяща оферта за вас и ще се свържем с вас в рамките на 24 часа.",
    errorMessage: "Възникна грешка при изпращането на вашето съобщение. Моля, опитайте отново.",
    appointmentErrorMessage: "Възникна грешка при изпращането на вашата заявка за среща. Моля, опитайте отново.",
    quoteErrorMessage: "Възникна грешка при изпращането на вашата заявка за оферта. Моля, опитайте отново.",
    sending: "Изпращане...",
    send: "Изпрати",
    name: "Име",
    yourName: "Вашето име",
    companyName: "Име на компанията",
    emailAddress: "Имейл",
    yourEmail: "Вашият имейл",
    phoneNumber: "Телефонен номер",
    message: "Вашият въпрос или коментар",
    howCanWeHelpYou: "Как можем да ви бъдем полезни?",
    contactTab: "Контакт",
    appointmentTab: "Насрочване на среща",
    quoteTab: "Заявка за оферта",
    appointmentTabShort: "Среща",
    quoteTabShort: "Оферта",
    contactPerson: "Име на контактното лице",
    preferredDate: "Предпочитана дата за среща",
    preferredTime: "Предпочитано време",
    chooseTimeframe: "Изберете времева рамка",
    morning: "Сутрин (09:00-12:00)",
    afternoon: "Следобед (12:00-17:00)",
    evening: "Вечер (17:00-20:00)",
    legalForm: "Правна форма",
    selectLegalForm: "Изберете правна форма",
    servicesNeeded: "От кои услуги се нуждаете?",
    additionalComments: "Допълнителни коментари или въпроси:",
    specificFiscalNeeds: "Имате ли специфични фискални нужди или въпроси?",
    scheduleAppointment: "Насрочване на среща",
    contactPerson2: "Контактно лице",
    fullName: "Име и фамилия",
    companyName2: "Име на вашата компания",
    yourEmailAddress: "your.email@company.com",
    phoneExample: "06 12345678",
    employees: "Брой служители",
    selectNumber: "Изберете брой",
    noPersonnel: "Няма персонал",
    employees1to5: "1-5 служители",
    employees6to10: "6-10 служители",
    employees11to25: "11-25 служители",
    employeesMore25: "Повече от 25",
    monthlyTransactions: "Банкови транзакции месечно",
    estimatedNumber: "Приблизителен брой",
    transactions0to50: "0-50",
    transactions51to100: "51-100",
    transactions101to200: "101-200",
    transactions201to500: "201-500",
    transactionsMore500: "Повече от 500",
    yearlyInvoices: "Фактури годишно",
    invoices0to100: "0-100",
    invoices101to200: "101-200",
    invoices201to300: "201-300",
    invoices301to500: "301-500",
    invoicesMore500: "Повече от 500",
    desiredServices: "Желани услуги",
    additionalInfo: "Допълнителна информация",
    additionalInfoPlaceholder: "Разкажете ни повече за вашите специфични желания или ситуация...",
    requestQuoteButton: "Заявка за оферта",
    pricingQuestions: "Имате ли въпроси относно нашите цени?",
    pricingQuestionsDesc: "Свържете се с нас за лични съвети и персонализирана оферта.",

    // Pricing features
    pricingFeature200BankTransactions: "200 банкови транзакции",
    pricingFeature200InvoicesPerYear: "200 фактури годишно",
    pricingFeatureWithVatAndTax: "С ДДС и годишна данъчна декларация",
    pricingFeatureBestForZZP: "Най-добро за счетоводство на фрилансери",
    pricingFeatureExcludingPersonnel: "Без персонал",
    pricingFeature500BankTransactions: "500 банкови транзакции",
    pricingFeature300InvoicesPerYear: "300 фактури годишно",
    pricingFeatureEenmanszaakBookkeeping: "Счетоводство на еднолично дружество",
    pricingFeatureMaxTwoPartners: "До максимум 2 партньори",
    pricingFeatureIncludingDGAPayslip: "Включително DGA фиш за заплата",
    pricingFeatureIncludingDGAPayroll: "Включително DGA заплата",
    pricingFeature40InvoicesPerYear: "40 фактури годишно",
    pricingFeature100BankTransactionsPerYear: "100 банкови транзакции годишно",
    pricingFeaturePayslip: "Фиш за заплата",
    pricingFeature4Personnel: "4 Персонал",
    pricingFeatureIncludingInOut: "Включително наемане/уволнение",
    pricingFeatureAnnualStatement: "Годишно извлечение",
    pricingFeaturePayrollJournal: "Заплатен журнал",
    pricingFeaturePensionAdmin: "Пенсионна администрация",
    zakelijkAuto: "Служебна кола за бизнес",

    // WhatsApp message
    whatsappMessage:
      "Уважаема DMR администрация,%0A%0AИмам въпрос относно вашите услуги. Можете ли да ми предоставите повече информация?%0A%0AС уважение",

    // Service titles and descriptions for metadata
    serviceFinancialAdminTitle: "Финансова администрация",
    serviceFinancialAdminDescription: "Получете контрол върху финансите си и подобрете бизнес резултатите си.",
    servicePayrollAdminTitle: "Заплатна администрация",
    servicePayrollAdminDescription: "Облекчете тежестта си и осигурете безпроблемна заплатна администрация.",
    serviceTaxAdviceTitle: "Данъчни съвети",
    serviceTaxAdviceDescription: "Минимизирайте данъците с нашите експертни данъчни съвети.",
    serviceCreditMediationTitle: "Кредитно посредничество",
    serviceCreditMediationDescription:
      "Открийте как нашето кредитно посредничество може да ускори вашия финансов растеж.",
    serviceBusinessAdviceTitle: "Бизнес съвети и планиране",
    serviceBusinessAdviceDescription: "Оптимизирайте вашата бизнес стратегия и бъдещ растеж.",
    serviceStartupSupportTitle: "Поддръжка за стартъпи",
    serviceStartupSupportDescription: "Нека вашият стартъп процъфтява с нашата експертна поддръжка.",
    serviceLegalFinancialAdviceTitle: "Правни и финансови съвети",
    serviceLegalFinancialAdviceDescription: "Защитете бизнеса си и максимизирайте финансовите възможности.",
    serviceIndividualsTitle: "Частни лица",
    serviceIndividualsDescription: "Опит с лични финанси, подобрете финансовото си бъдеще.",

    // Partners section
    partnersTitle: "Компании, с които работим",
    partnersSubtitle: "Ние си сътрудничим с водещи доставчици на софтуер, за да ви предложим най-добрата услуга.",
  },
  tr: {
    // Navigation
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    pricing: "Fiyatlandırma",
    contact: "İletişim",
    quote: "Teklif",
    moreInfo: "Daha fazla bilgi",
    makeContact:
      "Mali yönetim, bordro yönetimi ve vergi danışmanlığı konularındaki tüm sorularınız için DMR Administratie ile iletişime geçin.",

    // Hero Section
    heroTitle: "Mali işlerinizi biz yönetiriz,",
    heroSubtitle: "siz hedeflerinizi gerçekleştirirsiniz",
    heroDescription:
      "DMR Adminitratie, işletmenizin büyüme ve başarısını desteklemek için özel yapım mali çözümler ve profesyonel danışmanlık sunar. Karmaşık idari görevleri üstleniriz, böylece siz tamamen hedeflerinizi gerçekleştirmeye odaklanabilirsiniz.",
    planMeeting: "Görüşme planlayın",

    // Services
    servicesTitle: "Hizmetlerimiz",
    servicesSubtitle:
      "DMR Administratie, şirketlere, girişimcilere ve bireylere çeşitli hizmetler sunan bir yönetim ve danışmanlık ofisidir.",

    financialAdmin: "Mali Yönetim",
    financialAdminDesc:
      "Temel faaliyetimiz mali yönetim sağlamaktır. Sunduğumuz hizmetlerden, KDV ve gelir vergisi beyannameleri için yönetiminizi işleme koymak ana meşguliyetimizdir.",
    financialAdminShort: "Mali durumunuzu kontrol altına alın ve iş sonuçlarınızı iyileştirin.",

    payrollAdmin: "Bordro Yönetimi",
    payrollAdminDesc:
      "Personeliniz varsa veya personel almayı planlıyorsanız, bordro yönetimi ile uğraşacaksınız. Bu, personelin ödenmesi ve bordro beyannamelerinin sunulmasını içerir.",
    payrollAdminShort: "Yükünüzü hafifleten ve sorunsuz bordro yönetimi sağlayın.",

    taxAdvice: "Vergi Danışmanlığı",
    taxAdviceDesc:
      "Hizmetlerimizin çoğu vergi beyannamelerine dayandığından, her ilgili hizmette en uygun vergi pozisyonunu elde etme imkanı sunuyoruz.",
    taxAdviceShort: "Uzman vergi danışmanlığımızla vergileri minimize edin.",

    individuals: "Bireyler",
    individualsDesc:
      "Ayrıca birey olarak da size yardımcı oluyoruz. Kişisel gelir vergisi beyannamenizi vermenizde size yardımcı olabiliriz.",

    // Services page
    creditMediation: "Kredi Aracılığı",
    creditMediationDesc: "Kredi aracılığımızın mali büyümenizi nasıl hızlandırabileceğini keşfedin.",
    creditMediationDetails:
      "İşletmeniz için doğru finansman çözümlerini bulmanızda size yardımcı oluyoruz. İş kredilerinden ipoteklere kadar, en iyi koşullar için aracılık yapıyoruz.",
    businessAdvice: "İş Danışmanlığı ve Planlama",
    businessAdviceDesc: "İş stratejinizi ve gelecekteki büyümenizi optimize edin.",
    businessAdviceDetails:
      "İşlerini büyütmek isteyen girişimciler için stratejik danışmanlık. İş planlaması, mali tahminler ve stratejik kararlar konusunda yardımcı oluyoruz.",
    startupSupport: "Startup Desteği",
    startupSupportDesc: "Uzman desteğimizle startup'ınızın gelişmesini sağlayın.",
    startupSupportDetails:
      "Özellikle başlangıç girişimcileri için yönetiminizi kurmada ve başından itibaren doğru seçimler yapmada kapsamlı destek sunuyoruz.",
    legalFinancialAdvice: "Hukuki ve Mali Danışmanlık",
    legalFinancialAdviceDesc: "İşletmenizi koruyun ve mali fırsatları maksimize edin.",
    legalFinancialAdviceDetails:
      "İşletmenizi optimal şekilde korumak ve karmaşık düzenlemelerde fırsatları değerlendirmek için hukuki ve mali uzmanlığın birleşimi.",
    individualsShort: "Kişisel finans deneyimi, mali geleceğinizi iyileştirin.",
    readyToStart: "Başlamaya hazır mısınız?",
    readyToStartDesc: "Bizimle iletişime geçin ve DMR Administratie'ın işletmenizi nasıl destekleyebileceğini keşfedin.",

    // New startup support content
    startupSupportTitle: "Startup Desteği",
    startupSupportShortDesc: "Uzman desteğimizle startup'ınızın gelişmesini sağlayın.",
    startupSupportLongDesc:
      "DMR'de bir startup girişimcisinin yolculuğunun zorlu ve heyecan verici olabileceğini anlıyoruz. Bir fikirle başlar, vizyona dönüşür ve sonunda tam teşekküllü bir şirkete çiçek açar.",

    // New legal financial advice content
    legalFinancialAdviceTitle: "Hukuki ve Mali Danışmanlık",
    legalFinancialAdviceShortDesc: "İşletmenizi koruyun ve mali fırsatları maksimize edin.",
    legalFinancialAdviceLongDesc:
      "DMR yönetim ve danışmanlık olarak, sağlam hukuki ve mali danışmanlığın her başarılı işletmenin temel taşı olduğuna inanıyoruz.",

    optimizedFinance: "Optimize edilmiş finans",

    // Service detail page
    requestQuote: "Teklif isteyin",
    benefits: "Avantajlar",
    aboutThisService: "Bu hizmet hakkında",
    whatWeDo: "Sizin için neler yapıyoruz",
    personalApproachTitle: "Kişisel yaklaşım",
    personalApproachText:
      "Her durum benzersizdir. Bu nedenle hizmetlerimizi tamamen özel ihtiyaçlarınıza ve hedeflerinize göre uyarlıyoruz.",
    howWeWork: "Nasıl çalışıyoruz?",
    howWeWorkDesc: "Sürecimiz şeffaf ve verimlidir, böylece her zaman durumunuzu bilirsiniz.",
    step1Title: "Tanışma",
    step1Desc: "Bağlayıcı olmayan bir görüşmede durumunuzu ve isteklerinizi tartışıyoruz.",
    step2Title: "Özel danışmanlık",
    step2Desc: "İhtiyaçlarınıza mükemmel şekilde uyan kişisel bir plan oluşturuyoruz.",
    step3Title: "Uygulama",
    Nederland: "Hollanda",
    rights: "2024 DMR Administratie. Tüm hakları saklıdır.",
    step3Desc: "İşleri üstleniyor ve ilerleme hakkında sizi bilgilendiriyoruz.",
    readyToStartCta:
      "Size nasıl yardımcı olabileceğimiz konusunda bağlayıcı olmayan bir görüşme için bizimle iletişime geçin.",
    serviceNotFound: "Hizmet bulunamadı - DMR Administratie",

    // Service detail specific content
    financialAdminBenefit1: "Mali yönetiminizin tam işleme alınması",
    financialAdminBenefit2: "Zamanında ve doğru KDV beyannameleri",
    financialAdminBenefit3: "Mali durumunuza dair anlayış",
    financialAdminBenefit4: "Yıllık hesaplar ve mali raporlar",
    financialAdminBenefit5: "Kişisel rehberlik ve danışmanlık",
    financialAdminDescription1:
      "İyi mali yönetim şirketinizin başarısının temelidir. Mali durumunuz hakkında fikir verir, stratejik kararlar almanıza yardımcı olur ve tüm yasal yükümlülükleri yerine getirmenizi sağlar.",
    financialAdminDescription2:
      "DMR Administratie'ta bu karmaşık görevi tamamen üstleniyoruz. Faturalardan ve makbuzlardan banka ekstrelerine ve kasa defterlerine kadar tüm mali verilerinizin doğru işlenmesini sağlıyoruz. Deneyimli profesyonellerimiz yönetiminizin her zaman güncel ve uyumlu olmasını sağlar.",
    financialAdminService1: "Günlük yönetiminizin işlenmesi",
    financialAdminService2: "KDV beyannamelerinin hazırlanması ve sunulması",
    createdby: "DevKan tarafından oluşturuldu",
    financialAdminService3: "Borçlu ve alacaklı yönetimi",
    financialAdminService4: "Yıllık hesapların hazırlanması",
    financialAdminService5: "Mali raporlar ve analizler",
    financialAdminService6: "Mali durumunuz hakkında kişisel danışmanlık",

    payrollAdminBenefit1: "Doğru ve zamanında maaş işleme",
    payrollAdminBenefit2: "Tüm yasa ve düzenlemelere uyum",
    payrollAdminBenefit3: "Tüm bordro beyannamelerinin bakımı",
    payrollAdminBenefit4: "Yıllık beyanlar ve maaş bordroları",
    payrollAdminBenefit5: "Personel dosyaları ve yönetimi",
    payrollAdminDescription1:
      "Doğru bordro yönetimi şirketiniz için hayati önem taşır. Çalışanlarınızın zamanında ve doğru şekilde ödenmesini ve vergiler ve sosyal primler alanında tüm yasal yükümlülükleri yerine getirmenizi sağlar.",
    payrollAdminDescription2:
      "DMR Administratie'ta tam bordro yönetimini üstleniyoruz. Uzmanlarımız tüm maaşların doğru hesaplanıp ödendiğinden ve tüm beyannamelerin zamanında sunulduğundan emin olur.",
    payrollAdminService1: "Maaşların hazırlanması ve işlenmesi",
    payrollAdminService2: "Maaş bordrolarının bakımı",
    payrollAdminService3: "Bordro beyannamelerinin sunulması",
    payrollAdminService4: "Çalışanlar için yıllık beyanlar",
    payrollAdminService5: "Personel dosyalarının tutulması",
    payrollAdminService6: "Çalışma koşulları ve toplu iş sözleşmeleri hakkında danışmanlık",
    payrollAdminService7: "İşe alım ve işten çıkarma konularında rehberlik",

    taxAdviceBenefit1: "Vergi yükünüzün minimize edilmesi",
    taxAdviceBenefit2: "Proaktif vergi danışmanlığı",
    taxAdviceBenefit3: "Optimal vergi yapısı",
    taxAdviceBenefit4: "Vergi denetimleri konusunda rehberlik",
    taxAdviceBenefit5: "Vergi mevzuatı hakkında güncel bilgi",
    taxAdviceDescription1:
      "Vergiler hem şirketler hem de bireyler için önemli bir maliyet kalemidir. Ancak uzman vergi danışmanlığı ile önemli ölçüde tasarruf edebilir ve vergi pozisyonunuzu optimize edebilirsiniz.",
    taxAdviceDescription2:
      "DMR Administratie'ta vergi uzmanlarımız yasal çerçeveler içinde vergi yükünüzü minimize etmenize yardımcı olur. Değişen vergi mevzuatını yakından takip ediyor ve danışmanlığımızı buna göre ayarlıyoruz.",
    taxAdviceService1: "Vergi beyannamelerinin hazırlanması ve sunulması",
    taxAdviceService2: "Vergi planlaması ve optimizasyonu",
    taxAdviceService3: "KDV sorunları hakkında danışmanlık",
    taxAdviceService4: "Vergi denetimleri konusunda rehberlik",
    taxAdviceService5: "İş devri ve transferi hakkında danışmanlık",
    taxAdviceService6: "Yatırımların vergi yönleri",
    taxAdviceService7: "Uluslararası vergi sorunları",

    creditMediationBenefit1: "Çeşitli finansman seçeneklerine erişim",
    creditMediationBenefit2: "Finansman seçenekleri hakkında bağımsız danışmanlık",
    creditMediationBenefit3: "Başvuru süreci boyunca rehberlik",
    creditMediationBenefit4: "Uygun koşullar için müzakere",
    creditMediationBenefit5: "Sermayeye daha hızlı erişim",
    creditMediationDescription1:
      "Sermayeye erişim şirketinizin büyümesi ve gelişimi için hayati önem taşır. Yeni ekipmana yatırım yapmak, gayrimenkul satın almak veya işletme sermayesine ihtiyacınız olsun, doğru finansman esastır.",
    creditMediationDescription2:
      "Bağımsız kredi aracısı olarak DMR Administratie en uygun finansman çözümünü bulmanızda size yardımcı olur. Geniş finansör ağımıza erişimimiz var ve piyasayı çok iyi biliyoruz.",
    creditMediationService1: "Finansman ihtiyaçlarınızın analizi",
    creditMediationService2: "Farklı finansman türleri hakkında danışmanlık",
    creditMediationService3: "Finansman başvurusunun hazırlanması",
    creditMediationService4: "Finansörlerle müzakere",
    creditMediationService5: "Tüm başvuru süreci boyunca rehberlik",
    creditMediationService6: "Mevcut kredilerin yeniden finansmanı",
    creditMediationService7: "Leasing ve satın alma yapıları hakkında danışmanlık",

    businessAdviceBenefit1: "Stratejik iş planlaması",
    businessAdviceBenefit2: "Mali tahminler ve bütçeleme",
    businessAdviceBenefit3: "Maliyet analizi ve optimizasyonu",
    businessAdviceBenefit4: "İş yapısı hakkında danışmanlık",
    businessAdviceBenefit5: "Büyüme ve genişleme konularında rehberlik",
    businessAdviceDescription1:
      "Net bir strateji ve iyi planlama şirketinizin başarısı ve büyümesi için esastır. Profesyonel iş danışmanlığı ile bilinçli kararlar alabilir ve hedeflerinize daha etkili şekilde ulaşabilirsiniz.",
    businessAdviceDescription2:
      "DMR Administratie'ta ihtiyaçlarınıza göre kapsamlı iş danışmanlığı sunuyoruz. Danışmanlarımız çeşitli sektörlerde yıllarca deneyime sahiptir ve etkili stratejiler geliştirip uygulamanızda size yardımcı olur.",
    businessAdviceService1: "İş planlarının hazırlanması",
    businessAdviceService2: "Mali tahminler ve senaryo analizleri",
    businessAdviceService3: "Maliyet analizi ve verimlilik iyileştirmeleri",
    businessAdviceService4: "İş yapısı ve organizasyonu hakkında danışmanlık",
    businessAdviceService5: "Büyüme ve genişleme konularında rehberlik",
    businessAdviceService6: "Stratejik planlama ve hedefler",
    businessAdviceService7: "Kıyaslama ve rekabet analizi",

    startupSupportBenefit1: "Yönetiminizi kurma konusunda rehberlik",
    startupSupportBenefit2: "Yasal form ve iş yapısı hakkında danışmanlık",
    startupSupportBenefit3: "Mali planlama konusunda destek",
    startupSupportBenefit4: "Hibe başvurularında yardım",
    startupSupportBenefit5: "İlgili ortaklar ağı",
    startupSupportDescription1:
      "Bir işletmeye başlamak heyecan verici ama aynı zamanda zorlu bir aşamadır. Şirketinizin geleceğini belirleyen birçok karar verilmelidir. Profesyonel destek doğru seçimler yapmanıza ve maliyetli hatalardan kaçınmanıza yardımcı olabilir.",
    startupSupportDescription2:
      "DMR Administratie startup'lar ve başlangıç girişimcileri için özel destek sunar. Şirketiniz için sağlam mali temel atmanızda size yardımcı oluyor ve girişimci olarak ilk adımlarınızda size rehberlik ediyoruz.",
    startupSupportService1: "Yasal form seçimi hakkında danışmanlık",
    startupSupportService2: "Mali yönetiminizin kurulması",
    startupSupportService3: "Ticaret Odası ve Vergi Dairesi kaydı konusunda rehberlik",
    startupSupportService4: "İş planının hazırlanması",
    startupSupportService5: "Mali tahminler ve bütçeleme",
    startupSupportService6: "Hibeler ve finansman seçenekleri hakkında danışmanlık",
    startupSupportService7: "Başlangıç girişimcileri için vergi danışmanlığı",

    legalFinancialAdviceBenefit1: "Entegre hukuki ve mali danışmanlık",
    legalFinancialAdviceBenefit2: "İş çıkarlarınızın korunması",
    legalFinancialAdviceBenefit3: "Sözleşme ve anlaşmaların optimizasyonu",
    legalFinancialAdviceBenefit4: "Risk yönetimi ve azaltma",
    legalFinancialAdviceBenefit5: "Yasa ve düzenlemelere uyum",
    legalFinancialAdviceDescription1:
      "Günümüzün karmaşık iş ortamında hukuki ve mali yönler genellikle iç içe geçmiştir. Bu nedenle entegre bir yaklaşım şirketinizi optimal şekilde korumak ve fırsatları değerlendirmek için esastır.",
    legalFinancialAdviceDescription2:
      "DMR Administratie hukuki ve mali danışmanlığın benzersiz bir kombinasyonunu sunar. Uzmanlarımız her iki alanda da bilgi sahibidir ve bu nedenle karmaşık iş sorunları hakkında size bütünsel danışmanlık verebilir.",
    legalFinancialAdviceService1: "Şirketinizin hukuki yapılandırılması",
    legalFinancialAdviceService2: "Sözleşmelerin hazırlanması ve gözden geçirilmesi",
    legalFinancialAdviceService3: "Genel şartlar ve koşullar hakkında danışmanlık",
    legalFinancialAdviceService4: "Anlaşmazlık ve çatışmalarda rehberlik",
    legalFinancialAdviceService5: "Yasa ve düzenlemelere uyum",
    legalFinancialAdviceService6: "Risk yönetimi ve azaltma",
    legalFinancialAdviceService7: "Fikri mülkiyet hakkında danışmanlık",

    individualsBenefit1: "Vergi beyannameleri konusunda kişisel rehberlik",
    individualsBenefit2: "Vergi pozisyonunuzun optimizasyonu",
    individualsBenefit3: "Varlık planlaması hakkında danışmanlık",
    individualsBenefit4: "Mali kararlar konusunda rehberlik",
    individualsBenefit5: "Ödenekler ve hibeler konusunda yardım",
    individualsDescription1:
      "Birey olarak da karmaşık mali ve vergi sorunlarıyla karşılaşabilirsiniz. Vergi beyannameniz, varlık planlaması veya mali kararlar olsun, profesyonel danışmanlık doğru seçimler yapmanıza yardımcı olabilir.",
    individualsDescription2:
      "DMR Administratie'ta bireyler için kapsamlı hizmetler sunuyoruz. Danışmanlarımız mali durumunuzu optimize etmenize ve vergi yükünüzü minimize etmenize yardımcı olur.",
    individualsService1: "Vergi beyannamenizin hazırlanması ve sunulması",
    individualsService2: "Vergi indirimleri hakkında danışmanlık",
    individualsService3: "İtiraz ve temyiz prosedürlerinde rehberlik",
    individualsService4: "Varlık planlaması ve yönetimi",
    individualsService5: "Bağış ve miraslar hakkında danışmanlık",
    individualsService6: "Ödenek başvurularında yardım",
    individualsService7: "Geleceğiniz için mali planlama",

    // Particulieren pricing features
    particulierenTitle: "Bireyler",
    particulierenPrice: "35",
    particulierenFeature1: "Sağlık ödeneği başvurusu",
    particulierenFeature2: "Konut ödeneği başvurusu",
    particulierenFeature3: "Çocuk ödeneği başvurusu",
    particulierenFeature4: "Belediye formları başvurusu",
    particulierenFeature5: "Gelir vergisi beyannamesi €50",
    particulierenFeature6: "Eşle birlikte +€25",

    // NOTK pricing
    pricingNOTK: "BSK (belirlenmesi sonradan kararlaştırılacak)",

    // Why DMR
    whyDmrTitle: "Neden DMR Administratie?",
    experience: "10+ yıl deneyim",
    minimalTax: "Minimum vergi ödemesi",
    youSendWeDo: "Siz gönderirsiniz, biz yaparız",
    expertise: "Uzmanlık ve danışmanlık",
    clients: "100+ memnun müşteri",

    // Contact CTA
    contactUs: "Bizimle iletişime geçin",

    // Working Method
    workingMethodTitle: "Çalışma Yöntemi",
    workingMethodDesc:
      "İşletmenizin doğru mali temsilini oluşturmak için yönetiminizi sürdürmek esastır. Tanıştıktan sonra yönetimin nasıl sürdürüldüğünü açıklıyor, yönetiminizi kuruyor ve size ilgili bilgileri sağlıyoruz.",

    // Footer
    openingHours: "Açılış Saatleri",
    mondayFriday: "Pazartesi - Cuma",
    saturdaySunday: "Cumartesi ve Pazar",
    closed: "Kapalı",
    followUs: "Bizi takip edin",
    quickContactWhatsApp: "WhatsApp ile hızlı iletişim",

    // Pricing
    perMonth: "Aylık",
    bankTransactions: "banka işlemleri",
    invoicesPerYear: "yıllık faturalar",
    withVatAndTax: "KDV ve yıllık vergi beyannamesi ile",
    excludingPersonnel: "Personel hariç",
    mostPopular: "En Popüler",

    // About
    aboutTitle: "DMR Administratie Hakkında",
    aboutDescription:
      "DMR Administratie'ta hatları kısa tutuyoruz. Bu size mali yönetiminizi sağlarken kişisel bir yaklaşım verir. Mali hizmet sağlayıcıları olarak uzun yıllara dayanan deneyimimizde iletişimin büyük önem taşıdığını gördük.",

    // About page
    ourValues: "Değerlerimiz",
    ourStory: "Hikayemiz",
    personalApproach: "Kişisel Yaklaşım",
    personalApproachDesc: "Kişisel hizmet için hatları kısa tutuyoruz",
    expertiseValue: "Uzmanlık",
    expertiseValueDesc: "Mali hizmetlerde 10+ yıl deneyim",
    reliability: "Güvenilirlik",
    reliabilityDesc: "Her zaman zamanında ve anlaşıldığı gibi",
    commitment: "Bağlılık",
    commitmentDesc: "Sizin başarınız bizim başarımız",
    storyParagraph1:
      "DMR Administratie, girişimcilere ve bireylere mali yönetimleri konusunda yardım etme tutkusundan doğdu. Sektörde 10 yılı aşkın deneyimle, müşterilerimizin karşılaştığı zorlukları derinlemesine anlayacak şekilde geliştik.",
    storyParagraph2:
      "İyi iletişim ve kişisel ilginin başarılı ortaklığın anahtarı olduğuna inanıyoruz. Bu nedenle her müşteriye hak ettiği ilgiyi gösteren küçük, kendini adamış bir ekiple çalışıyoruz.",
    storyParagraph3:
      "Hedefimiz basittir: idari yükünüzü hafifletmek böylece en iyi yaptığınız şeye odaklanabilirsiniz - işletmenizi yönetmek ve hayallerinizi gerçekleştirmek.",

    openingTimeTitle: "Açılış Saatleri",
    openingTimeDays: "Pazartesi - Cuma",
    openingTimeWeekdays: "08:30 – 18:00",
    openingTimeSaturday: "Cumartesi",
    openingTimeSaturdayHours: "09:00 – 13:00",
    openingTimeSunday: "Pazar",
    openingTimeSundayHours: "Kapalı",

    // Contact page translations
    contactTitle: "İletişim",
    contactInfo: "İletişim Bilgileri",
    email: "E-posta",
    phone: "Telefon",
    location: "Konum",
    howCanWeHelp: "Size nasıl yardımcı olabiliriz?",
    successMessage: "Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.",
    appointmentSuccessMessage:
      "Randevu talebiniz başarıyla gönderildi! Randevuyu planlamak için en kısa sürede sizinle iletişime geçeceğiz.",
    quoteSuccessMessage:
      "Teklif talebiniz başarıyla gönderildi! Sizin için uygun bir teklif hazırlayacağız ve 24 saat içinde sizinle iletişime geçeceğiz.",
    errorMessage: "Mesajınızı gönderirken bir hata oluştu. Lütfen tekrar deneyin.",
    appointmentErrorMessage: "Randevu talebinizi gönderirken bir hata oluştu. Lütfen tekrar deneyin.",
    quoteErrorMessage: "Teklif talebinizi gönderirken bir hata oluştu. Lütfen tekrar deneyin.",
    sending: "Gönderiliyor...",
    send: "Gönder",
    name: "İsim",
    yourName: "Adınız",
    companyName: "Şirket adı",
    emailAddress: "E-posta",
    yourEmail: "E-posta adresiniz",
    phoneNumber: "Telefon numarası",
    message: "Sorunuz veya yorumunuz",
    howCanWeHelpYou: "Size nasıl hizmet edebiliriz?",
    contactTab: "İletişim",
    appointmentTab: "Randevu planla",
    quoteTab: "Teklif iste",
    appointmentTabShort: "Randevu",
    quoteTabShort: "Teklif",
    contactPerson: "İletişim kişisi adı",
    preferredDate: "Tercih edilen randevu tarihi",
    preferredTime: "Tercih edilen saat",
    chooseTimeframe: "Zaman dilimi seçin",
    morning: "Sabah (09:00-12:00)",
    afternoon: "Öğleden sonra (12:00-17:00)",
    evening: "Akşam (17:00-20:00)",
    legalForm: "Yasal şekil",
    selectLegalForm: "Yasal şekil seçin",
    servicesNeeded: "Hangi hizmetlere ihtiyacınız var?",
    additionalComments: "Ek yorumlar veya sorular:",
    specificFiscalNeeds: "Özel mali ihtiyaçlarınız veya sorularınız var mı?",
    scheduleAppointment: "Randevu planla",
    contactPerson2: "İletişim kişisi",
    fullName: "Ad ve soyad",
    companyName2: "Şirketinizin adı",
    yourEmailAddress: "email@sirket.com",
    phoneExample: "06 12345678",
    employees: "Çalışan sayısı",
    selectNumber: "Sayı seçin",
    noPersonnel: "Personel yok",
    employees1to5: "1-5 çalışan",
    employees6to10: "6-10 çalışan",
    employees11to25: "11-25 çalışan",
    employeesMore25: "25'ten fazla",
    monthlyTransactions: "Aylık banka işlemleri",
    estimatedNumber: "Tahmini sayı",
    transactions0to50: "0-50",
    transactions51to100: "51-100",
    transactions101to200: "101-200",
    transactions201to500: "201-500",
    transactionsMore500: "500'den fazla",
    yearlyInvoices: "Yıllık faturalar",
    invoices0to100: "0-100",
    invoices101to200: "101-200",
    invoices201to300: "201-300",
    invoices301to500: "301-500",
    invoicesMore500: "500'den fazla",
    desiredServices: "İstenilen hizmetler",
    additionalInfo: "Ek bilgi",
    additionalInfoPlaceholder: "Özel istekleriniz veya durumunuz hakkında bize daha fazla bilgi verin...",
    requestQuoteButton: "Teklif İste",
    pricingQuestions: "Fiyatlarımız hakkında sorularınız var mı?",
    pricingQuestionsDesc: "Kişisel danışmanlık ve özel teklif için bizimle iletişime geçin.",

    // Pricing features
    pricingFeature200BankTransactions: "200 banka işlemi",
    pricingFeature200InvoicesPerYear: "Yılda 200 fatura",
    pricingFeatureWithVatAndTax: "KDV ve yıllık vergi beyannamesi ile",
    pricingFeatureBestForZZP: "Serbest çalışan muhasebesi için en iyi",
    pricingFeatureExcludingPersonnel: "Personel hariç",
    pricingFeature500BankTransactions: "500 banka işlemi",
    pricingFeature300InvoicesPerYear: "Yılda 300 fatura",
    pricingFeatureEenmanszaakBookkeeping: "Şahıs şirketi muhasebesi",
    pricingFeatureMaxTwoPartners: "Maksimum 2 ortağa kadar",
    pricingFeatureIncludingDGAPayslip: "DGA maaş bordrosu dahil",
    pricingFeatureIncludingDGAPayroll: "DGA maaşı dahil",
    pricingFeature40InvoicesPerYear: "Yılda 40 fatura",
    pricingFeature100BankTransactionsPerYear: "Yılda 100 banka işlemi",
    pricingFeaturePayslip: "Maaş bordrosu",
    pricingFeature4Personnel: "4 Personel",
    pricingFeatureIncludingInOut: "İşe alım/çıkarım dahil",
    pricingFeatureAnnualStatement: "Yıllık beyan",
    pricingFeaturePayrollJournal: "Bordro dergisi",
    pricingFeaturePensionAdmin: "Emeklilik yönetimi",
    zakelijkAuto: "İş için şirket arabası",

    // WhatsApp message
    whatsappMessage:
      "Sayın DMR yönetimi,%0A%0AHizmetleriniz hakkında bir sorum var. Bana daha fazla bilgi verebilir misiniz?%0A%0ASaygılarımla",

    // Service titles and descriptions for metadata
    serviceFinancialAdminTitle: "Mali Yönetim",
    serviceFinancialAdminDescription: "Mali durumunuzu kontrol altına alın ve iş sonuçlarınızı iyileştirin.",
    servicePayrollAdminTitle: "Bordro Yönetimi",
    servicePayrollAdminDescription: "Yükünüzü hafifleten ve sorunsuz bordro yönetimi sağlayın.",
    serviceTaxAdviceTitle: "Vergi Danışmanlığı",
    serviceTaxAdviceDescription: "Uzman vergi danışmanlığımızla vergileri minimize edin.",
    serviceCreditMediationTitle: "Kredi Aracılığı",
    serviceCreditMediationDescription: "Kredi aracılığımızın mali büyümenizi nasıl hızlandırabileceğini keşfedin.",
    serviceBusinessAdviceTitle: "İş Danışmanlığı ve Planlama",
    serviceBusinessAdviceDescription: "İş stratejinizi ve gelecekteki büyümenizi optimize edin.",
    serviceStartupSupportTitle: "Startup Desteği",
    serviceStartupSupportDescription: "Uzman desteğimizle startup'ınızın gelişmesini sağlayın.",
    serviceLegalFinancialAdviceTitle: "Hukuki ve Mali Danışmanlık",
    serviceLegalFinancialAdviceDescription: "İşletmenizi koruyun ve mali fırsatları maksimize edin.",
    serviceIndividualsTitle: "Bireyler",
    serviceIndividualsDescription: "Kişisel finans deneyimi, mali geleceğinizi iyileştirin.",

    // Partners section
    partnersTitle: "Birlikte çalıştığımız şirketler",
    partnersSubtitle: "Size en iyi hizmeti sunmak için önde gelen yazılım sağlayıcıları ile işbirliği yapıyoruz.",
  },
}
