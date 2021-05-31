import React from 'react';
import {useParams, useLocation} from 'react-router-dom'
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { store } from '../_helpers';
import { PDetails } from '../_components/project/p_details';
import { TableArea } from '../_components/project/p_table';
import { useSelector } from 'react-redux'

export function SingleProject(){
    const userData = useSelector((state) => state.userData.projects)
    let id = useParams().id

    return (
        <div className="full-width">
            <div className="row grid-area">
                <PDetails data={iterate(userData, id).projectTitle}/>
            </div>
            <div className='row project-title'>
                <TableArea data={iterate(userData, id)}/>
            </div>
        </div>
    );
  }




  function iterate(data, slugId){
    let display;
    data.forEach(data => {
        let compare = data.projectTitle.trim().toLowerCase().replace(/\s/g, "-")
        if(slugId == compare){
            display = data
        }
    })
    return display;
}