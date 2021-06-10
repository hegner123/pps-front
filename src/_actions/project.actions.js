import { alertActions } from './alert.actions';
import { projectConstants } from '../_constants';
import { projectService } from '../_services/';
import { store } from '../_helpers';

export  const projectActions = {
    getProjects,
    createProject,
    deleteProject,
    changeCellStatus,
    assignProject,
    createSong
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
        .then(status => dispatch(success(success)),
                error => dispatch(failure(error)
        )
        )};
    ;
    function request() { return { type: projectConstants.STATUS_REQUEST } }
    function success(status) { return { type: projectConstants.STATUS_SUCCESS } }
    function failure(error) { return { type: projectConstants.STATUS_FAILURE, error } }
}

function createProject(newProject){
    return dispatch => {
        projectService.createProjects(newProject)
        .then(create => dispatch(success(create)),
        error => dispatch(failure(error)));
    }

    function success(create){return {type: projectConstants.CREATE_SUCCESS}, create}
    function failure(error) { return { type: projectConstants.CREATE_FAILURE, error } }
}

function deleteProject(project){
    return dispatch => {
        projectService.deleteProjects(project)
        .then(project => dispatch(success(project)),
            error => dispatch(failure(error)));
    }

    function success(create){return {type: projectConstants.DELETE_SUCCESS}, create}
    function failure(error) { return { type: projectConstants.DELETE_FAILURE, error } }
}

function createSong(newSong){
    return dispatch => {
        projectService.createSong(newSong)
        .then(create => dispatch(success(create)),
        error => dispatch(failure(error)));
    }

    function success(create){return {type: projectConstants.CREATE_SUCCESS}, create}
    function failure(error) { return { type: projectConstants.CREATE_FAILURE, error } }
}
export default projectActions;