import { projectConstants } from '../_constants';


let projects = JSON.parse(localStorage.getItem('userProjects'));
const initialState = projects ? {projects: projects } :  {projects:'unset'};

export function userData(state = initialState, action) {
  switch (action.type) {
    case projectConstants.GETALL_SUCCESS:
      return {
        projects: action.projects
      };
    case projectConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case projectConstants.STATUS_REQUEST:
      return {
        action: action.status
      }
    default:
      return state
  }
}