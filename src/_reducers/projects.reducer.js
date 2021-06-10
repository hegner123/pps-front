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
          ...state,
          action: action.request
          }
        case projectConstants.STATUS_SUCCESS:
          return {
          ...state,
          action: action.status
          }
        case projectConstants.ASSIGN_PROJECT:
          return {
          ...state,
          current: action.project
          }
        case projectConstants.CLEAR_PROJECT:
          return {
          ...state,
          current:{}
          }
        case projectConstants.CREATE_SUCCESS:
          return {
          ...state,
          create: action.create
          }
        case projectConstants.CREATE_SUCCESS:
          return {
          ...state,
          create: action.error
          }
        case projectConstants.DELETE_SUCCESS:
          return {
            ...state,
            delete:action.delete
          }

        case projectConstants.DELETE_FAILURE:
          return {
            ...state,
            delete: action.error
          }
    default:
      return {...state}
  }
}