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

export interface AboutData {
  overview: OverviewData;
  generalManager: GeneralManagerData;
  milestones: Milestone[];
  infrastructure: InfrastructureFacility[];
  exportCapability: ExportCapabilityData;
  organisationChart: OrganisationChartData;
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
      year: "2010",
      description: "Project foundation phase initiated for dedicated modern coach manufacturing infrastructure.",
      descriptionHi: "समर्पित आधुनिक कोच निर्माण अवसंरचना हेतु परियोजना की आधारभूत शुरुआत।",
    },
    {
      id: "m2",
      year: "2014",
      description: "Commercial-scale coach production stabilized with progressive expansion of shop capacity.",
      descriptionHi: "शॉप क्षमता के चरणबद्ध विस्तार के साथ वाणिज्यिक स्तर का कोच उत्पादन स्थिर हुआ।",
    },
    {
      id: "m3",
      year: "2018",
      description: "Major growth in annual output with process-driven improvements in manufacturing throughput.",
      descriptionHi: "विनिर्माण थ्रूपुट में प्रक्रिया-आधारित सुधारों के साथ वार्षिक उत्पादन में उल्लेखनीय वृद्धि।",
    },
    {
      id: "m4",
      year: "2023",
      description: "Integration of advanced quality and monitoring systems across key production lines.",
      descriptionHi: "प्रमुख उत्पादन लाइनों में उन्नत गुणवत्ता और मॉनिटरिंग प्रणालियों का एकीकरण।",
    },
    {
      id: "m5",
      year: "2026",
      description: "Sustained multi-thousand annual coach output with focus on modernization and reliability.",
      descriptionHi: "आधुनिकीकरण और विश्वसनीयता पर ध्यान के साथ बहु-हजार वार्षिक कोच उत्पादन का निरंतर स्तर।",
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
};
