export default function SettingsPage() {
  return (
    <div className="card">
      <div className="eyebrow">Settings</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Account and organisation settings</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <input className="rounded-xl border border-site-border bg-site-secondary px-3 py-2" placeholder="Organisation name" />
        <input className="rounded-xl border border-site-border bg-site-secondary px-3 py-2" placeholder="Primary contact" />
      </div>
      <div className="mt-6"><button className="btn-primary">Save settings</button></div>
    </div>
  );
}
