export interface LegalEntity {
  id: string;
  name: string;
  shortName: string;
  establishedYear: number;
  role: string;
  positioningText: string;
  isRegistrationComplete: boolean;
  registrationNumber?: string;
  jurisdiction: string;
  badgeText: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  entityId: string; // 'cc' or 'pty'
  category: 'core' | 'international';
}

export interface CaseStudy {
  id: string;
  clientName: string;
  slug: string;
  title: string;
  summary: string;
  fullStory: string;
  servicesProvided: string[];
  entityId: string; // 'cc'
  permissionConfirmed: boolean;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
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

export const LEGAL_ENTITIES: Record<string, LegalEntity> = {
  cc: {
    id: 'cc',
    name: 'Naweza Investments CC',
    shortName: 'Naweza Investments CC',
    establishedYear: 2018,
    role: 'Established Business / Track Record & Namibia Operations',
    positioningText: 'Namibia operations, business advisory, compliance, taxation, bookkeeping, proposals, research, feasibility and operational support.',
    isRegistrationComplete: true,
    registrationNumber: 'CC/2018/04912',
    jurisdiction: 'Windhoek, Namibia',
    badgeText: 'Operating since 2018',
  },
  pty: {
    id: 'pty',
    name: 'Naweza Consulting Investments (Pty) Ltd',
    shortName: 'Naweza Consulting Investments (Pty) Ltd',
    establishedYear: 2026,
    role: 'International-Facing / Project Development Arm',
    positioningText: 'Naweza Consulting Investments (Pty) Ltd is the international-facing arm of the Naweza brand, building on the experience and local track record established through Naweza Investments CC in Namibia.',
    isRegistrationComplete: false, // In final registration process as per brief rules
    registrationNumber: 'Pending Finalisation (2026)',
    jurisdiction: 'Namibia & SADC Region',
    badgeText: 'Established 2026',
  },
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'business-compliance',
    title: 'Business Compliance & Advisory',
    slug: 'business-compliance-advisory',
    shortDescription: 'Compliance support, business formalisation, regulatory structuring, and practical corporate advisory.',
    fullDescription: 'Comprehensive compliance and advisory services for Namibian enterprises and scaling startups. We ensure your entity adheres to statutory obligations, BIPA requirements, licensing, and corporate governance standards while providing actionable growth advice.',
    iconName: 'ShieldCheck',
    deliverables: [
      'BIPA Registration & Compliance Audits',
      'Corporate Governance & Governance Frameworks',
      'Regulatory License & Permit Applications',
      'Business Formalisation & Operational Structuring'
    ],
    entityId: 'cc',
    category: 'core'
  },
  {
    id: 'taxation-financials',
    title: 'Taxation & Financials',
    slug: 'taxation-financials',
    shortDescription: 'Tax support, bookkeeping, financial information preparation, and statutory reporting.',
    fullDescription: 'Dependable bookkeeping and taxation advisory tailored to Namibian tax laws. We prepare accurate financial statements, manage tax returns (PAYE, VAT, IT), and ensure full audit-readiness.',
    iconName: 'Calculator',
    deliverables: [
      'Monthly Bookkeeping & Management Accounts',
      'Namibia Revenue Agency (NamRA) Tax Filings',
      'VAT & PAYE Compliance',
      'Financial Statement Preparation & Review'
    ],
    entityId: 'cc',
    category: 'core'
  },
  {
    id: 'business-plans',
    title: 'Business Plans & Projections',
    slug: 'business-plans-projections',
    shortDescription: 'Bankable business plans, budgets, financial projections, and feasibility studies.',
    fullDescription: 'Rigorous commercial business plans designed to secure financing from commercial banks, development funds (DBN), and institutional investors. Includes detailed 5-year financial modeling.',
    iconName: 'TrendingUp',
    deliverables: [
      'Bankable Business Plans & Investor Pitch Decks',
      '5-Year Cash Flow & Profit Projections',
      'Capital Expenditure & Budget Modeling',
      'Financial Feasibility Analysis'
    ],
    entityId: 'cc',
    category: 'core'
  },
  {
    id: 'research-analysis',
    title: 'Research & Analysis',
    slug: 'research-analysis',
    shortDescription: 'Market research, business research, feasibility research, and commercial opportunity analysis.',
    fullDescription: 'Data-driven market intelligence for Namibian and regional commerce. We evaluate market size, competitive landscapes, regulatory environments, and consumer behavior.',
    iconName: 'FileSearch',
    deliverables: [
      'Industry & Competitor Benchmarking',
      'Macro & Micro Economic Feasibility Reports',
      'Consumer & Market Demand Analysis',
      'Risk Assessment & Mitigation Models'
    ],
    entityId: 'cc',
    category: 'core'
  },
  {
    id: 'project-proposals',
    title: 'Project Proposals',
    slug: 'project-proposals',
    shortDescription: 'Structured grant proposals, tender bids, and supporting business documentation.',
    fullDescription: 'High-impact technical and financial project proposals engineered to win competitive tenders, donor grants, and private sector procurement contracts.',
    iconName: 'FileText',
    deliverables: [
      'Public & Private Tender Bid Dossiers',
      'Grant & Donor Funding Proposals',
      'Technical Feasibility Documentation',
      'Stakeholder Alignment Frameworks'
    ],
    entityId: 'cc',
    category: 'core'
  },
  {
    id: 'back-office',
    title: 'Business Management & Back Office',
    slug: 'business-management-back-office',
    shortDescription: 'Documentation, administration, CRM/lead follow-up, and operational support.',
    fullDescription: 'Turnkey operational and administrative support for lean enterprises. We streamline client management, contract administration, and workflow organization.',
    iconName: 'Briefcase',
    deliverables: [
      'Administrative & Executive Assistance',
      'CRM System Setup & Lead Tracking',
      'Document Digitization & Management',
      'Operational Process Standardization'
    ],
    entityId: 'cc',
    category: 'core'
  },
  {
    id: 'africa-market-dev',
    title: 'Africa Market Development',
    slug: 'africa-market-development',
    shortDescription: 'Market intelligence, partner identification, opportunity scouting, and local market support for global firms.',
    fullDescription: 'Specialised cross-border market entry and commercial representation for international manufacturers, suppliers, technology providers, and investors entering Namibia and the wider SADC region.',
    iconName: 'Globe',
    deliverables: [
      'SADC & Namibian Opportunity Scouting',
      'Distributor, Agent & Local Partner Vetting',
      'Project & Infrastructure Tender Intelligence',
      'Local Commercial Representation & Follow-up'
    ],
    entityId: 'pty',
    category: 'international'
  }
];

