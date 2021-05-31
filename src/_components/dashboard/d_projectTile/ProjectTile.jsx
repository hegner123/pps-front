import React from 'react';
import { connect } from 'react-redux';
import { ProjectsTile, TileHeader} from './style';
import {Link} from 'react-router-dom';
import {projectActions} from '../../../_actions/'


// available props: project title as data, id as id

// todo dispatch project selection
function ProjectTile(props) {

        const projectTitle = props.data.trim().toLowerCase().replace(/\s/g, "-")
        return (
            <div>
                <Link to={"/project/" + projectTitle} onClick={()=>props.assignProject('assign' ,projectTitle)}>
                    <ProjectsTile>
                        <TileHeader>{props.data}</TileHeader>
                    </ProjectsTile>
                </Link>
            </div>
        );
    }

    function mapState(state) {
        const { tileState } = state;
        return { tileState };
    }

    const actionCreators = {
        assignProject: projectActions.assignProject
    };
const connectedProjectTile = connect(mapState, actionCreators)(ProjectTile);
export { connectedProjectTile as ProjectTile };