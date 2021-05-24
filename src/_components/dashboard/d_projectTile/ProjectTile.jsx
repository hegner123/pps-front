import React from 'react';
import { connect } from 'react-redux';



class ProjectTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="/project">
    <div className="project-tile">
        <h5 className="tile-header">{this.props.data}</h5>
    </div>
    </a>
        );
    }
}



const connectedProjectTile = connect()(ProjectTile);
export { connectedProjectTile as ProjectTile };