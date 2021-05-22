import React, { useState } from 'react';
import { store } from '../_helpers'
import { connect } from 'react-redux';
import { projectActions } from '../_actions/';
import { PDetails } from '../_components/project/p_details/';
import { TableArea } from '../_components/project/p_table';
import { ProjectEditor} from '../ProjectEditor';
import { alertActions } from '../_actions/alert.actions';
import { data } from '../_reducers/projects.reducer';





class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            loading:true,
        }
    }


      async componentDidMount(){
          await this.props.getProjects()
        await this.setState({
            loading:false,
        })
    }
         render(){
             const dataStore = store.getState()
             const projectData = dataStore.data.projects;
             let display;
            if (projectData !== "unset"){
                display =<div className="full-width">
                 <div className='row project-title'>
                         <PDetails data={projectData.projectTitle   }/>
                         </div>
                         <div className="row grid-area">
                             <TableArea data={projectData}/>
                         </div>
                     </div>
            }

        return (
        <div className="row">
         {display}
        </div>
        );
    }
};
    function mapState(state) {
        const { projects } = state;
        return { projects };
    }


    const actionCreators = {
        getProjects: projectActions.getProjects
    }


const connectedPreview = connect(mapState, actionCreators)(Preview);
export { connectedPreview as Preview };