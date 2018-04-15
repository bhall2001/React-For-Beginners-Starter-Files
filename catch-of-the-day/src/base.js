import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDUueuExARpdMVs7y6og2FVJPE-lvzCCCg",
    authDomain: "catch-of-the-day-bhall.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-bhall.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;