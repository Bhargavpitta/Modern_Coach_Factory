export interface OverviewData {
  establishment: string;
  establishmentHi: string;
  productionCapacity: string;
  productionCapacityHi: string;
  manufacturingSummary: string;
  manufacturingSummaryHi: string;
}

export interface GeneralManagerData {
  name: string;
  nameHi: string;
  designation: string;
  designationHi: string;
  message: string;
  messageHi: string;
}

export interface Milestone {
  id: string;
  year: string;
  description: string;
  descriptionHi: string;
}

export interface InfrastructureFacility {
  id: string;
  name: string;
  nameHi: string;
  summary: string;
  summaryHi: string;
}

export interface ExportCapabilityData {
  summary: string;
  summaryHi: string;
  highlights: string[];
  highlightsHi: string[];
}

export interface OrganisationChartData {
  title: string;
  titleHi: string;
  note: string;
  noteHi: string;
}

export interface YearlyProduction {
  id: string;
  year: string;
  coachesProduced: string;
  notes: string;
  notesHi: string;
}

export interface AboutData {
  overview: OverviewData;
  generalManager: GeneralManagerData;
  milestones: Milestone[];
  infrastructure: InfrastructureFacility[];
  exportCapability: ExportCapabilityData;
  organisationChart: OrganisationChartData;
  yearlyProduction: YearlyProduction[];
}

