export const siteConfig = {
  name: 'HomeHealthCPA',
  fullName: 'HomeHealthCPA · RTW Advisors',
  parentName: 'RTW Advisors',
  parentUrl: 'https://www.rtwadvisors.com',
  mainSiteUrl: 'https://www.rtwadvisors.ai',
  url: 'https://www.homehealthcpa.com',
  tagline: 'Accounting and tax for home health agencies — from a CPA focused on this business.',
  description:
    'Bookkeeping, tax preparation, and fractional CFO advisory for home health agencies. RTW Advisors is focused on home health — Medicare/Medicaid billing, EVV compliance, cost reports, LOC-funded payroll, and owner compensation — not general practice accounting.',
  niche: 'home health agencies',
  founder: {
    name: 'Askia Roberts',
    suffix: 'CPA',
    role: 'Founder',
    licensure: 'GA',
    licenseNumber: 'CPA038784',
  },
  contact: {
    // Same TaxDome self-serve onboarding as rtwadvisors.ai — no separate intake
    taxdomeSignup: 'https://client-center.rtwadvisors.com/login',
    getStarted: '/get-started',
    portal: 'https://client-center.rtwadvisors.com/login',
    email: 'aroberts@rtwadvisors.com',
  },
} as const;
