export default function ReviewDetailPage() {
  return (
    <div className="card">
      <div className="eyebrow">Review</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Review case #R-1029</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-site-border bg-site-secondary p-4"><div className="text-sm text-site-muted">Checklist</div><div className="mt-2 text-site-text">Power, cooling, resilience and operational policy</div></div>
        <div className="rounded-xl border border-site-border bg-site-secondary p-4"><div className="text-sm text-site-muted">Comments</div><div className="mt-2 text-site-text">Scope complete; evidence validated; minor remediation recommended.</div></div>
      </div>
      <div className="mt-6 flex gap-3"><button className="btn-primary">Approve</button><button className="btn-secondary">Reject</button></div>
    </div>
  );
}
