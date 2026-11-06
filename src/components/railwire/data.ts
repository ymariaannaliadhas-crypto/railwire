import { img } from "./assets";

export const LINKS = {
  newConnection: "https://crm.railwire.co.in/Portalcntl/rlwr_apply_online_customer",
  partner: "https://crm.railwire.co.in/Portalcntl/rlwr_apply_online_partner",
  agnp: "https://railwire.co.in/partner.php",
};

export type Plan = { price: string; name: string; sub?: string; features: string[]; img: string };

const P1 = img("2026/07/RW-Pack-1-e1783926580936.jpg");
const P2 = img("2026/07/RW-Pack-2-7-e1783929477187.jpg");
const UM = img("2026/03/ott-plan-1.jpg");
const TA = img("2026/03/tarang-ott.jpg");
const SA = img("2026/03/SAtrang-ott.jpg");
const P9 = img("2026/07/RW-Pack-89.jpg");

export const PLAN_TABS: { label: string; plans: Plan[] }[] = [
  {
    label: "30 MBPS",
    plans: [
      {
        price: "₹299",
        name: "RW Pack-1",
        sub: "(Starter Plan)",
        features: ["30 Mbps", "15 OTTs", "444+ Channels", "1.5 TB"],
        img: P1,
      },
      {
        price: "₹449",
        name: "RW Pack-2",
        sub: "(Hindi Lite Play)",
        features: ["30 Mbps", "18 OTTs", "497+ Channels", "2 TB"],
        img: P2,
      },
    ],
  },
  {
    label: "50 MBPS",
    plans: [
      {
        price: "₹599",
        name: "UMANG-50-T1 (FHA)",
        features: ["50 Mbps", "16 OTTs", "2.5 TB"],
        img: UM,
      },
      {
        price: "₹599",
        name: "TARANG-50-T1 (FHA)",
        features: ["50 Mbps", "16 OTTs", "2.5 TB"],
        img: TA,
      },
      {
        price: "₹449",
        name: "RW Magic Pack-3",
        sub: "(Hindi Lite Play)",
        features: ["50 Mbps", "18 OTTs", "444 + 53 Paid Channels", "1.5 TB"],
        img: P2,
      },
      {
        price: "₹599",
        name: "RW Pack-4",
        sub: "(Hindi Lite Play HD)",
        features: ["50 Mbps", "18 OTTs", "444 + 58HD Paid Channels", "2 TB"],
        img: P2,
      },
    ],
  },
  {
    label: "100 MBPS",
    plans: [
      {
        price: "₹899",
        name: "UMANG-100-T1 (FHA)",
        features: ["100 Mbps", "16 OTTs", "3 TB"],
        img: UM,
      },
      {
        price: "₹799",
        name: "TARANG-100-T1 (FHA)",
        features: ["100 Mbps", "16 OTTs", "3 TB"],
        img: TA,
      },
      {
        price: "₹699",
        name: "RW Pack-6 (Hindi Lite Play)",
        features: ["100 Mbps", "18 OTTs", "444 + 53 Paid TV Channels", "2 TB"],
        img: P2,
      },
      {
        price: "₹799",
        name: "RW Pack-7 (Hindi Lite Play HD)",
        features: ["100 Mbps", "18 OTTs", "444 + 58HD Paid TV Channels", "2.5 TB"],
        img: P2,
      },
      {
        price: "₹849",
        name: "RW Pack-8 (Hindi Popular Mix HD)",
        features: ["100 Mbps", "18 OTTs", "444 + 69HD Paid TV Channels", "2.5 TB"],
        img: P2,
      },
    ],
  },
  {
    label: "125 MBPS",
    plans: [
      {
        price: "₹899",
        name: "UMANG-125-T1 (FHA)",
        features: ["125 Mbps", "16 OTTs", "3 TB"],
        img: UM,
      },
      {
        price: "₹899",
        name: "TARANG-125-T1 (FHA)",
        features: ["125 Mbps", "16 OTTs", "3 TB"],
        img: TA,
      },
    ],
  },
  {
    label: "150 MBPS",
    plans: [
      {
        price: "₹1099",
        name: "UMANG-150-T1 (FHA)",
        features: ["150 Mbps", "16 OTTs", "3.3 TB"],
        img: UM,
      },
      {
        price: "₹1099",
        name: "TARANG-150-T1 (FHA)",
        features: ["150 Mbps", "16 OTTs", "3.3 TB"],
        img: TA,
      },
      {
        price: "₹1,199",
        name: "RW Pack-9 (Hindi Super Pack)",
        features: ["150 Mbps", "20 OTT + Amazon Prime", "444 + 99HD Paid TV Channels", "4 TB"],
        img: P9,
      },
    ],
  },
  {
    label: "Satrang Super Pack",
    plans: [
      {
        price: "₹1199",
        name: "SATRANG SUPER PACK",
        sub: "(Bundled with OTTs)",
        features: ["200 Mbps", "22 OTTs", "3.3 TB"],
        img: SA,
      },
      {
        price: "₹1299",
        name: "SATRANG SUPER PACK",
        sub: "(Bundled with OTTs)",
        features: ["250 Mbps", "22 OTTs", "3.5 TB"],
        img: SA,
      },
      {
        price: "₹1399",
        name: "SATRANG SUPER PACK",
        sub: "(Bundled with OTTs)",
        features: ["300 Mbps", "22 OTTs", "3.5 TB"],
        img: SA,
      },
    ],
  },
  {
    label: "200 MBPS",
    plans: [
      {
        price: "₹1,299",
        name: "RW Pack-10 (Hindi Super Pack)",
        features: ["200 Mbps", "20 OTT + Amazon Prime", "444 + 99HD Paid TV Channels", "4 TB"],
        img: P9,
      },
    ],
  },
];

