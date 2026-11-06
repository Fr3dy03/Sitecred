import { PageContainer } from '@/components/site-shell';

export default function ContactPage() {
  return (
    <PageContainer>
      <div className="section-header">
        <div className="eyebrow">Contact</div>
        <h1 className="mt-3 text-4xl font-semibold text-site-text">Talk to the SiteCred team.</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold text-site-text">Sales</h2>
          <p className="mt-3 text-site-muted">sales@sitecred.com</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-site-text">Support</h2>
          <p className="mt-3 text-site-muted">support@sitecred.com</p>
        </div>
      </div>
    </PageContainer>
  );
}
