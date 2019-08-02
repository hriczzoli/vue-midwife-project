<template>
  <div class="log">
    <div>
    
      <br>
      <br>
      <h3 class="col-xs-8 col-sm-8 col-md-10 col-lg-10 introTxt"><strong>Registrering</strong></h3>
      <div>
      <br>
      <br>
      <!-- radio buttons for selecting the semester -->
      <label>Select Semester</label>
      <br>
        <b-btn  class="btn-primary semSelector" size="sm" disabled>2nd</b-btn>
        <b-btn v-on:click="changeSemester" size="sm" class="btn-primary semSelector">4th</b-btn>
        <b-btn v-on:click="" size="sm" class="btn-primary semSelector">6th</b-btn>
        <b-btn v-on:click="" size="sm" class="btn-primary semSelector">7th</b-btn>
          
      <br>
      <br>
      <div>
        <b-form-input v-model="text1" type="text" placeholder="Type keyword for search" class="col-xs-8 col-sm-8 searchField"></b-form-input>
        <p class="searchKeyword">Looking for: {{ text1 }}</p>
      </div>

      <br>
      <br>
      
      <!--<div v-b-toggle.collapse3 variant="primary" class="currentFormBtn" v-on:click="getCurrentState">Show current form state</div>
        <b-collapse id="collapse3" class="mt-2">
          <b-card>
          <div id="currentFormState"></div>
          </b-card>
        </b-collapse> -->
        
        
      <!-- Category header -->
      <div v-b-toggle.collapse1 variant="primary" class="categoryBtn"><p>Barselsomsorg generelt</p></div>
        <b-collapse id="collapse1" class="mt-2">
          <b-card>
            <div>
              <label class="questionLabel" for="">Identificere ressourcer og belastninger hos kvinden/familien:</label>
              <!--<b-form-select v-model="selected" :options="options" class="mb-3 col-lg-1" size="sm"/> -->
              <b-btn v-model="selected" @click="selected--" size="sm" class="counterBtn">-</b-btn>
              <span class="text-muted" id="experienceNumberField">no.: {{selected}}</span>
              <b-btn v-model="selected" @click="selected++" size="sm" class="counterBtn">+</b-btn>
            </div>
            <div>
              <label class="questionLabel" for="">Inddrage viden om kvinden/familiens mål og behov i omsorgen:</label>
              <!--<b-form-select v-model="selected2" :options="options" class="mb-3 col-lg-1" size="sm"/>-->
              <b-btn v-model="selected2" @click="selected2--" size="sm" class="counterBtn">-</b-btn>
              <span class="text-muted" id="experienceNumberField">no.: {{selected2}}</span>
              <b-btn v-model="selected2" @click="selected2++" size="sm" class="counterBtn">+</b-btn>
            </div>
          </b-card>
        </b-collapse>
        
      <!-- next category -->
      <div v-b-toggle.collapse2 variant="primary" class="categoryBtn2"><p>Graviditetsundersøgelserne indeholder fx at</p></div>
        <b-collapse id="collapse2" class="mt-2">
          <b-card>
              <div>
              <label class="questionLabel" for="">Identificere ressourcer og belastninger hos kvinden/familien:</label>
              <!--<b-form-select v-model="selected3" :options="options" class="mb-3 col-lg-1" size="sm"/> -->
              <b-btn v-model="selected3" @click="selected3--" size="sm" class="counterBtn">-</b-btn>
              <span class="text-muted" id="experienceNumberField">no.: {{selected3}}</span>
              <b-btn v-model="selected3" @click="selected3++" size="sm" class="counterBtn">+</b-btn>
            </div>
            <div>
              <label class="questionLabel" for="">Samtale om forventninger til familie dannelsesprocessen:</label>
              <!--<b-form-select v-model="selected4" :options="options" class="mb-3 col-lg-1" size="sm"/> -->
              <b-btn v-model="selected4" @click="selected4--" size="sm" class="counterBtn">-</b-btn>
              <span class="text-muted" id="experienceNumberField">no.: {{selected4}}</span>
              <b-btn v-model="selected4" @click="selected4++" size="sm" class="counterBtn">+</b-btn>
            </div>
          </b-card>
        </b-collapse>
    </div>
    <br>
    <br>
    <div>
      <p class="noteIntro"><strong>You can save additional notes <br>for today's experience</strong></p>
      <b-form-textarea v-model="note" type="text" placeholder="Enter additional note" :rows="4":max-rows="56" class="notesInput"></b-form-textarea>
    </div>
      <br>
      <b-btn v-on:click="persistentFormData" class="btn-default btn-saveForm">Save</b-btn>
      <!-- <b-btn v-on:click="getCurrentState" class="btn-default btn-saveFrom">get form values</b-btn> -->
    </div>
    <br>
    <br>
    <br>
    <!--
    <div>
      <button v-on:click="getSelected">read from DB</button>
      <div v-for="itemName of selectedItems" v-bind:key="itemName['.key']">{{itemName}}</div>
    </div> -->
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
    name: 'log',
    data () {
      return {
        text1: '',
        semester: 'second',
        options: [
          { text: '2nd', value: 'second' },
          { text: '4th', value: 'fourth' },
          { text: '6th', value: 'sixth' }
        ],
        currentUser: firebase.auth().currentUser,
        note: '',
        selected: '',
        options: [
          { value: '0', text: '0' },
          { value: '1', text: '1 time' },
          { value: '2', text: '2 times' },
          { value: '3', text: '3 times' },
          { value: '4', text: '4 times' },
          { value: '5', text: '5 times' },
          { value: '6', text: '6 times' },
          { value: '7', text: '7 times' },
          { value: '8', text: '8 times' },
          { value: '9', text: '9 times' },
          { value: '10', text: '10 times' },
          { value: '11', text: '11 times' },
          { value: '12', text: '12 times' },
          { value: '13', text: '13 times' },
          { value: '14', text: '14 times' },
          { value: '15', text: '15 times' },
          { value: '16', text: '16 times' },
          { value: '17', text: '17 times' },
          { value: '18', text: '18 times' },
          { value: '19', text: '19 times' },
          { value: '20', text: '20 times' },
        ],
        selected2: '',
        selected3: '',
        selected4: '',
        date: new Date(),
      }
    },methods: {
        backToHello() {
            this.$router.replace('hello')
        },
        changeSemester() {
          this.$router.replace('log4')
        },
        getCurrentState() {
          if (!console) {
                      console = {};
                  }
                  var old = console.log;
                  var logger = document.getElementById('currentFormState');
                  console.log = function (message) {
                      if (typeof message == 'object') {
                          logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
                      } else {
                          logger.innerHTML += message + '<br />';
                      }
                  }

          db.ref(this.currentUser.uid).child('experienceForm/2ndSemester').on('value', function(snapshot) {
            let formValues = {};
            formValues = snapshot.val();
            console.log("Question1 : " + formValues.question1);
            console.log("Question2 : " + formValues.question2);
            console.log("Question3 : " + formValues.question3);
            console.log("Question4 : " + formValues.question4);
          })
        },
        saveSelected() {
          db.ref(`${this.currentUser.uid}`).child('experienceForm/2ndSemester').set({
            question1: this.selected, 
            question2: this.selected2,
            question3: this.selected3,
            question4: this.selected4, 
          })
          // selectRef.push({selected: this.selected, selected2: this.selected2, selected3: this.selected3})
          // noteRef.push({note: this.note})
          db.ref(`${this.currentUser.uid}`).child('additionalNotes/' + this.date).set({
            note: this.note,
          })
          alert("You have successfully saved today's progress!");
          this.$router.replace('hello')
        },
        getSelected(key) {
          selectRef.on('value', function(snapshot) {
            var selected = []
            selected = snapshot.val()
            console.log(selected)
          });
        },
        persistentFormData() {
          let quest1 = '';
          let quest2 = '';
          let quest3 = '';
          let quest4 = '';

          db.ref(this.currentUser.uid).child('experienceForm/2ndSemester').on('value', function(snapshot) {
            let formValues = {};
            formValues = snapshot.val();
            quest1 = formValues.question1;
            quest2 = formValues.question2;
            quest3 = formValues.question3;
            quest4 = formValues.question4;
          });

          let newValue = Number(quest1) + this.selected;
          let newValue2 = Number(quest2) + this.selected2;
          let newValue3 = Number(quest3) + this.selected3;
          let newValue4 = Number(quest4) + this.selected4;

          db.ref(`${this.currentUser.uid}`).child('experienceForm/2ndSemester').set({
            question1: newValue, 
            question2: newValue2,
            question3: newValue3,
            question4: newValue4, 
          })

          db.ref(`${this.currentUser.uid}`).child('additionalNotes/' + this.date).set({
            note: this.note,
          })
          alert("You have successfully saved today's progress!");
          this.$router.replace('hello')
        },
    },
}
</script>

