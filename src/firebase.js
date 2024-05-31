// // firebase.js
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBjpmNLUui8SZvgCO5c32R03DObY0qXAks",
//   authDomain: "glassdoor-93835.firebaseapp.com",
//   projectId: "glassdoor-93835",
//   storageBucket: "glassdoor-93835.appspot.com",
//   messagingSenderId: "1044558348756",
//   appId: "1:1044558348756:web:750484d15fc795464f5641"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

// export { auth, googleProvider, facebookProvider };









// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjpmNLUui8SZvgCO5c32R03DObY0qXAks",
  authDomain: "glassdoor-93835.firebaseapp.com",
  projectId: "glassdoor-93835",
  storageBucket: "glassdoor-93835.appspot.com",
  messagingSenderId: "1044558348756",
  appId: "1:1044558348756:web:750484d15fc795464f5641"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Initialize Firestore
const db = getFirestore(app);

export { auth, googleProvider, facebookProvider, db };
