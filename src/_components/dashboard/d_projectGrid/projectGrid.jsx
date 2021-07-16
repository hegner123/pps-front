import React from "react";
import { css } from "styled-components";
import { Link } from "react-router-dom";
import { ProjectTile, RecentProjectTile } from "../d_projectTile";
import AddIcon from "../../../_assets/icons/add.svg";
import {
  DashHeader,
  DashTitle,
  ProjectSection,
  AddProject,
  Section,
} from "./style";

export function RecentProjects(props) {
  // props.data.map((projects) => {
  //   console.log(projects);
  //   if (filterProjects(projects.recentID)) {
  //   }
  // });

  // const project = props.projects.filter(filterProjects);
  // function filterProjects(project) {
  //   return project._id === id;
  // }
  let i = 0;
  return (
    <Section>
      <DashHeader>
        <DashTitle>Recent</DashTitle>
      </DashHeader>
      <ProjectSection>

          {props.data.map(
            (entry) => (
            <RecentProjectTile
              data={entry.projectTitle}
              id={entry.recentID}
              key={i++}
            />
          ))}

      </ProjectSection>
    </Section>
  );
}

export function UserProjects(props) {
  let i = 0;
  if (props.data === "unset") {
    return <h1>Loading</h1>;
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
