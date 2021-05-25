import React from 'react';
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { store } from '../_helpers'
import { PDetails } from '../_components/project/p_details';
import { TableArea } from '../_components/project/p_table';

export function Project(props){
       let id = useParams().id
        const projectStore = store.getState()
        const projectData = projectStore.userData.projects;
        let i;
        let display;
        let projectDisplay = projectData.forEach(data =>{

            if (data === id){
               return data
            }
        })
        console.log(projectDisplay)
    return (
        <div className="full-width">
            <div className='row project-title'>
            <TableArea data={display}/>

             </div>
            <div className="row grid-area">
            <PDetails data={display.projectTitle}/>
        </div>
    </div>
    );
  }




// const connectedProject = connect()(Project);
// export { connectedProject as Project };

