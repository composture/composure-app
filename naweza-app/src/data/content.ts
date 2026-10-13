export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
}

export interface InsightPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
  category: string;
  author: string;
}

export const BRAND = {
  name: 'Composure (Pty) Ltd',
  shortName: 'Composure',
  tagline: 'AI | Software | Automation',
  establishedYear: 2026,
  jurisdiction: 'Windhoek, Namibia',
  positioningText: 'Composure (Pty) Ltd builds AI-powered software, websites, automations, and business systems for companies in Namibia and beyond.',
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'ai-integration',
    title: 'AI Integration & Agents',
    slug: 'ai-integration-agents',
    shortDescription: 'Put AI to work inside your business — chatbots, assistants, document processing, and smart decision support.',
    fullDescription: 'We integrate practical AI into the tools you already use. From customer-facing chatbots and WhatsApp assistants to internal document processing and automated reporting, we build AI solutions that reduce manual work and speed up operations — without the hype, and with full control over your data.',
    iconName: 'Bot',
    deliverables: [
      'Custom AI Chatbots & WhatsApp Assistants',
      'LLM-Powered Document & Data Processing',
      'AI Search, Summarisation & Q&A Systems',
      'AI Integration with Existing Systems (CRM, ERP, POS)'
    ],
  },
  {
    id: 'web-development',
    title: 'Website & Web App Development',
    slug: 'website-web-app-development',
    shortDescription: 'Modern, fast, mobile-first websites and web applications that convert visitors into customers.',
    fullDescription: 'We design and build professional websites, e-commerce stores, and full web applications using modern technologies. Every site is responsive, search-engine friendly, and built to grow with your business — from a landing page to a full client portal.',
    iconName: 'Globe',
    deliverables: [
      'Corporate & Business Websites',
      'E-Commerce & Online Stores',
      'Web Applications & Client Portals',
      'Hosting, Domains & Ongoing Maintenance'
    ],
  },
  {
    id: 'automation',
    title: 'Business Process Automation',
    slug: 'business-process-automation',
    shortDescription: 'Eliminate repetitive manual work — connect your apps and automate the tasks that eat your team\'s day.',
    fullDescription: 'We map your manual processes — quotes, invoices, follow-ups, stock updates, reporting — and automate them end-to-end. Your systems talk to each other, data flows automatically, and your team focuses on work that actually matters.',
    iconName: 'Workflow',
    deliverables: [
      'Workflow Automation (n8n, Make, Zapier)',
      'System & API Integrations',
      'Automated Invoicing, Quotes & Notifications',
      'WhatsApp, Email & SMS Automation'
    ],
  },
  {
    id: 'custom-software',
    title: 'Custom Software & Business Systems',
    slug: 'custom-software-business-systems',
    shortDescription: 'POS, inventory, CRM, and internal systems built exactly around how your business operates.',
    fullDescription: 'Off-the-shelf software rarely fits. We build custom systems — point-of-sale, inventory management, booking platforms, customer databases — designed around your actual workflow, running online or offline, on desktop or mobile.',
    iconName: 'Code',
    deliverables: [
      'Point-of-Sale & Inventory Systems',
      'CRM & Customer Management Platforms',
      'Booking, Scheduling & Field Service Apps',
      'Offline-First & Multi-Branch Solutions'
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    shortDescription: 'Native-quality Android and iOS apps for your customers, staff, and field operations.',
    fullDescription: 'We build mobile apps that work in real conditions — including offline use and poor connectivity. Customer apps, staff apps, field data collection, delivery tracking, and anything your business needs in your customers\' or team\'s pocket.',
    iconName: 'Smartphone',
    deliverables: [
      'Android & iOS App Development',
      'Offline-Capable Field & Staff Apps',
      'App Store & Play Store Publishing',
      'Push Notifications & App Maintenance'
    ],
  },
  {
    id: 'data-dashboards',
    title: 'Data, Dashboards & Reporting',
    slug: 'data-dashboards-reporting',
    shortDescription: 'Turn scattered spreadsheets and systems into live dashboards that show what\'s actually happening.',
    fullDescription: 'We consolidate your sales, stock, financial, and operational data into clear, real-time dashboards and automated reports. See performance, spot problems early, and make decisions based on facts — not yesterday\'s spreadsheet.',
    iconName: 'BarChart3',
    deliverables: [
      'Real-Time Business Dashboards',
      'Automated Daily / Weekly Reports',
      'Data Consolidation from Multiple Systems',
      'Spreadsheet-to-System Migration'
    ],
  },
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Digital Transformation',
    slug: 'ai-strategy-digital-transformation',
    shortDescription: 'Not sure where AI fits in your business? We audit, plan, and prioritise — then build what pays off first.',
    fullDescription: 'Before building, we help you see the full picture. We audit your current processes, identify the highest-impact automation and AI opportunities, and deliver a practical roadmap with priorities, timelines, and expected returns — no jargon, no overspending.',
    iconName: 'Sparkles',
    deliverables: [
      'AI & Automation Opportunity Audits',
      'Digital Transformation Roadmaps',
      'Technology Selection & Vendor Guidance',
      'Team Training & Change Support'
    ],
  }
];

