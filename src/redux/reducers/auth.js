import initialState from '../initialState';
import { ATTEMPTING_AUTH_CHANGE, SIGNED_IN, SIGNED_OUT } from '../actions/auth';

export default function authReducer(state = initialState.auth, action) {
  const { type } = action;
  switch (type) {
    case ATTEMPTING_AUTH_CHANGE:
      return {
        ...state
      };
    case SIGNED_OUT:
      return {
        ...state,
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
      };
    case SIGNED_IN:
      return {
        status: 'SIGNED_IN',
        email: action.email,
        displayName: action.displayName,
        photoURL: action.photoURL,
        uid: action.uid
      };
    default:
      return state;
  }
}
