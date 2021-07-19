import { userConstants } from "../_constants";

const recents = JSON.parse(localStorage.getItem("recent"));

const initialState = recents ? { projects: recents } : {};

export function recent(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_SUCCESS:
      return {
        projects: recents,
      };
    case userConstants.GET_FAILURE:
      return {};

    default:
      return state;
  }
}
