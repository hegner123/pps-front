import { alertActions } from './alert.actions'
import { projectConstants } from '../_constants'
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
}

function getProjects(id, userName) {
    const user = id
    return (dispatch) => {
        dispatch(request())
        return projectService.getProjects(user).then(
            (projects) => {
                console.log(userName)
                dispatch(alertSuccess(userName.toUpperCase()))
                dispatch(success(projects))
                dispatch(userActions.getById(user))
                localStorage.removeItem('userProjects')

                localStorage.setItem('userProjects', JSON.stringify(projects))
                return projects
            },
            (error) => dispatch(failure(error.toString()))
        )
    }

    function request() {
        return { type: projectConstants.GETALL_REQUEST }
    }
    function success(projects) {
        return { type: projectConstants.GETALL_SUCCESS, projects }
    }
    function failure(error) {
        return { type: projectConstants.GETALL_FAILURE, error }
    }
    function alertSuccess(userName) {
        return alertActions.success(`${userName}'s projects loaded!`)
    }
}

function assignProject(action, project) {
    let currentProject
    const state = store.getState()
    const projects = state.userData.projects
    const user = state.authentication.user.id

    projects.forEach((data) => {
        if (data.projectSlug === project) {
            currentProject = data
        }
    })
    switch (action) {
        case 'assign':
            return (dispatch) => {
                userService.addToRecent(currentProject, user)
                dispatch(assign(currentProject))
                userService.getById(user)
                currentProject = { ...currentProject, selected: 0 }

                localStorage.setItem('current', JSON.stringify(currentProject))
            }
        case 'refresh':
            return (dispatch) => {
                userService.addToRecent(currentProject, user)
                dispatch(assign(currentProject))
                userService.getById(user)
                currentProject = { ...currentProject, selected: 0 }
            }
        case 'clear':
            return (dispatch) => {
                dispatch(clear())
                localStorage.removeItem('current')
            }
        default:
            return {}
    }
    function assign(project) {
        return { type: projectConstants.ASSIGN_PROJECT, project }
    }
    function clear() {
        return { type: projectConstants.CLEAR_PROJECT }
    }
}

function createProject(newProject) {
    return (dispatch) => {
        projectService.createProjects(newProject).then(
            (create) => dispatch(success(create)),
            (error) => dispatch(failure(error))
        )
    }

    function success(create) {
        return { type: projectConstants.CREATE_PROJECT_SUCCESS, create }
    }
    function failure(error) {
        return { type: projectConstants.CREATE_PROJECT_FAILURE, error }
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

function createSong(newSong, user, projectId) {
    return (dispatch) => {
        projectService.createSong(newSong).then(
            (create) => {
                projectService.getProjects(user).then(
                    (projects) => {
                        let currentProject = projects.filter(
                            (project) => project._id == projectId
                        )
                        localStorage.removeItem('current')

                        localStorage.setItem(
                            'current',
                            JSON.stringify({ project: currentProject[0] })
                        )
                    },
                    (error) => dispatch(failure(error.toString()))
                )

                dispatch(success(create))
                // dispatch(getProjects())
                console.log(newSong)
            },
            (error) => dispatch(failure(error))
        )
    }

    function success(create) {
        return { type: projectConstants.CREATE_SONG_SUCCESS, create }
    }
    function failure(error) {
        return { type: projectConstants.CREATE_SONG_FAILURE, error }
    }
}

function deleteSong(song, projectId, user) {
    return (dispatch) => {
        projectService
            .deleteSong(song, projectId)
            .then((result) => {
                projectService.getProjects(user).then(
                    (projects) => {
                        let currentProject = projects.filter(
                            (project) => project._id == projectId
                        )

                        localStorage.setItem(
                            'current',
                            JSON.stringify(currentProject[0])
                        )
                        dispatch(
                            assignProject(
                                'refresh',
                                currentProject[0].projectSlug
                            )
                        )
                    },
                    (error) => dispatch(failure(error.toString()))
                )
                dispatch(success(result, song))
            })
            .catch((error) => dispatch(failure(error)))
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

function setSelected(selected) {
    console.log(selected)
    return (dispatch) => {
        dispatch(setSelectedSong(selected))
    }
    function setSelectedSong(selection) {
        return { type: projectConstants.SET_SELECTED, selection }
    }
}

export default projectActions
