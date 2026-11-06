import Link from 'next/link';
import { facilityPassport, faqs, marketHighlights, workflows } from '@/lib/site-data';
import { PageContainer } from '@/components/site-shell';

export default function HomePage() {
  return (
    <>
      <section className="page-section pb-10 pt-16 lg:pt-20">
        <div className="hero-grid relative overflow-hidden rounded-[32px] border border-site-border bg-[#F8F9F8] p-6 shadow-[0_30px_80px_rgba(17,24,39,0.06)] lg:p-10">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,_rgba(49,95,130,0.08),transparent_55%)] lg:block" />
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10">
              <div className="mb-5 inline-flex rounded-full border border-site-border bg-site-surface px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-site-blue">Infrastructure assurance</div>
              <h1 className="max-w-xl text-5xl font-semibold tracking-[-0.06em] text-site-text lg:text-6xl">Facility assurance that travels with the evidence.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-site-muted">
                Create, manage and independently verify infrastructure credentials across the distributed compute economy.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/app/facilities/new" className="btn-primary">Create Facility Passport</Link>
                <Link href="/verification" className="btn-secondary">Verify a Credential</Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-10 text-sm text-site-muted">
                <div><span className="text-[22px] font-semibold text-site-text">184</span> facilities</div>
                <div><span className="text-[22px] font-semibold text-site-text">326</span> active credentials</div>
                <div><span className="text-[22px] font-semibold text-site-text">98.6%</span> review readiness</div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[28px] border border-site-border bg-[#171d24] p-4 text-white shadow-[0_30px_80px_rgba(23,29,36,0.35)]">
                <div className="rounded-[22px] border border-white/10 bg-[#1d2630] p-4">
                  <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-slate-300">Facility Passport</div>
                      <div className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-white">{facilityPassport.facility}</div>
                    </div>
                    <span className="status-badge bg-site-green/15 text-[#9ae0b3]">{facilityPassport.status}</span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-slate-300">Region</div>
                      <div className="mt-2 text-sm font-medium text-white">{facilityPassport.region}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-slate-300">Issuer</div>
                      <div className="mt-2 text-sm font-medium text-white">{facilityPassport.issuer}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:col-span-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-slate-300">Credential categories</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {facilityPassport.categories.map((category) => (
                          <span key={category} className="rounded-full border border-site-blue/30 bg-site-blue/10 px-2.5 py-1 text-[10px] text-[#b8d8ee]">{category}</span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-slate-300">Validity</div>
                      <div className="mt-2 text-sm font-medium text-white">Until {facilityPassport.validUntil}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-slate-300">Reference</div>
                      <div className="mt-2 font-mono text-xs text-white">{facilityPassport.reference}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-8">
        <div className="grid gap-6 md:grid-cols-3">
          {marketHighlights.map((item) => (
            <article key={item.title} className="card">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-site-blue-soft text-lg text-site-blue">•</div>
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-site-text">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-site-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="section-header">
          <div className="eyebrow">Why it matters</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-site-text">Infrastructure assurance for high-trust procurement.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card bg-[#f7f9f8]">
            <h3 className="text-xl font-semibold tracking-[-0.04em] text-site-text">Fragmented facility evidence</h3>
            <p className="mt-3 text-site-muted">Operators hold proof across spreadsheets, records, audits and maintenance archives. SiteCred unifies those artifacts into a structured verification record and a portable facility passport.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold tracking-[-0.04em] text-site-text">Evidence without overclaiming</h3>
            <p className="mt-3 text-site-muted">The blockchain record confirms issuer identity, approval history and status changes. It does not replace physical inspection. SiteCred clearly separates declaration, evidence review and on-chain proof.</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-header">
          <div className="eyebrow">How SiteCred works</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-site-text">Three core workflows, one source of truth.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {workflows.map((workflow, index) => (
            <div key={workflow.title} className="card">
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-site-blue-soft text-sm font-semibold text-site-blue">0{index + 1}</div>
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-site-text">{workflow.title}</h3>
              <ul className="mt-4 space-y-3 text-site-muted">
                {workflow.steps.map((step) => (
                  <li key={step} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-site-blue" /> <span>{step}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="section-header">
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-site-text">Common questions from operators and buyers.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {faqs.map((item) => (
            <div key={item.q} className="card">
              <h3 className="text-lg font-semibold tracking-[-0.04em] text-site-text">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-site-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section pb-20">
        <div className="rounded-[32px] border border-site-border bg-[#edf3f5] p-10 text-center shadow-[0_30px_80px_rgba(17,24,39,0.04)]">
          <div className="eyebrow">The next step</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-site-text">Prepare your facility for verification and procurement.</h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/app/facilities/new" className="btn-primary">Create Facility Passport</Link>
            <Link href="/contact" className="btn-secondary">Book a demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
