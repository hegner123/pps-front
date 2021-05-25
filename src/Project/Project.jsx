import React from 'react';
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { store } from '../_helpers'
import { PDetails } from '../_components/project/p_details';
import { TableArea } from '../_components/project/p_table';

export function Project(){
        let id = useParams().id
        const projectStore = store.getState()
        const projectData = projectStore.userData.projects;
        function iterate(data){
            let display;
            data.forEach(data => {
                let compare = data.projectTitle.trim().toLowerCase().replace(/\s/g, "-")
                if(id == compare){
                    display = data
                }
            })
            return display;
        }

        console.log(iterate(projectData))
    return (
        <div className="full-width">
            <div className='row project-title'>
            <TableArea data={iterate(projectData)}/>

             </div>
            <div className="row grid-area">
            <PDetails data={iterate(projectData).projectTitle}/>
        </div>
    </div>
    );
  }




// const connectedProject = connect()(Project);
// export { connectedProject as Project };

