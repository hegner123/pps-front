import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { userData } from './projects.reducer';
import { referenceData} from './reference.reducer';
import { userInterface} from './ui.reducer';


const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  userInterface,
  alert,
  userData,
  referenceData
});

export default rootReducer;