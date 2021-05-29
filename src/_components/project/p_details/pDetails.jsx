import React from 'react';
import {store} from '../../../_helpers';
import { ProjectDetails, ProjectTitle } from './style';



export function PDetails(props){
        return (
            <ProjectDetails>
                <ProjectTitle>{props.data}</ProjectTitle>
            </ProjectDetails>
        );
    }




