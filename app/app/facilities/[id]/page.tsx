export default function FacilityDetailPage() {
  return (
    <div className="card">
      <div className="eyebrow">Facility details</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Northwind Compute Campus</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {['Overview','Infrastructure','Credentials','Evidence','Audits','Activity'].map((tab) => (
          <div key={tab} className="rounded-xl border border-site-border bg-site-secondary px-3 py-2 text-sm text-site-muted">{tab}</div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-site-border bg-site-secondary p-5">
        <div className="text-sm text-site-muted">Current status</div>
        <div className="mt-2 text-2xl font-semibold text-site-text">Verified</div>
      </div>
    </div>
  );
}
