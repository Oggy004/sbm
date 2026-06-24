// SBM Contracting Company Website Data
import buildingConstImg from '../assets/bulding constraction work.jpeg';
import clientsImg from '../assets/clients.jpeg';
import fireFightingImg from '../assets/fire fighting work project.jpeg';
import fireFighting2Img from '../assets/fire fighting work project2.jpeg';
import workingSiteImg from '../assets/working site.jpeg';
import electricalWorkImg from '../assets/electrical work.jpeg';

export const workforceCategories = [
  {
    id: "construction",
    title: "Construction",
    description: "Vetted Indian civil and structural contracting teams deployed to major infrastructure developments globally.",
    icon: "HardHat",
    trades: [
      { name: "Builder", skills: ["Brickwork", "Concreting", "Plastering"], certs: ["OSHA 10", "Civil Construction Level 2"] },
      { name: "Mason", skills: ["Stone Masonry", "Tiling", "Finishing Work"], certs: ["Masonry Specialist Certification"] },
      { name: "Carpenter", skills: ["Formwork", "Framing", "Scaffolding"], certs: ["NCCER Carpentry Level 3"] },
      { name: "Steel Fixer", skills: ["Rebar Binding", "Bending Plans", "Structural Steel"], certs: ["Steel Fixing Standard Cert"] }
    ]
  },
  {
    id: "mechanical",
    title: "Mechanical",
    description: "Highly skilled technicians and welders from India for international plant installations and maintenance.",
    icon: "Wrench",
    trades: [
      { name: "Fitter", skills: ["Structural Fitting", "Blueprints", "Alignments"], certs: ["NCCER Fitter Certification"] },
      { name: "Fabricator", skills: ["Metal Fabrication", "Tack Welding", "Cutting Profiles"], certs: ["Structural Fabricator Cert"] },
      { name: "Welder", skills: ["TIG Welding", "MIG/ARC Welding", "Pipe Welding"], certs: ["ASME Section IX", "AWS Certified Welder"] },
      { name: "Pipe Fitter", skills: ["Isometrics", "Spool Fabrication", "Hydro Testing"], certs: ["API 570", "Pipefitting Level 4"] }
    ]
  },
  {
    id: "electrical",
    title: "Electrical",
    description: "Licensed Indian electricians and technicians deployed for overseas power grids and systems control.",
    icon: "Zap",
    trades: [
      { name: "Electrician", skills: ["Industrial Wiring", "Conduit Bending", "Panel Assembly"], certs: ["National Electrical License", "OSHA 30"] },
      { name: "Electrical Tech", skills: ["PLC Programming", "Calibration", "Troubleshooting"], certs: ["Automation Specialist Cert"] }
    ]
  },
  {
    id: "safety",
    title: "Safety",
    description: "Certified Indian HSE professionals dedicated to overseas project safety compliance.",
    icon: "ShieldAlert",
    trades: [
      { name: "Fire Fighter", skills: ["Fire Suppression", "Emergency Rescue", "Hazmat Response"], certs: ["NFPA Certified", "First Responder"] },
      { name: "Safety Officer", skills: ["HSE Audits", "Risk Assessment", "Toolbox Talks"], certs: ["NEBOSH IGC", "IOSH Managing Safely"] }
    ]
  }
];

export const industriesSupported = [
  {
    title: "Global Construction Projects",
    description: "Commercial structural works, concrete framing, and scaffolding for major international contractors.",
    image: buildingConstImg
  },
  {
    title: "International Infrastructure",
    description: "Mega-scale road networks, bridge building, subways, and airport terminals worldwide.",
    image: workingSiteImg
  },
  {
    title: "Overseas Manufacturing Plants",
    description: "Heavy assembly line setups, mechanical machinery alignments, and factory staffing.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Gulf & Global Oil & Gas Refineries",
    description: "Refinery shutdown crew, high-spec pipeline fabrication, and ASME certified pressure vessel welding.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Industrial Complexes",
    description: "Logistics facilities, desalination plants, power substations, and major factories globally.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Maintenance & Shutdowns",
    description: "Annual maintenance turnarounds, electrical upgrades, and HSE safety reviews for global plants.",
    image: fireFighting2Img
  }
];

export const whyChooseUs = [
  {
    title: "Verified Indian Talent",
    desc: "We screen, test, and vet candidates locally in India to match the international trade standards of global contractors."
  },
  {
    title: "End-to-End Mobilization",
    desc: "Our Noida-based team manages visas, emigrations (ECNR), flights, medical clearances, and deployment logistics."
  },
  {
    title: "Global Certifications",
    desc: "Every deployed tradesman holds recognized qualifications (ASME, AWS, OSHA, NEBOSH, etc.) for direct field work."
  },
  {
    title: "Compliant Placement",
    desc: "100% adherence to Ministry of External Affairs (India) labor laws and host country contracting regulations."
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "Industrial Wiring Setup",
    category: "electrical",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Heavy Structural Welding",
    category: "mechanical",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Commercial Concrete Pouring",
    category: "construction",
    image: buildingConstImg
  },
  {
    id: 4,
    title: "HSE Drill and Rescue",
    category: "safety",
    image: fireFightingImg
  },
  {
    id: 5,
    title: "Pipeline Fitting Operations",
    category: "mechanical",
    image: electricalWorkImg
  },
  {
    id: 6,
    title: "Foundation Formwork Setup",
    category: "construction",
    image: workingSiteImg
  },
  {
    id: 7,
    title: "Electrical Control Panel Install",
    category: "electrical",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "High-spec Pipe Welder in Action",
    category: "mechanical",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  }
];

export const companyHighlights = [
  { value: 500, label: "Overseas Deployments", suffix: "+" },
  { value: 50, label: "Projects Assisted", suffix: "+" },
  { value: 10, label: "Trades Placed", suffix: "+" },
  { value: 100, label: "Compliant Mobilization", suffix: "%" }
];

export const contactDetails = {
  phone: "+91 98765 43210",
  email: "info@sbmcontracting.com",
  whatsapp: "+91 98765 43210",
  officeHours: [
    { days: "Monday - Saturday", hours: "9:00 AM - 6:00 PM" },
    { days: "Sunday", hours: "Closed" }
  ],
  address: "SBM Plaza, Sector 62, Noida, Uttar Pradesh 201301"
};
