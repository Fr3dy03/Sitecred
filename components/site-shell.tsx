import Link from 'next/link';
import { publicNav } from '@/lib/site-data';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-site-border/80 bg-site-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="brand-mark flex h-11 w-11 items-center justify-center rounded-xl text-base font-semibold text-site-blue">
            S
          </div>
          <div>
            <div className="text-lg font-semibold tracking-[-0.04em] text-site-text">SiteCred</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-site-muted">Assurance passport</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-site-muted lg:flex">
          {publicNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-site-text">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/app" className="rounded-full border border-site-border bg-site-surface px-4 py-2 text-sm font-medium text-site-text transition hover:border-site-blue hover:text-site-blue">
            Sign in
          </Link>
          <Link href="/app/facilities/new" className="rounded-full bg-site-blue px-4 py-2 text-sm font-medium text-white shadow-[0_16px_30px_rgba(49,95,130,0.24)] transition hover:-translate-y-0.5">
            Create Facility Passport
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-site-border bg-site-secondary/80">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/botchain-logo.svg" alt="BOT Chain logo" className="h-8 w-auto" />
              <div className="text-sm font-medium text-site-muted">Built on BOT Chain</div>
            </div>
            <p className="max-w-md text-sm leading-6 text-site-muted">
              SiteCred coordinates facility assurance evidence, auditable lifecycle records and verification workflows for distributed infrastructure operators and digital infrastructure buyers.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-site-muted">Explore</h3>
            <ul className="space-y-2 text-sm text-site-text">
              {publicNav.slice(0, 6).map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-site-muted">Infrastructure</h3>
            <ul className="space-y-2 text-sm text-site-text">
              <li><a href="https://www.botchain.ai/en/" target="_blank" rel="noreferrer">BOT Chain</a></li>
              <li><a href="https://scan.botchain.ai/" target="_blank" rel="noreferrer">BOT Chain Explorer</a></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-site-border pt-6 text-sm text-site-muted md:flex-row md:items-center md:justify-between">
          <div>© 2025 SiteCred</div>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <main className={`mx-auto max-w-7xl px-6 py-10 lg:px-8 ${className}`}>{children}</main>;
}
