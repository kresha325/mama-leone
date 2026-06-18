import type { ReactNode } from "react";

interface MenuSectionFrameProps {
  title: string;
  borderColor: string;
  backgroundColor: string;
  titleColor: string;
  children: ReactNode;
  note?: string;
}

export function MenuSectionFrame({
  title,
  titleColor,
  children,
  note,
}: MenuSectionFrameProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-primary/12 bg-card shadow-[0_4px_24px_-8px_rgba(42,31,26,0.12)]">
      <header className="relative border-b border-l-4 border-primary/10 px-5 py-4 md:px-7 md:py-5" style={{ borderLeftColor: titleColor }}>
        <div className="flex items-center gap-3">
          <span
            className="hidden h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-primary/30 sm:block"
            aria-hidden
          />
          <h2
            className="font-display text-2xl font-semibold tracking-tight md:text-[1.65rem]"
            style={{ color: titleColor }}
          >
            {title}
          </h2>
          <span
            className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"
            aria-hidden
          />
        </div>
        {note ? (
          <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground md:text-left">
            {note}
          </p>
        ) : null}
      </header>

      <div className="divide-y divide-primary/[0.07] px-3 py-1 md:px-5">{children}</div>
    </section>
  );
}
