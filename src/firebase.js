import firebase from 'firebase';
let config = {
    //your config details here
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
  
