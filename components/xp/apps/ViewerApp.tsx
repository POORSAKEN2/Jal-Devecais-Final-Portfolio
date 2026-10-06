"use client";

import Image from "next/image";
import { projects } from "@/data/portfolio";
import { useOs } from "../os";

export function ViewerApp() {
  const os = useOs();
  const project = projects[os.projectIndex];
  const step = (delta: number) => {
    os.play("click");
    os.setProjectIndex((os.projectIndex + delta + projects.length) % projects.length);
  };

  return (
    <div className="viewer">
      <div className="viewer__stage">
        <Image
          key={project.slug}
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 767px) 100vw, 560px"
          className="viewer__img"
          priority
        />
      </div>

      <div className="viewer__toolbar">
        <button type="button" className="viewer__nav" onClick={() => step(-1)} aria-label="Previous project">
          <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
            <circle cx="10" cy="10" r="9" fill="url(#xpg-green)" stroke="#257a22" />
            <path d="M12 5.5 7.5 10l4.5 4.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Previous</span>
        </button>
        <span className="viewer__count">
          {os.projectIndex + 1} of {projects.length}
        </span>
        <button type="button" className="viewer__nav" onClick={() => step(1)} aria-label="Next project">
          <span>Next</span>
          <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
            <circle cx="10" cy="10" r="9" fill="url(#xpg-green)" stroke="#257a22" />
            <path d="M8 5.5 12.5 10 8 14.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="viewer__info xp-scroll" aria-live="polite">
        <div className="viewer__heading">
          <h3>{project.title}</h3>
          <span className="xp-chip">{project.tag}</span>
        </div>
        {project.company ? <p className="viewer__company">Built at {project.company}</p> : null}
        <p className="viewer__desc">{project.description}</p>
        <fieldset className="xp-group">
          <legend>Built with</legend>
          <ul className="viewer__stack">
            {project.techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </fieldset>
      </div>
    </div>
  );
}
