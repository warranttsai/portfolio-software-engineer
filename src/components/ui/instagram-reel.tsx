import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

let embedScriptPromise: Promise<void> | null = null;

/**
 * Loads Instagram's official `embed.js` exactly once. After it loads we call
 * `window.instgrm.Embeds.process()` so any new `<InstagramReel>` mounted on
 * the page gets transformed into a fully-interactive embedded reel (play
 * button, comments, like button, share, etc.).
 */
function ensureInstagramEmbedScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (embedScriptPromise) {
    return embedScriptPromise;
  }

  embedScriptPromise = new Promise<void>((resolve) => {
    const existing = document.querySelector(
      "script[data-instgrm-embed-loader]",
    );
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("data-instgrm-embed-loader", "true");
    script.onload = () => resolve();
    script.onerror = () => {
      // If the script fails to load we still resolve so the page doesn't hang;
      // the embed blockquote will fall back to its anchor link.
      embedScriptPromise = null;
      resolve();
    };
    document.body.appendChild(script);
  });

  return embedScriptPromise;
}

type InstagramReelProps = {
    /** Full Instagram reel URL, e.g. https://www.instagram.com/reel/ABC123/ */
    url: string;
    /** Display caption shown in the embed fallback link. */
    title: string;
};

/**
 * Renders a single Instagram reel using Instagram's official embed pattern
 * (blockquote + embed.js). The blockquote is replaced in place with a fully
 * interactive iframe once embed.js has processed it.
 *
 * Reels play inline on the page — visitors don't have to leave your site
 * to watch them. Each card uses a 3:4 portrait aspect ratio so the embed
 * has a bit more vertical room than a standard 4:5 frame.
 */
export function InstagramReel({ url, title }: InstagramReelProps) {
    useEffect(() => {
        let cancelled = false;
        ensureInstagramEmbedScript().then(() => {
            if (cancelled) return;
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        });
        return () => {
            cancelled = true;
        };
    }, [url]);

    return (
        <div
            className="instagram-reel-frame"
            style={{
                width: "100%",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                borderRadius: "1.5rem",
                background: "#FFF",
                boxShadow:
                    "0 18px 40px -22px hsl(222 69% 14% / 0.18), 0 4px 12px -6px hsl(222 69% 14% / 0.08)",
            }}
        >
            <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    background: "#FFF",
                    border: 0,
                    margin: 0,
                    width: "100%",
                    height: "100%",
                    padding: 0,
                    display: "block",
                }}
            >
                <a href={url} target="_blank" rel="noreferrer">
                    {title}
                </a>
            </blockquote>
        </div>
    );
}