import { referenceConstants } from '../_constants';

const initialState = {results:'unset'};

export function referenceData(state = initialState, action) {
  switch (action.type) {
        case referenceConstants.GETPREVIEW_REQUEST:
          return {
          request: 'Requested'
          };
        case referenceConstants.GETPREVIEW_SUCCESS:
          return {
          results: action.results
          }
        case referenceConstants.GETPREVIEW_FAILURE:
          return {
          error: action.error
          }
    default:
      return {...state}
  }
}