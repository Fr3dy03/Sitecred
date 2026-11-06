export default function EditFacilityPage() {
  return (
    <div className="card">
      <div className="eyebrow">Edit facility</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Update facility profile</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <input className="rounded-xl border border-site-border bg-site-secondary px-3 py-2" placeholder="Facility name" />
        <input className="rounded-xl border border-site-border bg-site-secondary px-3 py-2" placeholder="Operator" />
      </div>
      <div className="mt-6"><button className="btn-primary">Save changes</button></div>
    </div>
  );
}
