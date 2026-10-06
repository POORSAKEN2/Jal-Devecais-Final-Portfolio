"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { PdfIcon } from "../icons";

const fileName = profile.resumeHref.split("/").pop() ?? "resume.pdf";

export function ResumeApp() {
  // Phones, and browsers without a built-in PDF viewer (Android Chrome, some
  // in-app browsers), get an open/save card that hands off to the device's viewer.
  const [canEmbed, setCanEmbed] = useState<boolean | null>(null);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & { pdfViewerEnabled?: boolean };
    const isNarrow = window.matchMedia("(max-width: 767px)").matches;
    setNarrow(isNarrow);
    setCanEmbed(nav.pdfViewerEnabled !== false && !isNarrow);
  }, []);

  return (
    <div className="docviewer">
      <div className="docviewer__toolbar">
        <a className="xp-btn xp-btn--icon" href={profile.resumeHref} download={fileName}>
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
            <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" fill="url(#xpg-blue)" stroke="#1c4cae" />
            <rect x="4" y="1.5" width="8" height="5" fill="#fff" stroke="#1c4cae" strokeWidth="0.8" />
            <rect x="9" y="2.5" width="2" height="3" fill="#1c4cae" />
          </svg>
          Save a Copy
        </a>
        <a className="xp-btn xp-btn--icon" href={profile.resumeHref} target="_blank" rel="noreferrer">
          Open in new tab
        </a>
      </div>

      <div className="docviewer__stage">
        {canEmbed === true ? (
          <iframe
            className="docviewer__frame"
            src={`${profile.resumeHref}#view=FitH`}
            title={`${profile.name} resume`}
          />
        ) : canEmbed === false ? (
          <div className="docviewer__fallback">
            <PdfIcon size={64} />
            <p>
              <strong>{fileName}</strong>
              <br />
              {narrow
                ? "Opens in your phone's PDF viewer."
                : "This browser can't show PDFs inside a window. Open or save it instead."}
            </p>
            <div className="docviewer__fallback-actions">
              <a className="xp-btn" href={profile.resumeHref} target="_blank" rel="noreferrer">
                Open
              </a>
              <a className="xp-btn" href={profile.resumeHref} download={fileName}>
                Save a Copy
              </a>
            </div>
          </div>
        ) : null}
      </div>

      <div className="xp-statusbar">{fileName}</div>
    </div>
  );
}
