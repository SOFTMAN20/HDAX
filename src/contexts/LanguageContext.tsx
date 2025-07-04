
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'sw';
  setLanguage: (lang: 'en' | 'sw') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    products: 'Products',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'HDA COMPANY',
    heroSubtitle: 'LIMITED',
    heroDescription: "Tanzania's Premier Explosive & Mining Company",
    heroTagline: 'Specialized in Mining Explosives, Blasting Services & Consultancy',
    ourServices: 'Our Services',
    getConsultation: 'Get Consultation',
    
    // Services Section
    coreServices: 'Our Core Services',
    servicesDescription: 'Comprehensive explosive and mining solutions across Tanzania and beyond',
    
    // Service Cards
    explosiveProducts: 'Mining Explosive Products',
    explosiveProductsDesc: 'Complete range of mining explosives and accessories for Tanzania and international markets',
    blastingServices: 'Professional Blasting Services',
    blastingServicesDesc: 'Expert blasting operations with precision and safety as our top priorities',
    blastingConsultancy: 'Blasting Consultancy',
    blastingConsultancyDesc: 'Expert consultation services for optimal blasting design and implementation',
    
    // Features
    anfoExplosives: 'ANFO & Emulsion Explosives',
    detonators: 'Detonators & Boosters',
    safetyEquipment: 'Safety Equipment',
    internationalSupply: 'International Supply',
    controlledDemolition: 'Controlled Demolition',
    rockExcavation: 'Rock Excavation',
    quarryOperations: 'Quarry Operations',
    sitePreparation: 'Site Preparation',
    blastDesign: 'Blast Design',
    safetyAssessments: 'Safety Assessments',
    trainingPrograms: 'Training Programs',
    technicalSupport: 'Technical Support',
    
    // Products Section
    productsTitle: 'Explosive Products & Accessories',
    productsDescription: 'High-quality mining explosives and accessories trusted by mining operations across Tanzania and international markets',
    
    // Stats
    expertTeam: 'Expert Team Members',
    successfulProjects: 'Successful Projects',
    yearsExperience: 'Years Experience',
    safetyRecord: 'Safety Record',
    
    // About Section
    aboutTitle: 'About HDA Company Limited',
    aboutDescription: 'HDA Company Limited is Tanzania\'s leading explosive and mining company, specializing in the sale of mining explosive products and accessories both within Tanzania and internationally.',
    aboutDetails: 'Our comprehensive services include professional blasting operations and expert consultancy, making us the trusted partner for mining operations across East Africa and beyond. We combine decades of expertise with cutting-edge technology and an unwavering commitment to safety.',
    whyChoose: 'Why Choose HDA Company?',
    uncompromisingSafety: 'Uncompromising Safety',
    provenExcellence: 'Proven Excellence',
    fullService: 'Full Service',
    
    // Contact Section
    getInTouch: 'Get In Touch',
    contactDescription: 'Ready to discuss your explosive and mining needs? Contact our experts for professional consultation and quotes.',
    headOffice: 'Head Office',
    phone: 'Phone',
    email: 'Email',
    emergencySupport: '24/7 Emergency Support & Consultation',
    emailDescription: 'Product inquiries, services & consultancy',
    requestQuote: 'Request Quote or Consultation',
    yourName: 'Your Name',
    company: 'Company',
    emailAddress: 'Email Address',
    selectService: 'Select Service Type',
    projectDetails: 'Project Details or Requirements',
    sendInquiry: 'Send Inquiry',
    
    // Footer
    footerDescription: 'Tanzania\'s Premier Explosive & Mining Company specializing in explosive products, blasting services, and consultancy.',
    coverageArea: 'Coverage Area',
    domesticTanzania: 'Tanzania (Domestic)',
    eastAfricaRegion: 'East Africa Region',
    internationalMarkets: 'International Markets',
    remoteSiteOperations: 'Remote Site Operations',
    allRightsReserved: 'All rights reserved. | Explosive & Mining Company'
  },
  sw: {
    // Navigation
    home: 'Nyumbani',
    services: 'Huduma',
    products: 'Bidhaa',
    about: 'Kuhusu',
    contact: 'Mawasiliano',
    
    // Hero Section
    heroTitle: 'KAMPUNI YA HDA',
    heroSubtitle: 'LIMITED',
    heroDescription: 'Kampuni Kuu ya Vichombo vya Migodi Tanzania',
    heroTagline: 'Mtaalamu katika Vichombo vya Migodi, Huduma za Kupasua na Ushauri',
    ourServices: 'Huduma Zetu',
    getConsultation: 'Pata Ushauri',
    
    // Services Section
    coreServices: 'Huduma Zetu Kuu',
    servicesDescription: 'Suluhisho kamili za vichombo na migodi kote Tanzania na nje',
    
    // Service Cards
    explosiveProducts: 'Bidhaa za Vichombo vya Migodi',
    explosiveProductsDesc: 'Aina zote za vichombo vya migodi na vifaa vya ziada kwa Tanzania na masoko ya kimataifa',
    blastingServices: 'Huduma za Kupasua kwa Kitaalamu',
    blastingServicesDesc: 'Utendaji wa kupasua kwa ustadi huku usalama na usahihi ukiwa kipaumbele',
    blastingConsultancy: 'Ushauri wa Kupasua',
    blastingConsultancyDesc: 'Huduma za ushauri za kitaalamu kwa muundo bora wa kupasua na utekelezaji',
    
    // Features
    anfoExplosives: 'Vichombo vya ANFO na Emulsion',
    detonators: 'Vichombo vya Kuwasha na Kuongeza',
    safetyEquipment: 'Vifaa vya Usalama',
    internationalSupply: 'Ugavi wa Kimataifa',
    controlledDemolition: 'Kubomoa kwa Udhibiti',
    rockExcavation: 'Kuchimba Miamba',
    quarryOperations: 'Shughuli za Quarry',
    sitePreparation: 'Kuandaa Tovuti',
    blastDesign: 'Muundo wa Kupasua',
    safetyAssessments: 'Tathmini za Usalama',
    trainingPrograms: 'Mipango ya Mafunzo',
    technicalSupport: 'Msaada wa Kiufundi',
    
    // Products Section
    productsTitle: 'Bidhaa za Vichombo na Vifaa vya Ziada',
    productsDescription: 'Vichombo vya migodi vya ubora wa juu na vifaa vya ziada vinavyoaminika na shughuli za migodi kote Tanzania na masoko ya kimataifa',
    
    // Stats
    expertTeam: 'Wanachama wa Timu ya Utaalamu',
    successfulProjects: 'Miradi ya Mafanikio',
    yearsExperience: 'Miaka ya Uzoefu',
    safetyRecord: 'Rekodi ya Usalama',
    
    // About Section
    aboutTitle: 'Kuhusu Kampuni ya HDA Limited',
    aboutDescription: 'Kampuni ya HDA Limited ni kampuni kuu ya vichombo na migodi Tanzania, inayojishughulisha na uuzaji wa bidhaa za vichombo vya migodi na vifaa vya ziada ndani ya Tanzania na kimataifa.',
    aboutDetails: 'Huduma zetu za kina ni pamoja na shughuli za kupasua kwa ustadi na ushauri wa kitaalamu, na hivyo kuwa mshirika wa kuaminika kwa shughuli za migodi kote Afrika Mashariki na zaidi. Tunachanganya utaalamu wa miongo kadhaa na teknolojia ya kisasa na dhamira isiyoweza kuwa na makosa ya usalama.',
    whyChoose: 'Kwa Nini Uchague Kampuni ya HDA?',
    uncompromisingSafety: 'Usalama Usiopuuza',
    provenExcellence: 'Ubora Uliothibitishwa',
    fullService: 'Huduma Kamili',
    
    // Contact Section
    getInTouch: 'Wasiliana Nasi',
    contactDescription: 'Uko tayari kujadili mahitaji yako ya vichombo na migodi? Wasiliana na wataalamu wetu kwa ushauri wa kitaalamu na bei.',
    headOffice: 'Ofisi Kuu',
    phone: 'Simu',
    email: 'Barua Pepe',
    emergencySupport: 'Msaada wa Dharura 24/7 na Ushauri',
    emailDescription: 'Maswali ya bidhaa, huduma na ushauri',
    requestQuote: 'Omba Bei au Ushauri',
    yourName: 'Jina Lako',
    company: 'Kampuni',
    emailAddress: 'Anwani ya Barua Pepe',
    selectService: 'Chagua Aina ya Huduma',
    projectDetails: 'Maelezo ya Mradi au Mahitaji',
    sendInquiry: 'Tuma Hoja',
    
    // Footer
    footerDescription: 'Kampuni Kuu ya Vichombo na Migodi Tanzania inayojishughulisha na bidhaa za vichombo, huduma za kupasua, na ushauri.',
    coverageArea: 'Eneo la Huduma',
    domesticTanzania: 'Tanzania (Ndani)',
    eastAfricaRegion: 'Mkoa wa Afrika Mashariki',
    internationalMarkets: 'Masoko ya Kimataifa',
    remoteSiteOperations: 'Shughuli za Maeneo ya Mbali',
    allRightsReserved: 'Haki zote zimehifadhiwa. | Kampuni ya Vichombo na Migodi'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'sw'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
