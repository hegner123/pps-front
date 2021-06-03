import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectTile } from '../d_projectTile';
import AddIcon from '../../../_assets/icons/add.svg';
import {DashHeader, DashTitle, ProjectSection, AddProject, Section} from './style';

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
      <Section>
        <DashHeader>
        <DashTitle>Projects</DashTitle>
        <Link to="/new-project">
            <AddProject><AddIcon/></AddProject>
        </Link>
        </DashHeader>
        <ProjectSection>
        {props.data.map(data =>
           <ProjectTile data={data.projectTitle} id={i} key={i++}/>
                 )}
    </ProjectSection>
    </Section>
    );
  }