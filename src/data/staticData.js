// ── Magestar static data — sourced from company profile PDF ──

export const services = [
  {
    title: "HVAC & Cooling Services",
    slug: "hvac-cooling",
    subTitle: "Design, installation and long-term maintenance",
    description:
      "We deliver efficient, innovative, and tailored HVAC solutions — from design and installation through to long-term maintenance — across residential, commercial, and industrial projects. Our engineering teams combine deep expertise with up-to-date knowledge to implement all types of HVAC systems.",
    exampleTitle: "What We Offer",
    examples: [
      "Air Conditioning & Cooling Projects for residential, commercial and industrial buildings",
      "Ductwork Air Distribution Systems designed to SMACNA specifications",
      "Preventive, routine, and emergency HVAC maintenance services",
      "Certified and original spare parts for all AC unit types",
    ],
    image: "/images/services/hvac.jpeg",
  },
  {
    title: "Mining Solutions & Sourcing",
    slug: "mining-solutions",
    subTitle: "Equipment, consumables and site safety for mining operations",
    description:
      "We specialize in global sourcing of mining equipment, parts, consumables, mineral processing, and exploration projects throughout Tanzania. Our technical staff have in-depth knowledge in the mining industry and global networks that allow us to quickly identify what you need.",
    exampleTitle: "Mining Capabilities",
    examples: [
      "Gold prospecting — metal detectors, sluice accessories, mineral spectrometers, FTIRs",
      "Machinery parts & maintenance — dredge pumps, rock crushers, trenchers, oilfilters",
      "Site safety — Ametek gas detectors, PPEs, lifters, hoists, ventilation curtains",
      "Consumables — drill rods, grinding balls, hydraulic hoses, core trays, mesh",
    ],
    image: "/images/services/mining.jpeg",
  },
  {
    title: "Procurement & Supply",
    slug: "procurement-supply",
    subTitle: "Global sourcing of parts, equipment and consumables",
    description:
      "We acknowledge sourcing and procurement as an indispensable level for maintaining operation continuity. We source globally and deliver genuine, quality parts — on time and within budget — to mining, construction, and industrial clients across Tanzania and beyond.",
    exampleTitle: "Supply Capabilities",
    examples: [
      "Bearings, centrifugal pumps, vertical multistage pumps, trailing cables",
      "Filters, compressors (Ingersol Rand, ICON/Coltri), prepaid energy meters",
      "Earthing compound, caulking adhesives, electrical tapes, drilling consumables",
      "Crusher machine consumables — jaw, bowl liner, cone crusher, wire mesh screens",
    ],
    image: "/images/services/procurement.jpeg",
  },
  {
    title: "Civil & Construction Support",
    slug: "civil-construction",
    subTitle: "Infrastructure, solar, janitorial and support services",
    description:
      "Magestar has been actively involved in large-scale earthworks, mining excavation, and site-support operations for leading mining operators across Tanzania — mobilising heavy plant machinery, bulk earth excavation, haul road construction, and coordinated site logistics delivered safely, on schedule, and to specification.",
    exampleTitle: "Company Experience",
    examples: [
      "Solar design and installation",
      "General cleaning and janitorial services",
      "Infrastructure and site support services",
      "Haul road construction and coordinated site logistics",
    ],
    image: "/images/services/civil.jpeg",
  },
];

export const categories = [
  { title: "Mining Equipment", slug: "mining-equipment" },
  { title: "HVAC & Cooling", slug: "hvac-cooling" },
  { title: "Safety Products", slug: "safety-products" },
  { title: "General Parts", slug: "general-parts" },
];

export const products = [
  {
    name: "Jaw Crusher Consumables",
    mainCategory: "mining-equipment",
    subCategory: "Crusher Parts",
    bestSeller: true,
    image: "/images/services/jaw-crusher-consumables.jpeg",
  },
  {
    name: "Bowl Liner / Cone Crusher",
    mainCategory: "mining-equipment",
    subCategory: "Crusher Parts",
    bestSeller: true,
    image: "/images/services/bowl-liner-cone-crusher.jpeg",
  },
  {
    name: "Wire Mesh Screens",
    mainCategory: "mining-equipment",
    subCategory: "Screening",
    bestSeller: true,
    image: "/images/services/wire-mesh-screens.jpeg",
  },
  {
    name: "Metal Detector Kit (Kyntek)",
    mainCategory: "safety-products",
    subCategory: "Detection",
    bestSeller: true,
    image: "/images/services/metal-detector-kit-kyntek.jpeg",
  },
  {
    name: "AMETEK Portable Gas Analyzer",
    mainCategory: "safety-products",
    subCategory: "Detection",
    bestSeller: true,
    image: "/images/services/ametek-portable-gas-analyzer.jpeg",
  },
  {
    name: "Multi Gas Detector",
    mainCategory: "safety-products",
    subCategory: "Detection",
    bestSeller: false,
    image: "/images/services/multi-gas-detector.jpeg",
  },
  {
    name: "PPE Complete Set",
    mainCategory: "safety-products",
    subCategory: "Protection",
    bestSeller: false,
    image: "/images/services/ppe-complete-set.jpeg",
  },
  {
    name: "Centrifugal Pump",
    mainCategory: "general-parts",
    subCategory: "Pumps",
    bestSeller: true,
    image: "/images/services/centrifugal-pump.jpeg",
  },
  {
    name: "Vertical Multistage Pump",
    mainCategory: "general-parts",
    subCategory: "Pumps",
    bestSeller: false,
    image: "/images/services/vertical-multistage-pump.jpeg",
  },
  {
    name: "Ingersoll Rand Compressor",
    mainCategory: "general-parts",
    subCategory: "Compressors",
    bestSeller: true,
    image: "/images/services/ingersoll-rand-compressor.jpeg",
  },
  {
    name: "HQ/BQ/PQ Core Trays (RFID)",
    mainCategory: "mining-equipment",
    subCategory: "Exploration",
    bestSeller: false,
    image: "/images/services/hq-bq-pq-core-trays-rfid.jpeg",
  },
  {
    name: "Gold Mining Kit",
    mainCategory: "mining-equipment",
    subCategory: "Exploration",
    bestSeller: false,
    image: "/images/services/gold-mining-kit.jpeg",
  },
  {
    name: "Dredge Pump",
    mainCategory: "mining-equipment",
    subCategory: "Machinery",
    bestSeller: false,
    image: "/images/services/dredge-pump.jpeg",
  },
  {
    name: "Safety Slings (Round/Web)",
    mainCategory: "safety-products",
    subCategory: "Lifting & Rigging",
    bestSeller: false,
    image: "/images/services/safety-slings-round-web.jpeg",
  },
];

export const clients = [
  "TPDC",
  "Air Tanzania Cargo",
  "GSM Engineering",
  "WBHO",
  "FEMA Construction",
  "FABEC Limited",
  "WTO Energy",
  "Sagemcom",
  "Swala (Barrick Gold Mine)",
  "Shanta Gold",
  "Lindi Jumbo Limited",
  "Mantra Tanzania Rosatom",
  "Buckreef Gold Company",
];
