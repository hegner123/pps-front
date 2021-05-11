import { projectConstants } from '../_constants';
import { projectService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export  const projectActions = {
    update
};

function update(project, song, instrument) {
    return dispatch => {
        dispatch(request({  }));

        projectService.updateStatus(project, song, instrument)
            .then(
                project => { 
                    dispatch(success(user));
                    // history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(project) { return { type: projectConstants.UPDATE_REQUEST, project } }
    function success(project) { return { type: projectConstants.UPDATE_SUCCESS, project } }
    function failure(error) { return { type: projectConstants.UPDATE_FAILURE, error } }
}


export default userActions;