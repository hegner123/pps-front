import React from 'react';
import { connect } from 'react-redux';
import { ProjectTile } from '../d_projectTile'
import {DashHeader, DashTitle, ProjectSection} from './style';
import {store} from '../../../_helpers';
import {projectActions} from '../../../_actions/project.actions';

class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            loading:true,
        }
    }
    async componentDidMount(){
        let storage = localStorage.getItem('hasProjects')
          if (!storage){
            await this.props.getProjects()
                this.setState({
                    loading:false,
                })
          }
    }
render(){
        const projectStore = store.getState()
        const projectData = projectStore.userData.projects;
        let display;
            if (projectData !== "unset"){
                display =   <div>
                                <RecentProjects/>
                                <UserProjects/>
                            </div>
            } else {
                display = <span>Refresh</span>
            }
    return(
        <div>
       {display}
       </div>
    )
}
}

  function mapState(state) {
    const { projects } = state;
    return { projects };
}


  const actionCreators = {
    getProjects: projectActions.getProjects
}


const connectedProjects = connect(mapState, actionCreators)(Projects);
export { connectedProjects as Projects };


export function RecentProjects() {
    const items = store.getState().userData.projects
    let i = 0;
    return (
        <div>
            <DashHeader>
                <DashTitle>Recent</DashTitle>
            </DashHeader>
            <ProjectSection>
        {items.map(data =>
           <ProjectTile data={data.projectTitle} key={i++}/>
                 )}
                </ProjectSection>
        </div>

    );
  }

export function UserProjects() {
    const uPs = store.getState().userData.projects
    let i = 0
    return (
      <div>
        <DashHeader>
            <a href="/new-project">
                <DashTitle>Projects</DashTitle>
            </a>
        </DashHeader>
        <ProjectSection>
        {uPs.map(data =>
           <ProjectTile data={data.projectTitle}  key={i++}/>
                 )}
    </ProjectSection>
      </div>
    );
  }