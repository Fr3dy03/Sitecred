import Link from 'next/link';
import { appNav } from '@/lib/site-data';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl border border-site-border bg-site-surface p-5 shadow-subtle">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-site-blue text-sm font-semibold text-white">S</div>
            <div>
              <div className="text-lg font-semibold text-site-text">SiteCred</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-site-muted">Operations</div>
            </div>
          </div>
          <nav className="space-y-2">
            {appNav.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-sm text-site-muted transition hover:bg-site-secondary hover:text-site-text">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
