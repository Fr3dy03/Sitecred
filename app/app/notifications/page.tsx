export default function NotificationsPage() {
  return (
    <div className="card">
      <div className="eyebrow">Notifications</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Alerts and updates</h1>
      <div className="mt-6 space-y-3">
        {['Review due in 2 hours', 'Credential expiring in 30 days', 'New evidence uploaded by facility operator'].map((item) => (
          <div key={item} className="rounded-xl border border-site-border bg-site-secondary p-4 text-site-text">{item}</div>
        ))}
      </div>
    </div>
  );
}
