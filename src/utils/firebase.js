import firebase from 'firebase/compat/app'
import "firebase/compat/database";
import 'firebase/compat/auth'
import variables from './variables';

const firebaseConfig = {
    apiKey: variables.APIKEY,
    authDomain: variables.AUTHDOMAIN,
    databaseURL: variables.DATABASE
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export const database = firebase.database();