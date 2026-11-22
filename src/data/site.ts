/**
 * Prototype content model.
 *
 * In Phase 3 this moves to Supabase (content_pages, experience_entries,
 * projects, project_pages) and is edited from /admin. Until then it lives
 * here so the prototype can render real layouts.
 *
 * Anything with `tbc: true`, or text wrapped in [[double brackets]], is
 * PLACEHOLDER and must be confirmed by Martyn before publication.
 */

export const site = {
  name: 'Martyn Sheridan',
  url: 'https://martynsheridan.com',
  email: 'martyn@martynsheridan.com',
  linkedin: 'https://www.linkedin.com/in/martynsheridan',
  location: 'Hampshire, UK',
  role: 'Commercial & Sales Director',
  employer: 'Ameresco UK',
  description:
    'Martyn Sheridan is a board-level sales and commercial leader in UK and European energy, currently Commercial & Sales Director at Ameresco UK.',
};

/*
 * Copy below is drafted from Martyn's CV (2026). Facts and figures are his.
 * Wording is a draft for his approval. [[Marked]] items need a decision:
 * mostly whether Ameresco is comfortable with a figure being public.
 */
export const home = {
  headline: 'I turn energy pipelines into signed contracts.',
  intro:
    'Board-level sales and commercial leader in UK and European energy. I have built pipelines into the billions, led teams delivering £200m+ a year, and sat on the boards of listed, private equity-backed and blue-chip businesses. Today I run sales, commercial, procurement, bids and marketing at Ameresco UK.',
  metrics: [
    { value: '£1.2', unit: 'bn', label: 'Sales closed in a single year (E.ON, 2018)' },
    { value: '£4.2', unit: 'bn', label: 'UK pipeline built in 36 months' },
    { value: '£200', unit: 'm+', label: 'Annual revenue led (Centrica, 2025)' },
    { value: '4', unit: 'boards', label: 'Executive and non-executive board roles' },
  ],
  sectors: [
    'NHS & public sector',
    'Manufacturing',
    'Food & drink',
    'Pharma & chemicals',
    'Data centres',
    'Education',
    'Defence',
    'Grid scale',
  ],
  capabilities: [
    {
      code: 'S',
      title: 'Sales leadership',
      line: 'Building teams that find, qualify and close complex energy deals.',
      points: [
        'Built E.ON’s national energy solutions sales team of 25 from scratch',
        'Trained in Miller Heiman, SPIN and Challenger, and have rolled them out to teams',
        'Outbound engines that blend in-house and freelance specialists',
      ],
    },
    {
      code: 'C',
      title: 'Commercial',
      line: 'Funded propositions and deal structures that work for both sides.',
      points: [
        'Customer-funded and third-party-funded models: PPAs, PDAs, VPPAs, energy as a service',
        'Secured £100m of funding at eEnergy, working with the CEO',
        '400MW funded pipeline worth £500m of EBITDA at Ylem Energy',
      ],
    },
    {
      code: 'P',
      title: 'Procurement & bids',
      line: 'Bid governance and framework access that turn public sector demand into contracts.',
      points: [
        'Four new public sector frameworks secured at Centrica, plus CCS at Shawton',
        'A “bid squad” model that added eight bids a year and a forecast £50m+ uplift',
        'Tighter bid governance for complex, multi-technology projects',
      ],
    },
    {
      code: 'M',
      title: 'Marketing',
      line: 'Propositions, brands and campaigns that feed the pipeline.',
      points: [
        'New value propositions, brand guidelines and websites at Shawton and eEnergy',
        'Digital marketing and PR agencies briefed and held to pipeline outcomes',
        'Speaker and author at EMEX, edie, FM Inspired and CBI events',
      ],
    },
  ],
  approach: [
    { step: 'Qualify', text: 'Real need, real budget, a route to contract. If one is missing, walk away early and spend the time elsewhere.' },
    { step: 'Shape', text: 'Get in front of the customer before the tender lands, so the brief reflects what actually works.' },
    { step: 'Propose', text: 'A clear commercial offer: what it costs, what it saves, how it is funded and who carries which risk.' },
    { step: 'Negotiate', text: 'Trade, do not concede. Protect the margin and the relationship together.' },
    { step: 'Deliver', text: 'Hand over cleanly to delivery and stay close enough to win the next one.' },
  ],
  pov: '[[Net zero is a commercial problem before it is a technical one.]]',
  povAttribution: '[[Draft line. Replace with something you actually say in a board meeting.]]',
  photos: [
    { caption: '[[On site: solar, battery or CHP project]]', ratio: 'wide' },
    { caption: '[[Speaking at an industry event]]', ratio: 'tall' },
  ],
  aboutTeaser:
    'Former rugby captain, film graduate, energy salesman. I lead from the front, say what I think and stay calm when it is time to close. Outside work I coach rugby and take barbecue very seriously.',
};

