import { PageContainer } from '@/components/site-shell';

export default function TermsPage() {
  return (
    <PageContainer>
      <div className="section-header">
        <div className="eyebrow">Terms</div>
        <h1 className="mt-3 text-4xl font-semibold text-site-text">Use of the SiteCred platform.</h1>
      </div>
      <div className="card max-w-3xl">
        <p className="text-site-muted">Users are responsible for the accuracy of information submitted, the authority of issuers and the governance of their organisation. SiteCred acts as a credential lifecycle and verification system, not a certification authority.</p>
      </div>
    </PageContainer>
  );
}
