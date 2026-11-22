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

import { live } from './text';

export const site = {
  name: 'Martyn Sheridan',
  url: 'https://martynsheridan.com',
  email: 'martyn@martynsheridan.com',
  linkedin: 'https://www.linkedin.com/in/martynsheridan',
  location: 'Hampshire, UK',
  role: 'Commercial & Sales Director',
  employer: 'Ameresco UK',
  description:
    'Martyn Sheridan is Commercial & Sales Director at Ameresco UK. He has worked in sales for 30 years, including 15 in energy, and builds independent digital projects.',
};

/*
 * Copy below is drafted from Martyn's CV (2026). Facts and figures are his.
 * Wording is a draft for his approval. [[Marked]] items need a decision:
 * mostly whether Ameresco is comfortable with a figure being public.
 */
export const home = {
  headline: 'Thirty years in sales. Fifteen in energy. Still learning.',
  intro:
    'I have spent most of my career building sales teams, developing businesses and finding ways to turn opportunities into actual contracts. These days I am Commercial & Sales Director at Ameresco UK. I still enjoy the practical side of the job: getting the right people together, challenging what does not add up and finding a way forward.',
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
      line: 'I like building teams with a clear sense of what they are trying to win, and why.',
      points: [
        'Helped establish E.ON’s Energy Solutions business and built a national team of 25',
        'Experience of Miller Heiman, SPIN and Challenger, but no substitute for knowing your customer',
        'Combining good account management with a consistent approach to finding new business',
      ],
    },
    {
      code: 'C',
      title: 'Commercial',
      line: 'A deal has to work for the customer, the business and the people who will deliver it.',
      points: [
        'Experience of customer-funded projects, PPAs, PDAs, VPPAs and energy as a service',
        'Worked with the CEO and legal team to secure £100m of funding at eEnergy',
        'Helped move Ylem beyond gas-only PPAs and built a funded pipeline of over 400MW',
      ],
    },
    {
      code: 'P',
      title: 'Procurement & bids',
      line: 'Knowing when to pursue a bid, how to price it and when to say no matters as much as the tender response.',
      points: [
        'Secured four new public sector frameworks at Centrica and expanded framework access at Shawton',
        'Created a dedicated bid team at Centrica to improve capacity and focus',
        'Clear ownership, early risk reviews and an honest view of whether an opportunity is worth pursuing',
      ],
    },
    {
      code: 'M',
      title: 'Marketing',
      line: 'I enjoy the thinking behind a proposition as much as the sales conversation itself.',
      points: [
        'Worked on brands, websites and customer offers at Shawton and eEnergy',
        'Marketing should help the sales team start useful conversations, not just produce activity',
        'Spoken and written about energy solutions at industry events',
      ],
    },
  ],
  approach: [
    { step: 'Qualify', text: 'Is there a real customer need, funding and a sensible route to a decision? If not, I would rather know early.' },
    { step: 'Shape', text: 'Listen properly, understand the problem and involve the right people before deciding what to offer.' },
    { step: 'Propose', text: 'Explain the solution in plain English, including cost, funding, benefits and who carries the risk.' },
    { step: 'Negotiate', text: 'Be clear about what matters, keep the discussion constructive and avoid giving away value for nothing.' },
    { step: 'Deliver', text: 'A signed contract is only the start. The team delivering it needs to know exactly what has been agreed.' },
  ],
  pov: '[[The best ideas usually come from a straightforward question: what problem are we actually trying to solve?]]',
  povAttribution: '[[Draft personal perspective, for Martyn to approve]]',
  photos: [
    { caption: '[[On site: solar, battery or CHP project]]', ratio: 'wide' },
    { caption: '[[Speaking at an industry event]]', ratio: 'tall' },
  ],
  aboutTeaser:
    'I started out selling advertising, studied film at university and spent a good few years playing rugby. These days it is energy, commercial leadership and an increasing curiosity about what I can build with AI. I still enjoy a decent barbecue.',
};

