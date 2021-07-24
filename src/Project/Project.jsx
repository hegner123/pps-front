import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pDetails as PDetails } from "../_components/project/Grid/p_details";
import { TableArea } from "../_components/project/Grid/p_table";
import { useSelector, connect } from "react-redux";
import { projectActions } from "../_actions/project.actions";
import { Info } from "../_components/project/Info";

export function SingleProject(props) {
  const userData = useSelector((state) => state.userData.current);
  let id = useParams().id;
  const [songs, setSongs] = useState(userData);
  const [userId, setUserId] = useState(id);
  return (
    <div css={"width:100%"}>
      <div
        css={"display:flex; flex-wrap: wrap; width: 100%;"}
        className=" grid-area"
      >
        <PDetails data={songs} />
      </div>
      <div
        css={"display:flex; flex-wrap: wrap; width: 100%;line-height: 75px;"}
      >
        <TableArea data={songs} />
      </div>
      <Info />
    </div>
  );
}

function mapState(state) {
  const { userData } = state;
  return { userData };
}

const actionCreators = {
  assignProject: projectActions.assignProject,
  getProjects: projectActions.getProjects,
};

const connectedProject = connect(mapState, actionCreators)(SingleProject);
export { connectedProject as Project };
