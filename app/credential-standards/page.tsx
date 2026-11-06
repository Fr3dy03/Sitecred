import { PageContainer } from '@/components/site-shell';

export default function StandardsPage() {
  return (
    <PageContainer>
      <div className="section-header">
        <div className="eyebrow">Credential standards</div>
        <h1 className="mt-3 text-4xl font-semibold text-site-text">Compatibility with operational and industry standards.</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {['ISO/IEC 22237', 'Uptime Institute assessment patterns', 'Provider operations due diligence', 'Infrastructure risk-scoring frameworks'].map((item) => (
          <div key={item} className="card"><h2 className="text-lg font-semibold text-site-text">{item}</h2></div>
        ))}
      </div>
    </PageContainer>
  );
}
