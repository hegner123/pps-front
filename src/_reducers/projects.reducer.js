import { projectConstants } from '../_constants';

const initialState =  {projects: 'unset'};

export function data(state = initialState, action) {
  switch (action.type) {

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