import firebase from "firebase";
import { render } from "react-dom";
import * as React from 'react';
import { SafeAreaView,FlatList } from 'react-native';

const  firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHPX4OE5uYV4dZgpgnMnXOBuIM-65OjM0",
  authDomain: "myfood-27388.firebaseapp.com",
  databaseURL: "https://myfood-27388-default-rtdb.firebaseio.com",
  projectId: "myfood-27388",
  storageBucket: "myfood-27388.appspot.com",
  messagingSenderId: "815017237760",
  appId: "1:815017237760:web:c887a3071112e89b0167e5",
  measurementId: "G-JTLHX0ZCM2"
});

const db = firebaseApp.firestore();

  export default db; 
 


 

   


