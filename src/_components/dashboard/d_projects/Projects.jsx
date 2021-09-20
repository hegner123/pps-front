import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ProjectTile, RecentProjectTile } from "../d_projectTile";
import AddIcon from "../../../_assets/icons/add.svg";
import {
  DashHeader,
  DashTitle,
  ProjectSection,
  AddProject,
  Section,
} from "./style";

function RecentProjects(props) {
  const data = props.data;

  return (
    <Section>
      <DashHeader>
        <DashTitle>Recent</DashTitle>
      </DashHeader>
      <ProjectSection>
        {data &&
          data.map((entry, i) => (
            <RecentProjectTile id={entry.recentID} key={entry.recentID + i} />
          ))}
      </ProjectSection>
    </Section>
  );
}

function UserProjects(props) {
  const [isReady, setIsReady] = useState(false);

  function handleIsReady() {
    setIsReady(true);
  }

  useEffect(() => {
    if (props.userData.projects !== "unset") {
      handleIsReady();
    }
  }, [props.userData.projects]);
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
        {isReady &&
          props.userData.projects.map((entry, i) => (
            <ProjectTile
              data={entry.projectTitle}
              slug={entry.projectSlug}
              id={entry._id}
              key={i}
            />
          ))}
      </ProjectSection>
    </Section>
  );
}

function mapState(state) {
  const { userData, authentication, recent } = state;
  return { userData, authentication, recent };
}

const connectedRecentProjects = connect(mapState)(RecentProjects);
export { connectedRecentProjects as RecentProjects };

const connectedUserProjects = connect(mapState)(UserProjects);
export { connectedUserProjects as UserProjects };
