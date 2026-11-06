import Link from 'next/link';
import { facilityRows, metrics, reviewQueue } from '@/lib/site-data';

export default function AppOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="eyebrow">Overview</div>
        <h1 className="mt-2 text-3xl font-semibold text-site-text">Operations dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="card">
            <div className="text-sm text-site-muted">{metric.label}</div>
            <div className="mt-3 flex items-end justify-between">
              <div className="text-3xl font-semibold text-site-text">{metric.value}</div>
              <div className="text-xs font-medium text-site-green">{metric.change}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-8 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-site-text">Facilities</h2>
            <Link href="/app/facilities" className="text-sm text-site-blue">View all</Link>
          </div>
          <div className="space-y-3">
            {facilityRows.map((facility) => (
              <div key={facility.name} className="flex items-center justify-between border-b border-site-border pb-3 last:border-b-0">
                <div>
                  <div className="font-medium text-site-text">{facility.name}</div>
                  <div className="text-sm text-site-muted">{facility.region}</div>
                </div>
                <div className="text-right text-sm text-site-muted">
                  <div>{facility.status}</div>
                  <div>{facility.credentials} credentials</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-site-text">Review queue</h2>
          <div className="mt-4 space-y-3">
            {reviewQueue.map((item) => (
              <div key={item.client} className="rounded-xl border border-site-border bg-site-secondary p-3">
                <div className="font-medium text-site-text">{item.client}</div>
                <div className="mt-1 text-sm text-site-muted">{item.facility}</div>
                <div className="mt-2 text-xs text-site-muted">{item.status} · {item.due}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
