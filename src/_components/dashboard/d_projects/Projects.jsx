import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { projectActions } from "../../../_actions/project.actions";
import { RecentProjects, UserProjects } from "../d_projectGrid";

function Projects(props) {
  const projects = props.userData.projects;
  const recent = props.authentication.user.recentProjects;
  let display;
  if (recent) {
    display = <RecentProjects data={recent} projects={projects} />;
  } else {
    display = <></>;
  }

  useEffect(() => {
    props.getProjects();
  }, []);

  // console.log(props);

  return (
    <div>
      {display}
      <UserProjects data={projects} />
    </div>
  );
}

function mapState(state) {
  const { userData, authentication } = state;
  return { userData, authentication };
}

const actionCreators = {
  getProjects: projectActions.getProjects,
};

const connectedProjects = connect(mapState, actionCreators)(Projects);
export { connectedProjects as Projects };
