import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { userData } from './projects.reducer';


const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  userData
});

export default rootReducer;