export const STATES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu & Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra & Goa",
  "Mizoram, Meghalaya & Tripura",
  "Manipur, Nagaland & Arunachal Pradesh",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "UP East",
  "UP West",
  "West Bengal",
];

export const TESTIMONIALS = [
  {
    q: "RailWire provides excellent internet speed and stable connectivity for my work-from-home needs. Video calls and streaming work smoothly without interruptions.",
    n: "Arun Kumar, Chennai",
    r: "Customer",
    img: img("2026/05/12953-e1778670959940.jpg"),
  },
  {
    q: "The broadband speed is consistent even during peak hours. Gaming, streaming, and downloads are much better compared to my previous provider.",
    n: "Karthik M., Bengaluru",
    r: "Customer",
    img: img("2026/05/2149915895-e1778691548117.jpg"),
  },
  {
    q: "Customer support was responsive and the new connection process was very easy. Highly recommended for families and students",
    n: "Lavanya P., Haryana",
    r: "Customer",
    img: img("2026/05/14476-e1778691489348.jpg"),
  },
  {
    q: "RailWire offers reliable high-speed internet with excellent uptime. Perfect for smart TVs, online meetings, and daily browsing.",
    n: "Bhanu R., Hyderabad",
    r: "Customer",
    img: img("2026/05/2149461756-e1778691355996.jpg"),
  },
  {
    q: "RailWire has completely changed our internet experience at home. The speed is consistent, and we no longer face interruptions during online classes or streaming.",
    n: "Priya S., Chennai",
    r: "Home User",
    img: img("2026/03/review-1-e1774512557958.jpg"),
  },
  {
    q: "As a business owner, reliable internet is critical. RailWire provides stable connectivity that helps us run our operations smoothly every day.",
    n: "Sathish V., Bangalore",
    r: "Small Business Owner",
    img: img("2026/03/review-2-e1774512756971.jpg"),
  },
  {
    q: "Partnering with RailWire has helped me grow my business significantly. The support, training, and resources provided are excellent.",
    n: "Ramesh Kumar, Mumbai",
    r: "Partner (ANP)",
    img: img("2026/03/review-3-e1774512974456.jpg"),
  },
];

export const FAQS = [
  {
    q: "How can I get a new RailWire connection?",
    a: "You can apply for a new connection through our website or contact your nearest local partner. Our team will assist you with quick installation and activation based on your location.",
  },
  {
    q: "What documents are required for installation?",
    a: "To get a new connection, you need a valid ID proof (such as Aadhar card), a passport-size photograph, and an active mobile number for registration.",
  },
  {
    q: "Are there any installation charges?",
    a: "Yes, installation charges may apply depending on your location and plan. Our team will inform you about the exact cost before proceeding.",
  },
  {
    q: "Is the internet plan unlimited?",
    a: "Yes, RailWire offers unlimited broadband plans. However, speeds may be adjusted as per Fair Usage Policy (FUP) after a certain limit.",
  },
];

export const BLOGS = [
  {
    d: "MAR, 19",
    t: "RailWire Expands High-Speed Connectivity Across Rural India",
    c: "1 Comment",
    img: img("2026/03/fast-internet-e1774507469167-315x255.jpg"),
    href: "/railwire-expands-rural-india",
  },
  {
    d: "AUG, 11",
    t: "How a Local Partner Transformed Connectivity in Their Region",
    c: "2 Comments",
    img: img("2024/08/connecting-regions-315x255.jpg"),
    href: "/how-a-local-partner-transformed-connectivity",
  },
  {
    d: "AUG, 11",
    t: "Why Fiber Broadband is the Future of Internet Connectivity",
    c: "2 Comments",
    img: img("2024/08/fiber-internet-315x255.jpg"),
    href: "/why-fiber-broadband-is-the-future",
  },
  {
    d: "AUG, 11",
    t: "Become a RailWire Partner and Grow Your Business",
    c: "2 Comments",
    img: img("2024/08/become-partner-2-315x255.jpg"),
    href: "https://railwire.infocuz.in/2024/08/11/the-best-usage-of-the-fiber-internet-from-broadband/",
  },
  {
    d: "MAY, 13",
    t: "Guide for wifi Setup – Wi-Fi connection is simple and quick",
    c: "",
    img: img("2026/03/hispeed-internet-e1774507817280-315x255.jpg"),
    href: "/guide-for-wifi-setup",
  },
  {
    d: "MAR, 26",
    t: "The Rise of Digital India and the Need for Better Connectivity",
    c: "",
    img: img("rise.jpg"),
    href: "/rise-of-digital-india",
  },
];
