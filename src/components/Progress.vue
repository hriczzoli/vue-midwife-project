<template>
    <div>
    <br>
    <br>
        <h3>Check your progress</h3>
        <br>
        <br>
        <div class="progressIntro">
            <p class="progressIntro">This where you can have an overview <br> of your progress throughout <br> your internship</p>
            <p class="progressIntro">This page serves as your personal <br> "goal-tracker"</p>
        </div>
    <br>
    <br>
    <b-btn v-on:click="showProgression" class="btn-default btn-saveFrom">Show my progress</b-btn>
    <br>
    <br>
    <hr>
    <label class="questionLabel" for="">1. Identificere ressourcer og belastninger hos kvinden/familien:</label>
    <label>
        <ul class="statNumbers">
            <li><p id="stat1"></p></li>
            <li>/ {{this.max}}</li>
        </ul>
    </label>
    <!--<b-progress :value="counter" :max="max" show-progress animated></b-progress> -->
    <!-- second progress bar -->
    <label class="questionLabel" for="">2. Inddrage viden om kvinden/familiens mål og behov i omsorgen:</label>
    <label>
        <ul class="statNumbers">
            <li><p id="stat2"></p></li>
            <li>/ {{this.max2}}</li>
        </ul>
    </label>
    <!--<b-progress :value="counter2" :max="max2" show-progress animated></b-progress> -->
    <!-- third progress bar -->
    <label class="questionLabel" for="">3. Identificere ressourcer og belastninger hos kvinden/familien:</label>
    <label>
        <ul class="statNumbers">
            <li><p id="stat3"></p></li>
            <li>/ {{this.max3}}</li>
        </ul>
    </label>
    <!--<b-progress :value="counter3" :max="max3" show-progress animated></b-progress> -->
    <!-- fourth -->
    <label class="questionLabel" for="">4. Samtale om forventninger til familiedannelsesprocessen:</label>
    <label>
        <ul class="statNumbers">
            <li><p id="stat4"></p></li>
            <li>/ {{this.max4}}</li>
        </ul>
    </label>
    <!--<b-progress :value="counter4" :max="max4" show-progress animated></b-progress> -->
    </div>
</template>

<script>
import firebase from 'firebase';
import { selectRef } from '../firebase.js';
import { noteRef } from '../firebase.js';
import { db } from '../firebase.js';
import { currentUser } from '../firebase.js';





export default {
    name: 'progress',
    data () {
        return {
            currentUser: firebase.auth().currentUser,
            counter: '',
            max: 40,
            counter2: '',
            max2: 30,
            counter3: '',
            max3: 35,
            counter4: '',
            max4: 42,
        }
    },
    methods: {
        showProgression() {
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

          let newValue = Number(quest1);
          let newValue2 = Number(quest2);
          let newValue3 = Number(quest3);
          let newValue4 = Number(quest4);

          document.getElementById('stat1').innerHTML = newValue;
          document.getElementById('stat2').innerHTML = newValue2;
          document.getElementById('stat3').innerHTML = newValue3;
          document.getElementById('stat4').innerHTML = newValue4;

          this.counter = ((newValue/this.max) * 100);
          this.counter2 = ((newValue2 / this.max2) * 100);
          this.counter3 = ((newValue3 / this.max3) * 100);
          this.counter4 = ((newValue4 / this.max4) * 100);
        }
    }
}
</script>

<style>
.statNumbers{
    margin-left: -50px;
}
.statNumbers li {
    display: inline-block;
}
.questionLabel {
  width: 55%;
  text-align: left;
}

.progressIntro {
    text-align: left;
    margin: auto !important;
    width: 85%;
}
</style>