import { userConstants } from '../_constants'
import { userService } from '../_services'
import { alertActions } from './'
import { projectActions } from './'
import { history } from '../_helpers'

export const userActions = {
    login,
    logout,
    register,
    getById,
    findUsers,
    saveSettings,
    sendInvite,
    handleInvitation,
    checkInvites,
    delete: _delete,
}

function login(userName, password) {
    return (dispatch) => {
        dispatch(request({ userName }))
        userService.login(userName, password).then(
            (user) => {
                dispatch(success(user))
                // dispatch(projectActions.getProjects())
                history.push('/dashboard')
            },
            (error) => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }

    function request(user) {
        return { type: userConstants.LOGIN_REQUEST, user }
    }
    function success(user) {
        return { type: userConstants.LOGIN_SUCCESS, user }
    }
    function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, error }
    }
}

function getById(id) {
    return (dispatch) => {
        userService.getById(id).then(
            (user) => {
                dispatch(success(user))
            },
            (error) => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
        function success(user) {
            return { type: userConstants.GET_SUCCESS, user }
        }
        function failure(error) {
            return { type: userConstants.GET_FAILURE, error }
        }
    }
}

function logout() {
    userService.logout()
    return { type: userConstants.LOGOUT }
}

function register(user) {
    return (dispatch) => {
        dispatch(request(user))
        userService.register(user).then(
            (user) => {
                dispatch(success())
                history.push('/login')
                dispatch(
                    alertActions.success('Registration successful ' + user)
                )
            },
            (error) => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }

    function request(user) {
        return { type: userConstants.REGISTER_REQUEST, user }
    }
    function success(user) {
        return { type: userConstants.REGISTER_SUCCESS, user }
    }
    function failure(error) {
        return { type: userConstants.REGISTER_FAILURE, error }
    }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return (dispatch) => {
        dispatch(request(id))

        userService.delete(id).then(
            (user) => dispatch(success(id)),
            (error) => dispatch(failure(id, error.toString()))
        )
    }

    function request(id) {
        return { type: userConstants.DELETE_REQUEST, id }
    }
    function success(id) {
        return { type: userConstants.DELETE_SUCCESS, id }
    }
    function failure(id, error) {
        return { type: userConstants.DELETE_FAILURE, id, error }
    }
}

function saveSettings(userId, settings) {
    return (dispatch) => {
        dispatch(request({ userId }))
        userService.saveSettings(userId, settings).then(
            (result) => {
                dispatch(success(result))
            },
            (error) => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }

    function request(user) {
        return { type: userConstants.SETTINGS_UPDATE_REQUEST, user }
    }
    function success(user) {
        return { type: userConstants.SETTINGS_UPDATE_SUCCESS, user }
    }
    function failure(error) {
        return { type: userConstants.SETTINGS_UPDATE_FAILURE, error }
    }
}

function findUsers(email) {
    return (dispatch) => {
        dispatch(request())
        userService.findUsers(email).then(
            (users) => {
                dispatch(success(users))
            },
            (error) => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }
    function request() {
        return { type: userConstants.FIND_USERS_REQUEST }
    }
    function success(users) {
        return { type: userConstants.FIND_USERS_SUCCESS, users }
    }
    function failure(error) {
        return { type: userConstants.FIND_USERS_FAILURE, error }
    }
}

function sendInvite(options) {
    const invite = {
        projectSlug: options.projectSlug,
        projectId: options.projectId,

        hostUser: {
            userName: options.userName,
            id: options.id,
        },
    }
    return (dispatch) => {
        dispatch(request(user))
        userService.sendInvitation(invite).then(
            (res) => {
                dispatch(success(res))
            },
            (error) => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }
    function request() {
        return { type: userConstants.SEND_INVITE_REQUEST }
    }
    function success(user) {
        return { type: userConstants.SEND_INVITE_SUCCESS, user }
    }
    function failure(error) {
        return { type: userConstants.SEND_INVITE_FAILURE, error }
    }
}
function handleInvitation(status, invitationId) {
    // expected input
    // {"status":"accepted", "invitationId": "62ee8cde74917f246608db07"}
    const action = {
        status: status,
        invitationId: invitationId,
    }
    return (dispatch) => {
        dispatch(request(user))
        userService.handleInvitation(action).then(
            (res) => {
                dispatch(success(res))
            },
            (error) => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }
    function request(user) {
        return { type: userConstants.HANDLE_INVITE_REQUEST, user }
    }
    function success(user) {
        return { type: userConstants.HANDLE_INVITE_SUCCESS, user }
    }
    function failure(error) {
        return { type: userConstants.HANDLE_INVITE_FAILURE, error }
    }
}
function checkInvites(userId, projectId) {
    // expected input {"projectId":"62ebcd7b16f6b6d946a6a5b8"}
    return (dispatch) => {
        dispatch(request(user))
        userService.checkInvites(userId, projectId).then(
            (res) => {
                dispatch(success(res))
            },
            (error) => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }
    function request(user) {
        return { type: userConstants.CHECK_INVITE_REQUEST, user }
    }
    function success(user) {
        return { type: userConstants.CHECK_INVITE_SUCCESS, user }
    }
    function failure(error) {
        return { type: userConstants.CHECK_INVITE_FAILURE, error }
    }
}
