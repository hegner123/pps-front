import React from 'react';
import { Link } from 'react-router-dom';
import {store} from '../../../_helpers';
import { ProjectDetails, ProjectTitle , AddSong} from './style';



export function PDetails(props){
        return (
            <ProjectDetails>
                <ProjectTitle>{props.data}</ProjectTitle>
                <Link to="/new-song">
            <AddSong>+</AddSong>
        </Link>
            </ProjectDetails>
        );
    }




