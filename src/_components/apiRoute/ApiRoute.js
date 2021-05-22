import React from "react";
import { Route, Redirect } from "react-router-dom";
import projectActions from '../../_actions/project.actions';
import { store } from '../../_helpers'
import PropTypes from "prop-types";

function getProjects(props){
  console.log(props)
  projectActions.getProjects()
  
  // props.getProjects()
}



export const ApiRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={
      props => {
        getProjects(props);
        
            <Component {...props} />
      }
  } />
)


