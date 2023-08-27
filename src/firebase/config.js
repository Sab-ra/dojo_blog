import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC4H4mCpLtU8vb6vzVMkgLrF1zxrbmw4yM",
  authDomain: "sabra-oy.firebaseapp.com",
  projectId: "sabra-oy",
  storageBucket: "sabra-oy.appspot.com",
  messagingSenderId: "576812700930",
  appId: "1:576812700930:web:c4373bc0b46e2133a59e1b"
};

// initialize the backend
firebase.initializeApp( firebaseConfig )

// initialize Firestore
const projectFirestore = firebase.firestore()

// enable timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }