export interface ContactAddress {
  line1: string;
  line1Hi: string;
  line2: string;
  line2Hi: string;
  city: string;
  cityHi: string;
  state: string;
  stateHi: string;
  pinCode: string;
  phone: string;
  email: string;
}

export interface ReachInfo {
  railwayStation: string;
  railwayStationHi: string;
  airport: string;
  airportHi: string;
  roadAccess: string;
  roadAccessHi: string;
}

export interface DepartmentContact {
  id: string;
  department: string;
  departmentHi: string;
  officerPlaceholder: string;
  officerPlaceholderHi: string;
  phone: string;
  email: string;
}

export interface MapPlaceholder {
  title: string;
  titleHi: string;
  note: string;
  noteHi: string;
}

export interface ContactData {
  address: ContactAddress;
  howToReach: ReachInfo;
  departmentContacts: DepartmentContact[];
  mapPlaceholder: MapPlaceholder;
}

export const contactData: ContactData = {
  address: {
    line1: "Modern Coach Factory",
    line1Hi: "आधुनिक कोच कारखाना",
    line2: "Lalganj, Raebareli",
    line2Hi: "लालगंज, रायबरेली",
    city: "Raebareli",
    cityHi: "रायबरेली",
    state: "Uttar Pradesh",
    stateHi: "उत्तर प्रदेश",
    pinCode: "229206",
    phone: "+91-535-2205000",
    email: "mcf@indianrailways.gov.in",
  },
  howToReach: {
    railwayStation: "Nearest major railhead: Rae Bareli Junction; local access is available from Lalganj station.",
    railwayStationHi: "निकटतम प्रमुख रेल स्टेशन: रायबरेली जंक्शन; स्थानीय पहुंच लालगंज स्टेशन से उपलब्ध है।",
    airport: "Nearest airport connectivity is via Lucknow (Chaudhary Charan Singh International Airport).",
    airportHi: "निकटतम हवाई संपर्क लखनऊ (चौधरी चरण सिंह अंतरराष्ट्रीय हवाई अड्डा) से उपलब्ध है।",
    roadAccess: "Factory is connected through state highways linking Rae Bareli, Lucknow, and surrounding districts.",
    roadAccessHi: "कारखाना रायबरेली, लखनऊ और आसपास के जिलों को जोड़ने वाले राज्य राजमार्गों से जुड़ा है।",
  },
  departmentContacts: [
    {
      id: "mech",
      department: "Mechanical Engineering",
      departmentHi: "मैकेनिकल इंजीनियरिंग",
      officerPlaceholder: "Officer In-charge (Placeholder)",
      officerPlaceholderHi: "प्रभारी अधिकारी (प्लेसहोल्डर)",
      phone: "+91-535-2205010",
      email: "mech@mcf.indianrailways.gov.in",
    },
    {
      id: "elec",
      department: "Electrical Engineering",
      departmentHi: "इलेक्ट्रिकल इंजीनियरिंग",
      officerPlaceholder: "Officer In-charge (Placeholder)",
      officerPlaceholderHi: "प्रभारी अधिकारी (प्लेसहोल्डर)",
      phone: "+91-535-2205020",
      email: "elec@mcf.indianrailways.gov.in",
    },
    {
      id: "admin",
      department: "Administration",
      departmentHi: "प्रशासन",
      officerPlaceholder: "Officer In-charge (Placeholder)",
      officerPlaceholderHi: "प्रभारी अधिकारी (प्लेसहोल्डर)",
      phone: "+91-535-2205030",
      email: "admin@mcf.indianrailways.gov.in",
    },
    {
      id: "finance",
      department: "Finance & Accounts",
      departmentHi: "वित्त एवं लेखा",
      officerPlaceholder: "Officer In-charge (Placeholder)",
      officerPlaceholderHi: "प्रभारी अधिकारी (प्लेसहोल्डर)",
      phone: "+91-535-2205040",
      email: "finance@mcf.indianrailways.gov.in",
    },
    {
      id: "hr",
      department: "Personnel & HR",
      departmentHi: "कार्मिक एवं मानव संसाधन",
      officerPlaceholder: "Officer In-charge (Placeholder)",
      officerPlaceholderHi: "प्रभारी अधिकारी (प्लेसहोल्डर)",
      phone: "+91-535-2205050",
      email: "hr@mcf.indianrailways.gov.in",
    },
  ],
  mapPlaceholder: {
    title: "MCF Location Map",
    titleHi: "एमसीएफ लोकेशन मैप",
    note: "Map integration placeholder for official location embed.",
    noteHi: "आधिकारिक लोकेशन एम्बेड हेतु मैप एकीकरण प्लेसहोल्डर।",
  },
};