export const INDUSTRIES = [
  {
    id: 'retail',
    title: 'Retail & POS',
    description: 'Point-of-sale, inventory, multi-branch stock control, and daily sales reporting for shops, bars, and chains.',
    icon: 'ShoppingCart'
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Tourism',
    description: 'Booking systems, guest management, and WhatsApp assistants for lodges, restaurants, and tour operators.',
    icon: 'Palmtree'
  },
  {
    id: 'logistics',
    title: 'Logistics & Transport',
    description: 'Fleet tracking, delivery management, dispatch automation, and field-driver apps built for real road conditions.',
    icon: 'Truck'
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    description: 'Farm record-keeping, livestock and produce tracking, seasonal reporting, and SMS/WhatsApp field updates.',
    icon: 'Sprout'
  },
  {
    id: 'mining',
    title: 'Mining & Construction',
    description: 'Project tracking, equipment logs, site attendance, and contractor management systems.',
    icon: 'HardHat'
  },
  {
    id: 'education',
    title: 'Education',
    description: 'School administration, fee tracking, parent communication, and student record systems for private institutions.',
    icon: 'GraduationCap'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Clinics',
    description: 'Patient records, appointment booking, reminders, and clinic management platforms that work offline.',
    icon: 'HeartPulse'
  },
  {
    id: 'professional',
    title: 'Professional Services',
    description: 'Document automation, proposal generation, client portals, and AI research assistants for firms and consultancies.',
    icon: 'Briefcase'
  }
];

export const PROCESS_STEPS = [
  {
    id: 'discover',
    stepNumber: '01',
    title: 'Discover',
    description: 'We start with a free consultation. We learn how your business actually runs — your processes, systems, pain points, and goals — before recommending anything.',
    icon: 'Search'
  },
  {
    id: 'design',
    stepNumber: '02',
    title: 'Design',
    description: 'You get a clear plan: what we will build, what it costs, how long it takes, and the results you should expect. No surprises, no scope creep.',
    icon: 'PenTool'
  },
  {
    id: 'build',
    stepNumber: '03',
    title: 'Build & Integrate',
    description: 'We build, test, and integrate — with your team involved at every milestone. You see progress continuously, not just at the end.',
    icon: 'Code'
  },
  {
    id: 'support',
    stepNumber: '04',
    title: 'Deploy & Support',
    description: 'We launch, train your team, and stay on for support and improvements. Your software keeps working — and keeps improving — long after go-live.',
    icon: 'ShieldCheck'
  }
];

export const INSIGHTS: InsightPost[] = [
  {
    id: '1',
    title: 'AI for Namibian Businesses: Where to Start (and Where to Wait)',
    slug: 'ai-for-namibian-businesses-where-to-start',
    excerpt: 'A practical look at which AI use cases pay off fastest for local businesses — and which ones to leave alone for now.',
    content: 'AI adoption fails when businesses start with the technology instead of the problem. The fastest wins are usually in customer communication, document handling, and repetitive back-office tasks — areas where a chatbot answering common questions, or a system that drafts quotes and invoices automatically, saves hours every week. Start with one painful, repetitive process, automate it, measure the time saved, and expand from there...',
    publishDate: 'October 2026',
    readTime: '5 min read',
    category: 'AI & Automation',
    author: 'Composure Technology Team'
  },
  {
    id: '2',
    title: 'The Real ROI of Automating Your Back Office',
    slug: 'real-roi-of-back-office-automation',
    excerpt: 'Manual quotes, invoices, stock updates, and follow-ups cost more than most owners realise. Here is how to calculate what automation is worth.',
    content: 'Every manual process carries a hidden cost: staff hours, errors, delays, and the opportunities missed while your team is buried in admin. A simple calculation — hours spent per week multiplied by your fully-loaded hourly cost — usually reveals that a system paying for itself in months. Businesses that automate invoicing and stock updates typically reclaim 10 to 20 hours per week across their teams...',
    publishDate: 'September 2026',
    readTime: '6 min read',
    category: 'Automation',
    author: 'Composure Technology Team'
  },
  {
    id: '3',
    title: 'Custom Software vs Off-the-Shelf: How to Choose',
    slug: 'custom-software-vs-off-the-shelf',
    excerpt: 'When ready-made software is the smart choice, when it holds your business back, and the questions to ask before you commit.',
    content: 'Off-the-shelf software is cheap and instant — and it forces your business to change how it works to fit the software. Custom software costs more upfront but matches your workflow exactly. The deciding factor is how core the process is to your business: if a workflow is unique to how you win customers, build it; if it is a generic utility like email or accounting, buy it...',
    publishDate: 'August 2026',
    readTime: '5 min read',
    category: 'Software Strategy',
    author: 'Composure Technology Team'
  }
];

export const CONTACT_MAILBOXES = [
  { label: 'General Enquiries (Primary)', email: 'info@composuretech.com', role: 'Main Brand & Information' },
];

export const PUBLIC_CONTACT_INFO = {
  primaryPhone: '+264 81 310 7977',
  whatsappNumber: '264813107977',
  whatsappUrl: 'https://wa.me/264813107977',
  primaryEmail: 'info@composuretech.com',
  salesEmail: '',
  location: 'Windhoek, Namibia (Serving Namibia & Beyond)',
  socialLinks: {
      facebook: 'https://www.facebook.com/profile.php?id=100054053484353',
      instagram: 'https://www.instagram.com/nawezaconsulting/',
      linkedin: 'https://www.linkedin.com/in/naweza-consulting-7193092b1/',
      whatsapp: 'https://wa.me/264813107977'
    }
};
