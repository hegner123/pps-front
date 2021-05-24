import React from 'react';
import { connect } from 'react-redux';
import { Sidebar} from '../_components/dashboard/d_sidebar';
import { Recent } from '../_components/dashboard/d_recent';
import { Projects } from '../_components/dashboard/d_projects';
import {DashboardPage, ProjectSection} from './style';



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            loading:true
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

    render() {


        return (
    <DashboardPage>
            <Sidebar/>
        <ProjectSection>
            <Recent/>
            <Projects/>
        </ProjectSection>
    </DashboardPage>
        );
    }
}



const connectedDashboard = connect()(Dashboard);
export { connectedDashboard as Dashboard };