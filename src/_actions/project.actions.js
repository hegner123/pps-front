import { alertActions } from './alert.actions';
import { projectConstants } from '../_constants';
import { projectService } from '../_services/';
import { store } from '../_helpers';

export  const projectActions = {
    getProjects,
    setCurrentProject
};

function getProjects() {
    console.log('getProjects action')
    const state = store.getState()
    const user = state.authentication.user.userName
    return dispatch => {
        dispatch(request())
        projectService.getProjects(user)
            .then(
                projects => {
                    dispatch(success(projects));
                    dispatch(alertActions.success(state + ' projects loaded!'));
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: projectConstants.GETALL_REQUEST } }
    function success(projects) { return { type: projectConstants.GETALL_SUCCESS, projects } }
    function failure(error) { return { type: projectConstants.GETALL_FAILURE, error } }
}




function setCurrentProject() {
    return { type: userConstants.LOGOUT };
}
export default projectActions;