import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { userActions } from "../../../_actions";
import { projectActions } from "../../../_actions/project.actions";
import { RecentProjects, UserProjects } from "../d_projectGrid";

function Projects(props) {
  const projects = props.userData.projects;
  const recent = props.authentication.user.recentProjects;
  let display;
  if (recent) {
    display = <RecentProjects data={recent} projects={projects} />;
  } else {
    display = <div>Test</div>;
  }

  useEffect(() => {
    props.getProjects();
    props.getUser(props.authentication.user._id)
  }, []);

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
  getUser:userActions.getById
};

const connectedProjects = connect(mapState, actionCreators)(Projects);
export { connectedProjects as Projects };
