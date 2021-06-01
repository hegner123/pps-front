import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectTile } from '../d_projectTile'
import {DashHeader, DashTitle, ProjectSection, AddProject} from './style';

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
           <ProjectTile data={data.projectTitle} id={i} key={i++}/>
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
        <DashTitle>Projects</DashTitle>
        <Link to="/new-project">
            <AddProject>+</AddProject>
        </Link>
        </DashHeader>
        <ProjectSection>
        {props.data.map(data =>
           <ProjectTile data={data.projectTitle} id={i} key={i++}/>
                 )}
    </ProjectSection>
      </div>
    );
  }