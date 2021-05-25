import React from 'react';
import { connect } from 'react-redux';
import { ProjectTitle } from '../../project/p_details/style';
import { ProjectsTile, TileHeader} from './style';
import {Link} from 'react-router-dom';



class ProjectTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        const projectTitle = this.props.data.trim().toLowerCase().replace(/\s/g, "-")
        return (
        <Link to={"/project/" + projectTitle}>
            <ProjectsTile>
                <TileHeader>{this.props.data}</TileHeader>
            </ProjectsTile>
        </Link>
        );
    }
}



const connectedProjectTile = connect()(ProjectTile);
export { connectedProjectTile as ProjectTile };