import { uiConstants } from '../_constants';

export function userInterface(state = {navDropdown: false, dropdownOpen:false, id:''}, action) {
  switch (action.type) {
    case uiConstants.NAV_DROPDOWN_OPEN:
      return {...state,
        navDropdown: true,
      };
    case uiConstants.NAV_DROPDOWN_CLOSE:
      return {...state,
        navDropdown: false,
      };

case uiConstants.DROPDOWN_OPEN:
  return {...state,
          id: action.id,
          dropdownOpen: true}
case uiConstants.DROPDOWN_CLOSE:
  return {...state,
          dropdownOpen: false}
    default:
      return state
  }
}