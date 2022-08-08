import { uiConstants } from '../_constants'

export const uiActions = {
    setSettingsOpen,
    setSettingsClose,
    dropdownOpen,
    dropdownClose,
    setInviteOpen,
    setInviteClose,
}

function setSettingsOpen() {
    return { type: uiConstants.SETTINGS_OPEN }
}

function setSettingsClose() {
    return { type: uiConstants.SETTINGS_CLOSE }
}

function dropdownOpen(id) {
    return { type: uiConstants.DROPDOWN_OPEN, id }
}

function dropdownClose() {
    return { type: uiConstants.DROPDOWN_CLOSE }
}
function setInviteOpen() {
    return { type: uiConstants.INVITE_OPEN }
}
function setInviteClose() {
    return { type: uiConstants.INVITE_CLOSE }
}
