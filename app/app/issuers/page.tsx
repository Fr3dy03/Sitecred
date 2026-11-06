export default function IssuersPage() {
  return (
    <div className="card">
      <div className="eyebrow">Issuers</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Authorised issuers</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {['Apex Infrastructure Assurance','Northwind Audit Partners','BluePeak Review Group'].map((issuer) => (
          <div key={issuer} className="rounded-xl border border-site-border bg-site-secondary p-4">
            <div className="font-medium text-site-text">{issuer}</div>
            <div className="mt-2 text-sm text-site-muted">Status: approved</div>
          </div>
        ))}
      </div>
    </div>
  );
}
