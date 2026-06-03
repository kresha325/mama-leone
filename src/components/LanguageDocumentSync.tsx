"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import { isMenuRoute } from "@/lib/base-path";

export function LanguageDocumentSync() {
  const { lang, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = lang;

    document.title =
      isMenuRoute(pathname)
        ? `${t.meta.menuTitle} | Mama Leone`
        : t.meta.homeTitle;
  }, [lang, pathname, t]);

  return null;
}
