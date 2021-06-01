import React from 'react';
import { connect } from 'react-redux';
import {projectActions} from '../../../_actions/project.actions';
import {RecentProjects, UserProjects} from '../d_projectGrid';

class Projects extends React.Component{
      constructor(props) {
        super(props);
    }
     componentDidMount() {
            this.props.getProjects()
    }

render(){
    const {projects} = this.props
    return(
        <div>
            {/* <RecentProjects data={projects}/> */}
            <UserProjects data={projects}/>
        </div>
    )
}
}


function mapState(state) {
    const { projects } = state.userData;
    return { projects };
}

const actionCreators = {
    getProjects: projectActions.getProjects
};




const connectedProjects = connect(mapState, actionCreators)(Projects);
export { connectedProjects as Projects };

