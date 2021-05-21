import React, { useState } from 'react';

import { connect } from 'react-redux';
import { projectActions } from '../_actions/'
import {TableArea} from '../_components/project/p_table';
import { PDetails } from '../_components/project/p_details';
// import { seedData } from '../_assets/seedData.json';


class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loading:0
        }
    }
    componentDidMount(){
        this.props.getProjects()
        this.timerID = setInterval(
            () => this.tick(this.state.loading),
            5
          );
    }
    tick(i) {
        i++
        this.setState({
          loading: i
        });
      }
        render(){
            const {project, projects} = this.props;
            let display;
            if (this.state.loading > 5){
            clearInterval(this.timerID);
            display = <div className="full-width">
            <div className='row project-title'>
                <PDetails data={projects.projects.projectTitle}/>
                </div>
                <div className="row grid-area">
                    <TableArea data={projects.projects}/>
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