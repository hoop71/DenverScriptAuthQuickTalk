import { combineReducers } from 'redux';
import authReducer from '../reducers/auth';
import usersReducer from '../reducers/users';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer
});

export default rootReducer;
