import React, { useState } from "react";
import { connect } from "react-redux";
import { ProjectsTile, TileHeader } from "./style";
import { Link } from "react-router-dom";
import { projectActions } from "../../../_actions/";
// available props: project title as data, id as id

function ProjectTile(props) {
  const projectTitle = props.data.trim().toLowerCase().replace(/\s/g, "-");
  return (
    <div>
      <Link
        to={"/project/" + projectTitle}
        onClick={() => props.assignProject("assign", projectTitle)}
      >
        <ProjectsTile>
          <TileHeader>{props.data}</TileHeader>
        </ProjectsTile>
      </Link>
    </div>
  );
}

function RecentProjectTile(props) {
  const projects = props.userData.projects.filter(filterProjects);
  console.log(projects);
  function filterProjects(id) {
    return id._id === props.id;
  }
  return (
    <div>
      <Link
        to={"/project/" + projects[0].projectSlug}
        onClick={() => props.assignProject("assign", projects[0].projectSlug)}
      >
        <ProjectsTile>
          <TileHeader>{projects[0].projectTitle}</TileHeader>
        </ProjectsTile>
      </Link>
    </div>
  );
}

function mapState(state) {
  const { userData } = state;
  return { userData };
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
