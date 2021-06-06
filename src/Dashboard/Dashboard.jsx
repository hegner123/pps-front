import React from 'react';
import { Sidebar} from '../_components/dashboard/d_sidebar';
import { Projects } from '../_components/dashboard/d_projects';
import {DashboardPage, ProjectSection, SidebarSection} from './style';



export function Dashboard(){
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



