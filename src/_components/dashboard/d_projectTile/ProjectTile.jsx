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
  // const [projects, setProjects] = useState();

  // function filterProj() {
  //   const res = props.userData.projects.filter(filterProjects);
  //   setProjects(res[0]);
  // }
  // useEffect(() => {
  //   if (props.userData.projects !== "unset") {
  //     filterProj();
  //   }
  // }, [props.userData.projects]);

  // function filterProjects(id) {
  //   return id._id === props.id;
  // }

  // if (!projects) {
  //   return <h2>loading</h2>;
  // } else {
    return (
      <div css={"margin-bottom:10px;"}>
        {/* <Link
          to={"/project/" + projects.projectSlug}
          onClick={() => props.assignProject("assign", projects.projectSlug)}
        > */}
        <ProjectsTile>
          <TileHeader>{props.id}</TileHeader>
        </ProjectsTile>
        {/* </Link> */}
      </div>
    );
  }
// }

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
