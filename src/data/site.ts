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
  // Brief 3.1 suggested copy. Not approved final wording.
  intro:
    '[[Commercial & Sales Director at Ameresco UK. A career in commercial leadership and the energy sector, alongside an interest in building practical digital tools and independent projects.]]',
  inBrief: [
    { label: 'Now', value: 'Commercial & Sales Director, Ameresco UK' },
    { label: 'Career', value: 'Around 30 years in sales and commercial roles' },
    { label: 'Sector', value: '15 years in energy, focused on decarbonisation' },
    { label: 'On the side', value: 'Building practical digital tools, independently of my employer' },
  ],
  aboutTeaser:
    '[[A short, natural paragraph about how Martyn works and what he is interested in. To be written with Martyn. No family details or home address.]]',
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
};

export const experience: ExperienceEntry[] = [
  {
    period: '[[Year]] to present',
    role: 'Commercial & Sales Director',
    org: 'Ameresco UK',
    summary:
      '[[Scope of the role in one or two sentences: sales, commercial, procurement and marketing across public sector, I&C, grid scale and emerging sector projects. Confirm wording.]]',
  },
  {
    period: '[[Years]]',
    role: '[[Role]]',
    org: '[[Employer]]',
    summary: '[[One line on scope and one notable result. To confirm.]]',
  },
  {
    period: '[[Years]]',
    role: '[[Role]]',
    org: '[[Employer]]',
    summary: '[[One line on scope and one notable result. To confirm.]]',
  },
  {
    period: '[[Years]]',
    role: '[[Earlier roles, grouped]]',
    org: '[[Employers]]',
    summary: '[[Optional grouped line for the early career.]]',
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
