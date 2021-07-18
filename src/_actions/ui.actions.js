import { uiConstants } from "../_constants";

export const uiActions = {
  setSettingsOpen,
  setSettingsClose,
  dropdownOpen,
  dropdownClose,
};

function setSettingsOpen() {
  return { type: uiConstants.SETTINGS_OPEN };
}

function setSettingsClose() {
  return { type: uiConstants.SETTINGS_CLOSE };
}

function dropdownOpen(id) {
  return { type: uiConstants.DROPDOWN_OPEN, id };
}

function dropdownClose() {
  return { type: uiConstants.DROPDOWN_CLOSE };
}
