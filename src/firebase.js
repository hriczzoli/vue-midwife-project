import firebase from 'firebase';
let config = {
    apiKey: "AIzaSyBztr_d542Qo4xJ7HmJDHAgbw7gQfr5UmI",
    authDomain: "midwifevuepwa.firebaseapp.com",
    databaseURL: "https://midwifevuepwa.firebaseio.com",
    projectId: "midwifevuepwa",
    storageBucket: "",
    messagingSenderId: "1048086264064"
  };

  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(user => {
      if (user) {
          return user;
      }
  });

  export const db = firebase.database();
  export const auth = firebase.auth();
  export const selectRef = db.ref('selectedItems');
  export const noteRef = db.ref('additionalNotes');
  export const currentUser = firebase.auth().currentUser;
  