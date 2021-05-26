import React from 'react';
import { ProjectTile } from '../d_projectTile'
import {DashHeader, DashTitle, ProjectSection} from './style';

export function RecentProjects(props) {
    let i =0;
    if (props.data === 'unset'){
        return <h1>Fuck</h1>
    }
    return (
        <div>
            <DashHeader>
                <DashTitle>Recent</DashTitle>
            </DashHeader>
            <ProjectSection>
        {props.data.map(data =>
           <ProjectTile data={data.projectTitle} key={i++}/>
                 )}
                </ProjectSection>
        </div>

    );
  }

export function UserProjects(props) {
    let i = 0
    if (props.data === 'unset'){
        return <h1>Fuck</h1>
    }
    return (
      <div>
        <DashHeader>
            <a href="/new-project">
                <DashTitle>Projects</DashTitle>
            </a>
        </DashHeader>
        <ProjectSection>
        {props.data.map(data =>
           <ProjectTile data={data.projectTitle}  key={i++}/>
                 )}
    </ProjectSection>
      </div>
    );
  }