export default function OrganisationPage() {
  return (
    <div className="card">
      <div className="eyebrow">Organisation</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Northwind Infrastructure Group</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-site-border bg-site-secondary p-4"><div className="text-sm text-site-muted">Members</div><div className="mt-2 font-medium text-site-text">28</div></div>
        <div className="rounded-xl border border-site-border bg-site-secondary p-4"><div className="text-sm text-site-muted">Facilities</div><div className="mt-2 font-medium text-site-text">12</div></div>
        <div className="rounded-xl border border-site-border bg-site-secondary p-4"><div className="text-sm text-site-muted">Region coverage</div><div className="mt-2 font-medium text-site-text">Europe + North America</div></div>
      </div>
    </div>
  );
}
