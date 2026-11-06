export default function CredentialDetailPage() {
  return (
    <div className="card">
      <div className="eyebrow">Credential</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">SC-2025-0012</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {['Facility','Standard reference','Scope','Evidence references','Issuer signature','Blockchain record'].map((field) => (
          <div key={field} className="rounded-xl border border-site-border bg-site-secondary p-4">
            <div className="text-sm text-site-muted">{field}</div>
            <div className="mt-2 font-medium text-site-text">Available</div>
          </div>
        ))}
      </div>
    </div>
  );
}
