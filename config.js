import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDGGAsd7f_kCTAHgBozZiYjO2Abfo2yqOk",
  authDomain: "complaint-forum-bd3d9.firebaseapp.com",
  projectId: "complaint-forum-bd3d9",
  storageBucket: "complaint-forum-bd3d9.appspot.com",
  messagingSenderId: "977562465040",
  appId: "1:977562465040:web:096f692cd168fb598feb95" 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

