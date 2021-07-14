import React from "react";
import { css } from "styled-components";
import { Link } from "react-router-dom";
import { ProjectTile } from "../d_projectTile";
import AddIcon from "../../../_assets/icons/add.svg";
import {
  DashHeader,
  DashTitle,
  ProjectSection,
  AddProject,
  Section,
} from "./style";

export function RecentProjects(props) {
  const id = props.data[0].recentID;
  const project = props.projects.filter(filterProjects);
  function filterProjects(project) {
    return project._id === id;
  }
  let i = 0;
  return (
    <Section>
      <DashHeader>
        <DashTitle>Recent</DashTitle>
      </DashHeader>
      <ProjectSection>
        {project.map((entry) => (
          <ProjectTile data={entry.projectTitle} id={entry.id} key={i++} />
        ))}
      </ProjectSection>
    </Section>
  );
}

export function UserProjects(props) {
  let i = 0;
  if (props.data === "unset") {
    return <h1>Fuck</h1>;
  }
  return (
    <Section>
      <DashHeader>
        <DashTitle>Projects</DashTitle>
        <Link to="/new-project">
          <AddProject>
            <AddIcon css="fill:var(--text-color);" />
          </AddProject>
        </Link>
      </DashHeader>
      <ProjectSection>
        {props.data.map((data) => (
          <ProjectTile data={data.projectTitle} id={data._id} key={i++} />
        ))}
      </ProjectSection>
    </Section>
  );
}
