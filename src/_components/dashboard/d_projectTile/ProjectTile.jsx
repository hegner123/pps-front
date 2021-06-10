import React, {useState} from 'react';
import { connect } from 'react-redux';
import { ProjectsTile, TileHeader} from './style';
import {Link} from 'react-router-dom';
import {projectActions} from '../../../_actions/';


// available props: project title as data, id as id

// todo dispatch project selection
function ProjectTile(props) {

    function handleDelete(e, id){
        e.preventDefault()
        props.deleteProject({id:id});
    }

        const projectTitle = props.data.trim().toLowerCase().replace(/\s/g, "-")
        return (
            <div>
                <Link to={"/project/" + projectTitle} onClick={()=>props.assignProject('assign' ,projectTitle)}>
                    <ProjectsTile>
                        <TileHeader>{props.data}</TileHeader>
                        
                    </ProjectsTile>
                </Link>
                <button css="cursor:pointer" onClick={(e) => handleDelete(e, props.id)}>Delete {projectTitle}</button>
            </div>
        );
    }

    function mapState(state) {
        const { tileState } = state;
        return { tileState };
    }

    const actionCreators = {
        assignProject: projectActions.assignProject,
        deleteProject: projectActions.deleteProject
    };
const connectedProjectTile = connect(mapState, actionCreators)(ProjectTile);
export { connectedProjectTile as ProjectTile };