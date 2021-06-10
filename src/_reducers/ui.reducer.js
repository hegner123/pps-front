import { uiConstants } from '../_constants';

export function userInterface(state = {navDropDown: false}, action) {
  switch (action.type) {
    case uiConstants.NAV_DROPDOWN_OPEN:
      return {...state,
        navDropDown: true,
      };
    case uiConstants.NAV_DROPDOWN_CLOSE:
      return {...state,
        navDropDown: false,
      };
    default:
      return state
  }
}