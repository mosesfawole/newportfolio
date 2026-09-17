"use client";

import { ExternalLink, Minus, Music2, X } from "lucide-react";
import { useState } from "react";

const playlistUrl =
  "https://open.spotify.com/playlist/357cSNAnuaEkQNffqXfxGv";
const embedUrl =
  "https://open.spotify.com/embed/playlist/357cSNAnuaEkQNffqXfxGv?utm_source=generator&theme=0";

export default function SpotifyPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <button
        type="button"
        onClick={() => setIsDismissed(false)}
        aria-label="Show Spotify player"
        title="Show Spotify player"
        className="fixed bottom-4 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-cream/95 text-ink shadow-lg backdrop-blur-md hover:bg-surface dark:border-border-dark dark:bg-ink/95 dark:text-cream dark:hover:bg-surface-dark"
      >
        <Music2 size={16} aria-hidden="true" />
      </button>
    );
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-1">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Spotify player"
          title="Open Spotify player"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-cream/95 text-ink shadow-lg backdrop-blur-md hover:bg-surface dark:border-border-dark dark:bg-ink/95 dark:text-cream dark:hover:bg-surface-dark"
        >
          <Music2 size={16} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          aria-label="Close Spotify player"
          title="Close Spotify player"
          className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/95 text-muted shadow dark:bg-ink/95"
        >
          <X size={12} aria-hidden="true" />
        </button>
      </div>
    );
  }

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-40 sm:left-auto sm:w-[352px]">
      <div className="overflow-hidden border border-border bg-cream/95 shadow-lg backdrop-blur-md dark:border-border-dark dark:bg-ink/95">
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2 text-muted">
            <Music2 size={14} aria-hidden="true" />
            <span className="font-body text-[10px] uppercase tracking-[0.2em]">
              now playing
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-body text-[10px] uppercase tracking-wider text-muted hover:text-ink dark:hover:text-cream"
            >
              Spotify
              <ExternalLink size={11} aria-hidden="true" />
              <span className="sr-only">, opens in a new tab</span>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Minimize Spotify player"
              title="Minimize Spotify player"
              className="flex h-6 w-6 items-center justify-center rounded-full text-muted hover:bg-surface hover:text-ink dark:hover:bg-surface-dark dark:hover:text-cream"
            >
              <Minus size={12} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setIsDismissed(true)}
              aria-label="Close Spotify player"
              title="Close Spotify player"
              className="flex h-6 w-6 items-center justify-center rounded-full text-muted hover:bg-surface hover:text-ink dark:hover:bg-surface-dark dark:hover:text-cream"
            >
              <X size={12} aria-hidden="true" />
            </button>
          </div>
        </div>
        <iframe
          src={embedUrl}
          title="Moses Fawole's Spotify playlist"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
          className="block"
        />
      </div>
    </aside>
  );
}