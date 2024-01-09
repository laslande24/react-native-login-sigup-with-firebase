// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJy0jQXRNE_0ctnUIb0BUoWG6JhCAvJQw",
  authDomain: "react-native-login-10dc6.firebaseapp.com",
  projectId: "react-native-login-10dc6",
  storageBucket: "react-native-login-10dc6.appspot.com",
  messagingSenderId: "104593181792",
  appId: "1:104593181792:web:f876a0914c6bed3d6d0705",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
