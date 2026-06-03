import { business } from "@/data/menu";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="leading-none">
        <span className="font-script text-xl text-primary md:text-2xl">
          {business.name}
        </span>
        <span className="mt-0.5 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {business.tagline}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start leading-none">
      <span className="font-script text-2xl text-primary md:text-3xl">
        {business.name}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {business.tagline}
      </span>
    </div>
  );
}
