"use client";

import { useState } from "react";
import { profile, toolkit } from "@/data/portfolio";
import { ComputerIcon, WelcomeIcon } from "../icons";

const tabs = ["General", "Toolkit"] as const;

export function SystemApp() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("General");

  return (
    <div className="sysprops">
      <div className="xp-tabs" role="tablist" aria-label="System Properties">
        {tabs.map((name) => (
          <button
            key={name}
            id={`sys-tab-${name}`}
            type="button"
            role="tab"
            aria-selected={tab === name}
            aria-controls={`sys-panel-${name}`}
            className="xp-tab"
            onClick={() => setTab(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div
        className="xp-tabpanel xp-scroll"
        role="tabpanel"
        id={`sys-panel-${tab}`}
        aria-labelledby={`sys-tab-${tab}`}
      >
        {tab === "General" ? (
          <div className="sysprops__general">
            <div className="sysprops__logo">
              <WelcomeIcon size={96} />
            </div>
            <dl className="sysprops__facts">
              <dt>System:</dt>
              <dd>
                {profile.name}
                <br />
                {profile.role}
              </dd>
              <dt>Location:</dt>
              <dd>{profile.location}</dd>
              <dt>Builds:</dt>
              <dd>
                Mobile apps
                <br />
                Websites
                <br />
                Business systems
              </dd>
              <dt>Shipped to:</dt>
              <dd>App Store, Google Play</dd>
            </dl>
            <button type="button" className="xp-btn" onClick={() => setTab("Toolkit")}>
              Open Toolkit
            </button>
          </div>
        ) : (
          <div className="devmgr">
            <p className="devmgr__intro">Tools installed on this developer, by category:</p>
            <div className="devmgr__tree">
              <p className="devmgr__root">
                <ComputerIcon size={16} /> JAL-DEVECAIS
              </p>
              {toolkit.map((group) => (
                <details key={group.category} open>
                  <summary>{group.category}</summary>
                  <ul>
                    {group.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
