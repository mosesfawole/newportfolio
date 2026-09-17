"use client";

import { ExternalLink, Minus, Music2, X } from "lucide-react";
import { useRef, useState } from "react";

const playlistUrl =
  "https://open.spotify.com/playlist/357cSNAnuaEkQNffqXfxGv";
const embedUrl =
  "https://open.spotify.com/embed/playlist/357cSNAnuaEkQNffqXfxGv?utm_source=generator&theme=0";

export default function SpotifyPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null,
  );
  const dragState = useRef<{
    offsetX: number;
    offsetY: number;
    width: number;
    height: number;
  } | null>(null);

  const startDragging = (event: React.PointerEvent<HTMLElement>) => {
    if (event.button !== 0) return;
    if ((event.target as HTMLElement).closest("a, button")) return;

    const target = event.currentTarget.closest<HTMLElement>(
      "[data-spotify-player]",
    );
    if (!target) return;

    const rect = target.getBoundingClientRect();
    dragState.current = {
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      width: rect.width,
      height: rect.height,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    window.addEventListener("pointermove", dragPlayer);
    window.addEventListener("pointerup", stopDragging, { once: true });
  };

  const dragPlayer = (event: Event) => {
    if (!dragState.current) return;
    if (!(event instanceof PointerEvent)) return;

    const { offsetX, offsetY, width, height } = dragState.current;
    setPosition({
      x: Math.min(
        Math.max(8, event.clientX - offsetX),
        window.innerWidth - width - 8,
      ),
      y: Math.min(
        Math.max(8, event.clientY - offsetY),
        window.innerHeight - height - 8,
      ),
    });
  };

  const stopDragging = () => {
    window.removeEventListener("pointermove", dragPlayer);
    dragState.current = null;
  };

  const playerPosition = position
    ? { left: position.x, top: position.y, right: "auto", bottom: "auto" }
    : undefined;

  if (isDismissed) {
    return (
      <button
        type="button"
        onClick={() => setIsDismissed(false)}
        aria-label="Show Spotify player"
        title="Show Spotify player"
        style={playerPosition}
        data-spotify-player
        onPointerDown={startDragging}
        className="fixed bottom-4 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-cream/95 text-ink shadow-lg backdrop-blur-md hover:bg-surface dark:border-border-dark dark:bg-ink/95 dark:text-cream dark:hover:bg-surface-dark"
      >
        <Music2 size={16} aria-hidden="true" />
      </button>
    );
  }

  if (!isOpen) {
    return (
      <div
        style={playerPosition}
        data-spotify-player
        onPointerDown={startDragging}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-1"
      >
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
    <aside
      style={playerPosition}
      data-spotify-player
      className="fixed bottom-4 left-4 right-4 z-40 sm:left-auto sm:w-[352px]"
    >
      <div className="overflow-hidden border border-border bg-cream/95 shadow-lg backdrop-blur-md dark:border-border-dark dark:bg-ink/95">
        <div
          onPointerDown={startDragging}
          className="flex cursor-grab touch-none items-center justify-between px-3 py-2 active:cursor-grabbing"
          title="Drag player"
        >
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