export const aboutData: AboutData = {
  overview: {
    establishment: "Modern Coach Factory (MCF), Raebareli was established as a greenfield coach manufacturing unit under Indian Railways.",
    establishmentHi: "आधुनिक कोच कारखाना (एमसीएफ), रायबरेली भारतीय रेल के अंतर्गत एक ग्रीनफील्ड कोच निर्माण इकाई के रूप में स्थापित किया गया।",
    productionCapacity: "The unit is aligned for high-volume annual output with a production scale of more than 3000 coaches per year.",
    productionCapacityHi: "यह इकाई उच्च वार्षिक उत्पादन के लिए संरेखित है और इसकी उत्पादन क्षमता 3000 से अधिक कोच प्रति वर्ष है।",
    manufacturingSummary: "MCF supports stainless steel coach shell fabrication, furnishing, electrical integration, testing, and dispatch through integrated shop systems.",
    manufacturingSummaryHi: "एमसीएफ एकीकृत शॉप प्रणालियों के माध्यम से स्टेनलेस स्टील कोच शेल फैब्रिकेशन, फर्निशिंग, इलेक्ट्रिकल एकीकरण, परीक्षण और निर्गमन का समर्थन करता है।",
  },
  generalManager: {
    name: "Shri [Name Placeholder]",
    nameHi: "श्री [नाम प्लेसहोल्डर]",
    designation: "General Manager, Modern Coach Factory",
    designationHi: "महाप्रबंधक, आधुनिक कोच कारखाना",
    message: "MCF remains committed to safe, reliable, and modern rolling stock through quality-focused manufacturing, workforce capability, and continuous process improvement.",
    messageHi: "एमसीएफ गुणवत्ता-केंद्रित विनिर्माण, कार्यबल क्षमता और निरंतर प्रक्रिया सुधार के माध्यम से सुरक्षित, विश्वसनीय और आधुनिक रोलिंग स्टॉक के प्रति प्रतिबद्ध है।",
  },
  milestones: [
    {
      id: "m1",
      year: "Feb 2007",
      description: "Foundation stone laid for Modern Coach Factory",
      descriptionHi: "आधुनिक कोच कारखाने की आधारशिला रखी गई",
    },
    {
      id: "m2",
      year: "Aug 2007",
      description: "Commencement of land acquisition",
      descriptionHi: "भूमि अधिग्रहण का कार्य शुरू",
    },
    {
      id: "m3",
      year: "Feb 2009",
      description: "Preparatory construction work commenced",
      descriptionHi: "तैयारी कार्य शुरू",
    },
    {
      id: "m4",
      year: "May 2010",
      description: "Actual Construction of Factory started",
      descriptionHi: "कारखाने का वास्तविक निर्माण शुरू",
    },
    {
      id: "m5",
      year: "Jan 2011",
      description: "Commissioning of 33 KV Transmission Line",
      descriptionHi: "33 केवी ट्रांसमिशन लाइन का कमीशनिंग",
    },
    {
      id: "m6",
      year: "April 2011",
      description: "Finishing & Furnishing shop work completed",
      descriptionHi: "फिनिशिंग और फर्निशिंग शॉप का कार्य पूर्ण",
    },
    {
      id: "m7",
      year: "April 2011",
      description: "First Coach Furnished from shell supplied by RCF/KXH",
      descriptionHi: "आरसीएफ/केएक्सएच द्वारा आपूर्ति शेल से पहला कोच सजाया गया",
    },
    {
      id: "m8",
      year: "June 2012",
      description: "Furnishing of 1st LWSCZAC (Chair Car)",
      descriptionHi: "पहले एलडब्ल्यूएससीजेडएसी (चेयर कार) को सजाना",
    },
    {
      id: "m9",
      year: "July 2012",
      description: "Furnishing of 1st LWFCZAC (Ex. Chair Car)",
      descriptionHi: "पहले एलडब्ल्यूएफसीजेडएसी (एक्स. चेयर कार) को सजाना",
    },
    {
      id: "m10",
      year: "Nov 2012",
      description: "Dedication of Factory to the Nation",
      descriptionHi: "राष्ट्र को समर्पित कारखाना",
    },
    {
      id: "m11",
      year: "Nov 2012",
      description: "Furnishing of 1st LWACCW Coach",
      descriptionHi: "पहले एलडब्ल्यूएसीसीडब्ल्यू कोच को सजाना",
    },
    {
      id: "m12",
      year: "July 2013",
      description: "First Shell Assembly (Major sub assembly by RCF/KXH)",
      descriptionHi: "पहला शेल असेंबली (आरसीएफ/केएक्सएच द्वारा प्रमुख उप-असेंबली)",
    },
    {
      id: "m13",
      year: "July 2013",
      description: "Rolling out 100th coach",
      descriptionHi: "100वां कोच बाहर",
    },
    {
      id: "m14",
      year: "July 2013",
      description: "Assembly of First LHB coach shell by MCF",
      descriptionHi: "एमसीएफ द्वारा पहले एलएचबी कोच शेल की असेंबली",
    },
    {
      id: "m15",
      year: "Feb 2014",
      description: "Completion of Bogie Shop",
      descriptionHi: "बॉगी शॉप पूर्ण",
    },
    {
      id: "m16",
      year: "Mar 2014",
      description: "Completion of Shell, Paint and Machine Shops",
      descriptionHi: "शेल, पेंट और मशीन शॉप पूर्ण",
    },
    {
      id: "m17",
      year: "April 2014",
      description: "Rolling out 200th coach",
      descriptionHi: "200वां कोच बाहर",
    },
    {
      id: "m18",
      year: "Aug 2014",
      description: "Manufacture of first prototype fabricated Fiat Bogie",
      descriptionHi: "पहले प्रोटोटाइप फैब्रिकेटेड फिएट बॉगी का निर्माण",
    },
    {
      id: "m19",
      year: "Aug 2014",
      description: "Manufacture of first LHB coach shell by RCF/RBL",
      descriptionHi: "आरसीएफ/आरबीएल द्वारा पहले एलएचबी कोच शेल का निर्माण",
    },
    {
      id: "m20",
      year: "Sep 2014",
      description: "Furnishing of 1st LWSCN COACH",
      descriptionHi: "पहले एलडब्ल्यूएससीएन कोच को सजाना",
    },
    {
      id: "m21",
      year: "Nov 2014",
      description: "Completion of Administrative Building",
      descriptionHi: "प्रशासनिक भवन पूर्ण",
    },
    {
      id: "m22",
      year: "Dec 2014",
      description: "Complete Bogie Assembly",
      descriptionHi: "पूर्ण बॉगी असेंबली",
    },
    {
      id: "m23",
      year: "Dec 2014",
      description: "Manufacture of first Fiat bogie",
      descriptionHi: "पहले फिएट बॉगी का निर्माण",
    },
    {
      id: "m24",
      year: "Jan 2015",
      description: "Commissioning of 132 KV MRS",
      descriptionHi: "132 केवी एमआरएस का कमीशनिंग",
    },
    {
      id: "m25",
      year: "Feb 2015",
      description: "First Bogie Manufacture",
      descriptionHi: "पहला बॉगी निर्माण",
    },
    {
      id: "m26",
      year: "June 2015",
      description: "100th Shell, Manufactured",
      descriptionHi: "100वां शेल, निर्मित",
    },
    {
      id: "m27",
      year: "July 2015",
      description: "1st LSCN Shell, Manufactured",
      descriptionHi: "पहला एलएससीएन शेल, निर्मित",
    },
    {
      id: "m28",
      year: "July 2015",
      description: "100 Bogie Manufactured",
      descriptionHi: "100 बॉगी निर्मित",
    },
    {
      id: "m29",
      year: "Dec 2015",
      description: "RCF, Raebareli Renamed as MCF, Raebareli",
      descriptionHi: "आरसीएफ, रायबरेली का नाम बदलकर एमसीएफ, रायबरेली",
    },
    {
      id: "m30",
      year: "Dec 2015",
      description: "300th LWACCN Coach Furnished",
      descriptionHi: "300वां एलडब्ल्यूएसीसीएन कोच सजाया गया",
    },
    {
      id: "m31",
      year: "Jan 2016",
      description: "Rolling out 500th coach",
      descriptionHi: "500वां कोच बाहर",
    },
    {
      id: "m32",
      year: "Feb 2016",
      description: "1st GS Shell Manufactured",
      descriptionHi: "पहला जीएस शेल निर्मित",
    },
    {
      id: "m33",
      year: "April 2016",
      description: "Formed Recognised Technical Training Centre",
      descriptionHi: "मान्यता प्राप्त तकनीकी प्रशिक्षण केंद्र का गठन",
    },
    {
      id: "m34",
      year: "May 2016",
      description: "IMS Certification",
      descriptionHi: "आईएमएस प्रमाणन",
    },
    {
      id: "m35",
      year: "Oct 2016",
      description: "800th Coach furnished",
      descriptionHi: "800वां कोच सजाया गया",
    },
    {
      id: "m36",
      year: "Oct 2016",
      description: "1st Rake of Humsafar coaches dispatch",
      descriptionHi: "हमसफर कोच की पहली रेक भेजी गई",
    },
    {
      id: "m37",
      year: "Nov 2016",
      description: "Rolling out 1000th coach",
      descriptionHi: "1000वां कोच बाहर",
    },
    {
      id: "m38",
      year: "Jan 2017",
      description: "1st Rake of Antyodaya Coaches dispatch",
      descriptionHi: "अंत्योदय कोच की पहली रेक भेजी गई",
    },
    {
      id: "m39",
      year: "April 2017",
      description: "1st Power Car Shell manufactured",
      descriptionHi: "पहली पावर कार शेल निर्मित",
    },
    {
      id: "m40",
      year: "May 2017",
      description: "1000th Shell manufactured",
      descriptionHi: "1000वां शेल निर्मित",
    },
    {
      id: "m41",
      year: "May 2017",
      description: "5th Rake of Humsafar coaches dispatched",
      descriptionHi: "हमसफर कोच की 5वीं रेक भेजी गई",
    },
    {
      id: "m42",
      year: "June 2017",
      description: "1st Power Car handed over to ZR",
      descriptionHi: "पहली पावर कार जेडआर को सौंपी गई",
    },
    {
      id: "m43",
      year: "Oct 2017",
      description: "Rolling out 1500th coach",
      descriptionHi: "1500वां कोच बाहर",
    },
    {
      id: "m44",
      year: "Oct 2017",
      description: "1st Coach of Deen Dayalu dispatched",
      descriptionHi: "दीन दयालु कोच की पहली कोच भेजी गई",
    },
    {
      id: "m45",
      year: "Jan 2018",
      description: "Total 25 nos. Power Car handed over to ZR",
      descriptionHi: "कुल 25 पावर कार जेडआर को सौंपी गई",
    },
    {
      id: "m46",
      year: "Mar 2018",
      description: "2000th Coach Rolling Out",
      descriptionHi: "2000वां कोच बाहर",
    },
    {
      id: "m47",
      year: "May 2018",
      description: "1st SMART Coach dispatched",
      descriptionHi: "पहला स्मार्ट कोच भेजा गया",
    },
    {
      id: "m48",
      year: "May 2018",
      description: "1st LHB Under Slung LDSLR Coach turned out",
      descriptionHi: "पहला एलएचबी अंडर स्लंग एलडीएसएलआर कोच तैयार",
    },
    {
      id: "m49",
      year: "Jan 2019",
      description: "1st LHB AC Pantry car turned out",
      descriptionHi: "पहला एलएचबी एसी पेंट्री कार तैयार",
    },
    {
      id: "m50",
      year: "Feb 2019",
      description: "1st LHB Non-AC Chair Car turned out",
      descriptionHi: "पहला एलएचबी नॉन-एसी चेयर कार तैयार",
    },
    {
      id: "m51",
      year: "Mar 2019",
      description: "1st LHB Track Recording Car turned out",
      descriptionHi: "पहला एलएचबी ट्रैक रिकॉर्डिंग कार तैयार",
    },
    {
      id: "m52",
      year: "June 2019",
      description: "Green Co Platinum Rating Conferred to MCF",
      descriptionHi: "एमसीएफ को ग्रीन को प्लैटिनम रेटिंग",
    },
    {
      id: "m53",
      year: "Aug 2019",
      description: "1st LHB First AC Coach turned out",
      descriptionHi: "पहला एलएचबी फर्स्ट एसी कोच तैयार",
    },
    {
      id: "m54",
      year: "Aug 2019",
      description: "4000th Coach Rolling out",
      descriptionHi: "4000वां कोच बाहर",
    },
    {
      id: "m55",
      year: "17th Feb 2020",
      description: "1st Smart Humsafar rake of Indian Railways dispatch",
      descriptionHi: "भारतीय रेल की पहली स्मार्ट हमसफर रेक भेजी गई",
    },
    {
      id: "m56",
      year: "Feb 2020",
      description: "5000th Coach Rolling out",
      descriptionHi: "5000वां कोच बाहर",
    },
    {
      id: "m57",
      year: "26th Jun 2020",
      description: "2nd Rake of Smart ver-2 Humsafar Coaches dispatch",
      descriptionHi: "स्मार्ट वर-2 हमसफर कोच की दूसरी रेक भेजी गई",
    },
    {
      id: "m58",
      year: "July 2020",
      description: "1st LSLRD-AC-750 KVA coach dispatch",
      descriptionHi: "पहला एलएसएलआरडी-एसी-750 केवीए कोच भेजा गया",
    },
    {
      id: "m59",
      year: "4th Nov 2020",
      description: "Rolling out 6000th Coach",
      descriptionHi: "6000वां कोच बाहर",
    },
    {
      id: "m60",
      year: "Nov 2020",
      description: "1st LSLRD AC-750 KVA (18711) coach dispatch for trial",
      descriptionHi: "पहला एलएसएलआरडी एसी-750 केवीए (18711) परीक्षण के लिए भेजा गया",
    },
    {
      id: "m61",
      year: "27th Nov 2020",
      description: "Flagging off of 1st ever Smart Tejas Sleeper Rake manufactured",
      descriptionHi: "पहली स्मार्ट तेजस स्लीपर रेक का शुभारंभ",
    },
    {
      id: "m62",
      year: "Jan 2021",
      description: "2nd Smart Tejas Sleeper & 3rd Tejas Sleeper Rake dispatch",
      descriptionHi: "दूसरी स्मार्ट तेजस स्लीपर और तीसरी तेजस स्लीपर रेक भेजी गई",
    },
    {
      id: "m63",
      year: "Oct 2021",
      description: "4th & 5th Tejas Sleeper Rake dispatch",
      descriptionHi: "4वीं और 5वीं तेजस स्लीपर रेक भेजी गई",
    },
    {
      id: "m64",
      year: "31st March 2022",
      description: "6th Tejas Sleeper Rake dispatch",
      descriptionHi: "6वीं तेजस स्लीपर रेक भेजी गई",
    },
    {
      id: "m65",
      year: "31st March 2022",
      description: "Rolling out 7000th Coach",
      descriptionHi: "7000वां कोच बाहर",
    },
    {
      id: "m66",
      year: "15th July 2021",
      description: "1st Rake of 12th Coach Dispatched for Mozambique",
      descriptionHi: "मोज़ाम्बिक के लिए 12वीं कोच की पहली रेक भेजी गई",
    },
    {
      id: "m67",
      year: "31st March 2022",
      description: "Vande Bharat Trainset (Shell) prototype model",
      descriptionHi: "वंदे भारत ट्रेनसेट (शेल) प्रोटोटाइप मॉडल",
    },
    {
      id: "m68",
      year: "December 2022",
      description: "Rolling out of the 8500th Coach",
      descriptionHi: "8500वां कोच बाहर",
    },
    {
      id: "m69",
      year: "20.03.2023",
      description: "1st ACCNE (AC Economy) Coach turned out",
      descriptionHi: "पहला एसीसीएनई (एसी इकोनॉमी) कोच तैयार",
    },
    {
      id: "m70",
      year: "31st March 2023",
      description: "1st Rake of 3 Phase Cape Gauge DEMU (Exported to Mozambique)",
      descriptionHi: "3 फेज केप गेज डीईएमयू की पहली रेक (मोज़ाम्बिक को निर्यात)",
    },
    {
      id: "m71",
      year: "02nd April 2023",
      description: "Rani Girls Hockey Stadium",
      descriptionHi: "रानी गर्ल्स हॉकी स्टेडियम",
    },
    {
      id: "m72",
      year: "19th April 2023",
      description: "Rolling out of the 9981 Coach",
      descriptionHi: "9981वां कोच बाहर",
    },
    {
      id: "m73",
      year: "23rd Aug 2023",
      description: "1st Bharat Gaurav Tourist Train",
      descriptionHi: "पहली भारत गौरव पर्यटक ट्रेन",
    },
    {
      id: "m74",
      year: "Sept 2023",
      description: "Rolling out of the 10000th Coach",
      descriptionHi: "10000वां कोच बाहर",
    },
    {
      id: "m75",
      year: "22nd Nov 2023",
      description: "130 KW Solar Power Plant Extension",
      descriptionHi: "130 किलोवाट सोलर पावर प्लांट विस्तार",
    },
    {
      id: "m76",
      year: "25th Nov 2023",
      description: "GreenCo Platinum Rating Certificate",
      descriptionHi: "ग्रीनको प्लैटिनम रेटिंग प्रमाणपत्र",
    },
    {
      id: "m77",
      year: "31st March 2024",
      description: "Rolling out of the 11000th Coach",
      descriptionHi: "11000वां कोच बाहर",
    },
    {
      id: "m78",
      year: "1st April 2024",
      description: "5S Methodology Certificate",
      descriptionHi: "5एस पद्धति प्रमाणपत्र",
    },
    {
      id: "m79",
      year: "24th June 2024",
      description: "1st 3 Phase MEMU Train despatched",
      descriptionHi: "पहली 3 फेज एमईएमयू ट्रेन भेजी गई",
    },
    {
      id: "m80",
      year: "31st March 2024",
      description: "Rolling out of the 11665th Coach",
      descriptionHi: "11665वां कोच बाहर",
    },
    {
      id: "m81",
      year: "25th Oct 2024",
      description: "Rolling out of the 12000th Coach",
      descriptionHi: "12000वां कोच बाहर",
    },
    {
      id: "m82",
      year: "28th Dec 2024",
      description: "Forge Wheel Plant takeover from Ministry of Ispat to MOR",
      descriptionHi: "मंत्रालय आइस्पैट से एमओआर को फोर्ज व्हील प्लांट का अधिग्रहण",
    },
    {
      id: "m83",
      year: "27th Jan 2025",
      description: "Rolling out of the 13000th Coach",
      descriptionHi: "13000वां कोच बाहर",
    },
    {
      id: "m84",
      year: "2025",
      description: "157.5 KW Roof top Solar Power Plant Extension on testing lab building",
      descriptionHi: "परीक्षण प्रयोगशाला भवन पर 157.5 किलोवाट छत सोलर पावर प्लांट विस्तार",
    },
  ],
  infrastructure: [
    {
      id: "i1",
      name: "Shell Shop",
      nameHi: "शेल शॉप",
      summary: "Fabrication and assembly of stainless steel coach shells.",
      summaryHi: "स्टेनलेस स्टील कोच शेल का निर्माण और असेंबली।",
    },
    {
      id: "i2",
      name: "Furnishing Shop",
      nameHi: "फर्निशिंग शॉप",
      summary: "Interior fitment, seating systems, and passenger amenity integration.",
      summaryHi: "इंटीरियर फिटमेंट, सीटिंग सिस्टम और यात्री सुविधाओं का एकीकरण।",
    },
    {
      id: "i3",
      name: "Electrical Integration",
      nameHi: "इलेक्ट्रिकल एकीकरण",
      summary: "Coach wiring, control systems, and validation of onboard electrical functions.",
      summaryHi: "कोच वायरिंग, कंट्रोल सिस्टम और ऑनबोर्ड इलेक्ट्रिकल कार्यों का सत्यापन।",
    },
    {
      id: "i4",
      name: "Testing & Quality",
      nameHi: "परीक्षण एवं गुणवत्ता",
      summary: "Stage inspections and final quality checks before dispatch.",
      summaryHi: "निर्गमन से पहले चरणबद्ध निरीक्षण और अंतिम गुणवत्ता जांच।",
    },
    {
      id: "i5",
      name: "Logistics & Dispatch",
      nameHi: "लॉजिस्टिक्स एवं निर्गमन",
      summary: "Material handling and coach dispatch planning for rail network deployment.",
      summaryHi: "रेल नेटवर्क में तैनाती हेतु सामग्री प्रबंधन और कोच निर्गमन योजना।",
    },
    {
      id: "i6",
      name: "Utility & Support Services",
      nameHi: "यूटिलिटी एवं सहायक सेवाएं",
      summary: "Plant utilities, maintenance support, and operational continuity services.",
      summaryHi: "प्लांट यूटिलिटी, रखरखाव सहायता और संचालन निरंतरता सेवाएं।",
    },
  ],
  exportCapability: {
    summary: "MCF manufacturing systems are aligned to quality documentation, inspection standards, and configurable coach requirements that support export-oriented readiness.",
    summaryHi: "एमसीएफ की विनिर्माण प्रणालियां गुणवत्ता दस्तावेजीकरण, निरीक्षण मानकों और कॉन्फ़िगरेबल कोच आवश्यकताओं के अनुरूप हैं, जो निर्यात उन्मुख तैयारी का समर्थन करती हैं।",
    highlights: [
      "Process and quality records suitable for international customer audits",
      "Configurable coach interior and system options based on requirement profiles",
      "Inspection-driven dispatch readiness with documented compliance stages",
    ],
    highlightsHi: [
      "अंतरराष्ट्रीय ग्राहक ऑडिट हेतु उपयुक्त प्रक्रिया और गुणवत्ता अभिलेख",
      "आवश्यकता प्रोफाइल के अनुसार कॉन्फ़िगरेबल कोच इंटीरियर और सिस्टम विकल्प",
      "दस्तावेजीकृत अनुपालन चरणों के साथ निरीक्षण-आधारित निर्गमन तैयारी",
    ],
  },
  organisationChart: {
    title: "Organisation Chart",
    titleHi: "संगठन चार्ट",
    note: "Placeholder for institutional hierarchy chart (GM, PHODs, and department reporting structure).",
    noteHi: "संस्थागत पदानुक्रम चार्ट हेतु प्लेसहोल्डर (महाप्रबंधक, पीएचओडी और विभागीय रिपोर्टिंग संरचना)।",
  },
  yearlyProduction: [
    {
      id: "yp1",
      year: "2011-12",
      coachesProduced: "18",
      notes: "All Bogies and Shells received from RCF/KXH",
      notesHi: "सभी बॉगी और शेल आरसीएफ/केएक्सएच से प्राप्त",
    },
    {
      id: "yp2",
      year: "2012-13",
      coachesProduced: "70",
      notes: "All Bogies and Shells received from RCF/KXH",
      notesHi: "सभी बॉगी और शेल आरसीएफ/केएक्सएच से प्राप्त",
    },
    {
      id: "yp3",
      year: "2013-14",
      coachesProduced: "130",
      notes: "All Bogies and Shells received from RCF/KXH",
      notesHi: "सभी बॉगी और शेल आरसीएफ/केएक्सएच से प्राप्त",
    },
    {
      id: "yp4",
      year: "2014-15",
      coachesProduced: "140",
      notes: "20 Bogies and 95 Shells received from RCF/KXH",
      notesHi: "20 बॉगी और 95 शेल आरसीएफ/केएक्सएच से प्राप्त",
    },
    {
      id: "yp5",
      year: "2015-16",
      coachesProduced: "285",
      notes: "23 Shells received from RCF/KXH",
      notesHi: "23 शेल आरसीएफ/केएक्सएच से प्राप्त",
    },
    {
      id: "yp6",
      year: "2016-17",
      coachesProduced: "576",
      notes: "All Bogies and Shells manufactured at MCF",
      notesHi: "सभी बॉगी और शेल एमसीएफ में निर्मित",
    },
    {
      id: "yp7",
      year: "2017-18",
      coachesProduced: "711",
      notes: "All Bogies and Shells manufactured at MCF",
      notesHi: "सभी बॉगी और शेल एमसीएफ में निर्मित",
    },
    {
      id: "yp8",
      year: "2018-19",
      coachesProduced: "1425",
      notes: "All Bogies and Shells manufactured at MCF",
      notesHi: "सभी बॉगी और शेल एमसीएफ में निर्मित",
    },
    {
      id: "yp9",
      year: "2019-20",
      coachesProduced: "1930",
      notes: "All Bogies and Shells manufactured at MCF",
      notesHi: "सभी बॉगी और शेल एमसीएफ में निर्मित",
    },
    {
      id: "yp10",
      year: "2020-21",
      coachesProduced: "1360",
      notes: "All Bogies and Shells manufactured at MCF",
      notesHi: "सभी बॉगी और शेल एमसीएफ में निर्मित",
    },
    {
      id: "yp11",
      year: "2021-22",
      coachesProduced: "1875",
      notes: "All Bogies and Shells manufactured at MCF",
      notesHi: "सभी बॉगी और शेल एमसीएफ में निर्मित",
    },
    {
      id: "yp12",
      year: "2022-23",
      coachesProduced: "1461",
      notes: "All Bogies and Shells manufactured at MCF",
      notesHi: "सभी बॉगी और शेल एमसीएफ में निर्मित",
    },
    {
      id: "yp13",
      year: "2023-24",
      coachesProduced: "1684",
      notes: "All Bogies and Shells manufactured at MCF",
      notesHi: "सभी बॉगी और शेल एमसीएफ में निर्मित",
    },
    {
      id: "yp14",
      year: "2024-25",
      coachesProduced: "2025",
      notes: "All Bogies and shells manufactured at MCF",
      notesHi: "सभी बॉगी और शेल एमसीएफ में निर्मित",
    },
    {
      id: "yp15",
      year: "2025-26",
      coachesProduced: "1899*",
      notes: "All Bogies and shells manufactured at MCF (Till 28 February 2026)",
      notesHi: "सभी बॉगी और शेल एमसीएफ में निर्मित (28 फरवरी 2026 तक)",
    },
  ],
};
