"use client";

import { useState, type FormEvent } from "react";
import { gmailCompose, profile } from "@/data/portfolio";
import { GitHubGlyph, LinkedInGlyph, MailIcon, PhoneGlyph } from "../icons";
import { useOs } from "../os";

export function MailApp() {
  const os = useOs();
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  function send(event: FormEvent) {
    event.preventDefault();
    if (!body.trim()) {
      os.play("error");
      setError("Write a message first, or email me directly at " + profile.email + ".");
      return;
    }
    setError("");
    os.play("open");
    window.open(gmailCompose(subject, body), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="mail" onSubmit={send} noValidate>
      <div className="mail__toolbar">
        <button type="submit" className="mail__send">
          <MailIcon size={24} />
          <span>Send</span>
        </button>
        <span className="mail__hint">Opens in Gmail</span>
      </div>

      <div className="mail__fields">
        <label className="mail__row">
          <span className="mail__label">To:</span>
          <input className="xp-input" value={profile.email} readOnly />
        </label>
        <label className="mail__row">
          <span className="mail__label">Subject:</span>
          <input
            className="xp-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Interview request"
          />
        </label>
      </div>

      <label className="mail__body">
        <span className="sr-only">Message</span>
        <textarea
          className="xp-input xp-scroll"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
            if (error) setError("");
          }}
          placeholder="Hi Jal, we'd like to talk about a role…"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "mail-error" : undefined}
        />
      </label>
      {error ? (
        <p id="mail-error" className="mail__error" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mail__contacts">
        <a href={profile.phoneHref}>
          <PhoneGlyph /> {profile.phoneDisplay}
        </a>
        <a href={profile.github.href} target="_blank" rel="noreferrer">
          <GitHubGlyph /> GitHub
        </a>
        <a href={profile.linkedin.href} target="_blank" rel="noreferrer">
          <LinkedInGlyph /> LinkedIn
        </a>
      </div>
    </form>
  );
}
