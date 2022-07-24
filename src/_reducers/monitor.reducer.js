import { monitorConstants } from '../_constants'

const initialState = {
    idle: true,
    DATABASE_UPDATE_SUCCESS: '',
    DATABASE_UPDATE_ERROR: '',
}

export function monitorReducer(state = initialState, action) {
    switch (action.type) {
        case monitorConstants.DATABASE_UPDATE_SUCCESS:
            return { ...state, DATABASE_UPDATE_ERROR: action.success }

        case monitorConstants.DATABASE_UPDATE_ERROR:
            return { ...state, DATABASE_UPDATE_ERROR: action.error }

        default:
            return state
    }
}
