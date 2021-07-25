import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ProjectsTile, TileHeader } from "./style";
import { Link } from "react-router-dom";
import { projectActions } from "../../../_actions/";

function ProjectTile(props) {
  return (
    <div css={"margin-bottom:10px;"}>
      <Link
        to={"/project/" + props.slug}
        onClick={() => props.assignProject("assign", props.slug)}
      >
        <ProjectsTile>
          <TileHeader>{props.data}</TileHeader>
        </ProjectsTile>
      </Link>
    </div>
  );
}

function RecentProjectTile(props) {
  const [projects, setProjects] = useState([null]);
  const [isWaiting, setWaiting] = useState(true);

  useEffect(() => {
    if (props.userData.projects !== "unset") {
      filterProj();
    }
  }, [props.userData.projects]);

  function filterProj() {
    console.log("filter");
    const res = props.userData.projects.filter(filterProjects);
    setProjects(res[0]);
    setWaiting(false);
  }
  function filterProjects(project) {
    return project._id === props.id;
  }

  return (
    <div css={"margin-bottom:10px;"}>
      {!isWaiting && (
        <Link
          to={"/project/" + projects.projectSlug}
          onClick={() => props.assignProject("assign", projects.projectSlug)}
        >
          <ProjectsTile>
            <TileHeader>{projects.projectTitle}</TileHeader>
          </ProjectsTile>
        </Link>
      )}
    </div>
  );
}

function mapState(state) {
  const { userData, recent } = state;
  return { userData, recent };
}

const actionCreators = {
  assignProject: projectActions.assignProject,
};

const connectedProjectTile = connect(mapState, actionCreators)(ProjectTile);
export { connectedProjectTile as ProjectTile };

const connectedRecentProjectTile = connect(
  mapState,
  actionCreators
)(RecentProjectTile);
export { connectedRecentProjectTile as RecentProjectTile };
