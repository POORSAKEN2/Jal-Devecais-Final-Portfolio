"use client";

import type { ReactNode } from "react";

// Shared Explorer anatomy: address bar, blue task pane, content area, status bar.
export function ExplorerFrame({
  address,
  pane,
  status,
  children,
}: {
  address: string;
  pane: ReactNode;
  status: string;
  children: ReactNode;
}) {
  return (
    <div className="explorer">
      <div className="explorer__address">
        <span className="explorer__address-label">Address</span>
        <span className="explorer__address-field">{address}</span>
      </div>
      <div className="explorer__main">
        <aside className="explorer__pane">{pane}</aside>
        <div className="explorer__content xp-scroll">{children}</div>
      </div>
      <div className="xp-statusbar">{status}</div>
    </div>
  );
}

export function PanePanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="pane-panel">
      <h4 className="pane-panel__title">{title}</h4>
      <div className="pane-panel__body">{children}</div>
    </section>
  );
}
