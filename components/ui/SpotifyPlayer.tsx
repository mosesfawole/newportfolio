import { ExternalLink, Music2 } from "lucide-react";

const playlistUrl =
  "https://open.spotify.com/playlist/357cSNAnuaEkQNffqXfxGv";
const embedUrl =
  "https://open.spotify.com/embed/playlist/357cSNAnuaEkQNffqXfxGv?utm_source=generator&theme=0";

export default function SpotifyPlayer() {
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