export const publicNav = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/facility-operators', label: 'Operators' },
  { href: '/auditors', label: 'Auditors' },
  { href: '/buyers', label: 'Buyers' },
  { href: '/credential-standards', label: 'Standards' },
  { href: '/verification', label: 'Verification' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export const appNav = [
  { href: '/app', label: 'Overview' },
  { href: '/app/facilities', label: 'Facilities' },
  { href: '/app/credentials', label: 'Credentials' },
  { href: '/app/issuers', label: 'Issuers' },
  { href: '/app/reviews', label: 'Review Queue' },
  { href: '/app/verification', label: 'Verification' },
  { href: '/app/activity', label: 'Activity' },
  { href: '/app/reports', label: 'Reports' },
  { href: '/app/settings', label: 'Settings' },
];

export const facilityPassport = {
  facility: 'Northwind Compute Campus',
  region: 'Frankfurt, DE',
  issuer: 'Apex Infrastructure Assurance',
  categories: ['Power redundancy', 'Cooling systems', 'Physical access', 'Operations'],
  validUntil: '2026-12-31',
  status: 'Verified',
  reference: 'SC-2025-0114',
};

export const metrics = [
  { label: 'Facilities', value: '184', change: '+12%' },
  { label: 'Active credentials', value: '326', change: '+8%' },
  { label: 'Expiring soon', value: '19', change: '-3%' },
  { label: 'Pending reviews', value: '11', change: '+2%' },
];

export const marketHighlights = [
  { title: 'Operational assurance', text: 'Document facility availability, power, cooling and resilience in a single portable record.' },
  { title: 'Independent validation', text: 'Auditors can review evidence, add context and issue signed settlement-grade credentials.' },
  { title: 'Buyer confidence', text: 'Compute buyers can inspect a verified facility passport before commercial commitment.' },
];

export const workflows = [
  { title: 'Facility operator', steps: ['Register profile', 'Submit evidence', 'Coordinate reviews', 'Issue renewal when required'] },
  { title: 'Independent auditor', steps: ['Open assigned review', 'Validate evidence', 'Add findings and approval', 'Sign credential'] },
  { title: 'Infrastructure buyer', steps: ['Search by facility or issuer', 'Review passport and status', 'Verify on-chain record', 'Assess risk'] },
];

export const faqs = [
  { q: 'Does SiteCred certify physical performance?', a: 'No. SiteCred records structured assurance evidence and lifecycle status; it does not replace the need for direct inspection or a certification authority.' },
  { q: 'Where is sensitive facility data stored?', a: 'Sensitive evidence remains off-chain in encrypted storage while on-chain records only contain verifiable references and hashes.' },
  { q: 'Can credentials be renewed or superseded?', a: 'Yes. The lifecycle supports expiry, renewal, suspension, revocation and supersession with a clear historical trail.' },
];

export const facilityRows = [
  { name: 'Northwind Compute Campus', operator: 'Northwind Infra', region: 'Frankfurt, DE', type: 'Colocation', credentials: 8, review: '2025-03-18', status: 'Verified' },
  { name: 'Aster Grid Hub', operator: 'AsterOps', region: 'Singapore, SG', type: 'Edge Cloud', credentials: 5, review: '2025-03-12', status: 'Expiring' },
  { name: 'Horizon Peak Data Park', operator: 'Horizon Peak', region: 'Dallas, US', type: 'Hyperscale', credentials: 11, review: '2025-02-28', status: 'Under review' },
  { name: 'Blue Delta Campus', operator: 'Blue Delta', region: 'Toronto, CA', type: 'Carrier', credentials: 4, review: '2025-03-22', status: 'Verified' },
];

export const credentialRows = [
  { id: 'SC-2025-0012', facility: 'Northwind Compute Campus', type: 'Power redundancy', status: 'Active', expiry: '2026-12-31' },
  { id: 'SC-2025-0031', facility: 'Aster Grid Hub', type: 'Cooling systems', status: 'Expiring', expiry: '2025-08-31' },
  { id: 'SC-2025-0074', facility: 'Horizon Peak', type: 'Physical access', status: 'Under review', expiry: '2026-04-25' },
  { id: 'SC-2025-0090', facility: 'Blue Delta', type: 'Resilience', status: 'Revoked', expiry: '2025-06-15' },
];

export const reviewQueue = [
  { client: 'Lattice Compute', facility: 'Northwind Compute Campus', due: '2h', risk: 'Medium', status: 'Pending' },
  { client: 'Vanta Stack', facility: 'Aster Grid Hub', due: '6h', risk: 'High', status: 'Pending' },
  { client: 'Signal Grid', facility: 'Horizon Peak Data Park', due: '1d', risk: 'Medium', status: 'Escalated' },
];

export const verificationChecks = [
  'Issuer authority was validated',
  'Credential hash matches signed record',
  'Scope and coverage remained in force',
  'Expiry interval is current',
  'Status change log is consistent',
];
