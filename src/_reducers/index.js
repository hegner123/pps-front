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
import { invitationReducer as invitation } from './invitation.reducer'
import { userReducer as user } from './user.reducer'

const rootReducer = combineReducers({
    authentication,
    user,
    userProjects,
    invitation,
    registration,
    userInterface,
    reference,
    recent,
    form,
    alert,
    monitor,
})

export default rootReducer
