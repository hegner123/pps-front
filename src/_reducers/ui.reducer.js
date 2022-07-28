import { uiConstants } from '../_constants'

export function uiReducer(
    state = { isSettingsOpen: false, dropdownOpen: false, id: '' },
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
        default:
            return state
    }
}
