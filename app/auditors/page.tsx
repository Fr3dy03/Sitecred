import { PageContainer } from '@/components/site-shell';

export default function AuditorsPage() {
  return (
    <PageContainer>
      <div className="section-header">
        <div className="eyebrow">For auditors</div>
        <h1 className="mt-3 text-4xl font-semibold text-site-text">Review evidence with context and sign assurance.</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {['Assigned assessments', 'Scope validation', 'Signed approval'].map((title) => (
          <div key={title} className="card">
            <h2 className="text-xl font-semibold text-site-text">{title}</h2>
            <p className="mt-3 text-site-muted">Independent reviewers can confirm evidence, annotate findings and issue a signed, time-bounded credential.</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
