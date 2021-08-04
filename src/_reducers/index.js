import { combineReducers } from 'redux'
import { authentication } from './authentication.reducer'
import { registration } from './registration.reducer'
import { recent } from './recent.reducer'
import { alert } from './alert.reducer'
import { userData } from './projects.reducer'
import { referenceData } from './reference.reducer'
import { userInterface } from './ui.reducer'
import { formReducer as form } from './form.reducer'

const rootReducer = combineReducers({
    authentication,
    registration,
    recent,
    userInterface,
    alert,
    userData,
    referenceData,
    form,
})

export default rootReducer
