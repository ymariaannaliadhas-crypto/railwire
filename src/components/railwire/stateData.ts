import { STATES } from "./data";

export const toSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export type StatePlan = {
  speed: string;
  price: string;
  description?: string | undefined;
};

export type LocalPlanRow = {
  plan: string;
  price: string;
  speed: string;
  otts: string;
  data: string;
};

export type StateContent = {
  plans: StatePlan[];
  plansPdf?: string;
  localPlans?: LocalPlanRow[];
  office?: string[];
  msp?: { name: string; address: string[]; email?: string };
};

const plan = (mbps: number, price: number, description?: string): StatePlan => ({
  speed: `${mbps} Mbps`,
  price: String(price),
  description,
});

// Plans with a monthly data cap, then a reduced speed.
const capped = (mbps: number, price: number, gb: number, after: string) =>
  plan(
    mbps,
    price,
    `This plan offers ${mbps} Mbps speed upto ${gb} GB data usage ${after}. Terms and Conditions Apply. Taxes Extra.`,
  );

// Most states use this price list.
const STANDARD_PLANS = [plan(20, 599), plan(50, 799), plan(100, 999)];

const CHANDIGARH_OFFICE = [
  "RailTel Corporation of India Ltd.",
  "Microwave Complex, Railway Telephone Exchange,",
  "Railway Station, Chandigarh - 160102",
];

const ERNAKULAM_OFFICE = [
  "RailTel Territory Office",
  "RailTel Corporation of India Ltd.",
  "1st Floor, Eastern Entry Tower,",
  "Ernakulam Junction Railway Station,",
  "Ernakulam - 682016.",
];

const GUWAHATI_OFFICE = [
  "RailTel Territory Office",
  "3rd Floor, Ramanand Tower (Federal Bank Building,",
  "Opposite Hotel Nandan), G S Road, Paltan Bazaar,",
  "Guwahati - 781007, Assam.",
];

const LIGHTWAVE_MSP = {
  name: "Light Wave Technologies Pvt. Ltd.",
  address: ["Plot No: 2, Ashok Nagar,", "Behind Bata Showroom,", "Bhubaneswar, Odisha - 751009"],
  email: "supportdesk1@lightwaveindia.com",
};

const MULTILINK_MSP = {
  name: "Multilink Computers Pvt. Ltd.",
  address: ["405, 4th Floor, Eros Apartment,", "56 Nehru Place,", "New Delhi - 110019"],
  email: "multilinkindia@gmail.com",
};

const SRIT_ADDRESS = [
  "#113/1, ITPL Main Road,",
  "Kundalahalli,",
  "Bangalore - 560037, Karnataka, India",
];

const PK_ONLINE_ADDRESS = ["Plot No. 100, Near Garden Villas,", "Sector-43, Gurgaon - 122001"];

const PLANS_PDF = "/guides/Andhra Pradesh(AP).pdf";

