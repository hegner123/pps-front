import { formConstants } from '../_constants/'
import { v4 as uuidv4 } from 'uuid'

const initState = { arrangement: [{ instrument: '', id: uuidv4() }] }

export function formReducer(state = initState, { action, value, id }) {
    switch (action) {
        case formConstants.INST_ADD:
            return {
                ...state,
                arrangement: [
                    ...state.arrangement,
                    {
                        instrument: value,
                        id: uuidv4(),
                    },
                ],
            }
        case formConstants.INST_INSERT_MANY:
            return {
                ...state,
                arrangement: value.split(',').map((inst) => {
                    return {
                        instrument: inst,
                        id: uuidv4(),
                    }
                }),
            }
        case formConstants.INST_DELETE:
            return {
                ...state,
                arrangement: state.arrangement.filter((inst) => inst.id != id),
            }
        case formConstants.INST_EDIT:
            return {
                ...state,
                arrangement: state.arrangement.map((inst) => {
                    if (inst.id != id) {
                        return { ...inst }
                    }
                    return { ...inst, instrument: value, id: id }
                }),
            }
        case formConstants.INST_RESET:
            return {
                ...state,
                arrangement: [{ instrument: '', id: uuidv4() }],
            }

        default:
            return state
    }
}
