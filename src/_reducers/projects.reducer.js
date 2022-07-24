import { projectConstants } from '../_constants'

let current = JSON.parse(localStorage.getItem('current'))

const url = window.location.pathname
const first = url.replace('/project/', '')
const id = first.replace('/new-song/', '')

// if (url.includes('/project/')) {
//     current = id
// }

const initialState = current
    ? {
          projects: 'unset',
          current: current,
          selected: current.selected,
          needsUpdate: false,
      }
    : {
          projects: 'unset',
          current: 'unset',
          selected: 'unset',
          needsUpdate: false,
      }
// const initialState = { projects: 'unset', selected: 0 }

export function projectsReducer(state = initialState, action) {
    switch (action.type) {
        case projectConstants.GETALL_SUCCESS:
            return {
                ...state,
                projects: action.projects,
            }
        case projectConstants.GETALL_FAILURE:
            return {
                ...state,
                error: action.error,
            }
        case projectConstants.STATUS_REQUEST:
            return {
                ...state,
                action: action.request,
            }
        case projectConstants.STATUS_SUCCESS:
            return {
                ...state,
            }
        case projectConstants.ASSIGN_PROJECT:
            return {
                ...state,
                current: action.project,
            }
        case projectConstants.CLEAR_PROJECT:
            return {
                ...state,
                current: {},
            }
        case projectConstants.CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                create: action.create,
                needsUpdate: true,
            }
        case projectConstants.CREATE_PROJECT_FAILURE:
            return {
                ...state,
                create: action.error,
            }
        case projectConstants.DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                delete: action.delete,
                needsUpdate: true,
            }
        case projectConstants.DELETE_PROJECT_FAILURE:
            return {
                ...state,
                delete: action.error,
            }
        case projectConstants.CREATE_SONG_SUCCESS:
            return {
                ...state,
                create: action.create,
                needsUpdate: true,
            }
        case projectConstants.CREATE_SONG_FAILURE:
            return {
                ...state,
                create: action.error,
            }
        case projectConstants.DELETE_SONG_SUCCESS:
            return {
                ...state,
                songDelete: action.delete,
                needsUpdate: true,
            }
        case projectConstants.DELETE_SONG_FAILURE:
            return {
                ...state,
                songDelete: action.error,
            }
        case projectConstants.SET_SELECTED:
            return {
                ...state,
                selected: action.selection,
            }
        case projectConstants.UPDATE_TABLE:
            return {
                ...state,
                projects: action.table,
            }
        case projectConstants.NEEDS_UPDATE:
            return {
                ...state,
                needsUpdate: action.needsUpdate,
            }
        default:
            return { ...state }
    }
}
