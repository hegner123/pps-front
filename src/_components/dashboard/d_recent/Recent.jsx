import React from 'react';
import { connect } from 'react-redux';
import { ProjectTile } from '../d_projectTile';



class Recent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:{
                projects:['Blink-183']
            }
        }
    }

    render() {
        let i = 0;
        return (
    <div>
        <div className="dash-header">
            <h3>Recent</h3>
        </div>
        <div className="recent-projects">
        {this.state.data.projects.map(data =>
            <ProjectTile data={data} key={i++}/>
            )}
        </div>
    </div>
        );
    }
}



const connectedRecent = connect()(Recent);
export { connectedRecent as Recent };