export const AFRICA_MARKET_CAPABILITIES = [
  {
    title: 'Market Research & Analysis',
    description: 'In-depth market mapping, regulatory assessments, and sector intelligence tailored for international companies.',
    icon: 'Search'
  },
  {
    title: 'Opportunity Scouting',
    description: 'Active identification of high-potential commercial projects, public-private partnerships (PPPs), and commercial gaps in Namibia & SADC.',
    icon: 'Compass'
  },
  {
    title: 'Distributor / Dealer / Partner Identification',
    description: 'Vetting and pairing global suppliers and OEMs with credible local distributors, agents, and joint-venture partners.',
    icon: 'Users'
  },
  {
    title: 'Contractor / EPC / Local Partner Research',
    description: 'Technical and financial diligence on local Engineering, Procurement, Construction (EPC) firms and subcontractors.',
    icon: 'Building2'
  },
  {
    title: 'Project & Tender Intelligence',
    description: 'Early-stage monitoring of upcoming government tenders, industrial capital projects, renewable energy, and infrastructure initiatives.',
    icon: 'FileBadge'
  },
  {
    title: 'Lead Generation & Follow-up',
    description: 'Structured outreach, meeting facilitation, and sustained commercial follow-up with Namibian decision-makers.',
    icon: 'Target'
  },
  {
    title: 'Research & Proposal Writing',
    description: 'Tailoring international technical proposals to conform with Namibian legal frameworks and procurement norms.',
    icon: 'PenTool'
  },
  {
    title: 'Local Market Support',
    description: 'On-the-ground operational representation, stakeholder engagement, and advisory throughout contract execution.',
    icon: 'MapPin'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'sorris-sorris',
    clientName: 'Sorris Sorris Conservancy',
    slug: 'sorris-sorris-conservancy',
    title: 'Funding Proposals & Financial Feasibility Study',
    summary: 'Developed comprehensive funding proposals, financial feasibility models, and regulatory stakeholder alignment for community eco-tourism and resource management.',
    fullStory: 'Naweza Investments CC worked closely with the leadership of Sorris Sorris Conservancy to structure bankable funding proposals and financial feasibility assessments. Our team established rigorous cash flow forecasting, regulatory alignment with national conservation standards, and stakeholder engagement models to secure capital and ensure sustainable operational scaling.',
    servicesProvided: ['Funding Proposals', 'Financial Feasibility', 'Regulatory Alignment'],
    entityId: 'cc',
    permissionConfirmed: true,
    impactMetrics: [
      { label: 'Project Scope', value: 'Community Eco-Tourism' },
      { label: 'Feasibility Model', value: '5-Year Cashflow' },
      { label: 'Regulatory Alignment', value: '100% Compliant' }
    ],
    tags: ['Eco-Tourism', 'Feasibility', 'Proposals', 'Community Development']
  },
  {
    id: 'sonhos-school',
    clientName: 'Sonhos Private School',
    slug: 'sonhos-private-school',
    title: 'Entity Formalisation, BIPA Registration & Operational Scaling',
    summary: 'Guided complete business formalisation, BIPA corporate registration, regulatory compliance, monthly bookkeeping, and administrative scaling.',
    fullStory: 'Sonhos Private School partnered with Naweza Investments CC to transition from early operational stages into a fully formalised, legally registered private educational institution. We handled complete BIPA corporate registration, established robust accounting procedures, ensured tax compliance, and designed back-office management processes for sustainable institution growth.',
    servicesProvided: ['BIPA Formalisation', 'Bookkeeping & Tax', 'Regulatory Compliance', 'Operational Advisory'],
    entityId: 'cc',
    permissionConfirmed: true,
    impactMetrics: [
      { label: 'Registration Status', value: 'BIPA Verified' },
      { label: 'Accounting Setup', value: 'Full Bookkeeping' },
      { label: 'Operational Readiness', value: 'Institutional Scale' }
    ],
    tags: ['Education', 'Formalisation', 'BIPA', 'Bookkeeping']
  },
  {
    id: 'nueise-investments',
    clientName: 'Nueise Investments',
    slug: 'nueise-investments',
    title: 'Comprehensive Bookkeeping, Taxation & Corporate Advisory',
    summary: 'Provided ongoing monthly bookkeeping, statutory tax compliance, corporate letter formulation, commercial proposals, and practical executive advisory.',
    fullStory: 'Naweza Investments CC serves as the long-term corporate advisory and financial management partner for Nueise Investments. Over multi-year engagements, we manage monthly bookkeeping, statutory tax returns (NamRA), corporate correspondence, commercial proposal writing, and executive business strategy.',
    servicesProvided: ['Bookkeeping & Tax', 'Corporate Letters', 'Proposal Development', 'Executive Advisory'],
    entityId: 'cc',
    permissionConfirmed: true,
    impactMetrics: [
      { label: 'Relationship', value: 'Multi-Year Advisory' },
      { label: 'Tax Compliance', value: 'NamRA Current' },
      { label: 'Deliverables', value: 'Proposals & Letters' }
    ],
    tags: ['Corporate Advisory', 'Taxation', 'Bookkeeping', 'Business Strategy']
  }
];

