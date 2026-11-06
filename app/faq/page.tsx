import { PageContainer } from '@/components/site-shell';
import { faqs } from '@/lib/site-data';

export default function FAQPage() {
  return (
    <PageContainer>
      <div className="section-header">
        <div className="eyebrow">FAQ</div>
        <h1 className="mt-3 text-4xl font-semibold text-site-text">Questions about assurance, review and verification.</h1>
      </div>
      <div className="space-y-5">
        {faqs.map((item) => (
          <div key={item.q} className="card">
            <h2 className="text-xl font-semibold text-site-text">{item.q}</h2>
            <p className="mt-3 text-site-muted">{item.a}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
