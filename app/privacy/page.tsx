import { PageContainer } from '@/components/site-shell';

export default function PrivacyPage() {
  return (
    <PageContainer>
      <div className="section-header">
        <div className="eyebrow">Privacy</div>
        <h1 className="mt-3 text-4xl font-semibold text-site-text">Sensitive evidence remains off-chain and access-controlled.</h1>
      </div>
      <div className="card max-w-3xl">
        <p className="text-site-muted">SiteCred stores private evidence in controlled institutional storage, encrypts documents, records hashes on-chain, and applies access controls and retention rules to maintain confidentiality and auditability.</p>
      </div>
    </PageContainer>
  );
}
