import { alertActions } from './alert.actions';
import { projectConstants } from '../_constants';
import { projectService } from '../_services/';
import { useSelector } from 'react-redux';
import { store } from '../_helpers';
// import { alertActions } from '.';
// import { history } from '../_helpers';

export  const projectActions = {
    getProjects
};

function getProjects() {
    console.log('getProjects action')
    const state = store.getState()
    return dispatch => {
        dispatch(request())
        projectService.getProjects(state.authentication.user.userName)
            .then(
                projects => {
                    dispatch(success(projects));
                    dispatch(alertActions.success(projects.projectTitle + ' loaded!'));
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: projectConstants.GETALL_REQUEST } }
    function success(projects) { return { type: projectConstants.GETALL_SUCCESS, projects } }
    function failure(error) { return { type: projectConstants.GETALL_FAILURE, error } }
}

export default projectActions;