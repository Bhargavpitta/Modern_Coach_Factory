export interface VendorOverview {
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
}

export interface VendorForm {
  id: string;
  title: string;
  titleHi: string;
  fileRef: string;
}

export interface VendorNotice {
  id: string;
  text: string;
  textHi: string;
}

export interface VendorContactPoint {
  office: string;
  officeHi: string;
  officerPlaceholder: string;
  officerPlaceholderHi: string;
  phone: string;
  email: string;
}

export interface VendorData {
  overview: VendorOverview;
  guidelines: string[];
  guidelinesHi: string[];
  forms: VendorForm[];
  notices: VendorNotice[];
  contactPoint: VendorContactPoint;
}

export const vendorData: VendorData = {
  overview: {
    title: "Vendor Registration Overview",
    titleHi: "विक्रेता पंजीकरण अवलोकन",
    description:
      "Vendors interested in supplying materials, components, or services to Modern Coach Factory may register through the notified Indian Railways procurement process and relevant eligibility criteria.",
    descriptionHi:
      "आधुनिक कोच कारखाना को सामग्री, घटक या सेवाएं उपलब्ध कराने के इच्छुक विक्रेता अधिसूचित भारतीय रेल खरीद प्रक्रिया और पात्रता मानदंडों के अनुसार पंजीकरण कर सकते हैं।",
  },
  guidelines: [
    "Ensure registration details, GST/PAN, and statutory certificates are valid before submission.",
    "Follow technical specifications and approved quality standards specified in tender documents.",
    "Submit performance credentials and supply history for relevant product categories.",
    "Comply with inspection, delivery, and safety requirements issued by MCF/Indian Railways.",
  ],
  guidelinesHi: [
    "आवेदन से पहले पंजीकरण विवरण, जीएसटी/पैन और वैधानिक प्रमाणपत्रों की वैधता सुनिश्चित करें।",
    "निविदा दस्तावेजों में उल्लिखित तकनीकी विनिर्देश और अनुमोदित गुणवत्ता मानकों का पालन करें।",
    "संबंधित उत्पाद श्रेणियों के लिए प्रदर्शन प्रमाण-पत्र और आपूर्ति इतिहास प्रस्तुत करें।",
    "एमसीएफ/भारतीय रेल द्वारा जारी निरीक्षण, आपूर्ति और सुरक्षा आवश्यकताओं का अनुपालन करें।",
  ],
  forms: [
    {
      id: "f1",
      title: "Vendor Registration Form (Placeholder)",
      titleHi: "विक्रेता पंजीकरण प्रपत्र (प्लेसहोल्डर)",
      fileRef: "#",
    },
    {
      id: "f2",
      title: "Technical Capability Declaration (Placeholder)",
      titleHi: "तकनीकी क्षमता घोषणा (प्लेसहोल्डर)",
      fileRef: "#",
    },
    {
      id: "f3",
      title: "Quality Compliance Checklist (Placeholder)",
      titleHi: "गुणवत्ता अनुपालन चेकलिस्ट (प्लेसहोल्डर)",
      fileRef: "#",
    },
    {
      id: "f4",
      title: "Bank and Tax Details Annexure (Placeholder)",
      titleHi: "बैंक और कर विवरण परिशिष्ट (प्लेसहोल्डर)",
      fileRef: "#",
    },
  ],
  notices: [
    {
      id: "n1",
      text: "Vendors should track updates through official procurement portals and notice boards.",
      textHi: "विक्रेताओं को अद्यतनों के लिए आधिकारिक खरीद पोर्टल और सूचना पट्ट देखें।",
    },
    {
      id: "n2",
      text: "Incomplete applications may be treated as non-responsive during scrutiny.",
      textHi: "अपूर्ण आवेदनों को जांच के दौरान अमान्य माना जा सकता है।",
    },
    {
      id: "n3",
      text: "Submission timelines and corrigenda must be verified before final upload/submission.",
      textHi: "अंतिम जमा करने से पहले समय-सीमा और परिशिष्ट संशोधन अवश्य सत्यापित करें।",
    },
  ],
  contactPoint: {
    office: "Vendor Registration Cell, MCF Raebareli",
    officeHi: "विक्रेता पंजीकरण प्रकोष्ठ, एमसीएफ रायबरेली",
    officerPlaceholder: "Officer In-charge (Placeholder)",
    officerPlaceholderHi: "प्रभारी अधिकारी (प्लेसहोल्डर)",
    phone: "+91-535-2205060",
    email: "vendorcell@mcf.indianrailways.gov.in",
  },
};
