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
  linkedin: '[[LinkedIn profile URL to confirm]]',
  location: 'Hampshire, UK',
  role: 'Commercial & Sales Director',
  employer: 'Ameresco UK',
  description:
    'Martyn Sheridan, Commercial & Sales Director at Ameresco UK. Commercial leadership in the energy sector, alongside independent digital projects.',
};

export const home = {
  // Proposed positioning copy. Not approved final wording.
  headline: '[[Commercial leadership that turns decarbonisation into signed contracts.]]',
  intro:
    '[[Commercial & Sales Director at Ameresco UK. Around 30 years building pipelines, shaping deals and closing them, the last 15 in energy. I lead sales, commercial, procurement and marketing across public sector, I&C, grid scale and emerging technology projects.]]',
  // Headline figures. Values are placeholders until Martyn confirms them.
  metrics: [
    { value: '30', unit: 'yrs', label: 'Sales and commercial leadership' },
    { value: '15', unit: 'yrs', label: 'In the energy sector' },
    { value: '[[£000]]', unit: 'm', label: '[[Contract value secured, to confirm]]' },
    { value: '[[00]]', unit: '%', label: '[[Bid win rate, to confirm]]' },
  ],
  sectors: ['Public sector', 'Industrial & commercial', 'Grid scale', 'Emerging technologies', 'Decarbonisation'],
  capabilities: [
    {
      code: 'S',
      title: 'Sales leadership',
      line: 'Building pipeline, running bids and closing at board level.',
      points: ['[[Pipeline built and qualified against clear criteria]]', '[[Framework and direct-award public sector bids]]', '[[Senior stakeholder and board-level selling]]'],
    },
    {
      code: 'C',
      title: 'Commercial',
      line: 'Deal structure, risk and margin, so contracts work for both sides.',
      points: ['[[Contract structures: EPC, energy performance, PPAs]]', '[[Pricing, risk allocation and margin protection]]', '[[Negotiation through to financial close]]'],
    },
    {
      code: 'P',
      title: 'Procurement',
      line: 'Supply chain strategy that protects programme and price.',
      points: ['[[Supplier selection and framework management]]', '[[Cost certainty on capital projects]]', '[[Compliance with public procurement rules]]'],
    },
    {
      code: 'M',
      title: 'Marketing',
      line: 'Positioning and campaigns that put the business in the room early.',
      points: ['[[Proposition and market positioning]]', '[[Campaigns that feed the sales pipeline]]', '[[Thought leadership and events]]'],
    },
  ],
  approach: [
    { step: 'Qualify', text: '[[Is there a real need, budget and route to contract? If not, walk away early.]]' },
    { step: 'Shape', text: '[[Work the problem with the client before the tender lands, so the spec reflects what works.]]' },
    { step: 'Propose', text: '[[A clear commercial offer: what it costs, what it saves, who carries which risk.]]' },
    { step: 'Negotiate', text: '[[Trade, do not concede. Protect margin and the relationship together.]]' },
    { step: 'Deliver', text: '[[Hand over cleanly to delivery and stay close enough to win the next one.]]' },
  ],
  // Proposed point-of-view line for the statement band. Not approved.
  pov: '[[Net zero is a commercial problem before it is a technical one.]]',
  povAttribution: '[[A line Martyn would say in a board meeting. To confirm.]]',
  photos: [
    { caption: '[[On site: solar canopy, public sector client]]', ratio: 'wide' },
    { caption: '[[Board presentation or speaking event]]', ratio: 'tall' },
  ],
  aboutTeaser:
    '[[A short, direct paragraph on how Martyn works with boards and leadership teams. To be written with Martyn.]]',
};

export const about = {
  paragraphs: [
    '[[Opening paragraph: professional interests and what draws Martyn to commercial work in energy. To be written with Martyn.]]',
    '[[Second paragraph: background, how the career developed and the move into the energy sector around 15 years ago.]]',
    '[[Third paragraph: why he builds digital tools, and a little personal context (interests outside work). No family details.]]',
  ],
  interests: ['[[Interest one]]', '[[Interest two]]', '[[Interest three]]'],
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
    period: '[[Year]] to present',
    role: 'Commercial & Sales Director',
    org: 'Ameresco UK',
    summary:
      '[[Scope of the role in one or two sentences: sales, commercial, procurement and marketing across public sector, I&C, grid scale and emerging sector projects. Confirm wording.]]',
    wins: ['[[Key result with a number, to confirm]]', '[[Second key result, to confirm]]'],
  },
  {
    period: '[[Years]]',
    role: '[[Role]]',
    org: '[[Employer]]',
    summary: '[[One line on scope and one notable result. To confirm.]]',
    wins: ['[[Key result with a number, to confirm]]', '[[Second key result, to confirm]]'],
  },
  {
    period: '[[Years]]',
    role: '[[Role]]',
    org: '[[Employer]]',
    summary: '[[One line on scope and one notable result. To confirm.]]',
    wins: ['[[Key result with a number, to confirm]]', '[[Second key result, to confirm]]'],
  },
  {
    period: '[[Years]]',
    role: '[[Earlier roles, grouped]]',
    org: '[[Employers]]',
    summary: '[[Optional grouped line for the early career.]]',
    wins: ['[[Key result with a number, to confirm]]', '[[Second key result, to confirm]]'],
  },
];

export const qualifications = ['[[Qualification or membership, to confirm]]'];

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