// Keyed by slug (see toSlug). Slugs come from the STATES list in data.ts.
export const STATE_CONTENT: Record<string, StateContent> = {
  "andhra-pradesh": {
    plans: [plan(20, 449), plan(50, 599), plan(100, 999)],
    plansPdf: "https://www.railwire.co.in/plans/Andhra%20Pradesh%28AP%29.pdf",
    office: [
      "RailTel Southern Region Office:",
      "2nd Floor, B-Block, Rail Nilayam,",
      "Secunderabad - 500071.",
    ],
    msp: {
      name: "Cubefibernet Pvt. Ltd.",
      address: [
        "No.103, Sowbhagya Arcade",
        "D.No.6-3-345/2/A/5,",
        "Lane Between Puma & Woodlands,",
        "Road No.1, Banjara Hills, Hyderabad - 500034",
      ],
      email: "info@cubefibernet.com",
    },
  },

  assam: {
    plans: [
      capped(50, 809, 750, "and after that a speed of 2 Mbps"),
      capped(75, 999, 750, "and after that a speed of 2 Mbps"),
      capped(100, 1099, 750, "and after that a speed of 2 Mbps"),
    ],
    office: [
      "RailTel Territory Office:",
      "3rd Floor, Ramanand Tower (Federal Bank Building,",
      "Opposite Hotel Nandan), G S Road, Paltan Bazaar,",
      "Guwahati - 781007.",
    ],
    msp: {
      name: "Shaildhar Telecom Services Pvt. Ltd.",
      address: [
        "H.No-1, Sewali Path,",
        "Hengrabari Road,",
        "Near Dispur Poly Clinic,",
        "Guwahati, Assam - 781006",
      ],
      email: "info@shaildhar-india.com",
    },
  },

  bihar: {
    plans: STANDARD_PLANS,
    office: [
      "RailTel Territory Office:",
      "Telecom Hub, Near RRI Building,",
      "Karbigahiya End of Patna Junction,",
      "Patna, Bihar - 800001",
      "(AGM/Patna)",
      "Email: arbindk@railtelindia.com",
    ],
    msp: {
      name: "M/s Ace Microelectronics Pvt. Ltd.",
      address: [
        "212B, First Floor, Opposite Roll Mafia,",
        "Children's Park Rd,",
        "Sri Krishna Puri, Patna, Bihar - 800001",
      ],
      email: "bihar.railwiresupport@acemicro.in",
    },
  },

  chhattisgarh: {
    plans: STANDARD_PLANS,
    office: [
      "RailTel Corporation of India Limited",
      "Wireless Colony Microwave Building,",
      "Bilaspur - 495004, Chhattisgarh",
      "Email: railwire@digitalsolutions.co.in",
    ],
    msp: LIGHTWAVE_MSP,
  },

  delhi: {
    plans: STANDARD_PLANS,
    office: [
      "RailTel Corporation of India Ltd.",
      "6th Floor, IIIrd Block,",
      "Delhi Technology Park,",
      "Shastri Park, Delhi - 110053.",
    ],
    msp: {
      name: "Presto Infosolutions (P) Ltd",
      address: ["A-32, Mohan Cooperative Industrial Estate,", "Mathura Road, New Delhi - 110044"],
      email: "railwire-helpdesk@presto.co.in",
    },
  },

  gujarat: {
    plans: [plan(20, 699), plan(50, 799), plan(100, 999)],
    office: [
      "RailTel Corporation of India Ltd.",
      "15th Floor, GIFT Tower-1, Road-5, Zone-5C,",
      "GIFT City, Gandhinagar, Gujarat - 382355",
      "Email: railwire@digitalsolutions.co.in",
    ],
    msp: {
      name: "SRIT",
      address: [
        ...SRIT_ADDRESS,
        "Technical Support: gj.support@railwire.co.in",
        "Billing Support: gj.billing@railwire.co.in",
        "Sales Support & New Connections: gj.connect@railwire.co.in",
      ],
    },
  },

  haryana: {
    plans: STANDARD_PLANS,
    office: [...CHANDIGARH_OFFICE, "Email: railwire@digitalsolutions.co.in"],
    msp: {
      name: "P.K. Online Ventures Pvt. Ltd.",
      address: PK_ONLINE_ADDRESS,
      email: "support.haryana@pkonline.in",
    },
  },

  "himachal-pradesh": {
    plans: STANDARD_PLANS,
    office: CHANDIGARH_OFFICE,
    msp: MULTILINK_MSP,
  },

  "jammu-and-kashmir": {
    plans: STANDARD_PLANS,
    office: CHANDIGARH_OFFICE,
    msp: MULTILINK_MSP,
  },

  jharkhand: {
    plans: STANDARD_PLANS,
    office: [
      "RailTel Territory Office",
      "Railway Court Premises,",
      "Opposite Ranchi Railway Station, P.O. Chutia,",
      "Ranchi, Jharkhand - 834001.",
    ],
    msp: {
      name: "M/s Light Wave Technologies Private Limited",
      address: [
        "Plot No 1745, 1st Floor, Ashok Nagar Argora Road,",
        "Behind Dawai Dost, Opposite Ashok Nagar,",
        "Gate No 5, Ranchi, Jharkhand - 834002.",
      ],
      email: "msp.jh@lightwaveindia.com",
    },
  },

  karnataka: {
    plans: STANDARD_PLANS,
    office: [
      "RailTel Territory Office:",
      "6/1, 12th Main, Vasanth Nagar,",
      "Opp. Mount Carmel College Gate 1 Road,",
      "Bangalore - 560052.",
      "Email: railwire@digitalsolutions.co.in",
    ],
    msp: LIGHTWAVE_MSP,
  },

  kerala: {
    plans: [
      capped(60, 499, 4000, "and thereafter speeds upto 2 Mbps"),
      capped(100, 699, 4000, "and thereafter speeds upto 2 Mbps"),
      capped(200, 999, 4000, "and thereafter speeds upto 2 Mbps"),
    ],
    office: ERNAKULAM_OFFICE,
    msp: { name: "SRIT", address: SRIT_ADDRESS, email: "support.kl@railwire.co.in" },
  },

  lakshadweep: {
    plans: [plan(20, 699), plan(50, 799), plan(100, 999)],
    office: [...ERNAKULAM_OFFICE, "Email: railwire@digitalsolutions.co.in"],
    msp: { name: "SRIT", address: SRIT_ADDRESS, email: "support.kl@railwire.co.in" },
  },

  "madhya-pradesh": {
    plans: STANDARD_PLANS,
    office: [
      "RailTel Corporation of India Ltd.",
      "Plot No. 17, 1st Floor, Near Shahpura Thana,",
      "E-8 Extension, Raghunath Nagar,",
      "Bhopal - 462039, Madhya Pradesh.",
      "Email: railwire@digitalsolutions.co.in",
    ],
    msp: {
      name: "Netlink Software Pvt. Ltd.",
      address: ["3rd Floor, Center Point,", "New Market, Bhopal, MP - 462003"],
      email: "rtharwani@netlink.com",
    },
  },

  "maharashtra-and-goa": {
    plans: STANDARD_PLANS,
    office: [
      "RailTel Corporation of India Ltd.",
      "Western Railway Microwave Complex,",
      "Senapati Bapat Marg, Mahalakshmi,",
      "Mumbai - 400013.",
    ],
    msp: {
      name: "SRIT",
      address: [
        ...SRIT_ADDRESS,
        "Technical Support: mh.support@railwire.co.in",
        "Billing Support: mh.billing@railwire.co.in",
        "Sales Support & New Connections: mh.connect@railwire.co.in",
      ],
    },
  },

  "mizoram-meghalaya-and-tripura": {
    plans: STANDARD_PLANS,
    office: GUWAHATI_OFFICE,
    msp: {
      name: "RICT India Private Ltd.",
      address: [
        "#113/1, ITPL Main Road,",
        "Kundalahalli, Bangalore - 560037, Karnataka, India",
        "Meghalaya: support.ml@railwire.co.in",
        "Mizoram: support.mz@railwire.co.in",
        "Tripura: support.tr@railwire.co.in",
      ],
    },
  },

  "manipur-nagaland-and-arunachal-pradesh": {
    plans: STANDARD_PLANS,
    office: GUWAHATI_OFFICE,
    msp: {
      name: "RICT India Private Ltd.",
      address: [
        "Singjamei Mathak, Chongtham Leikai,",
        "Imphal West - 795001, Manipur.",
        "Manipur: support.mn@railwire.co.in",
        "Nagaland: support.nl@railwire.co.in",
        "Arunachal Pradesh: support.ar@railwire.co.in",
      ],
    },
  },

  odisha: {
    plans: [plan(20, 199), plan(100, 699), plan(175, 999)],
    office: [
      "RailTel Territory Office:",
      "1st Floor, Annex Building, B Block, RailVihar,",
      "Chandrashekharpur,",
      "Bhubaneswar - 751023.",
    ],
    msp: LIGHTWAVE_MSP,
  },

  punjab: {
    plans: STANDARD_PLANS,
    office: [...CHANDIGARH_OFFICE, "Email: railwire@digitalsolutions.co.in"],
    msp: {
      name: "Digital Info Solutions Private Limited",
      address: ["106, Siddhartha Chambers,", "Hauz Khas,", "New Delhi - 110016"],
    },
  },

  rajasthan: {
    plans: [plan(20, 199), plan(100, 699), plan(175, 999)],
    office: [
      "RailTel Corporation of India Ltd.",
      "Microwave Tower Complex,",
      "Railway Colony, Ganpati Nagar,",
      "Jaipur - 302006.",
    ],
    msp: {
      name: "Ace Microelectronics Pvt. Ltd.",
      address: ["F-32-33, Boranada Industrial Park,", "Jodhpur, Rajasthan - 342012"],
      email: "railwiresupport.rjmsp@acemicro.in",
    },
  },

  "tamil-nadu": {
    plans: STANDARD_PLANS,
    office: [
      "RailTel Territory Office:",
      "4th Floor, Chief Administrative Office Block CAO/CN/MS,",
      "E.V.R. Periyar Salai,",
      "Chennai - 600008.",
    ],
    msp: { name: "SRIT", address: SRIT_ADDRESS, email: "babu@railwire.co.in" },
  },

  // telangana: { plans: [...], office: [...], msp: {...} },  // reference page could not be read

  "up-east": {
    plans: [plan(20, 799), plan(50, 849), plan(100, 999)],
    office: [
      "RailTel Corporation of India Ltd.",
      "Railtel Exchange Building,",
      "1st Floor, DRM Office, NE Railway,",
      "Ashok Marg, Hazratganj,",
      "Lucknow - 226001",
    ],
    msp: {
      name: "P.K. Online Ventures Pvt. Ltd.",
      address: PK_ONLINE_ADDRESS,
      email: "support.upeastrailwire@pkonline.in",
    },
  },

  "up-west": {
    plans: [plan(20, 799), plan(50, 849), plan(100, 999)],
    office: [
      "RailTel Corporation of India Ltd.",
      "6th Floor, 3rd Block,",
      "Delhi Technology Park, Shastri Park,",
      "Delhi - 110053.",
    ],
    msp: {
      name: "P.K. Online Ventures Pvt. Ltd.",
      address: PK_ONLINE_ADDRESS,
      email: "support.upwest@pkonline.in",
    },
  },

  "west-bengal": {
    plans: STANDARD_PLANS,
    office: [
      "RailTel Territory Office:",
      "3rd Floor, Chatterjee International Center,",
      "33A, Jawaharlal Nehru Road,",
      "Kolkata - 700071.",
    ],
    msp: {
      name: "Ace Microelectronics Pvt. Ltd.",
      address: [
        "121, 11th Floor, Godrej Genesis,",
        "Sector 5, Salt Lake City, Kolkata,",
        "West Bengal - 700091.",
      ],
      email: "wbmsp.railwiresupport@acemicro.in",
    },
  },
};

export function getStateInfo(slug: string) {
  const name = STATES.find((s) => toSlug(s) === slug);
  if (!name) return null;
  const content = STATE_CONTENT[slug] ?? { plans: [] };
  return { name, content: { ...content, plansPdf: PLANS_PDF } };
}
