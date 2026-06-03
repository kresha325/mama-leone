"use client";

import { usePathname } from "next/navigation";
import { useYoutubeAmbient } from "@/contexts/youtube-ambient-context";
import { useLanguage } from "@/contexts/language-context";
import { isMenuRoute } from "@/lib/base-path";

function VolumeOffIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 4v16a1 1 0 01-1.707.707L5.586 15z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
    </svg>
  );
}

function VolumeOnIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 4v16a1 1 0 01-1.707.707L5.586 15z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
    </svg>
  );
}

export function AmbientMusicButton() {
  const pathname = usePathname();
  const { muted, playerReady, toggleSoundOrPlayback } = useYoutubeAmbient();
  const { t } = useLanguage();

  if (!isMenuRoute(pathname)) return null;

  return (
    <button
      type="button"
      className="fixed bottom-5 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/95 text-foreground shadow-lg backdrop-blur-sm transition hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-40"
      aria-pressed={!muted}
      aria-label={muted ? t.audio.muteOn : t.audio.muteOff}
      title={!playerReady ? t.audio.loading : muted ? t.audio.muteOn : t.audio.muteOff}
      disabled={!playerReady}
      onClick={() => toggleSoundOrPlayback()}
    >
      {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
    </button>
  );
}
