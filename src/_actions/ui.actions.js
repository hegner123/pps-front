import { uiConstants } from '../_constants';

export const uiActions = {
    navOpen,
    navClose,
    dropdownOpen,
    dropdownClose
};

function navOpen() {
    return { type: uiConstants.NAV_DROPDOWN_OPEN };
}

function navClose() {
    return { type: uiConstants.NAV_DROPDOWN_CLOSE };
}



function dropdownOpen(id) {
    return { type: uiConstants.DROPDOWN_OPEN, id };
}

function dropdownClose() {
    return { type: uiConstants.DROPDOWN_CLOSE };
}