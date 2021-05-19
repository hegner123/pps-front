import React from 'react';
import { connect } from 'react-redux';
import { ProjectTile } from '../d_projectTile'



class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:{
                projects:['Blink-183', 'Johnny Got Dumped', 'Cupcake', 'Droning Anxiety']
            }
        }
    }

    render() {
let i =0;

        return (
            <div>
            <div className="dash-header">
                <h3>Projects</h3>
                <a className='add-project'>+</a>
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



const connectedProjects = connect()(Projects);
export { connectedProjects as Projects };