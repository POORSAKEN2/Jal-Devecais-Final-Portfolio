"use client";

import Image from "next/image";
import { useState } from "react";
import { spotifySearch, tracks } from "@/data/portfolio";
import { useOs } from "../os";

const bars = [0.55, 0.8, 0.4, 0.95, 0.7, 0.5, 0.85, 0.35, 0.65, 0.9, 0.45, 0.6, 0.75, 0.3];

export function MusicApp() {
  const os = useOs();
  const [index, setIndex] = useState(0);
  const track = tracks[index];
  const label = `${index + 1}. ${track.artist} - ${track.title}`;

  const step = (delta: number) => {
    os.play("click");
    setIndex((i) => (i + delta + tracks.length) % tracks.length);
  };

  return (
    <div className="amp">
      <div className="amp__display">
        <div className="amp__left">
          <p className="amp__track" aria-hidden="true">
            <span className="amp__state">&#9654;</span>
            {String(index + 1).padStart(2, "0")}
          </p>
          <div className="amp__viz" aria-hidden="true">
            {bars.map((h, i) => (
              <span key={i} style={{ height: `${h * 100}%`, animationDelay: `${(i % 5) * -0.17}s` }} />
            ))}
          </div>
        </div>
        <div className="amp__right">
          <div className="amp__marquee" aria-live="polite">
            <span className="sr-only">Now showing: {label}</span>
            <span className="amp__marquee-run" aria-hidden="true">
              {label} &nbsp;***&nbsp; {label} &nbsp;***&nbsp;
            </span>
          </div>
          <p className="amp__meta" aria-hidden="true">
            <span>FAVORITES</span>
            <span>
              {index + 1}/{tracks.length}
            </span>
            <span className="amp__lamp">STEREO</span>
          </p>
        </div>
      </div>

      <div className="amp__controls">
        <button type="button" className="amp__btn" onClick={() => step(-1)} aria-label="Previous track">
          <svg viewBox="0 0 16 12" width="16" height="12" aria-hidden="true">
            <path d="M2 1v10M14 1 5 6l9 5Z" stroke="currentColor" strokeWidth="2" fill="currentColor" />
          </svg>
        </button>
        <a
          className="amp__btn amp__btn--play"
          href={spotifySearch(track)}
          target="_blank"
          rel="noreferrer"
          onClick={() => os.play("open")}
        >
          <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
            <path d="M2 1v10l9-5Z" fill="currentColor" />
          </svg>
          Play on Spotify
        </a>
        <button type="button" className="amp__btn" onClick={() => step(1)} aria-label="Next track">
          <svg viewBox="0 0 16 12" width="16" height="12" aria-hidden="true">
            <path d="M14 1v10M2 1l9 5-9 5Z" stroke="currentColor" strokeWidth="2" fill="currentColor" />
          </svg>
        </button>
      </div>

      <div className="amp__lower">
        <div className="amp__cover">
          <Image key={track.image} src={track.image} alt={`${track.title} cover art`} fill sizes="140px" className="amp__cover-img" />
        </div>
        <ol className="amp__playlist xp-scroll" aria-label="Favorite songs">
          {tracks.map((t, i) => (
            <li key={t.title}>
              <button
                type="button"
                aria-current={i === index ? "true" : undefined}
                onClick={() => {
                  os.play("click");
                  setIndex(i);
                }}
              >
                <span className="amp__pl-num">{i + 1}.</span>
                <span className="amp__pl-name">
                  {t.artist} - {t.title}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
