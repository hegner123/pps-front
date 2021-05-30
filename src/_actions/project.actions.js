import { alertActions } from './alert.actions';
import { projectConstants } from '../_constants';
import { projectService } from '../_services/';
import { store } from '../_helpers';

export  const projectActions = {
    getProjects,
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
                    dispatch(alertActions.success(state + ' projects loaded!'));
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: projectConstants.GETALL_REQUEST } }
    function success(projects) { return { type: projectConstants.GETALL_SUCCESS, projects } }
    function failure(error) { return { type: projectConstants.GETALL_FAILURE, error } }
}







function changeCellStatus(project, song, instrument, status, id){
    return dispatch => {
        projectService.changeCellStatus( project, song, instrument,status, id)
        .then(
            status => {
                dispatch(success(status));
                dispatch(alertActions.success(state + ' projects loaded!'));

            },
            error => dispatch(failure(error.toString))
        );
    };
    function request() { return { type: projectConstants.STATUS_REQUEST } }
    function success(status) { return { type: projectConstants.STATUS_SUCCESS, status } }
    function failure(error) { return { type: projectConstants.STATUS_FAILURE, error } }
}
export default projectActions;