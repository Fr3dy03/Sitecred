import Link from 'next/link';
import { PageContainer } from '@/components/site-shell';

export default function FacilityOperatorsPage() {
  return (
    <PageContainer>
      <div className="section-header">
        <div className="eyebrow">For facility operators</div>
        <h1 className="mt-3 text-4xl font-semibold text-site-text">Turn facility claims into portable assurance.</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-2xl font-semibold text-site-text">Manage compliance evidence</h2>
          <p className="mt-3 text-site-muted">Gather documents, reviews and maintenance records into one structured operating record and demonstrate readiness to buyers.</p>
        </div>
        <div className="card bg-site-secondary">
          <h2 className="text-2xl font-semibold text-site-text">Prepare for procurement</h2>
          <p className="mt-3 text-site-muted">Publish a clear facility passport that shows credential coverage, review status and current validity periods.</p>
        </div>
      </div>
      <div className="mt-8"><Link href="/app/facilities/new" className="btn-primary">Open facility onboarding</Link></div>
    </PageContainer>
  );
}
