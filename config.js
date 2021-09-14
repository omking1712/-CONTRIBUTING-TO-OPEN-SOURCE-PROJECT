import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBdwjRN14ZTegHCsZQAfOGBFYL-VIEoeWk",
  authDomain: "classtest-677d0.firebaseapp.com",
  projectId: "classtest-677d0",
  storageBucket: "classtest-677d0.appspot.com",
  messagingSenderId: "317336033553",
  appId: "1:317336033553:web:6375f42aac945c8a0a94b0"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();