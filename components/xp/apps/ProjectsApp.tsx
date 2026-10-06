"use client";

import Image from "next/image";
import { profile, projects } from "@/data/portfolio";
import { BriefcaseIcon, MailIcon, NotepadIcon, PdfIcon } from "../icons";
import { useOs } from "../os";
import { ExplorerFrame, PanePanel } from "./ExplorerFrame";

export function ProjectsApp() {
  const os = useOs();

  return (
    <ExplorerFrame
      address="C:\Documents and Settings\Jal\My Projects"
      status={`${projects.length} projects`}
      pane={
        <>
          <PanePanel title="Hiring tasks">
            <a href={profile.resumeHref} target="_blank" rel="noreferrer" className="pane-link">
              <PdfIcon size={16} /> Open my resume
            </a>
            <button type="button" className="pane-link" onClick={() => os.open("mail")}>
              <MailIcon size={16} /> Email me about a role
            </button>
          </PanePanel>
          <PanePanel title="Other places">
            <button type="button" className="pane-link" onClick={() => os.open("experience")}>
              <BriefcaseIcon size={16} /> My Experience
            </button>
            <button type="button" className="pane-link" onClick={() => os.open("about")}>
              <NotepadIcon size={16} /> About Me.txt
            </button>
          </PanePanel>
          <PanePanel title="Details">
            <p className="pane-detail">
              <strong>My Projects</strong>
              <br />
              Mobile apps, business systems, and web apps. Pick one to open it in the viewer.
            </p>
          </PanePanel>
        </>
      }
    >
      <ul className="thumbs">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <button type="button" className="thumb" onClick={() => os.openProject(index)}>
              <span className="thumb__frame">
                <Image
                  src={project.image}
                  alt=""
                  width={320}
                  height={220}
                  sizes="(max-width: 767px) 45vw, 200px"
                  className="thumb__img"
                />
              </span>
              <span className="thumb__name">{project.title}</span>
              <span className="thumb__tag">{project.tag}</span>
            </button>
          </li>
        ))}
      </ul>
    </ExplorerFrame>
  );
}