export const about = {
  headline: 'Nearly thirty years of selling. The last fifteen in energy.',
  paragraphs: [
    'I started in 1997 selling advertising for the Southern Daily Echo. Publishing taught me the basics that still matter: pick up the phone, earn the meeting, ask for the order. Regus took me into the boardrooms of the UK’s top 2,000 companies, and in 2011 I joined E.ON and found the market I have stayed in ever since.',
    'At E.ON I was one of two people who set up the Energy Solutions business, building a national team that moved from selling supply contracts to selling value: solar, CHP, batteries and efficiency. In 2018 that team closed £1.2bn, 138% of target. Since then I have sat on the boards of growth businesses backed by public markets and private equity (eEnergy, Ylem Energy, Shawton Energy), led UK and Ireland sales at Centrica Business Solutions, and served as a non-executive director at the energy AI business Grid Edge.',
    'I am not a developer, but I use AI every day: to analyse pipeline, stress-test pricing, draft board papers and sharpen messaging. I also use it to build simple tools myself, which is what you will find under Projects. They are my own work, built in my own time.',
  ],
  interests: [
    'Rugby. Captained Southampton RFC, played for Berkshire U18s, had an England Universities trial. Now I coach.',
    'Film. I have a degree in it (BA Hons, Solent University) and still watch and read about it far too much.',
    'Cooking, and barbecue in particular.',
  ],
};

export type ExperienceEntry = {
  period: string;
  role: string;
  org: string;
  summary: string;
  wins: string[];
};

export const experience: ExperienceEntry[] = [
  {
    period: 'May 2026 to present',
    role: 'Commercial & Sales Director',
    org: 'Ameresco UK',
    summary:
      'Reporting to the UK Managing Director, responsible for sales, commercial, procurement, bid management and marketing across public sector, I&C, grid scale and emerging markets.',
    wins: [
      'Reshaped the sales and commercial structure, with clearer pipeline, CRM and bid governance',
      '[[Built the grid scale team, now pursuing 1GW of ground-mount battery and solar projects]]',
      '[[300MW battery storage project closed and in pre-construction]]',
    ],
  },
  {
    period: 'Jun 2025 to Jan 2026',
    role: 'Non-Executive Board Member',
    org: 'Grid Edge',
    summary:
      'Board role at an energy AI business backed by Centrica, advising on growth strategy, pricing and how the platform fits funded energy projects.',
    wins: [
      'Aligned the platform with customer propositions for the NHS, manufacturing and multi-site estates',
      'Commercial input on pricing, upsell and cross-sell across solar, CHP, battery and microgrid projects',
    ],
  },
  {
    period: 'Jan 2025 to Jan 2026',
    role: 'Sales Director, UK & Ireland',
    org: 'Centrica Business Solutions',
    summary:
      'Led sales for large, integrated energy solutions (CHP, solar, heat pumps, batteries and microgrids), on both customer-funded and Centrica-funded models.',
    wins: [
      'Beat 2025 financial objectives by Q3, delivering £200m+ revenue ahead of plan',
      'Built an £800m+ pipeline with £200m+ weighted',
      'Relaunched public sector: four new frameworks and a bid squad worth a forecast £50m+',
    ],
  },
  {
    period: 'Nov 2023 to Jan 2025',
    role: 'Sales & Marketing Director, board member',
    org: 'Shawton Energy',
    summary:
      'Board role reporting to the CEO and Lazard Asset Management, with P&L responsibility for funded solar and battery projects for large energy users.',
    wins: [
      'Tripled the pipeline to more than 200MWp',
      '12MWp closed in 2024',
      'New proposition, brand and website, plus a virtual PPA developed with the CEO',
    ],
  },
  {
    period: 'Aug 2021 to Nov 2023',
    role: 'Group Sales & Marketing Director, board member',
    org: 'Ylem Energy',
    summary:
      'Led the move from gas-only PPAs to a renewables-led portfolio: solar, hydrogen-ready CHP, batteries, efficiency and O&M.',
    wins: [
      'Built a 400MW+ funded pipeline worth £500m of EBITDA across 150 projects',
      'Integrated a sister efficiency business, lifting its EBITDA 145% in year one',
      '100% retention of the senior sales team',
    ],
  },
  {
    period: 'Dec 2019 to Aug 2021',
    role: 'Group Commercial & Sales Director, board member',
    org: 'eEnergy plc',
    summary:
      'Board role in a newly listed, acquisitive business. Built the eEnergy brand and its Light and Heat as a Service model with the CEO.',
    wins: [
      '132% of financial targets through COVID-19',
      'Secured £100m of funding with the CEO and legal team',
      'Supported two acquisitions',
    ],
  },
  {
    period: 'Oct 2011 to Dec 2019',
    role: 'Head of National Sales & Energy Solutions; earlier Key Account Manager',
    org: 'E.ON',
    summary:
      'One of two people who set up E.ON’s Energy Solutions business. Led a national team of 25 and an international key account team covering Europe’s largest energy users.',
    wins: [
      '£4.2bn UK pipeline built in 36 months',
      '£1.2bn sales in 2018, 138% of target',
      '£27m (2018) and £38m (2019) from strategic customers, including DS Smith across four countries',
    ],
  },
  {
    period: '1997 to 2011',
    role: 'Sales leadership, before energy',
    org: 'Regus, Thomson Local, AA Publishing, Wilson Publications, Southern Daily Echo',
    summary:
      'Fourteen years in media and workplace sales, ending as Director of Corporate Accounts at Regus, selling to the UK’s top 2,000 companies.',
    wins: [],
  },
];