export const INSIGHTS: InsightPost[] = [
  {
    id: '1',
    title: 'Navigating Business Compliance & BIPA Registration in Namibia',
    slug: 'navigating-business-compliance-bipa-namibia',
    excerpt: 'A practical guide for Namibian entrepreneurs on structuring entities, meeting statutory compliance, and maintaining audit readiness.',
    content: 'Formalising a business in Namibia requires understanding the distinct advantages of Close Corporations (CC) and Proprietary Limited (Pty Ltd) companies under BIPA rules. Key steps include maintaining accurate minute books, annual returns, NamRA tax registration, and social security compliance...',
    publishDate: 'September 2026',
    readTime: '4 min read',
    category: 'Advisory & Compliance',
    author: 'Naweza Advisory Team'
  },
  {
    id: '2',
    title: 'Your Products. Our Market Intelligence. Africa: SADC Market Entry',
    slug: 'sadc-market-opportunity-scouting-international-investors',
    excerpt: 'How international manufacturers, OEMs, and technology suppliers can enter the Namibian and SADC markets through strategic local partnerships.',
    content: 'Namibia presents a stable gateway to the Southern African Development Community (SADC). International firms seeking to supply industrial equipment, renewable energy infrastructure, or technology solutions must navigate local partner requirements, tender intelligence, and local content frameworks...',
    publishDate: 'August 2026',
    readTime: '6 min read',
    category: 'Africa Market Development',
    author: 'Naweza Consulting Investments (Pty) Ltd'
  },
  {
    id: '3',
    title: 'Structuring Bankable Financial Feasibility Models & Proposals',
    slug: 'structuring-bankable-financial-feasibility-models-proposals',
    excerpt: 'Essential components of a successful business proposal or funding application for commercial banks and development financial institutions.',
    content: 'Securing project debt or equity financing requires more than optimistic projections. A bankable feasibility study integrates sensitivity analysis, clear capex/opex breakdowns, market demand validation, and risk mitigation strategies tailored to local economic conditions...',
    publishDate: 'July 2026',
    readTime: '5 min read',
    category: 'Finance & Strategy',
    author: 'Naweza Advisory Team'
  }
];