export const about = {
  headline: 'A bit more about me.',
  paragraphs: [
    'I started my sales career in 1997, selling advertising for the Southern Daily Echo. It is a long way from the energy projects I work on now, but the basics have not changed much. You need to understand your customer, know what you are selling and be prepared to ask for the business. After several years in media and corporate sales, I joined E.ON in 2011 and moved into energy.',
    'I helped set up E.ON’s Energy Solutions business and went on to lead sales and commercial teams at eEnergy, Ylem and Shawton, as well as Centrica Business Solutions. I have worked in large corporates, listed businesses and private equity-backed companies. Each is different, but I keep coming back to the same things: good people, a clear proposition, sensible processes and knowing which opportunities are worth the effort.',
    'I am interested in what technology can do for people who are not developers. I use AI in my day-to-day work for analysis, planning and testing ideas, and I have started building my own websites and tools. Some are useful already; others are experiments. The projects on this site are independent of my role at Ameresco.',
  ],
  interests: [
    'Rugby has been a big part of my life. I played and captained teams, including Southampton RFC, and have been involved in coaching.',
    'I studied Film at Solent University. I still enjoy films and the stories behind them.',
    'I enjoy cooking, particularly a proper barbecue.',
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
      'I lead sales, commercial, procurement, bid management and marketing across the UK business. My focus is on building the right team, improving how we choose and manage opportunities, and helping the business grow sensibly.',
    wins: [
      'Worked on the sales and commercial structure, with clearer pipeline reporting and bid reviews',
      '[[Built the grid scale team, now pursuing 1GW of ground-mount battery and solar projects]]',
      '[[300MW battery storage project closed and in pre-construction]]',
    ],
  },
  {
    period: 'Jun 2025 to Jan 2026',
    role: 'Non-Executive Board Member',
    org: 'Grid Edge',
    summary:
      'I served as a non-executive board member at an energy technology business backed by Centrica, helping the team think through growth, pricing and how its tools would work for customers.',
    wins: [
      'Helped assess how the platform could support customers with complex, multi-site energy needs',
      'Advised on pricing, partnerships and the fit with wider energy solutions',
    ],
  },
  {
    period: 'Jan 2025 to Jan 2026',
    role: 'Sales Director, UK & Ireland',
    org: 'Centrica Business Solutions',
    summary:
      'Led UK and Ireland sales for projects combining CHP, solar, heat pumps, batteries and microgrids, with a mix of customer and third-party funding.',
    wins: [
      'Exceeded 2025 financial objectives by Q3, with more than £200m of reported revenue',
      'Built a sales pipeline exceeding £800m, including more than £200m of weighted opportunities',
      'Refocused public sector sales, secured four frameworks and set up a dedicated bid team',
    ],
  },
  {
    period: 'Nov 2023 to Jan 2025',
    role: 'Sales & Marketing Director, board member',
    org: 'Shawton Energy',
    summary:
      'At Shawton I was responsible for sales and marketing of funded solar and battery projects, as part of the board team.',
    wins: [
      'Tripled the solar pipeline to more than 200MWp',
      'Closed 12MWp of projects in 2024',
      'Worked with the CEO on a virtual PPA offer, and led a new proposition, brand and website',
    ],
  },
  {
    period: 'Aug 2021 to Nov 2023',
    role: 'Group Sales & Marketing Director, board member',
    org: 'Ylem Energy',
    summary:
      'Worked with the team to take Ylem beyond gas-only PPAs into a broader mix of renewable and energy efficiency solutions.',
    wins: [
      'Built a funded pipeline of more than 400MW across around 150 projects',
      'Integrated an energy efficiency business, with EBITDA increasing 145% in its first year',
      'Recruited and retained the senior sales team',
    ],
  },
  {
    period: 'Dec 2019 to Aug 2021',
    role: 'Group Commercial & Sales Director, board member',
    org: 'eEnergy plc',
    summary:
      'Helped build the eEnergy brand and its energy-as-a-service offer in a newly listed business.',
    wins: [
      'Delivered 132% of financial target during the COVID-19 period',
      'Worked with the CEO and legal team to secure £100m of funding',
      'Supported two acquisitions',
    ],
  },
  {
    period: 'Oct 2011 to Dec 2019',
    role: 'Head of National Sales & Energy Solutions; earlier Key Account Manager',
    org: 'E.ON',
    summary:
      'Helped establish E.ON’s Energy Solutions business and led a national team of 25, alongside work with major customers across Europe.',
    wins: [
      'Built a UK pipeline reported at £4.2bn over 36 months',
      'Reported £1.2bn of sales in 2018, 138% of target',
      'Worked with international customers, including DS Smith across four countries',
    ],
  },
  {
    period: '1997 to 2011',
    role: 'Sales leadership, before energy',
    org: 'Regus, Thomson Local, AA Publishing, Wilson Publications, Southern Daily Echo',
    summary:
      'Started in advertising and publishing before moving into corporate accounts at Regus, where I led a team working with major UK businesses.',
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

// Live builds only list projects whose details have been confirmed.
export const publicProjects = projects.filter((p) => p.visibility === 'public' && live(p.summary));
export const featuredProjects = publicProjects.filter((p) => p.featured);
