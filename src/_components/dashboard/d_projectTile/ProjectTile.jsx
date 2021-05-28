import React from 'react';
import { connect } from 'react-redux';
import { ProjectsTile, TileHeader} from './style';
import {Link} from 'react-router-dom';


// available props: project title as data, id as id

// todo dispatch project selection
function ProjectTile(props) {

        const projectTitle = props.data.trim().toLowerCase().replace(/\s/g, "-")
        console.log(props)
        return (
            <div>
                <Link to={"/project/" + projectTitle}>
                    <ProjectsTile>
                        <TileHeader>{props.data}</TileHeader>
                    </ProjectsTile>
                </Link>
            </div>
        );
    }


const connectedProjectTile = connect()(ProjectTile);
export { connectedProjectTile as ProjectTile };