<template>
    <div class="export2">
        <br>
        <br>
        <h3>These are the collected<br> results of your <br>internship period</h3>
        <br>
        <br>
        <p class="exportIntro">
            By pressing the button you can get a preview of your experience logging form and either save a pdf copy of it or select a printer and get a printed copy.
        </p>
        <br>
        <br>
            <div v-b-toggle.collapse3 variant="primary" class="generateBtn" v-on:click="getCurrentState">Generate PDF</div>
                <b-collapse id="collapse3" class="mt-2">
                <b-card>
                <div id="currentFormState"></div>
                <b-btn v-on:click="printDoc" class="printBtn">Print</b-btn>
                </b-card>
            </b-collapse>
        <br>
        <br>
        <br>
        <br>
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
    name:'export2',
    data() {
        return {
            currentUser: firebase.auth().currentUser,
        }
    },
    methods: {
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
            console.log('<h3>Erfaringsskema</h3>');
            console.log('<p style="width: 55%;text-align: left;">Identificere ressourcer og belastninger hos kvinden/familien:</p>'  + formValues.question1 + '<hr>');
            console.log('<p style="width: 55%;text-align: left;">Inddrage viden om kvinden/familiens mål og behov i omsorgen:</p>' + formValues.question2 + '<hr>');
            console.log('<p style="width: 55%;text-align: left;">Identificere ressourcer og belastninger hos kvinden/familien:</p>' + formValues.question3 + '<hr>');
            console.log('<p style="width: 55%;text-align: left;">Samtale om forventninger til familie dannelsesprocessen:</p>' + formValues.question4 + '<hr>');
          })
        },
        printDoc() {
            window.print();
        }
    }
}
</script>

<style>
.generateBtn {
  background: #FF9B71;
  color: #fff;
  width: 60%;
  margin: auto;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
}

.exportIntro {
    text-align: left;
    margin: auto !important;
    width: 70%;
}
</style>