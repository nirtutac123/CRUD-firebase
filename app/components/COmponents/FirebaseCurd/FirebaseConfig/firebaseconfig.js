// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function FirebaseConfig() {
const firebaseConfig = {
  apiKey: "AIzaSyBeapXgbwMavRoaPptSnxWBLXZpKSkgU_g",
  authDomain: "fir-withhooks-cedc8.firebaseapp.com",
  databaseURL: "https://fir-withhooks-cedc8-default-rtdb.firebaseio.com",
  projectId: "fir-withhooks-cedc8",
  storageBucket: "fir-withhooks-cedc8.appspot.com",
  messagingSenderId: "90600048295",
  appId: "1:90600048295:web:28e577c5127f2d9af3fd82",
  measurementId: "G-1KE2ZDBEYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
return getDatabase(app)
}

export default FirebaseConfig  