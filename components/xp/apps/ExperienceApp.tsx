"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { experiences, profile } from "@/data/portfolio";
import { BriefcaseIcon, PdfIcon } from "../icons";
import { useOs } from "../os";

export function ExperienceApp() {
  const os = useOs();
  const [selected, setSelected] = useState(0);
  const rows = useRef<(HTMLButtonElement | null)[]>([]);
  const job = experiences[selected];

  function onKeyDown(event: KeyboardEvent) {
    const delta = event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = Math.min(Math.max(selected + delta, 0), experiences.length - 1);
    setSelected(next);
    rows.current[next]?.focus();
  }

  return (
    <div className="experience">
      <div className="experience__list xp-scroll">
        <div className="listview__head" aria-hidden="true">
          <span>Position</span>
          <span>Dates</span>
        </div>
        <div role="listbox" aria-label="Roles" onKeyDown={onKeyDown}>
          {experiences.map((exp, index) => (
            <button
              key={`${exp.role}-${exp.date}`}
              ref={(el) => {
                rows.current[index] = el;
              }}
              type="button"
              role="option"
              aria-selected={index === selected}
              tabIndex={index === selected ? 0 : -1}
              className="listview__row"
              onClick={() => {
                os.play("click");
                setSelected(index);
              }}
            >
              <BriefcaseIcon size={16} />
              <span className="listview__main">
                <span className="listview__role">{exp.role}</span>
                <span className="listview__company">{exp.company}</span>
              </span>
              <span className="listview__date">{exp.date}</span>
            </button>
          ))}
        </div>
      </div>

      <article className="experience__detail xp-scroll" aria-live="polite">
        <h3 className="experience__role">{job.role}</h3>
        <p className="experience__meta">
          {job.company} &middot; {job.location}
        </p>
        <p className="experience__date">{job.date}</p>
        <fieldset className="xp-group">
          <legend>What I did</legend>
          <ul className="experience__bullets">
            {job.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </fieldset>
        <a className="xp-btn xp-btn--icon" href={profile.resumeHref} target="_blank" rel="noreferrer">
          <PdfIcon size={16} /> Open full resume
        </a>
      </article>
    </div>
  );
}
