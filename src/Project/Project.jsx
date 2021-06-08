import React, {useState} from 'react';
import {useParams, useLocation} from 'react-router-dom'
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { store } from '../_helpers';
import { PDetails } from '../_components/project/p_details';
import { TableArea } from '../_components/project/p_table';
import {  useSelector  } from 'react-redux'

export function SingleProject(props){
    const userData = useSelector((state) => state.userData.current)
    let id = useParams().id
    const [songs, setSongs] = useState(userData)
    const [userId, setUserId] = useState(id)
    return (
        <div className="full-width">
            <div className="row grid-area">
                <PDetails data={songs}/>
            </div>
            <div className='row project-title'>
                <TableArea data={songs}/>
            </div>
        </div>
    );
  }

