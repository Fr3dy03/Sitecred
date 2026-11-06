export default function ReportsPage() {
  return (
    <div className="card">
      <div className="eyebrow">Reports</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Downloadable assurance reports</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {['Facility summary CSV', 'Credential list PDF', 'Issuer list CSV', 'Verification appendix PDF'].map((item) => (
          <button key={item} className="rounded-xl border border-site-border bg-site-secondary p-4 text-left text-site-text">{item}</button>
        ))}
      </div>
    </div>
  );
}
