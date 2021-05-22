import React, { useState } from 'react';
import { store } from '../_helpers'
import { connect } from 'react-redux';

import { alertActions } from '../_actions/alert.actions';
import { data } from '../_reducers/projects.reducer';





class ProjectEditor extends React.Component {
    constructor(props) {
        super(props);
    }
        render(){

            const data = store.getState()
            console.log(data)
        return (
        <div className="row">
           
        </div>
        );
    }
};






const connectedProjectEditor = connect()(ProjectEditor);
export { connectedProjectEditor as ProjectEditor };