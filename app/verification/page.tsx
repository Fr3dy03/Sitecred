import { PageContainer } from '@/components/site-shell';
import { verificationChecks } from '@/lib/site-data';
import { OnChainVerify } from '@/components/on-chain-verify';

export default function VerificationPage() {
  return (
    <PageContainer>
      <div className="section-header">
        <div className="eyebrow">Public verification</div>
        <h1 className="mt-3 text-4xl font-semibold text-site-text">Validate a credential by reference or direct URL.</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <OnChainVerify />
        <div className="card bg-site-secondary">
          <h3 className="text-xl font-semibold text-site-text">Current checks</h3>
          <ul className="mt-4 space-y-3 text-site-muted">
            {verificationChecks.map((check) => (
              <li key={check} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-site-green" /> {check}</li>
            ))}
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}
