import { alertActions } from './alert.actions';
import { projectConstants } from '../_constants';
import { projectService } from '../_services/';
import { store } from '../_helpers';
import { results } from '../_forms/NewSong/_query';
import { history } from '../_helpers';

export  const projectActions = {
    getProjects,
    assignProject,
    createProject,
    deleteProject,
    createSong,
    deleteSong,
    changeCellStatus
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
    console.log(action + "      " + project)
    let currentProject;
    const state = store.getState()
    const projects = state.userData.projects

    projects.forEach(data => {
        console.log(data.projectSlug === project)
        console.log(data)
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

function createProject(newProject){
    return dispatch => {
        projectService.createProjects(newProject)
        .then(create => dispatch(success(create)),
            error => dispatch(failure(error)));
    }

    function success(create){return {type: projectConstants.CREATE_PROJECT_SUCCESS, create}}
    function failure(error) { return { type: projectConstants.CREATE_PROJECT_FAILURE, error }}
}

function deleteProject(project){
    return dispatch => {
        projectService.deleteProjects(project)
        .then(project => dispatch(success(project)),
            error => dispatch(failure(error)));
    }

    function success(create){return {type: projectConstants.DELETE_PROJECT_SUCCESS, create}}
    function failure(error) { return { type: projectConstants.DELETE_PROJECT_FAILURE, error }}
}

function createSong(newSong){
    console.log(newSong)
    return dispatch => {
        projectService.createSong(newSong)
        .then(create => {
                    dispatch(success(create));
                    history.push(newSong.path)},
        error => dispatch(failure(error)));
    }

    function success(create){return {type: projectConstants.CREATE_SONG_SUCCESS, create}}
    function failure(error) { return { type: projectConstants.CREATE_SONG_FAILURE, error }}
}

function deleteSong(song, id){

    return dispatch => {
        projectService.deleteSong( song, id)
        .then(result => dispatch(success(result))),
        error => dispatch(failure(error));
    }

    function success(result){return {type: projectConstants.DELETE_SONG_SUCCESS, result}}
    function failure(error) { return { type: projectConstants.DELETE_SONG_FAILURE, error }}
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


export default projectActions;