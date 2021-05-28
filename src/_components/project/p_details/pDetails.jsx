import React from 'react';
import {store} from '../../../_helpers';
import { ProjectDetails, ProjectTitle } from './style';



export function PDetails(props){
    const data = store.getState();
    console.log(data)


function setCurrentProject(text) {
    return {
      type: 'CURRENT_PROJECT',
      text
    }
  }
  
  store.dispatch(setCurrentProject(props.data))
        return (
            <ProjectDetails>
                <ProjectTitle>{props.data}</ProjectTitle>
            </ProjectDetails>
        );
    }




