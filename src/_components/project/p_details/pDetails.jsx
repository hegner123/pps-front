import React from 'react';
import { Link } from 'react-router-dom';
import {store} from '../../../_helpers';
import {css} from 'styled-components';
import { ProjectDetails, ProjectTitle , AddSong} from './style';



export function PDetails(props){
        return (
            <ProjectDetails>
                <ProjectTitle  css="color:var(--text-color)" >{props.data}</ProjectTitle>
                <Link to="/new-song">
            <AddSong >+</AddSong>
        </Link>
            </ProjectDetails>
        );
    }




