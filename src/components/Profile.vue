<template>
    <div class="profile">
        <br>
        <br>
            <h3>Profile</h3>
            <br>
            <p class="profileIntro">This is a page where you can edit your personal profile</p>
            <br>
            <p class="profileIntro">Start by adding your name to complete your profile</p>
        <br>
       
        <b-btn v-on:click="" class="profilePic"><img src="../assets/user.png" style="width: 100px; margin-top: 10px;"/></b-btn>
        <input type="file" accept=".jpg, .jpeg, .png" class="photoBrowser"/>
        <br>
        <br>
        <b-form-input type="text" v-model="name" placeholder="Full Name" class="input"></b-form-input><br>
        <b-form-input type="text" v-model="email" placeholder="1010101@ucn.dk" class="input"></b-form-input><br>
        <b-btn v-on:click="updateProfile" class="updateBtn">Update</b-btn>
        <br>
        <br>
    </div>
</template>

<script>
import firebase from 'firebase';
import { selectRef } from '../firebase.js';
import { noteRef } from '../firebase.js';
import { db } from '../firebase.js';
import { currentUser } from '../firebase.js';


export default {
    name: 'profile',
    data() {
        return {
            email: '',
            name: '',
            currentUser: firebase.auth().currentUser,
        }
    },
    methods: {
        updateProfile() {
            db.ref(`${this.currentUser.uid}`).child('UserProfile').set({
                name: this.name,
                email: this.email,
            })
        }
    }
}
</script>

<style>
.profileIntro {
    text-align: left;
    margin: auto !important;
    width: 75%;
}

.input {
    margin: auto;
    width: 75%;
    padding: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    
  }

  .updateBtn {
      background: linear-gradient(to bottom right, rgb(255, 132, 153), rgb(237, 76, 103));
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
      color: #fff;
      border-style: none;
  }

  .profilePic {
      width: 140px;
      height: 140px;
      background: linear-gradient(to bottom right, rgb(255, 132, 153), rgb(237, 76, 103));
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
      margin: auto !important;
      border-radius: 15px;
      border-style: none;
  }

  .photoBrowser {
      margin: auto !important;
      margin-left: 70px!important;
      border-radius: 5px;
  }
</style>