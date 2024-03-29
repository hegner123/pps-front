import { alertActions } from './alert.actions'
import { projectConstants, monitorConstants } from '../_constants'
import { projectService } from '../_services/'
import { userService } from '../_services/user.service'
import { store } from '../_helpers'
import { userActions } from './user.actions'

export const projectActions = {
    getProjects,
    assignProject,
    createProject,
    deleteProject,
    createSong,
    deleteSong,
    changeCellStatus,
    setSelected,
    refreshProject,
    setNeedsUpdate,
}

function getProjects(id, userName) {
    const user = id
    return (dispatch) => {
        dispatch(request)
        return projectService.getProjects(user).then(
            (projects) => {
                dispatch(alertSuccess(userName))

                dispatch(success(projects))
            },
            (error) => dispatch(failure(error.toString()))
        )
    }

    function request() {
        return { type: projectConstants.GETALL_REQUEST }
    }
    function success(projects) {
        return { type: projectConstants.GETALL_SUCCESS, projects: projects }
    }
    function failure(error) {
        return { type: projectConstants.GETALL_FAILURE, error }
    }
    function alertSuccess(userName) {
        return alertActions.success(`${userName}'s projects loaded!`)
    }
}

function createProject(newProject) {
    return (dispatch) => {
        projectService.createProjects(newProject).then(
            (create) => {
                dispatch(success(create))
                dispatch(updateSuccess())
            },
            (error) => {
                dispatch(failure(error))
                dispatch(updateError(error))
            }
        )
    }

    function success(create) {
        return { type: projectConstants.CREATE_PROJECT_SUCCESS, create }
    }
    function failure(error) {
        return { type: projectConstants.CREATE_PROJECT_FAILURE, error }
    }
    function updateSuccess() {
        return {
            type: monitorConstants.DATABASE_UPDATE_SUCCESS,
            success: 'CREATE_PROJECT_SUCCESS',
        }
    }
    function updateError() {
        return {
            type: monitorConstants.DATABASE_UPDATE_ERROR,
            error: 'CREATE_PROJECT_ERROR',
        }
    }
}

function deleteProject(project) {
    return (dispatch) => {
        projectService.deleteProjects(project).then(
            (project) => dispatch(success(project)),
            (error) => dispatch(failure(error))
        )
    }

    function success(create) {
        return { type: projectConstants.DELETE_PROJECT_SUCCESS, create }
    }
    function failure(error) {
        return { type: projectConstants.DELETE_PROJECT_FAILURE, error }
    }
}

function createSong(song, projectId) {
    const state = store.getState()
    const user = state.authentication.user.id
    const newSong = { song, user, projectId }
    return (dispatch) => {
        projectService.createSong(newSong).then(
            (createdSong) => {
                dispatch(success(createdSong))
                dispatch(updateSuccess())
            },
            (error) => {
                dispatch(failure(error))
                dispatch(updateError())
            }
        )
    }

    function success(create) {
        return { type: projectConstants.CREATE_SONG_SUCCESS, create }
    }

    function failure(error) {
        return { type: projectConstants.CREATE_SONG_FAILURE, error }
    }
    function updateSuccess() {
        return {
            type: monitorConstants.DATABASE_UPDATE_SUCCESS,
            success: 'CREATE_SONG_SUCCESS',
        }
    }
    function updateError() {
        return {
            type: monitorConstants.DATABASE_UPDATE_ERROR,
            error: 'CREATE_SONG_ERROR',
        }
    }
}

function deleteSong(song, projectId) {
    return (dispatch) => {
        projectService
            .deleteSong(song, projectId)
            .then((result) => {
                dispatch(updateSuccess())
            })
            .catch((error) => {
                console.log(error)
                dispatch(updateSuccess())
            })
    }

    function success(result) {
        return {
            type: projectConstants.DELETE_SONG_SUCCESS,
            result,
        }
    }
    function failure(error) {
        return { type: projectConstants.DELETE_SONG_FAILURE, error }
    }
    function updateSuccess() {
        return {
            type: monitorConstants.DATABASE_UPDATE_SUCCESS,
            success: 'DELETE_SONG_SUCCESS',
        }
    }
    function alertSuccess(userName) {
        return alertActions.success(`song was deleted`)
    }
}

function changeCellStatus(project, song, instrument, status, id) {
    const state = store.getState()
    const user = state.authentication.user.id
    return (dispatch) => {
        dispatch(request())
        projectService
            .changeCellStatus(project, song, instrument, status, id, user)
            .then(
                (status) => dispatch(success(status)),
                (error) => dispatch(failure(error))
            )
        projectService.getProjects(user).then(
            (projects) => {
                localStorage.setItem('userProjects', JSON.stringify(projects))
            },
            (error) => dispatch(failure(error.toString()))
        )
    }
    function request() {
        return { type: projectConstants.STATUS_REQUEST }
    }
    function success(status) {
        return { type: projectConstants.STATUS_SUCCESS, status }
    }
    function failure(error) {
        return { type: projectConstants.STATUS_FAILURE, error }
    }
}

function assignProject(project) {
    const state = store.getState()
    const user = state.authentication.user.id
    let currentProject = refreshProject(project, true)
    return (dispatch) => {
        userService.addToRecent(currentProject, user)
        dispatch(assign(currentProject))
        userService.getById(user)
        currentProject = { ...currentProject, selected: 0 }
    }

    function assign(project) {
        return { type: projectConstants.ASSIGN_PROJECT, project }
    }
    function clear() {
        return { type: projectConstants.CLEAR_PROJECT }
    }
}

function setSelected(selected) {
    return (dispatch) => {
        dispatch(setSelectedSong(selected))
    }
    function setSelectedSong(selection) {
        return { type: projectConstants.SET_SELECTED, selection }
    }
}

function refreshProject(project, internal) {
    let currentProject
    const projects = JSON.parse(localStorage.getItem('userProjects'))
    projects
        ? projects.forEach((data) => {
              if (data.projectSlug === project || data._id === project) {
                  currentProject = data
              }
          })
        : ''
    if (internal) {
        return currentProject
    } else {
        return (dispatch) => {
            dispatch(refresh)
        }
    }

    function refresh() {
        return { type: projectConstants.REFRESH }
    }
}

function setNeedsUpdate(action) {
    return (dispatch) => {
        dispatch(setUpdated(action))
    }

    function setUpdated() {
        return { type: projectConstants.NEEDS_UPDATE }
    }
}

export default projectActions
