import { credentialRows } from '@/lib/site-data';

export default function CredentialsPage() {
  return (
    <div className="card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="eyebrow">Credentials</div>
          <h1 className="mt-2 text-3xl font-semibold text-site-text">Issued credentials</h1>
        </div>
        <button className="btn-primary">Issue credential</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-site-text">
          <thead><tr className="border-b border-site-border text-site-muted"><th className="py-3 pr-6">ID</th><th className="py-3 pr-6">Facility</th><th className="py-3 pr-6">Type</th><th className="py-3 pr-6">Status</th><th className="py-3 pr-6">Expiry</th></tr></thead>
          <tbody>
            {credentialRows.map((item) => (
              <tr key={item.id} className="border-b border-site-border last:border-b-0"><td className="py-3 pr-6 font-mono">{item.id}</td><td className="py-3 pr-6">{item.facility}</td><td className="py-3 pr-6">{item.type}</td><td className="py-3 pr-6"><span className="status-badge bg-site-secondary text-site-text">{item.status}</span></td><td className="py-3 pr-6">{item.expiry}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
