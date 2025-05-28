export type Language = "nl" | "en" | "bg" | "tr"

export type TranslationKey = keyof typeof translations.nl

export const translations = {
  nl: {
    // Navigation
    home: "Home",
    about: "Over Ons",
    services: "Diensten",
    pricing: "Tarieven",
    contact: "Contact",
    quote: "Offerte",

    // Hero Section
    heroTitle: "Wij beheren uw financiën,",
    heroSubtitle: "u realiseert uw ambities",
    heroDescription:
      "DMR Finance biedt op maat gemaakte financiële oplossingen en professioneel advies om uw onderneming te ondersteunen bij groei en succes. Wij nemen de complexe administratieve taken uit handen, zodat u zich volledig kunt richten op het verwezenlijken van uw doelen.",
    planMeeting: "Plan een gesprek",

    // Services
    servicesTitle: "Onze Diensten",
    servicesSubtitle:
      "DMR Finance is een administratie- en advieskantoor dat verschillende diensten biedt aan bedrijven, ondernemers en particulieren.",

    financialAdmin: "Financiële Administratie",
    financialAdminDesc:
      "Onze kernactiviteit betreft het verzorgen van de financiële administratie. Van de diensten die wij bieden is de verwerking van uw administratie voor de aangifte omzetbelasting en inkomstenbelasting onze voornaamste bezigheid.",

    payrollAdmin: "Loonadministratie",
    payrollAdminDesc:
      "Indien u personeel in dienst hebt of van plan bent personeel aan te nemen, krijgt u te maken met de loonadministratie. Hierbij moet u denken aan het verlonen van het personeel en het indienen van de loonaangiften.",

    taxAdvice: "Belastingadvies",
    taxAdviceDesc:
      "Aangezien de meeste van onze diensten gebaseerd zijn op belastingaangiften, bieden we de mogelijkheid op elke relevante dienst de meest gunstige belastingpositie te behalen.",

    individuals: "Particulieren",
    individualsDesc:
      "Ook voor u als particulier staan wij u bij. Wij kunnen u assisteren bij het indienen van uw particuliere aangifte inkomstenbelasting.",

    // Why DMR
    whyDmrTitle: "Waarom DMR Finance?",
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
    requestQuote: "Vraag Offerte",

    // About
    aboutTitle: "Over DMR Finance",
    aboutDescription:
      "Bij DMR Finance houden we de lijnen kort. Hierdoor hebt u een persoonlijke benadering bij het verzorgen van uw financiële administratie. In de vele jaren ervaring als financiële dienstverleners hebben we ondervonden dat communicatie van groot belang is.",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
    quote: "Quote",

    // Hero Section
    heroTitle: "We manage your finances,",
    heroSubtitle: "you realize your ambitions",
    heroDescription:
      "DMR Finance offers tailor-made financial solutions and professional advice to support your business in growth and success. We take care of complex administrative tasks, so you can fully focus on achieving your goals.",
    planMeeting: "Schedule a meeting",

    // Services
    servicesTitle: "Our Services",
    servicesSubtitle:
      "DMR Finance is an administration and advisory office that offers various services to companies, entrepreneurs and individuals.",

    financialAdmin: "Financial Administration",
    financialAdminDesc:
      "Our core activity involves providing financial administration. Of the services we offer, processing your administration for VAT and income tax returns is our main occupation.",

    payrollAdmin: "Payroll Administration",
    payrollAdminDesc:
      "If you have staff or plan to hire staff, you will deal with payroll administration. This includes paying staff and submitting payroll returns.",

    taxAdvice: "Tax Advice",
    taxAdviceDesc:
      "Since most of our services are based on tax returns, we offer the possibility to achieve the most favorable tax position on every relevant service.",

    individuals: "Individuals",
    individualsDesc:
      "We also assist you as an individual. We can assist you in filing your personal income tax return.",

    // Why DMR
    whyDmrTitle: "Why DMR Finance?",
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

    // Pricing
    perMonth: "Per month",
    bankTransactions: "bank transactions",
    invoicesPerYear: "invoices per year",
    withVatAndTax: "With VAT and annual tax return",
    excludingPersonnel: "Excluding personnel",
    mostPopular: "Most Popular",
    requestQuote: "Request Quote",

    // About
    aboutTitle: "About DMR Finance",
    aboutDescription:
      "At DMR Finance we keep the lines short. This gives you a personal approach when providing your financial administration. In our many years of experience as financial service providers, we have found that communication is of great importance.",
  },
  bg: {
    // Navigation
    home: "Начало",
    about: "За нас",
    services: "Услуги",
    pricing: "Цени",
    contact: "Контакт",
    quote: "Оферта",

    // Hero Section
    heroTitle: "Ние управляваме вашите финанси,",
    heroSubtitle: "вие реализирате амбициите си",
    heroDescription:
      "DMR Finance предлага персонализирани финансови решения и професионални съвети за подкрепа на вашия бизнес в растежа и успеха. Ние поемаме сложните административни задачи, за да можете да се съсредоточите изцяло върху постигането на целите си.",
    planMeeting: "Планирайте среща",

    // Services
    servicesTitle: "Нашите услуги",
    servicesSubtitle:
      "DMR Finance е административна и консултантска кантора, която предлага различни услуги на компании, предприемачи и частни лица.",

    financialAdmin: "Финансова администрация",
    financialAdminDesc:
      "Основната ни дейност включва предоставяне на финансова администрация. От услугите, които предлагаме, обработката на вашата администрация за ДДС и данъчни декларации е основното ни занимание.",

    payrollAdmin: "Заплатна администрация",
    payrollAdminDesc:
      "Ако имате персонал или планирате да наемете персонал, ще се занимавате със заплатна администрация. Това включва заплащане на персонала и подаване на заплатни декларации.",

    taxAdvice: "Данъчни съвети",
    taxAdviceDesc:
      "Тъй като повечето от нашите услуги се основават на данъчни декларации, предлагаме възможност за постигане на най-благоприятната данъчна позиция при всяка релевантна услуга.",

    individuals: "Частни лица",
    individualsDesc:
      "Ние също ви помагаме като частно лице. Можем да ви помогнем при подаването на вашата лична данъчна декларация.",

    // Why DMR
    whyDmrTitle: "Защо DMR Finance?",
    experience: "10+ години опит",
    minimalTax: "Минимално данъчно плащане",
    youSendWeDo: "Вие изпращате, ние правим",
    expertise: "Експертиза и съвети",
    clients: "100+ доволни клиенти",

    // Contact CTA
    contactUs: "Свържете се с нас",

    // Working Method
    workingMethodTitle: "Метод на работа",
    workingMethodDesc:
      "За да създадем точно финансово представяне на вашия бизнес, поддържането на вашата администрация е от съществено значение. След запознаване обясняваме как се поддържа администрация, настройваме вашата администрация и ви предоставяме релевантна информация.",

    // Footer
    openingHours: "Работно време",
    mondayFriday: "Понеделник до петък",
    saturdaySunday: "Събота и неделя",
    closed: "Затворено",
    followUs: "Последвайте ни",

    // Pricing
    perMonth: "На месец",
    bankTransactions: "банкови транзакции",
    invoicesPerYear: "фактури годишно",
    withVatAndTax: "С ДДС и годишна данъчна декларация",
    excludingPersonnel: "Без персонал",
    mostPopular: "Най-популярен",
    requestQuote: "Заявете оферта",

    // About
    aboutTitle: "За DMR Finance",
    aboutDescription:
      "В DMR Finance поддържаме кратките линии. Това ви дава личен подход при предоставянето на вашата финансова администрация. В нашия многогодишен опит като доставчици на финансови услуги установихме, че комуникацията е от голямо значение.",
  },
  tr: {
    // Navigation
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    pricing: "Fiyatlar",
    contact: "İletişim",
    quote: "Teklif",

    // Hero Section
    heroTitle: "Finanslarınızı biz yönetiyoruz,",
    heroSubtitle: "siz hedeflerinizi gerçekleştirin",
    heroDescription:
      "DMR Finance, işletmenizi büyüme ve başarıda desteklemek için özel yapım finansal çözümler ve profesyonel danışmanlık sunar. Karmaşık idari görevleri üstleniriz, böylece siz tamamen hedeflerinizi gerçekleştirmeye odaklanabilirsiniz.",
    planMeeting: "Toplantı planlayın",

    // Services
    servicesTitle: "Hizmetlerimiz",
    servicesSubtitle:
      "DMR Finance, şirketlere, girişimcilere ve bireylere çeşitli hizmetler sunan bir yönetim ve danışmanlık ofisidir.",

    financialAdmin: "Mali İdare",
    financialAdminDesc:
      "Ana faaliyetimiz mali idare sağlamayı içerir. Sunduğumuz hizmetlerden, KDV ve gelir vergisi beyannameleri için yönetiminizi işlemek ana meşguliyetimizdir.",

    payrollAdmin: "Bordro İdaresi",
    payrollAdminDesc:
      "Personel sahibiyseniz veya personel işe almayı planlıyorsanız, bordro idaresi ile uğraşacaksınız. Bu, personel ödemelerini ve bordro beyannamelerini sunmayı içerir.",

    taxAdvice: "Vergi Danışmanlığı",
    taxAdviceDesc:
      "Hizmetlerimizin çoğu vergi beyannamelerine dayandığından, her ilgili hizmette en uygun vergi pozisyonunu elde etme imkanı sunuyoruz.",

    individuals: "Bireyler",
    individualsDesc:
      "Ayrıca size birey olarak da yardımcı oluyoruz. Kişisel gelir vergisi beyannamenizi vermenizde size yardımcı olabiliriz.",

    // Why DMR
    whyDmrTitle: "Neden DMR Finance?",
    experience: "10+ yıl deneyim",
    minimalTax: "Minimal vergi ödemesi",
    youSendWeDo: "Siz gönderirsiniz, biz yaparız",
    expertise: "Uzmanlık ve danışmanlık",
    clients: "100+ memnun müşteri",

    // Contact CTA
    contactUs: "Bizimle iletişime geçin",

    // Working Method
    workingMethodTitle: "Çalışma Yöntemi",
    workingMethodDesc:
      "İşletmenizin doğru bir finansal temsilini oluşturmak için yönetiminizi sürdürmek esastır. Tanıştıktan sonra, bir yönetimin nasıl sürdürüldüğünü açıklarız, yönetiminizi kurarız ve size ilgili bilgileri sağlarız.",

    // Footer
    openingHours: "Açılış Saatleri",
    mondayFriday: "Pazartesi - Cuma",
    saturdaySunday: "Cumartesi ve Pazar",
    closed: "Kapalı",
    followUs: "Bizi takip edin",

    // Pricing
    perMonth: "Aylık",
    bankTransactions: "banka işlemi",
    invoicesPerYear: "yıllık fatura",
    withVatAndTax: "KDV ve yıllık vergi beyannamesi ile",
    excludingPersonnel: "Personel hariç",
    mostPopular: "En Popüler",
    requestQuote: "Teklif İsteyin",

    // About
    aboutTitle: "DMR Finance Hakkında",
    aboutDescription:
      "DMR Finance'ta hatları kısa tutuyoruz. Bu, mali yönetiminizi sağlarken size kişisel bir yaklaşım sunar. Mali hizmet sağlayıcıları olarak uzun yıllık deneyimimizde, iletişimin büyük önem taşıdığını gördük.",
  },
}
