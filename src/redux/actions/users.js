import { usersRef } from '../../firebase';

export const UPDATE_USERS = 'UPDATE_USERS';
const updateUsers = users => {
  return {
    type: UPDATE_USERS,
    users
  };
};

export const removeUser = async userEmail => {
  await usersRef
    .doc(userEmail)
    .delete()
    .then(() => console.log('Document successfully deleted!'))
    .catch(error => {
      console.error('Error removing document: ', error);
    });
};

export const listenForUsers = () => async dispatch => {
  await usersRef.onSnapshot(querySnapshot => {
    let users = [];
    querySnapshot.forEach(doc => {
      const data = doc.data();
      const userData = {
        displayName: data.displayName,
        photoURL: data.photoURL,
        modified: data.modified
      };
      users.push(userData);
    });
    dispatch(updateUsers(users));
  });
};
