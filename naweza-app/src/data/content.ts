export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  plainName: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  startingFrom?: string;
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
    plainName: 'AI That Does the Work',
    shortDescription: 'Put AI to work inside your business — chatbots, assistants, document processing, and smart decision support.',
    fullDescription: 'We put AI to work inside your business — answering customer questions on WhatsApp, reading documents, drafting quotes, or summarising your reports — so your team spends less time on repetitive work and more time serving customers. We handle everything: design, build, integration with your existing tools, and training your staff to use it.',
    iconName: 'Bot',
    deliverables: [
      'AI chatbots and WhatsApp assistants for customer service',
      'AI that reads and processes documents (invoices, forms, reports)',
      'Smart search and summaries for your business knowledge',
      'AI built into the tools you already use',
    ],
  },
  {
    id: 'web-development',
    title: 'Website & Web App Development',
    slug: 'website-web-app-development',
    plainName: 'Websites That Work',
    shortDescription: 'Modern, fast, mobile-first websites and web applications that convert visitors into customers.',
    fullDescription: 'We build professional websites that look good on phones and computers, load fast, and show up on Google. Whether you need a simple site to show what you offer, an online store, or a full web app your team and customers log into — we design it, build it, host it, and keep it running.',
    iconName: 'Globe',
    deliverables: [
      'Business and company websites',
      'Online stores and e-commerce',
      'Web applications and customer portals',
      'Domain, hosting, and ongoing updates',
    ],
  },
  {
    id: 'automation',
    title: 'Business Process Automation',
    slug: 'business-process-automation',
    plainName: 'Automation for Repetitive Work',
    shortDescription: 'Eliminate repetitive manual work — connect your apps and automate the tasks that eat your team\'s day.',
    fullDescription: 'If your team is stuck doing the same task over and over — sending invoices, updating stock, chasing quotes, sending reminders — we automate it. Your systems talk to each other, data moves by itself, and your people focus on work that actually needs a human.',
    iconName: 'Workflow',
    deliverables: [
      'Automated workflows (invoices, quotes, stock updates, reports)',
      'Connecting your apps so they share data automatically',
      'WhatsApp, email, and SMS that send themselves',
      'Reminders, follow-ups, and notifications',
    ],
  },
  {
    id: 'custom-software',
    title: 'Custom Software & Business Systems',
    slug: 'custom-software-business-systems',
    plainName: 'Software Built for Your Business',
    shortDescription: 'POS, inventory, CRM, and internal systems built exactly around how your business operates.',
    fullDescription: 'Ready-made software rarely fits how you actually work. We build systems shaped around your business — point-of-sale, stock management, bookings, customer databases — that work online or offline, on computers or phones, and grow with you.',
    iconName: 'Code',
    deliverables: [
      'Point-of-sale and inventory systems',
      'Customer management (CRM) platforms',
      'Booking, scheduling, and field service apps',
      'Multi-branch and offline-ready solutions',
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    plainName: 'Apps for Phones and Tablets',
    shortDescription: 'Native-quality Android and iOS apps for your customers, staff, and field operations.',
    fullDescription: 'We build mobile apps that work in real conditions — including offline use and poor signal. Customer apps, staff apps, field data collection, delivery tracking, and anything else your business needs in your team\'s or customers\' pockets.',
    iconName: 'Smartphone',
    deliverables: [
      'Android and iPhone apps',
      'Apps that work without internet',
      'Publishing to the App Store and Play Store',
      'Push notifications and ongoing maintenance',
    ],
  },
  {
    id: 'data-dashboards',
    title: 'Data, Dashboards & Reporting',
    slug: 'data-dashboards-reporting',
    plainName: 'Dashboards & Reports',
    shortDescription: 'Turn scattered spreadsheets and systems into live dashboards that show what\'s actually happening.',
    fullDescription: 'We pull your sales, stock, and operational data together into one clear dashboard you can check anytime. You see what is happening in real time, spot problems early, and make decisions based on facts — not yesterday\'s spreadsheet.',
    iconName: 'BarChart3',
    deliverables: [
      'Live dashboards you can check anytime',
      'Reports that send themselves daily or weekly',
      'Bringing data from different systems into one place',
      'Moving your business off spreadsheets',
    ],
  },
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Digital Transformation',
    slug: 'ai-strategy-digital-transformation',
    plainName: 'AI Strategy & Planning',
    shortDescription: 'Not sure where AI fits in your business? We audit, plan, and prioritise — then build what pays off first.',
    fullDescription: 'Not sure where to start with AI or digital tools? We look at how your business runs, show you where technology will save the most money, and give you a clear plan — what to build first, what it costs, and what results to expect. No jargon.',
    iconName: 'Sparkles',
    deliverables: [
      'A plain-English review of where AI can help you',
      'A step-by-step plan with priorities and costs',
      'Guidance on which tools to choose',
      'Training for your team',
    ],
  },
];

export const INDUSTRIES = [
  {
    id: 'retail',
    title: 'Retail & POS',
    description: 'Point-of-sale, inventory, multi-branch stock control, and daily sales reporting for shops, bars, and chains.',
    icon: 'ShoppingCart',
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Tourism',
    description: 'Booking systems, guest management, and WhatsApp assistants for lodges, restaurants, and tour operators.',
    icon: 'Palmtree',
  },
  {
    id: 'logistics',
    title: 'Logistics & Transport',
    description: 'Fleet tracking, delivery management, dispatch automation, and field-driver apps built for real road conditions.',
    icon: 'Truck',
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    description: 'Farm record-keeping, livestock and produce tracking, seasonal reporting, and SMS/WhatsApp field updates.',
    icon: 'Sprout',
  },
  {
    id: 'mining',
    title: 'Mining & Construction',
    description: 'Project tracking, equipment logs, site attendance, and contractor management systems.',
    icon: 'HardHat',
  },
  {
    id: 'education',
    title: 'Education',
    description: 'School administration, fee tracking, parent communication, and student record systems for private institutions.',
    icon: 'GraduationCap',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Clinics',
    description: 'Patient records, appointment booking, reminders, and clinic management platforms that work offline.',
    icon: 'HeartPulse',
  },
  {
    id: 'professional',
    title: 'Professional Services',
    description: 'Document automation, proposal generation, client portals, and AI research assistants for firms and consultancies.',
    icon: 'Briefcase',
  },
];

export const PROCESS_STEPS = [
  {
    id: 'discover',
    stepNumber: '01',
    title: 'Discover',
    description: 'We start with a free consultation. We learn how your business actually runs — your processes, systems, pain points, and goals — before recommending anything.',
    icon: 'Search',
  },
  {
    id: 'design',
    stepNumber: '02',
    title: 'Design',
    description: 'You get a clear plan: what we will build, what it costs, how long it takes, and the results you should expect. No surprises, no scope creep.',
    icon: 'PenTool',
  },
  {
    id: 'build',
    stepNumber: '03',
    title: 'Build & Integrate',
    description: 'We build, test, and integrate — with your team involved at every milestone. You see progress continuously, not just at the end.',
    icon: 'Code',
  },
  {
    id: 'support',
    stepNumber: '04',
    title: 'Deploy & Support',
    description: 'We launch, train your team, and stay on for support and improvements. Your software keeps working — and keeps improving — long after go-live.',
    icon: 'ShieldCheck',
  },
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
    author: 'Composure Technology Team',
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
    author: 'Composure Technology Team',
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
    author: 'Composure Technology Team',
  },
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
    whatsapp: 'https://wa.me/264813107977',
  },
};
