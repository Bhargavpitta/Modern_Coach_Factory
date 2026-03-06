export interface HRModule {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  icon: string;
  link: string;
}

export interface InternalPortal {
  id: string;
  name: string;
  nameHi: string;
  note: string;
  noteHi: string;
  link: string;
}

export interface EmployeeCircular {
  id: string;
  date: string;
  title: string;
  titleHi: string;
  referenceNo: string;
  link: string;
}

export interface WelfareItem {
  id: string;
  title: string;
  titleHi: string;
  summary: string;
  summaryHi: string;
}

export interface EmployeeData {
  hrModules: HRModule[];
  internalPortals: InternalPortal[];
  circulars: EmployeeCircular[];
  welfareBenefits: WelfareItem[];
}

export const employeeData: EmployeeData = {
  hrModules: [
    {
      id: "leave",
      title: "Leave & Attendance",
      titleHi: "अवकाश एवं उपस्थिति",
      description: "Apply leave, view attendance logs, and approval status.",
      descriptionHi: "अवकाश आवेदन, उपस्थिति विवरण और अनुमोदन स्थिति देखें।",
      icon: "Briefcase",
      link: "#",
    },
    {
      id: "payroll",
      title: "Payroll & Allowances",
      titleHi: "वेतन एवं भत्ते",
      description: "Monthly pay slip access and allowance details.",
      descriptionHi: "मासिक वेतन पर्ची और भत्ता विवरण उपलब्ध।",
      icon: "Banknote",
      link: "#",
    },
    {
      id: "training",
      title: "Training Modules",
      titleHi: "प्रशिक्षण मॉड्यूल",
      description: "Department training schedules and completion records.",
      descriptionHi: "विभागीय प्रशिक्षण कार्यक्रम और पूर्णता अभिलेख।",
      icon: "GraduationCap",
      link: "#",
    },
    {
      id: "service-record",
      title: "Service Records",
      titleHi: "सेवा अभिलेख",
      description: "Profile, postings, increments, and service history.",
      descriptionHi: "प्रोफाइल, पदस्थापन, वेतनवृद्धि और सेवा इतिहास।",
      icon: "Clock",
      link: "#",
    },
    {
      id: "pension",
      title: "Pension & Retirement",
      titleHi: "पेंशन एवं सेवानिवृत्ति",
      description: "Retirement cases, pension forms, and tracking updates.",
      descriptionHi: "सेवानिवृत्ति प्रकरण, पेंशन प्रपत्र और स्थिति अद्यतन।",
      icon: "Shield",
      link: "#",
    },
    {
      id: "transfers",
      title: "Transfer & Posting",
      titleHi: "स्थानांतरण एवं पदस्थापन",
      description: "Internal transfer requests and posting orders.",
      descriptionHi: "आंतरिक स्थानांतरण अनुरोध और पदस्थापन आदेश।",
      icon: "UserCheck",
      link: "#",
    },
  ],
  internalPortals: [
    {
      id: "eoffice",
      name: "e-Office (Placeholder)",
      nameHi: "ई-ऑफिस (प्लेसहोल्डर)",
      note: "Digital file movement and official correspondence.",
      noteHi: "डिजिटल फाइल संचलन और आधिकारिक पत्राचार।",
      link: "#",
    },
    {
      id: "ims",
      name: "Internal Messaging Portal (Placeholder)",
      nameHi: "आंतरिक संदेश पोर्टल (प्लेसहोल्डर)",
      note: "Inter-department communication and notices.",
      noteHi: "अंतर-विभागीय संचार और सूचनाएं।",
      link: "#",
    },
    {
      id: "knowledge",
      name: "Knowledge Repository (Placeholder)",
      nameHi: "नॉलेज रिपॉजिटरी (प्लेसहोल्डर)",
      note: "Manuals, SOPs, and departmental references.",
      noteHi: "मैनुअल, एसओपी और विभागीय संदर्भ सामग्री।",
      link: "#",
    },
  ],
  circulars: [
    {
      id: "c1",
      date: "2026-02-15",
      title: "Circular on revised biometric attendance timing (Placeholder)",
      titleHi: "संशोधित बायोमेट्रिक उपस्थिति समय पर परिपत्र (प्लेसहोल्डर)",
      referenceNo: "MCF/PERS/CIRC/2026/12",
      link: "#",
    },
    {
      id: "c2",
      date: "2026-01-30",
      title: "Holiday duty roster guidelines for workshops (Placeholder)",
      titleHi: "वर्कशॉप हेतु अवकाश ड्यूटी रोस्टर दिशा-निर्देश (प्लेसहोल्डर)",
      referenceNo: "MCF/ADMIN/CIRC/2026/07",
      link: "#",
    },
    {
      id: "c3",
      date: "2025-12-22",
      title: "Employee welfare camp schedule (Placeholder)",
      titleHi: "कर्मचारी कल्याण शिविर समय-सारणी (प्लेसहोल्डर)",
      referenceNo: "MCF/HR/CIRC/2025/41",
      link: "#",
    },
  ],
  welfareBenefits: [
    {
      id: "w1",
      title: "Medical & Health Support",
      titleHi: "चिकित्सा एवं स्वास्थ्य सहायता",
      summary: "Health check-up drives, medical claim guidance, and emergency support channels.",
      summaryHi: "स्वास्थ्य जांच शिविर, चिकित्सा दावा मार्गदर्शन और आपात सहायता चैनल।",
    },
    {
      id: "w2",
      title: "Staff Welfare Activities",
      titleHi: "कर्मचारी कल्याण गतिविधियां",
      summary: "Sports, cultural events, and engagement initiatives for employees and families.",
      summaryHi: "कर्मचारियों और परिवारों हेतु खेल, सांस्कृतिक एवं सहभागिता गतिविधियां।",
    },
    {
      id: "w3",
      title: "Counselling & Support",
      titleHi: "परामर्श एवं सहायता",
      summary: "Guidance support for service matters, grievances, and welfare facilitation.",
      summaryHi: "सेवा विषयक मामलों, शिकायतों और कल्याण सहायता के लिए परामर्श सुविधा।",
    },
  ],
};
