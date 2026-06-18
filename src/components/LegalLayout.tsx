import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { business } from "@/data/menu";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <SiteShell>
      <article className="container-page py-12 md:py-16 lg:max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-medium text-primary transition hover:text-primary/80"
        >
          ← Zurück zur Startseite
        </Link>
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          {title}
        </h1>
        <div className="prose-legal mt-8 space-y-8 text-muted-foreground">
          {children}
        </div>
        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          {business.name} · {business.address.full}
        </p>
      </article>
    </SiteShell>
  );
}