export const CONTACT_MAILBOXES = [
  { label: 'General Enquiries (Primary)', email: 'info@nawezaconsulting.com', role: 'Main Brand & Information' },
  { label: 'Sales & Proposals', email: 'sales@nawezaconsulting.com', role: 'Commercial Enquiries & Proposals' },
  { label: 'Africa Market Development', email: 'africa@nawezaconsulting.com', role: 'International & SADC Projects' },
  { label: 'Research & Feasibility', email: 'research@nawezaconsulting.com', role: 'Market Intelligence & Analysis' },
  { label: 'Projects & Advisory', email: 'projects@nawezaconsulting.com', role: 'Compliance, Tax & Business Plans' },
  { label: 'Consultations & Bookings', email: 'bookings@nawezaconsulting.com', role: 'Direct Calendar & Client Intake' },
];

export const PUBLIC_CONTACT_INFO = {
  primaryPhone: '+264 81 310 7977',
  whatsappNumber: '264813107977',
  whatsappUrl: 'https://wa.me/264813107977',
  primaryEmail: 'info@nawezaconsulting.com',
  salesEmail: 'sales@nawezaconsulting.com',
  location: 'Windhoek, Namibia (SADC Gateway)',
  socialLinks: {
    facebook: 'https://facebook.com/nawezaconsulting',
    instagram: 'https://instagram.com/nawezaconsulting',
    linkedin: 'https://linkedin.com/company/nawezaconsulting',
    whatsapp: 'https://wa.me/264813107977'
  }
};

