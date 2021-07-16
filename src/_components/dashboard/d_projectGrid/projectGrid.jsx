import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState([]);
  function mapData() {
    setData(props.data);
  }
  useEffect(() => {
    mapData();
  }, []);
  let i = 0;
  return (
    <Section>
      <DashHeader>
        <DashTitle>Recent</DashTitle>
      </DashHeader>
      <ProjectSection>
        {data &&
          data.map((entry) => (
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
  const [data, setData] = useState([]);
  function mapData() {
    setData(props.data);
  }
  useEffect(() => {
    mapData();
  }, []);
  let i = 0;
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
        {data &&
          data.map((data) => (
            <ProjectTile
              data={data.projectTitle}
              slug={data.projectSlug}
              id={data._id}
              key={i++}
            />
          ))}
      </ProjectSection>
    </Section>
  );
}
