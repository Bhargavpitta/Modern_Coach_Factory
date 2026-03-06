export type DepartmentCategory = "technical" | "administrative" | "finance" | "hr";

export interface Department {
  id: string;
  slug: string;
  name: string;
  nameHi: string;
  description: string;
  descriptionHi: string;
  category: DepartmentCategory;
  categoryLabel: string;
  categoryLabelHi: string;
  icon: string;
  detailsPath: string;
}

export const departmentsData: Department[] = [
  {
    id: "mech",
    slug: "mechanical",
    name: "Mechanical Engineering",
    nameHi: "मैकेनिकल इंजीनियरिंग",
    description: "Handles shell fabrication, bogie integration, fitment standards, and final mechanical readiness.",
    descriptionHi: "शेल फैब्रिकेशन, बोगी एकीकरण, फिटमेंट मानक और अंतिम मैकेनिकल तैयारी का दायित्व।",
    category: "technical",
    categoryLabel: "Technical",
    categoryLabelHi: "तकनीकी",
    icon: "Wrench",
    detailsPath: "#",
  },
  {
    id: "elec",
    slug: "electrical",
    name: "Electrical Engineering",
    nameHi: "इलेक्ट्रिकल इंजीनियरिंग",
    description: "Manages coach wiring, control circuits, lighting systems, and electrical testing compliance.",
    descriptionHi: "कोच वायरिंग, कंट्रोल सर्किट, प्रकाश व्यवस्था और इलेक्ट्रिकल परीक्षण अनुपालन का प्रबंधन।",
    category: "technical",
    categoryLabel: "Technical",
    categoryLabelHi: "तकनीकी",
    icon: "Zap",
    detailsPath: "#",
  },
  {
    id: "qa",
    slug: "quality-assurance",
    name: "Quality Assurance",
    nameHi: "गुणवत्ता आश्वासन",
    description: "Performs stage inspections, quality audits, and documentation for process and product conformity.",
    descriptionHi: "प्रक्रिया और उत्पाद अनुरूपता हेतु चरणबद्ध निरीक्षण, गुणवत्ता ऑडिट और दस्तावेजीकरण।",
    category: "technical",
    categoryLabel: "Technical",
    categoryLabelHi: "तकनीकी",
    icon: "ShieldCheck",
    detailsPath: "#",
  },
  {
    id: "planning",
    slug: "planning-and-design",
    name: "Planning & Design",
    nameHi: "योजना एवं डिजाइन",
    description: "Coordinates production programs, layout planning, and engineering changes across workshops.",
    descriptionHi: "वर्कशॉप्स में उत्पादन कार्यक्रम, लेआउट योजना और इंजीनियरिंग परिवर्तन का समन्वय।",
    category: "administrative",
    categoryLabel: "Administrative",
    categoryLabelHi: "प्रशासनिक",
    icon: "PenTool",
    detailsPath: "#",
  },
  {
    id: "stores",
    slug: "stores-and-procurement",
    name: "Stores & Procurement",
    nameHi: "स्टोर्स एवं क्रय",
    description: "Oversees procurement planning, inventory controls, and material flow for manufacturing lines.",
    descriptionHi: "विनिर्माण लाइनों हेतु क्रय योजना, इन्वेंटरी नियंत्रण और सामग्री प्रवाह का संचालन।",
    category: "administrative",
    categoryLabel: "Administrative",
    categoryLabelHi: "प्रशासनिक",
    icon: "Package",
    detailsPath: "#",
  },
  {
    id: "it",
    slug: "information-technology",
    name: "Information Technology",
    nameHi: "सूचना प्रौद्योगिकी",
    description: "Supports plant IT infrastructure, network operations, and digital system enablement.",
    descriptionHi: "प्लांट आईटी इंफ्रास्ट्रक्चर, नेटवर्क संचालन और डिजिटल सिस्टम सक्षमकरण में सहयोग।",
    category: "administrative",
    categoryLabel: "Administrative",
    categoryLabelHi: "प्रशासनिक",
    icon: "Monitor",
    detailsPath: "#",
  },
  {
    id: "accounts",
    slug: "accounts-and-finance",
    name: "Accounts & Finance",
    nameHi: "लेखा एवं वित्त",
    description: "Handles budgeting, expenditure control, bill processing, and statutory financial reporting.",
    descriptionHi: "बजट, व्यय नियंत्रण, बिल प्रसंस्करण और वैधानिक वित्तीय रिपोर्टिंग का दायित्व।",
    category: "finance",
    categoryLabel: "Finance",
    categoryLabelHi: "वित्त",
    icon: "Calculator",
    detailsPath: "#",
  },
  {
    id: "personnel",
    slug: "personnel-and-hr",
    name: "Personnel & Human Resources",
    nameHi: "कार्मिक एवं मानव संसाधन",
    description: "Manages staffing, service records, training calendars, welfare initiatives, and employee policy support.",
    descriptionHi: "मानवबल, सेवा अभिलेख, प्रशिक्षण कार्यक्रम, कल्याण गतिविधियों और कार्मिक नीतियों का प्रबंधन।",
    category: "hr",
    categoryLabel: "HR",
    categoryLabelHi: "मानव संसाधन",
    icon: "Users",
    detailsPath: "#",
  },
];
