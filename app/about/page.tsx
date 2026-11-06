import { PageContainer } from '@/components/site-shell';

export default function AboutPage() {
  return (
    <PageContainer>
      <div className="section-header">
        <div className="eyebrow">About</div>
        <h1 className="mt-3 text-4xl font-semibold text-site-text">SiteCred keeps evidence and lifecycle status aligned.</h1>
      </div>
      <div className="card max-w-3xl">
        <p className="text-site-muted">SiteCred is a facility assurance passport and verification platform for physical infrastructure used by data centres, distributed compute networks and enterprise infrastructure operators. It supports reviewable evidence, issuer declarations and a live credential lifecycle for buyers and operators.</p>
      </div>
    </PageContainer>
  );
}
