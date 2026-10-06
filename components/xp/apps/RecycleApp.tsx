"use client";

import { useState } from "react";
import { FolderIcon, WarningGlyph } from "../icons";
import { useOs } from "../os";
import { ExplorerFrame, PanePanel } from "./ExplorerFrame";

export function RecycleApp() {
  const os = useOs();
  const [message, setMessage] = useState(false);

  return (
    <ExplorerFrame
      address="Recycle Bin"
      status="1 object"
      pane={
        <PanePanel title="Recycle Bin Tasks">
          <p className="pane-detail">Items here were deleted during the 2026 redesign.</p>
        </PanePanel>
      }
    >
      <ul className="thumbs thumbs--icons">
        <li>
          <button
            type="button"
            className="thumb thumb--icon"
            onClick={() => {
              os.play("error");
              setMessage(true);
            }}
          >
            <FolderIcon size={48} className="thumb__ghost" />
            <span className="thumb__name">old-portfolio-2025</span>
          </button>
        </li>
      </ul>

      {message ? (
        <div className="msgbox" role="alertdialog" aria-labelledby="msgbox-title" aria-describedby="msgbox-text">
          <p id="msgbox-title" className="msgbox__title">
            Recycle Bin
          </p>
          <div className="msgbox__row">
            <WarningGlyph />
            <p id="msgbox-text">
              Cannot restore <strong>old-portfolio-2025</strong>. The flat white version of this site was retired when this
              desktop shipped.
            </p>
          </div>
          <button type="button" className="xp-btn" autoFocus onClick={() => setMessage(false)}>
            OK
          </button>
        </div>
      ) : null}
    </ExplorerFrame>
  );
}
