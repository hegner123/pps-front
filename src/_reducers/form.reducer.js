import { formConstants } from '../_constants/'
import { v4 as uuidv4 } from 'uuid'

const initState = {
    arrangement: [{ instrument: '', id: uuidv4() }],
}

export function formReducer(state = initState, action) {
    switch (action.type) {
        case formConstants.INST_ADD:
            return {
                ...state,
                arrangement: [
                    ...state.arrangement,
                    {
                        instrument: '',
                        id: uuidv4(),
                    },
                ],
            }
        case formConstants.INST_INSERT_MANY:
            return {
                ...state,
                arrangement: action.value.split(',').map((inst) => {
                    return {
                        instrument: inst,
                        id: uuidv4(),
                    }
                }),
            }
        case formConstants.INST_DELETE:
            return {
                ...state,
                arrangement: state.arrangement.filter(
                    (inst) => inst.id != action.id
                ),
            }
        case formConstants.INST_EDIT:
            return {
                ...state,
                arrangement: state.arrangement.map((inst) => {
                    if (inst.id != action.id) {
                        return { ...inst }
                    }
                    return { ...inst, instrument: action.value, id: action.id }
                }),
            }
        case formConstants.INST_RESET:
            return {
                ...state,
                arrangement: [{ instrument: '', id: uuidv4() }],
            }

        case formConstants.REFERENCE_ADD:
            if (state.references) {
                return {
                    ...state,
                    references: [
                        ...state.references,
                        {
                            reference: action.value,
                            id: uuidv4(),
                        },
                    ],
                }
            } else {
                return {
                    ...state,
                    references: [
                        {
                            reference: action.value,
                            id: uuidv4(),
                        },
                    ],
                }
            }

        case formConstants.REFERENCE_DELETE:
            return {
                ...state,
                references: state.references.filter(
                    (ref) => ref.id != action.id
                ),
            }

        default:
            return state
    }
}
