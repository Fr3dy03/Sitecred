import { facilityRows } from '@/lib/site-data';

export default function FacilitiesPage() {
  return (
    <div className="card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="eyebrow">Facilities</div>
          <h1 className="mt-2 text-3xl font-semibold text-site-text">Facility directory</h1>
        </div>
        <button className="btn-primary">New facility</button>
      </div>
      <div className="mb-4 flex gap-3">
        <input className="flex-1 rounded-xl border border-site-border bg-site-secondary px-3 py-2" placeholder="Search facility" />
        <button className="btn-secondary">Filters</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-site-text">
          <thead>
            <tr className="border-b border-site-border text-site-muted">
              <th className="py-3 pr-6">Name</th>
              <th className="py-3 pr-6">Operator</th>
              <th className="py-3 pr-6">Region</th>
              <th className="py-3 pr-6">Status</th>
              <th className="py-3 pr-6">Credentials</th>
            </tr>
          </thead>
          <tbody>
            {facilityRows.map((facility) => (
              <tr key={facility.name} className="border-b border-site-border last:border-b-0">
                <td className="py-3 pr-6 font-medium">{facility.name}</td>
                <td className="py-3 pr-6">{facility.operator}</td>
                <td className="py-3 pr-6">{facility.region}</td>
                <td className="py-3 pr-6"><span className="status-badge bg-site-blue-soft text-site-blue">{facility.status}</span></td>
                <td className="py-3 pr-6">{facility.credentials}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
