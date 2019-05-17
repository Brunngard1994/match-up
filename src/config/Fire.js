import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQOT_wVOFjUg0CLKx0vBWsVNMGCpR06TI",
    authDomain: "match-up-cde1b.firebaseapp.com",
    databaseURL: "https://match-up-cde1b.firebaseio.com",
    projectId: "match-up-cde1b",
    storageBucket: "match-up-cde1b.appspot.com",
    messagingSenderId: "586474731515",
    appId: "1:586474731515:web:e9a5e1c55ccc56df"
};

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;

  