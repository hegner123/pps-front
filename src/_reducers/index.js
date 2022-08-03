import { combineReducers } from 'redux'
import { authenticationReducer as authentication } from './authentication.reducer'
import { registrationReducer as registration } from './registration.reducer'
import { recentReducer as recent } from './recent.reducer'
import { alertReducer as alert } from './alert.reducer'
import { projectsReducer as userProjects } from './projects.reducer'
import { referenceReducer as reference } from './reference.reducer'
import { uiReducer as userInterface } from './ui.reducer'
import { formReducer as form } from './form.reducer'
import { monitorReducer as monitor } from './monitor.reducer'

const rootReducer = combineReducers({
    authentication,
    registration,
    recent,
    alert,
    userProjects,
    reference,
    userInterface,
    form,
    monitor,
})

export default rootReducer
