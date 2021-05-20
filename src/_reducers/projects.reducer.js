import { projectConstants } from '../_constants';

const initialState =  {projects: {projectTitle: 'this'}};

export function projects(state = initialState, action) {
  switch (action.type) {
    // case projectConstants.GETALL_REQUEST:
    //   // return {
    //   //   projects: {projectTitle: 'this'}
    //   // };
    case projectConstants.GETALL_SUCCESS:
      return {
        projects: action.projects
      };
    case projectConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}