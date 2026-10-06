import { experiences, profile } from "@/data/portfolio";

const latest = experiences[0];

const text = `ABOUT ME
========

Hi. I'm ${profile.name}.
${profile.role}, based in ${profile.location}.

${profile.summary}

I build mobile apps, websites, and business systems end to end: interface design, front end, back end, and the release to the App Store and Google Play.

Before software I worked as a graphic artist, designing jersey layouts for sublimation printing. Design has stayed part of the job since: UI/UX work at GIZ, YouLink.Store, and RazeTech.

LATEST ROLE
-----------
${latest.role}, ${latest.company} (${latest.date})

REACH ME
--------
Email   ${profile.email}
Phone   ${profile.phoneDisplay}
GitHub  github.com/${profile.github.handle}

Available for work.`;

export function NotepadApp() {
  return (
    <div className="notepad">
      <div className="xp-menubar" aria-hidden="true">
        <span>File</span>
        <span>Edit</span>
        <span>Format</span>
        <span>View</span>
        <span>Help</span>
      </div>
      <pre className="notepad__text xp-scroll" tabIndex={0}>
        {text}
      </pre>
    </div>
  );
}
