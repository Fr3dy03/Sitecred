export default function NewFacilityPage() {
  return (
    <div className="card">
      <div className="eyebrow">Facility registration wizard</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Register a new facility</h1>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-site-border bg-site-secondary p-4"><div className="text-sm text-site-muted">Step 1</div><div className="mt-2 font-medium text-site-text">Facility identity</div></div>
        <div className="rounded-2xl border border-site-border bg-site-secondary p-4"><div className="text-sm text-site-muted">Step 2</div><div className="mt-2 font-medium text-site-text">Operator organisation</div></div>
        <div className="rounded-2xl border border-site-border bg-site-secondary p-4"><div className="text-sm text-site-muted">Step 3</div><div className="mt-2 font-medium text-site-text">Category</div></div>
        <div className="rounded-2xl border border-site-border bg-site-secondary p-4"><div className="text-sm text-site-muted">Step 4</div><div className="mt-2 font-medium text-site-text">Region</div></div>
      </div>
      <div className="mt-6 flex gap-3">
        <button className="btn-primary">Review and submit</button>
        <button className="btn-secondary">Save draft</button>
      </div>
    </div>
  );
}
