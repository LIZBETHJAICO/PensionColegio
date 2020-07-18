import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')


const firebaseConfig = {
    apiKey: "AIzaSyDtjIXBadCDoMHNAtCywb1EdX0jZcwwGFw",
    authDomain: "colegio-ayacucho.firebaseapp.com",
    databaseURL: "https://colegio-ayacucho.firebaseio.com",
    projectId: "colegio-ayacucho",
    storageBucket: "colegio-ayacucho.appspot.com",
    messagingSenderId: "820754570292",
    appId: "1:820754570292:web:5b0fea3e7823b55ca87e61"
}

let app = null
if (!firebase.apps.length) {
    console.log(!firebase.apps.length), 'salio';
    app = firebase.initializeApp(firebaseConfig)
}

const fs = app.firestore()
const auth = app.auth()
const storage = app.storage()
    //const db = app.database()
export { storage, auth, fs }