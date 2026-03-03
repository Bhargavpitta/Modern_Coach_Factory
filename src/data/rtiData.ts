export interface RTIOverview {
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
}

export interface RTIContactOfficer {
  name: string;
  nameHi: string;
  designation: string;
  designationHi: string;
  phone: string;
  email: string;
}

export interface RTIDocument {
  id: string;
  title: string;
  titleHi: string;
  fileRef: string;
}

export interface MandatoryDisclosure {
  id: string;
  category: string;
  categoryHi: string;
  details: string;
  detailsHi: string;
  status: string;
  statusHi: string;
}

export interface RTIData {
  overview: RTIOverview;
  publicInformationOfficer: RTIContactOfficer;
  appellateAuthority: RTIContactOfficer;
  documents: RTIDocument[];
  mandatoryDisclosures: MandatoryDisclosure[];
}

export const rtiData: RTIData = {
  overview: {
    title: "RTI Act Applicability",
    titleHi: "आरटीआई अधिनियम की प्रयोज्यता",
    description:
      "Modern Coach Factory, as a public authority under the Ministry of Railways, processes RTI applications in accordance with the Right to Information Act, 2005 and related rules.",
    descriptionHi:
      "आधुनिक कोच कारखाना, रेल मंत्रालय के अंतर्गत एक लोक प्राधिकरण होने के नाते, सूचना का अधिकार अधिनियम, 2005 तथा संबंधित नियमों के अनुसार आरटीआई आवेदन प्रक्रिया करता है।",
  },
  publicInformationOfficer: {
    name: "Shri/Smt. [Officer Name Placeholder]",
    nameHi: "श्री/श्रीमती [अधिकारी नाम प्लेसहोल्डर]",
    designation: "Central Public Information Officer (CPIO)",
    designationHi: "केंद्रीय लोक सूचना अधिकारी (सीपीआईओ)",
    phone: "+91-535-2205001",
    email: "cpio@mcf.indianrailways.gov.in",
  },
  appellateAuthority: {
    name: "Shri/Smt. [Authority Name Placeholder]",
    nameHi: "श्री/श्रीमती [प्राधिकारी नाम प्लेसहोल्डर]",
    designation: "First Appellate Authority",
    designationHi: "प्रथम अपीलीय प्राधिकारी",
    phone: "+91-535-2205002",
    email: "faa@mcf.indianrailways.gov.in",
  },
  documents: [
    {
      id: "d1",
      title: "RTI Application Form (Placeholder)",
      titleHi: "आरटीआई आवेदन प्रपत्र (प्लेसहोल्डर)",
      fileRef: "#",
    },
    {
      id: "d2",
      title: "RTI Fee Payment Instructions (Placeholder)",
      titleHi: "आरटीआई शुल्क भुगतान निर्देश (प्लेसहोल्डर)",
      fileRef: "#",
    },
    {
      id: "d3",
      title: "Citizen Information Handbook (Placeholder)",
      titleHi: "नागरिक सूचना पुस्तिका (प्लेसहोल्डर)",
      fileRef: "#",
    },
    {
      id: "d4",
      title: "Quarterly RTI Return Summary (Placeholder)",
      titleHi: "त्रैमासिक आरटीआई रिटर्न सारांश (प्लेसहोल्डर)",
      fileRef: "#",
    },
  ],
  mandatoryDisclosures: [
    {
      id: "m1",
      category: "Organisation, Functions and Duties",
      categoryHi: "संगठन, कार्य एवं दायित्व",
      details: "Institution profile and role of departments (placeholder for detailed upload).",
      detailsHi: "संस्थान प्रोफाइल तथा विभागों की भूमिका (विस्तृत अपलोड हेतु प्लेसहोल्डर)।",
      status: "Available (Placeholder)",
      statusHi: "उपलब्ध (प्लेसहोल्डर)",
    },
    {
      id: "m2",
      category: "Powers and Duties of Officers",
      categoryHi: "अधिकारियों की शक्तियां एवं दायित्व",
      details: "Delegation and reporting framework (placeholder).",
      detailsHi: "प्राधिकरण और रिपोर्टिंग ढांचा (प्लेसहोल्डर)।",
      status: "Available (Placeholder)",
      statusHi: "उपलब्ध (प्लेसहोल्डर)",
    },
    {
      id: "m3",
      category: "Decision-Making Procedure",
      categoryHi: "निर्णय लेने की प्रक्रिया",
      details: "File workflow and approval levels (placeholder).",
      detailsHi: "फाइल कार्यप्रवाह और अनुमोदन स्तर (प्लेसहोल्डर)।",
      status: "Under Update",
      statusHi: "अद्यतनाधीन",
    },
    {
      id: "m4",
      category: "Norms, Manuals and Records",
      categoryHi: "मानक, मैनुअल और अभिलेख",
      details: "Operational manuals and record categories (placeholder).",
      detailsHi: "संचालन मैनुअल और अभिलेख श्रेणियां (प्लेसहोल्डर)।",
      status: "Available (Placeholder)",
      statusHi: "उपलब्ध (प्लेसहोल्डर)",
    },
    {
      id: "m5",
      category: "Budget and Expenditure",
      categoryHi: "बजट और व्यय",
      details: "Budgetary allocation and utilization summary (placeholder).",
      detailsHi: "बजटीय आवंटन और उपयोग सारांश (प्लेसहोल्डर)।",
      status: "Under Update",
      statusHi: "अद्यतनाधीन",
    },
  ],
};
