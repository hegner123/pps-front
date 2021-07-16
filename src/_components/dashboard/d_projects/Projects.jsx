import React, { useLayoutEffect, useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { userActions } from "../../../_actions";
import { projectActions } from "../../../_actions/";

import { RecentProjects, UserProjects } from "../d_projectGrid";

function Projects(props) {
  const [waiting, setWaiting] = useState(true);
  const [projects, setProjects] = useState([]);
  const [recent, setRecent] = useState([]);

  function fetchData() {
    function handleStatusChange(status) {
      setWaiting(status);
      setProjects(props.userData.projects);
      setRecent(props.authentication.user.recentProjects);
    }
    props.getProjects();
    props.getUser(props.authentication.user._id);
    handleStatusChange(false);
  }

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
        <RecentProjects data={recent} projects={projects} />
        <UserProjects data={projects} />
      </div>
    );
  }
}

function mapState(state) {
  const { userData, authentication } = state;
  return { userData, authentication };
}

const actionCreators = {
  getProjects: projectActions.getProjects,
  getUser: userActions.getById,
};

const connectedProjects = connect(mapState, actionCreators)(Projects);
export { connectedProjects as Projects };
