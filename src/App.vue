<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info" sticky=true>

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">WiFy</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#" v-on:click="backToHello" class="menu-item">Menu</b-nav-item>
      <b-nav-item href="#" class="menu-item" v-on:click="openLog">Experience Log</b-nav-item>
      <b-nav-item href="#" class="menu-item" v-on:click="openNotes">Notes</b-nav-item>
      <b-nav-item href="#" class="menu-item" v-on:click="openProgress">Progression Overview</b-nav-item>
      <b-nav-item href="#" class="menu-item" v-on:click="openExport">Export</b-nav-item>
    </b-navbar-nav>
    

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown right class="menu-item">
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User:{{this.currentUser.email}}</em>
        </template>
        <b-dropdown-item v-on:click="openProfile">Profile</b-dropdown-item>
        <b-dropdown-item v-on:click="logout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>


    
    <router-view></router-view>
  <br>
  <br>
    <div class="footer col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <p class="footer-text">WiFy&copy by Group12</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import currentUser from './main.js'
import { auth, db } from './firebase';

export default {
  name: 'app',
  data () {
    return {
      currentUser: firebase.auth().currentUser
    }
  },
  firebase: {
    currentUser: firebase.auth().currentUser
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    backToHello() {
            this.$router.replace('hello')
    },
    openLog(){
      this.$router.replace('log')
      console.log("next page clicked!")
    },
    openNotes(){
      this.$router.replace('notes')
      console.log("next page clicked!")
    },
    openProgress(){
      this.$router.replace('progress')
      console.log("next page clicked!")
    },
    openExport(){
      this.$router.replace('export')
      console.log("next page clicked!")
    },
    openProfile(){
      this.$router.replace('profile')
      console.log("next page clicked!")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  background: linear-gradient(to bottom right, rgb(255, 132, 153), rgb(237, 76, 103));
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.menu-item {
  text-align: left;
}

.footer {
  background: #515051;
  height: 50px;
  color: #fff;
  
}

.footer-text {
  padding-top: 12px !important;
  opacity: 0.7;
  font-size: 80%;
}
.cardBtn {
  margin-top: 5px;
  margin-right: 15px;
}

</style>
