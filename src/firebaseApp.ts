import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "config/firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
