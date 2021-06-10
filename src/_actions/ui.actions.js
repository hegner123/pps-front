import { uiConstants } from '../_constants';

export const uiActions = {
    navOpen,
    navClose
};

function navOpen() {
    return { type: uiConstants.NAV_DROPDOWN_OPEN };
}

function navClose() {
    return { type: uiConstants.NAV_DROPDOWN_CLOSE };
}

