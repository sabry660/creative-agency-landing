export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  name: string;
  description: string;
  includedIn: string[];
  addOn?: boolean;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  includedSections: string[];
  includedFeatures: string[];
  exclusions: string[];
  ctaLabel: string;
  toConfirm: string[];
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  pricingModel: "fixed" | "starting" | "percentage";
  percentageValue?: number;
  notes?: string;
}

export interface ContactInfo {
  whatsapp?: string;
  email?: string;
  social?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Template {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  demoUrl?: string;
  stack: string;
  features: string;
  availability: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const SITE_CONTENT = {
  brand: {
    name: "Sabry",
    tagline: "Premium landing page studio",
    hero: {
      eyebrow: "INDEPENDENT DIGITAL STUDIO",
      headline: "Digital experiences built to make your brand stand out.",
      supportingText:
        "We create distinctive landing pages with thoughtful design, purposeful motion, and carefully crafted interactions.",
      primaryCta: "Explore Our Work",
      secondaryCta: "Start a Project",
    },
    description:
      "A premium creative studio specializing in conversion-focused landing pages with optional custom motion and 3D experiences.",
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Templates", href: "#templates" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ] as NavLink[],

  capabilities: [
    "Landing Pages",
    "UI/UX Design",
    "Creative Development",
    "Motion Design",
    "Interactive Experiences",
    "3D Experiences",
  ],

  services: [
    {
      name: "Landing Page Design & Development",
      description:
        "A complete landing page tailored to a brand, campaign, product, or service.",
      includedIn: ["starter", "professional", "premium"],
    },
    {
      name: "UI/UX Design",
      description:
        "Structured layouts, user journeys, visual hierarchy, and interface design.",
      includedIn: ["professional", "premium"],
    },
    {
      name: "Motion & Interaction",
      description:
        "Purposeful animation, micro-interactions, and premium scroll experiences.",
      includedIn: ["premium"],
    },
    {
      name: "3D Experiences",
      description:
        "Custom or integrated 3D visuals when appropriate for the project.",
      includedIn: [],
      addOn: true,
    },
    {
      name: "Visual Assets",
      description:
        "Custom graphics and supporting visual elements.",
      includedIn: [],
      addOn: true,
    },
    {
      name: "Copywriting",
      description:
        "Structured page messaging and conversion-oriented copy.",
      includedIn: [],
      addOn: true,
    },
  ] as Service[],

  packages: [
    {
      id: "starter",
      name: "Starter",
      price: 1500,
      description:
        "A clean, focused landing page for a simple brand, service, or campaign.",
      includedSections: [
        "Hero section",
        "Features/benefits section",
        "CTA section",
        "Footer",
      ],
      includedFeatures: [
        "Responsive design",
        "Basic animations",
        "2 revision rounds",
      ],
      exclusions: [
        "Custom 3D",
        "Advanced motion",
        "Multiple pages",
        "Source code templates",
      ],
      ctaLabel: "Get Started",
      toConfirm: [
        "Exact section count",
        "Revision policy",
        "Delivery timeline",
        "Support duration",
      ],
    },
    {
      id: "professional",
      name: "Professional",
      price: 1750,
      description:
        "A more customized landing page with stronger visual presentation and additional design flexibility.",
      includedSections: [
        "All Starter sections",
        "Services/offerings section",
        "Testimonials section (if provided)",
        "Enhanced visual presentation",
      ],
      includedFeatures: [
        "All Starter features",
        "UI/UX design input",
        "Enhanced animations",
        "3 revision rounds",
      ],
      exclusions: [
        "Custom 3D",
        "Advanced motion",
        "Multiple pages",
      ],
      ctaLabel: "Get Started",
      toConfirm: [
        "Exact section count",
        "Revision policy",
        "Delivery timeline",
        "Support duration",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: 2000,
      description:
        "A more visually ambitious landing page with additional customization and richer interactions within the defined scope.",
      includedSections: [
        "All Professional sections",
        "Gallery/portfolio section",
        "Advanced interactions",
        "Enhanced motion design",
      ],
      includedFeatures: [
        "All Professional features",
        "Advanced GSAP motion",
        "Premium scroll experiences",
        "4 revision rounds",
      ],
      exclusions: [
        "Custom 3D (available as add-on)",
        "Multiple pages (available as add-on)",
      ],
      ctaLabel: "Get Started",
      toConfirm: [
        "Exact section count",
        "Revision policy",
        "Delivery timeline",
        "Support duration",
      ],
    },
  ] as Package[],

  addOns: [
    {
      id: "copywriting",
      name: "Copywriting",
      description: "Structured messaging and conversion copy",
      price: 500,
      pricingModel: "fixed",
    },
    {
      id: "custom-hero",
      name: "Custom hero section",
      description: "Enhanced hero with custom design",
      price: 400,
      pricingModel: "fixed",
    },
    {
      id: "mini-brand-identity",
      name: "Mini brand identity",
      description: "Logo refinement, color palette, typography",
      price: 700,
      pricingModel: "fixed",
    },
    {
      id: "custom-illustrations",
      name: "3-5 custom illustrations",
      description: "Custom graphics for the page",
      price: 500,
      pricingModel: "fixed",
    },
    {
      id: "social-graphics",
      name: "3 social media graphics",
      description: "Matching social media assets",
      price: 400,
      pricingModel: "fixed",
    },
    {
      id: "advanced-motion",
      name: "Advanced GSAP motion",
      description: "Premium scroll interactions and animations",
      price: 750,
      pricingModel: "fixed",
    },
    {
      id: "3d-integration",
      name: "Integration of existing 3D model",
      description: "Integrate provided 3D asset",
      price: 750,
      pricingModel: "fixed",
    },
    {
      id: "custom-3d",
      name: "Custom 3D development",
      description: "Custom 3D creation — final price based on scope",
      price: 2000,
      pricingModel: "starting",
      notes: "Final price confirmed based on scope",
    },
    {
      id: "additional-page",
      name: "Additional page",
      description: "Extra landing pages",
      price: 350,
      pricingModel: "fixed",
    },
    {
      id: "additional-language",
      name: "Additional language",
      description: "Translation and layout adjustment",
      price: 500,
      pricingModel: "fixed",
    },
    {
      id: "api-integration",
      name: "Simple booking/API integration",
      description: "Basic integration — confirm scope",
      price: 500,
      pricingModel: "starting",
      notes: "Final price confirmed based on scope",
    },
    {
      id: "rush-delivery",
      name: "Rush delivery",
      description: "+30% of applicable subtotal",
      price: 30,
      pricingModel: "percentage",
      percentageValue: 30,
      notes: "Applies to subtotal (base + applicable add-ons)",
    },
  ] as AddOn[],

  templates: {
    basePrice: 700,
    // Placeholder templates - add real data when available
    items: [] as Template[],
  },

  contact: {
    whatsapp: "201201289813", // Phone number in international format without '+' or spaces
    email: "", // PLACEHOLDER - Add email address
    social: {
      instagram: "", // PLACEHOLDER
      linkedin: "", // PLACEHOLDER
    },
  } as ContactInfo,

  process: [
    {
      step: 1,
      title: "Choose a package or template",
      description:
        "Select from pricing packages or template marketplace",
    },
    {
      step: 2,
      title: "Share project requirements",
      description:
        "Provide details about brand, goals, and content",
    },
    {
      step: 3,
      title: "Confirm scope and pricing",
      description:
        "Review package, add-ons, and final estimate",
    },
    {
      step: 4,
      title: "Design and development",
      description:
        "Create the landing page according to agreed scope",
    },
    {
      step: 5,
      title: "Review and revisions",
      description:
        "Make changes within agreed revision allowance",
    },
    {
      step: 6,
      title: "Delivery and handoff",
      description:
        "Receive source files and deployment guidance",
    },
  ] as ProcessStep[],

  domainHosting: {
    note: "Customers purchase and manage their own domain and hosting.",
    handoff: "Sabry delivers website files and provides guidance on deployment.",
    costsSeparate: true,
  },

  faq: [
    {
      question: "What is included in each landing page package?",
      answer:
        "Each package includes a defined number of sections, design input, responsive layout, and a specific number of revision rounds. See the Pricing section for details.",
    },
    {
      question: "Can I request custom animations or 3D?",
      answer:
        "Yes, custom animations and 3D are available as add-ons. Advanced GSAP motion and 3D model integration are offered as separate options. Custom 3D development is available starting at EGP 2,000, with final pricing based on scope.",
    },
    {
      question: "What is the difference between a template and a custom landing page?",
      answer:
        "Templates are pre-designed landing pages you purchase and customize yourself at a fixed price. Custom landing pages are designed and built specifically for your brand, with design input, revisions, and tailored content.",
    },
    {
      question: "Do I need to purchase my own domain and hosting?",
      answer:
        "Yes. You are responsible for purchasing and managing your domain name and hosting. Sabry delivers the website files and provides guidance on deployment, but domain and hosting costs are separate.",
    },
    {
      question: "Will I receive the source code?",
      answer:
        "Yes. You receive the full source code for your landing page. For templates, you receive the template source code to customize. For custom projects, you receive the completed project files.",
    },
    {
      question: "How do I request a quote?",
      answer:
        "Use the contact form to share your project details. If you've selected a package or add-ons from the pricing calculator, those details will be included automatically. You can also reach out via WhatsApp or email.",
    },
    {
      question: "Can I request additional sections or languages?",
      answer:
        "Yes. Additional pages and additional languages are available as add-ons. See the Add-ons section for pricing.",
    },
    {
      question: "How is the final price confirmed?",
      answer:
        "The estimate from the pricing calculator is indicative. The final price is confirmed after reviewing your project requirements, scope, and any custom requests. For add-ons marked as 'starting price,' the final amount will be confirmed based on the actual work required.",
    },
  ] as FAQ[],

  pwa: {
    name: "Sabry",
    shortName: "Sabry",
    description:
      "Premium landing page studio creating distinctive digital experiences.",
    themeColor: "#ff4d00",
    backgroundColor: "#0a0a0a",
    // Icons to be added when created
    icons: {
      icon192: "/icons/icon-192.png",
      icon512: "/icons/icon-512.png",
    },
    offlineFallback: "/offline",
  },
};
