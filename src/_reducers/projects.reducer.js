import { projectConstants } from '../_constants'

// if (url.includes('/project/')) {
//     current = id
// }

const initialState = { projects: 'unset', selected: 0 }

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
            console.log(
                state.current.songs.filter((song) => {
                    return song._id !== action.song
                })
            )
            return {
                current: state.current.songs.filter((song) => {
                    return song._id !== action.song
                }),
                songDelete: action.delete,
                needsUpdate: true,
            }
        case projectConstants.DELETE_SONG_FAILURE:
            return {
                ...state,
                songDelete: action.error,
            }
        case projectConstants.REFRESH:
            return {
                ...state,
                projects: 'unset',
                current: current,
                selected: current.selected,
                needsUpdate: false,
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
