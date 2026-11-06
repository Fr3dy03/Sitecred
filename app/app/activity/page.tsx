export default function ActivityPage() {
  return (
    <div className="card">
      <div className="eyebrow">Activity</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Recent system activity</h1>
      <div className="mt-6 space-y-3">
        {['Credential issued for Northwind Compute Campus', 'Issuer approval refreshed for APAC region', 'Facility evidence uploaded by operator', 'Review assigned to audit team'].map((item) => (
          <div key={item} className="rounded-xl border border-site-border bg-site-secondary p-4 text-site-text">{item}</div>
        ))}
      </div>
    </div>
  );
}
