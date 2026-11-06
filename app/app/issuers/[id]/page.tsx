export default function IssuerDetailPage() {
  return (
    <div className="card">
      <div className="eyebrow">Issuer</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Apex Infrastructure Assurance</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-site-border bg-site-secondary p-4"><div className="text-sm text-site-muted">Authorisation</div><div className="mt-2 font-medium text-site-text">Approved</div></div>
        <div className="rounded-xl border border-site-border bg-site-secondary p-4"><div className="text-sm text-site-muted">Credentials issued</div><div className="mt-2 font-medium text-site-text">120</div></div>
        <div className="rounded-xl border border-site-border bg-site-secondary p-4"><div className="text-sm text-site-muted">Regions</div><div className="mt-2 font-medium text-site-text">EU, US, APAC</div></div>
      </div>
    </div>
  );
}
