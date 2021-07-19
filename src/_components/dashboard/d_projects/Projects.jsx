import React, { useLayoutEffect, useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { userActions } from "../../../_actions";
import { projectActions } from "../../../_actions/";
import { RecentProjects, UserProjects } from "../d_projectGrid";

function Projects(props) {
  const [waiting, setWaiting] = useState(true);
  const [projects, setProjects] = useState([]);

  function fetchData() {
    props.getProjects();
  }

  function handleStatusChange() {
    setWaiting(false);
    setProjects(props.userData.projects);
  }

  useEffect(() => {
    handleStatusChange();
  }, [props.userData.projects]);

  useEffect(() => {
    fetchData();
  }, []);

  if (waiting) {
    return (
      <div>
        <p css={"color:var(--white);"}>Waiting</p>
      </div>
    );
  } else {
    return (
      <div>
        <RecentProjects data={props.recent.projects} />
        <UserProjects projects={projects} />
      </div>
    );
  }
}

function mapState(state) {
  const { userData, authentication, recent } = state;
  return { userData, authentication, recent };
}

const actionCreators = {
  getProjects: projectActions.getProjects,
  getUser: userActions.getById,
};

const connectedProjects = connect(mapState, actionCreators)(Projects);
export { connectedProjects as Projects };
