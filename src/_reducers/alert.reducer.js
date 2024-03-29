import { alertConstants } from '../_constants'

export function alertReducer(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'AlertSuccess',
                message: action.message,
            }
        case alertConstants.ERROR:
            return {
                type: 'AlertDanger',
                message: action.message,
            }
        case alertConstants.CLEAR:
            return {}
        default:
            return state
    }
}
