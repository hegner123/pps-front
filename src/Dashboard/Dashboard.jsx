import React from 'react';
import { connect } from 'react-redux';
import { Sidebar} from '../_components/dashboard/d_sidebar';
import { Projects } from '../_components/dashboard/d_projects';
import {DashboardPage, ProjectSection, SidebarSection} from './style';



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <DashboardPage>
                <SidebarSection>
                <Sidebar/>
                </SidebarSection>
                <ProjectSection>
                    <Projects/>
                </ProjectSection>
            </DashboardPage>
        );
    }
}



const connectedDashboard = connect()(Dashboard);
export { connectedDashboard as Dashboard };