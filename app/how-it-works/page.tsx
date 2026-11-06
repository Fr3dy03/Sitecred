import { PageContainer } from '@/components/site-shell';

export default function HowItWorksPage() {
  return (
    <PageContainer>
      <div className="section-header">
        <div className="eyebrow">How it works</div>
        <h1 className="mt-3 text-4xl font-semibold text-site-text">From evidence to verifiable infrastructure assurance.</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          ['Step 1', 'Create a facility profile that captures operational context and governance boundaries.'],
          ['Step 2', 'Collect evidence and have an independent auditor validate the assessment scope and methodology.'],
          ['Step 3', 'Issue a signed credential and publish a tamper-evident reference to the BOT Chain record.'],
        ].map(([title, text]) => (
          <div key={title} className="card">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-site-blue-soft text-sm font-semibold text-site-blue">{title.split(' ')[1]}</div>
            <h2 className="text-xl font-semibold text-site-text">{title}</h2>
            <p className="mt-3 text-site-muted">{text}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
