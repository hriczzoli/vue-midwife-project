// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import { auth, db } from './firebase';



Vue.config.productionTip = false

let app;
// let config = {
//   your config data
// };
// firebase.initializeApp(config);



// export const firebaseApp = firebase.initializeApp(config)
// export const db = firebaseApp.database();
// export const menuRef = db.ref('menu');
// export const selectRef = db.ref('selectedItems');
// export const noteRef = db.ref('additionalNotes');
// export const currentUser = firebase.auth().currentUser;

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     return user;
//   }
// });

// app = new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App },
//   router
// })

const unsubscribe = auth.onAuthStateChanged(user => {
  new Vue({
    router,
    el: '#app',
    template: '<App :user="user" />',
    components: { App },
    asyncComputed: {
      user: {
        get() {
          return findUserById(user.uid);
        },
        default: 'Pending',
      }
    },
    data() {
      return {
        user: {
          email: user.email || '',
          uid: user.uid || ''
        }
      }
    }
  });
  unsubscribe();
});