<style>

.card { 
  margin: auto;
}
.categoryBtn {
  background: linear-gradient(to bottom right, rgb(255, 132, 153), rgb(237, 76, 103));
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  width: 70%;
  margin: auto;
  color: #fff;
  border-radius:3px;
  text-align: left;
}
.categoryBtn p {
  margin-left: 10px;
}
.categoryBtn2 {
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  width: 70%;
  margin: auto;
  color: rgb(237, 76, 103);
  border-radius:3px;
  text-align: left;
}
.categoryBtn2 p {
  margin-left: 10px;
}

.notesInput {
  width: 70%;
  margin: auto;
}

.introTxt {
  margin: auto;
}
.semSelector {
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  /*background: linear-gradient(to bottom right, rgb(255, 119, 169), rgb(244, 66, 131));*/
  background: #FF9B71;
  color: white;
  border-style: none;
}


.btn-saveForm {
  background: linear-gradient(to bottom right, rgb(255, 132, 153), rgb(237, 76, 103));
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  border-style: none;
} 

.searchKeyword {
  text-align: left;
  margin-left: 60px;
}

.searchField {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  width: 70%;
  margin: auto;
}
.currentFormBtn {
  background: #FF9B71;
  color: #fff;
}

.questionLabel {
  width: 55%;
  text-align: left;
}

.counterBtn {
  background: transparent !important;
  color: rgb(237, 76, 103);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  border-style: none;
}


</style>