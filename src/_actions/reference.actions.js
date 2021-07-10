import { alertActions } from "./alert.actions";
import { referenceConstants } from "../_constants";
import { referenceService } from "../_services/";
import { store } from "../_helpers";

export const refActions = {
  getReferences,
};

function getReferences(song) {
  return (dispatch) => {
    dispatch(request());
    referenceService.spotifyPreview(song).then(
      (results) => {
        dispatch(success(results));
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: referenceConstants.GETPREVIEW_REQUEST };
  }
  function success(results) {
    return { type: referenceConstants.GETPREVIEW_SUCCESS, results };
  }
  function failure(error) {
    return { type: referenceConstants.GETPREVIEW_FAILURE, error };
  }
}

export default refActions;
