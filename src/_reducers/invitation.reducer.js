import { userConstants } from '../_constants'

const initialState = {}

export function invitationReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.SEND_INVITE_REQUEST:
            return {
                send_invite: 'Sent Invite',
            }
        case userConstants.SEND_INVITE_SUCCESS:
            return { send_invite: 'Sent Success' }
        case userConstants.SEND_INVITE_FAILURE:
            return { send_invite: action.error }
        case userConstants.HANDLE_INVITE_REQUEST:
            return { handle_invite: 'Handle Invite Request' }
        case userConstants.HANDLE_INVITE_SUCCESS:
            return { handle_invite: 'Handle Invite Sent' }
        case userConstants.HANDLE_INVITE_FAILURE:
            return { handle_invite: action.error }
        case userConstants.CHECK_INVITE_REQUEST:
            return { check_invite: 'Check Invite Request' }
        case userConstants.CHECK_INVITE_SUCCESS:
            return { check_invite: 'Check Invite Success' }
        case userConstants.CHECK_INVITE_FAILURE:
            return { check_invite: action.error }

        default:
            return state
    }
}
