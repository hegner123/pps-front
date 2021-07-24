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

  let i = 0;
  return (
    <Section>
      <DashHeader>
        <DashTitle>Recent</DashTitle>
      </DashHeader>
      <ProjectSection>
        {data &&
          data.map((entry) => (
            <RecentProjectTile id={entry.recentID} key={i++} />
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
        {isReady &&
          props.userData.projects.map((entry) => (
            <ProjectTile
              data={entry.projectTitle}
              slug={entry.projectSlug}
              id={entry._id}
              key={i++}
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
