import type { ReactNode } from "react";
import { MenuCurvedText } from "./MenuCurvedText";

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
  borderColor,
  backgroundColor,
  titleColor,
  children,
  note,
}: MenuSectionFrameProps) {
  return (
    <section className="w-full pt-5 md:pt-6">
      <div
        className="rounded-[28px] border p-[3px]"
        style={{ borderColor }}
      >
        <div
          className="rounded-[24px] border p-[3px]"
          style={{ borderColor }}
        >
          <div
            className="relative rounded-[20px] border px-3 pb-5 pt-10 md:px-5 md:pb-6 md:pt-11"
            style={{ borderColor, backgroundColor }}
          >
            <div
              className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-[78%] px-3 py-0.5 md:px-3.5"
              style={{ backgroundColor }}
            >
              <MenuCurvedText
                text={title}
                color={titleColor}
                backgroundColor={backgroundColor}
              />
            </div>

            {note && (
              <p
                className="mb-4 text-center text-[10px] italic leading-relaxed md:text-xs"
                style={{ color: titleColor, opacity: 0.7 }}
              >
                {note}
              </p>
            )}

            <div className="grid gap-0 md:grid-cols-2">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
