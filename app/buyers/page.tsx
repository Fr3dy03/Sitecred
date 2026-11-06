import { PageContainer } from '@/components/site-shell';

export default function BuyersPage() {
  return (
    <PageContainer>
      <div className="section-header">
        <div className="eyebrow">For buyers</div>
        <h1 className="mt-3 text-4xl font-semibold text-site-text">Inspect facility readiness before you commit.</h1>
      </div>
      <div className="card max-w-3xl">
        <ul className="space-y-4 text-site-muted">
          <li>• Check insurer-grade assurance coverage and current status</li>
          <li>• Review the evidence register and methodology used</li>
          <li>• Confirm issuer authority and the on-chain reference</li>
          <li>• Access a portable, auditable facility verification view</li>
        </ul>
      </div>
    </PageContainer>
  );
}
