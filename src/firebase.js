import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
// YOU'RE FIREBASE CONFIG HERE
import { config } from './config';
// YOU'RE FIREBASE CONFIG HERE

firebase.initializeApp(config);

export const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const usersRef = firestore.collection('users');
