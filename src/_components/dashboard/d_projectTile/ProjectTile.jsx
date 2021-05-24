import React from 'react';
import { connect } from 'react-redux';
import { ProjectsTile, TileHeader} from './style';



class ProjectTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const projectTitle = this.props.data.trim().toLowerCase().replace(/\s/g, "-")
        return (
        <a href={"/project/" + projectTitle}>
            <ProjectsTile>
                <TileHeader>{this.props.data}</TileHeader>
            </ProjectsTile>
        </a>
        );
    }
}



const connectedProjectTile = connect()(ProjectTile);
export { connectedProjectTile as ProjectTile };