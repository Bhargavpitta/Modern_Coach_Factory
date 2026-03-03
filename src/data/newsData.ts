export type NewsCategoryType = "press_release" | "feature" | "circular";

export interface NewsItem {
  id: string;
  title: string;
  titleHi: string;
  date: string;
  summary: string;
  summaryHi: string;
  category: string;
  categoryHi: string;
  categoryType: NewsCategoryType;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "MCF records annual coach production milestone for FY 2025-26",
    titleHi: "वित्त वर्ष 2025-26 में एमसीएफ ने कोच उत्पादन का नया कीर्तिमान स्थापित किया",
    date: "2026-02-25",
    summary: "A production milestone was achieved with sustained output in LHB coach manufacturing and dispatch.",
    summaryHi: "एलएचबी कोच निर्माण और निर्गमन में निरंतर प्रगति के साथ उत्पादन का नया मानक प्राप्त हुआ।",
    category: "Press Release",
    categoryHi: "प्रेस विज्ञप्ति",
    categoryType: "press_release",
  },
  {
    id: "2",
    title: "New generation sleeper coach design enters manufacturing phase",
    titleHi: "नई पीढ़ी के स्लीपर कोच डिज़ाइन का विनिर्माण चरण प्रारंभ",
    date: "2026-02-18",
    summary: "MCF initiated manufacturing activities for improved sleeper coach configurations and passenger amenities.",
    summaryHi: "एमसीएफ ने उन्नत स्लीपर कोच विन्यास और यात्री सुविधाओं के साथ निर्माण गतिविधियां शुरू कीं।",
    category: "Feature",
    categoryHi: "विशेष लेख",
    categoryType: "feature",
  },
  {
    id: "3",
    title: "Public notice for approved vendor document submission timeline",
    titleHi: "स्वीकृत विक्रेताओं के दस्तावेज़ जमा करने की समय-सीमा संबंधी सार्वजनिक सूचना",
    date: "2026-01-31",
    summary: "A circular has been issued regarding schedule and compliance format for vendor documentation updates.",
    summaryHi: "विक्रेता दस्तावेज़ अद्यतन हेतु समय-सारणी और अनुपालन प्रारूप के संबंध में परिपत्र जारी किया गया।",
    category: "Circular",
    categoryHi: "परिपत्र",
    categoryType: "circular",
  },
  {
    id: "4",
    title: "Railway leadership review of modernization works at MCF",
    titleHi: "एमसीएफ में आधुनिकीकरण कार्यों की रेलवे नेतृत्व द्वारा समीक्षा",
    date: "2025-12-20",
    summary: "A site review focused on capacity enhancement, digitized workflows, and quality assurance systems.",
    summaryHi: "स्थल समीक्षा में क्षमता विस्तार, डिजिटाइज्ड कार्यप्रवाह और गुणवत्ता आश्वासन प्रणालियों पर ध्यान दिया गया।",
    category: "Press Release",
    categoryHi: "प्रेस विज्ञप्ति",
    categoryType: "press_release",
  },
  {
    id: "5",
    title: "Coach interior upgrades with safety-focused materials highlighted",
    titleHi: "सुरक्षा-केंद्रित सामग्रियों के साथ कोच इंटीरियर उन्नयन पर प्रकाश",
    date: "2025-11-09",
    summary: "Feature coverage on ergonomic improvements, fire-retardant interiors, and maintainability enhancements.",
    summaryHi: "एर्गोनॉमिक सुधार, अग्निरोधी इंटीरियर और रखरखाव सुगमता पर आधारित विशेष लेख प्रकाशित।",
    category: "Feature",
    categoryHi: "विशेष लेख",
    categoryType: "feature",
  },
  {
    id: "6",
    title: "Circular on holiday roster and emergency maintenance protocol",
    titleHi: "अवकाश रोस्टर और आपात रखरखाव प्रोटोकॉल पर परिपत्र",
    date: "2025-10-22",
    summary: "Administrative circular details revised shift coverage and emergency response responsibilities.",
    summaryHi: "प्रशासनिक परिपत्र में संशोधित शिफ्ट कवरेज और आपात प्रतिक्रिया जिम्मेदारियां निर्दिष्ट की गई हैं।",
    category: "Circular",
    categoryHi: "परिपत्र",
    categoryType: "circular",
  },
  {
    id: "7",
    title: "Update on exports-oriented quality audits for selected coach lots",
    titleHi: "चयनित कोच बैचों के लिए निर्यात उन्मुख गुणवत्ता ऑडिट पर अद्यतन",
    date: "2024-12-14",
    summary: "Press note confirms completion of quality checkpoints aligned with international customer expectations.",
    summaryHi: "प्रेस नोट में अंतरराष्ट्रीय ग्राहकों की अपेक्षाओं के अनुरूप गुणवत्ता जांच पूर्ण होने की पुष्टि की गई।",
    category: "Press Release",
    categoryHi: "प्रेस विज्ञप्ति",
    categoryType: "press_release",
  },
  {
    id: "8",
    title: "Feature on integrated manufacturing lines and throughput planning",
    titleHi: "एकीकृत विनिर्माण लाइनों और थ्रूपुट योजना पर विशेष रिपोर्ट",
    date: "2024-09-03",
    summary: "The article outlines synchronized production planning between shell, furnishing, and testing sections.",
    summaryHi: "लेख में शेल, फर्निशिंग और परीक्षण अनुभागों के बीच समन्वित उत्पादन योजना का विवरण है।",
    category: "Feature",
    categoryHi: "विशेष लेख",
    categoryType: "feature",
  },
];
