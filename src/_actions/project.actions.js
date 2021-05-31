import { alertActions } from './alert.actions';
import { projectConstants } from '../_constants';
import { projectService } from '../_services/';
import { store } from '../_helpers';

export  const projectActions = {
    getProjects,
    changeCellStatus,
    assignProject
};

function getProjects() {

    const state = store.getState()
    const user = state.authentication.user.userName
    return dispatch => {
        dispatch(request());
        projectService.getProjects(user)
            .then(
                projects => {
                    dispatch(success(projects));
                    dispatch(alertActions.success(user + ' projects loaded!'));
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: projectConstants.GETALL_REQUEST } }
    function success(projects) { return { type: projectConstants.GETALL_SUCCESS, projects } }
    function failure(error) { return { type: projectConstants.GETALL_FAILURE, error } }
}




function assignProject(action ,project){
    let currentProject;
    const state = store.getState()
    const projects = state.userData.projects

    projects.forEach(data => {
        if (data.projectSlug === project){
            currentProject = data;
        }
    })
    switch(action){
        case 'assign':
            return dispatch => {
                dispatch(assign(currentProject))
    };
        case 'clear':
            return dispatch => {
                dispatch(clear())
    };
        default:
            return {}

    }
    function assign(project) {return {type:projectConstants.ASSIGN_PROJECT, project}}
    function clear() {return {type:projectConstants.CLEAR_PROJECT}}
}


function changeCellStatus(project, song, instrument, status, id){
    const state = store.getState()
    const user = state.authentication.user.userName
    return dispatch => {
        dispatch(request())
        projectService.changeCellStatus( project, song, instrument,status, id, user)
        .then(status =>
            dispatch(success(status)),
            error => 
            dispatch(failure(error)
        )
        )};
    ;
    function request() { return { type: projectConstants.STATUS_REQUEST } }
    function psuccess(projects) { return { type: projectConstants.GETALL_SUCCESS } }
    function success(status) { return { type: projectConstants.STATUS_SUCCESS } }
    function failure(error) { return { type: projectConstants.STATUS_FAILURE, error } }
}
export default projectActions;