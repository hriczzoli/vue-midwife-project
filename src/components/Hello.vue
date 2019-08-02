<template>
  <div class="hello">
    <div>
      
      <div class="menuHeader">
      <br>
        <img src="../assets/user.png" style="width: 100px"/>
        <p><strong>Logged in as: {{this.currentUser.email}}</strong></p>
        <p>Jordmodler uddannelsen UCN</p>
        <br>
      </div>
      <br>
      <br>
      <!--
      <div class="menuItem"><p class="menuItemTxt"><img src="../assets/log.png" style="height:20px; margin-right: 20px;"/><strong>Log Experience</strong></p></div>
      <hr>
      <div class="menuItem"><p class="menuItemTxt"><img src="../assets/log.png" style="height:20px; margin-right: 20px;"/><strong>View Notes</strong></p></div>
      <hr>
      <div class="menuItem"><p class="menuItemTxt"><img src="../assets/log.png" style="height:20px; margin-right: 20px;"/><strong>Progression Overview</strong></p></div>
      <hr>
      <div class="menuItem"><p class="menuItemTxt"><img src="../assets/log.png" style="height:20px; margin-right: 20px;"/><strong>Print</strong></p></div>
      <hr> -->
      <!-- alternative menu -->
      <div>
        <b-button v-on:click="openLog" variant="primary" class="cardBtnAlternative">
        <img src="../assets/logPink.png" class="menuIcon1"/><br>
        ExperienceLog</b-button>
        <b-button v-on:click="openNotes" variant="primary" class="cardBtnAlternative2">
        <img src="../assets/notes.png" class="menuIcon1"/><br>
        Notes</b-button>
      </div>
      <div class="menuGroup2">
        <b-button v-on:click="openProgress" variant="primary" class="cardBtnAlternative2">
        <img src="../assets/stats.png" class="menuIcon1"/><br>
        Progress</b-button>
        <b-button v-on:click="openExport" variant="primary" class="cardBtnAlternative">
        <img src="../assets/ExportPink.png" class="menuIcon1"/><br>
        Export</b-button>
      </div>
      <!-- alternative menu end -->
      
      <!-- first menu
      <div class="row justify-content-center">
        <div class="col-lg-3">
          <b-card  id="card-bgc" text-variant="white" title="Log Experience">
            <p class="card-text">
              Log your experiences of the day.
            </p>
            <b-button v-on:click="openLog" variant="primary" class="cardBtn">Log Experience</b-button>
          </b-card>
        </div>
        <div class="col-lg-3">
          <b-card  id="card-bgc" text-variant="white" title="Read Your Notes">
            <p class="card-text">
              Go through your notes you have taken earlier about your experiences.
            </p>
            <b-button v-on:click="openNotes" variant="primary" class="cardBtn">Read Your Notes</b-button>
          </b-card>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-3">
          <b-card  id="card-bgc" text-variant="white" title="View Progress">
            <p class="card-text">
              You can see your your overall progress here.
            </p>
            <b-button v-on:click="openProgress" variant="primary" class="cardBtn">View progress</b-button>
          </b-card>
        </div>
        <div class="col-lg-3">
          <b-card  id="card-bgc" text-variant="white" title="Print">
            <p class="card-text">
              Print or email your documents (experience registration forms).
            </p>
            <b-button v-on:click="nextPage" variant="primary" class="cardBtn">Print</b-button>
          </b-card>
        </div>
      </div> -->
      
    </div> 
    
    <!-- <button v-on:click="nextPage" class="btn-warning">Next Page</button> -->
  </div>
</template>

<script>

import firebase from 'firebase';
import { menuRef } from '../main.js';
import { db } from '../main.js';
import { currentUser } from '../firebase.js';



export default {
  name: 'hello',
  data () {
    return {
      menu: '',
      items: [],
      currentUser: firebase.auth().currentUser,
    }
  },
  firebase: {
    menu: menuRef
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    submitMenuItem() {
      menuRef.push({ menuItem: this.menu })
    },

    readFromDB(key) {
    menuRef.on('value', function(snapshot) {
      var menu = [];
      menu = snapshot.val();
      console.log(menu);
    })
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin-bottom: 30px;
}
.menuHeader {
  background: linear-gradient(to bottom right, rgb(255, 132, 153), rgb(237, 76, 103));
}
.menuHeader p {
  color: #fff;
}
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

#card-bgc {
  background: linear-gradient(to bottom right, rgb(255, 132, 153), rgb(237, 76, 103));
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}
.card {
  margin-top: 20px;
}

.cardBtn {
  background: #FF9B71;
  border-style: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.cardBtn2 {
  background: #FF9B71;
  border-style: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  width: 80%;
}

.cardBtnAlternative {
  background: transparent;
  border-style: none;
  color: rgb(237, 76, 103);
  height: 150px;
  min-width: 40%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
}
.cardBtnAlternative2 {
  background: linear-gradient(to bottom right, rgb(255, 132, 153), rgb(237, 76, 103));
  border-style: none;
  color: #fff;;
  height: 150px;
  min-width: 40%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
}

.cardBtnAlternative:active {
  background-color: rgb(237, 76, 103) !important;
}
.cardBtnAlternative2:active {
  background-color: rgb(237, 76, 103) !important;
}

.menuItemTxt {
  color: rgb(237, 76, 103);
  width: 80%;
  text-align: left;
  margin-left: 60px;
}

hr {
  width: 70%;
}

.menuItem {
  margin: auto!important;
}

.menuIcon1 {
  height: 40%;
}
.menuIcon1:active {
  background-color: rgb(237, 76, 103) !important;
}

.menuIcon1:active {
  background-color: green;
}

.menuGroup2 {
  margin-top: 1%;
}

</style>
