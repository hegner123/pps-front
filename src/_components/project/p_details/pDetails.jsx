import React from 'react';
import { Link , useParams} from 'react-router-dom';
import { ProjectDetails, ProjectTitle , AddSong} from './style';



export function pDetails(props){
    let id = useParams().id
    console.log(`${id}/new-song/`);
        return (
            <ProjectDetails>
                <ProjectTitle  css="color:var(--text-color)" >{props.data.projectTitle}</ProjectTitle>
                <Link to={`${id}/new-song/`}>
            <AddSong >+</AddSong>
        </Link>
            </ProjectDetails>
        );
    }




