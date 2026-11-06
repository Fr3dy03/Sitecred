import { reviewQueue } from '@/lib/site-data';

export default function ReviewsPage() {
  return (
    <div className="card">
      <div className="eyebrow">Review queue</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Assigned assessments</h1>
      <div className="mt-6 space-y-4">
        {reviewQueue.map((item) => (
          <div key={item.client} className="rounded-2xl border border-site-border bg-site-secondary p-4">
            <div className="flex items-center justify-between">
              <div className="font-medium text-site-text">{item.client}</div>
              <span className="status-badge bg-site-amber-soft text-site-amber">{item.status}</span>
            </div>
            <div className="mt-2 text-sm text-site-muted">{item.facility} · {item.due}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
