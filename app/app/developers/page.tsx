export default function DevelopersPage() {
  return (
    <div className="card">
      <div className="eyebrow">Developers</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Integration and API access</h1>
      <div className="mt-6 rounded-2xl border border-site-border bg-site-secondary p-4 font-mono text-sm text-site-text">
        GET /api/v1/facilities\nPOST /api/v1/credentials\nGET /api/v1/verify/:credentialId
      </div>
    </div>
  );
}
