"use client";

import { profile } from "@/data/portfolio";
import { GitHubGlyph, GoArrow, LinkedInGlyph, PhoneGlyph } from "../icons";
import { useOs } from "../os";

export function WelcomeApp() {
  const os = useOs();

  return (
    <div className="welcome">
      <header className="welcome__band">
        <h3 className="welcome__name">{profile.name}</h3>
        <p className="welcome__role">
          {profile.role} &middot; {profile.location}
        </p>
      </header>

      <div className="welcome__body">
        <p className="welcome__summary">{profile.summary}</p>

        <h4 className="xp-pick-heading">Pick a task&hellip;</h4>
        <ul className="xp-task-list">
          <li>
            <button type="button" onClick={() => os.open("projects")}>
              <GoArrow /> Browse the apps and systems I&apos;ve shipped
            </button>
          </li>
          <li>
            <a href={profile.resumeHref} target="_blank" rel="noreferrer" onClick={() => os.play("open")}>
              <GoArrow /> Open my resume (PDF)
            </a>
          </li>
          <li>
            <button type="button" onClick={() => os.open("experience")}>
              <GoArrow /> Read my work experience
            </button>
          </li>
          <li>
            <button type="button" onClick={() => os.open("mail")}>
              <GoArrow /> Send me an email
            </button>
          </li>
        </ul>

        <fieldset className="xp-group welcome__contact">
          <legend>Reach me directly</legend>
          <a href={profile.phoneHref}>
            <PhoneGlyph /> {profile.phoneDisplay}
          </a>
          <a href={profile.github.href} target="_blank" rel="noreferrer">
            <GitHubGlyph /> GitHub
          </a>
          <a href={profile.linkedin.href} target="_blank" rel="noreferrer">
            <LinkedInGlyph /> LinkedIn
          </a>
        </fieldset>
      </div>
    </div>
  );
}
