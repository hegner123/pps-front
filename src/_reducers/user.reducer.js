import { userConstants } from '../_constants'

export const userReducer = (
    state = { isLoading: true, findUsers: 'init' },
    action
) => {
    switch (action.type) {
        case userConstants.FIND_USERS_REQUEST:
            return {
                ...state,
                findUsers: 'FIND_USERS_REQUEST',
                isLoading: true,
            }
        case userConstants.FIND_USERS_SUCCESS:
            return { ...state, findUsers: action.users, isLoading: false }
        case userConstants.FIND_USERS_FAILURE:
            return { ...state, error: action.error }

        default:
            return state
    }
}
