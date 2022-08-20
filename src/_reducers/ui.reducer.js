import { uiConstants } from '../_constants'

export function uiReducer(
    state = {
        isSettingsOpen: false,
        dropdownOpen: false,
        newProjectOpen: false,
        id: '',
    },
    action
) {
    switch (action.type) {
        case uiConstants.SETTINGS_OPEN:
            return { ...state, isSettingsOpen: true }
        case uiConstants.SETTINGS_CLOSE:
            return { ...state, isSettingsOpen: false }
        case uiConstants.DROPDOWN_OPEN:
            return { ...state, id: action.id, dropdownOpen: true }
        case uiConstants.DROPDOWN_CLOSE:
            return { ...state, id: '', dropdownOpen: false }
        case uiConstants.INVITE_OPEN:
            return { ...state, inviteOpen: true }
        case uiConstants.INVITE_CLOSE:
            return { ...state, inviteOpen: false }
        case uiConstants.NEW_PROJECT_OPEN:
            return { ...state, newProjectOpen: true }
        case uiConstants.NEW_PROJECT_CLOSE:
            return { ...state, newProjectOpen: false }
        default:
            return state
    }
}
