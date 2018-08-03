import { auth, googleAuthProvider, usersRef } from '../../firebase';
import { removeUser } from './users';

export const SIGNED_IN = 'SIGNED_IN';
const signedIn = user => {
  return {
    type: SIGNED_IN,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL
  };
};

export const SIGNED_OUT = 'SIGNED_OUT';
const signedOut = () => {
  return {
    type: SIGNED_OUT
  };
};

export const ATTEMPTING_AUTH_CHANGE = 'ATTEMPTING_AUTH_CHANGE';
export const signIn = () => dispatch => {
  dispatch({ type: ATTEMPTING_AUTH_CHANGE });
  auth.signInWithPopup(googleAuthProvider);
};

export const signOut = userEmail => async dispatch => {
  await removeUser(userEmail);
  dispatch({ type: ATTEMPTING_AUTH_CHANGE });
  auth.signOut();
};

export const listenForAuthChanges = () => dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {
      const userData = {
        uid: user.uid,
        photoURL: user.photoURL,
        email: user.email,
        displayName: user.displayName
      };
      dispatch(signedIn(userData));
      usersRef
        .doc(user.email)
        .get()
        .then(doc => {
          if (!doc.exists) {
            usersRef.doc(userData.email).set({ ...userData });
          }
        });
    } else {
      dispatch(signedOut());
    }
  });
};
