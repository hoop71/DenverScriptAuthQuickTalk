import initialState from '../initialState';
import { UPDATE_USERS } from '../actions/users';

export default function usersReducer(state = initialState.users, action) {
  const { users, type } = action;
  switch (type) {
    case UPDATE_USERS:
      return users;
    default:
      return state;
  }
}