export const qualifications = [
  'BA (Hons) Film Studies, 2:1, Solent University',
  'Structured sales training: Miller Heiman, SPIN Selling, Challenger',
];

export type Visibility = 'draft' | 'public' | 'unlisted' | 'private' | 'archived';
export type Protection = 'none' | 'portal-only' | 'end-to-end';

export type Project = {
  slug: string;
  name: string;
  type: 'Website' | 'Calculator' | 'Web app' | 'Document' | 'Prototype';
  status: string;
  visibility: Visibility;
  featured: boolean;
  updated: string;
  layout: 'feature' | 'notes';
  summary: string;
  purpose: string;
  audience: string;
  features: string[];
  link?: { url: string; label: string; protection: Protection };
  documents?: { name: string; size: string }[];
};

// Project names come from the brief. Descriptions, status and visibility
// are placeholders: the brief says not to assume any are published at launch.
export const projects: Project[] = [
  {
    slug: 'uk-solar-calculator',
    name: 'UK Solar Calculator',
    type: 'Calculator',
    status: '[[Status to confirm]]',
    visibility: 'public',
    featured: true,
    updated: '[[Month Year]]',
    layout: 'feature',
    summary:
      '[[A web calculator for estimating solar PV generation and savings for UK sites. Confirm description.]]',
    purpose:
      '[[What problem it solves and why it was built. Two or three sentences.]]',
    audience: '[[Who it is for]]',
    features: ['[[Feature one]]', '[[Feature two]]', '[[Feature three]]'],
    link: { url: '#', label: 'Open the calculator', protection: 'none' },
  },
  {
    slug: 'hh-insights',
    name: 'HH Insights',
    type: 'Web app',
    status: '[[Status to confirm]]',
    visibility: 'public',
    featured: true,
    updated: '[[Month Year]]',
    layout: 'notes',
    summary:
      '[[A tool for turning half-hourly meter data into usable insight. Confirm description.]]',
    purpose:
      '[[What problem it solves and why it was built. Two or three sentences.]]',
    audience: '[[Who it is for]]',
    features: ['[[Feature one]]', '[[Feature two]]', '[[Feature three]]'],
    link: { url: '#', label: 'Visit HH Insights', protection: 'none' },
    documents: [{ name: '[[Overview document]].pdf', size: '1.2 MB' }],
  },
  {
    slug: 'hospital-energy-insights',
    name: 'Hospital Energy Insights',
    type: 'Prototype',
    status: 'In testing',
    visibility: 'private',
    featured: false,
    updated: '[[Month Year]]',
    layout: 'feature',
    summary: '[[Private prototype. Shown here only to demonstrate the access gateway.]]',
    purpose: '',
    audience: 'Invited testers',
    features: [],
    link: { url: '#', label: 'Open prototype', protection: 'portal-only' },
  },
];

export const publicProjects = projects.filter((p) => p.visibility === 'public');
export const featuredProjects = publicProjects.filter((p) => p.featured);
