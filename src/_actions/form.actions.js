import { formConstants } from '../_constants'

export const formActions = {
    instAdd,
    instInsertMany,
    instDelete,
    instEdit,
    instReset,
    referenceAdd,
    referenceDelete,
}

//{action, value, id}

function instAdd() {
    return (dispatch) => {
        dispatch({ type: formConstants.INST_ADD })
    }
}

function instInsertMany(value) {
    return (dispatch) => {
        dispatch({ type: formConstants.INST_INSERT_MANY, value: value })
    }
}

function instDelete(id) {
    return (dispatch) => {
        dispatch({ type: formConstants.INST_DELETE, id: id })
    }
}

function instEdit(value, id) {
    return (dispatch) => {
        dispatch({ type: formConstants.INST_EDIT, value: value, id: id })
    }
}

function instReset() {
    return (dispatch) => {
        dispatch({ type: formConstants.INST_RESET })
    }
}

function referenceAdd(value) {
    return (dispatch) => {
        dispatch({ type: formConstants.REFERENCE_ADD, value: value })
    }
}

function referenceDelete(id) {
    return (dispatch) => {
        dispatch({ type: formConstants.REFERENCE_DELETE, id: id })
    }
}
