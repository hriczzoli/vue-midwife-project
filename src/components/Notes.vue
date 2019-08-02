<template>
    <div>
    <br>
    <br>
    <h3>Take Notes</h3>
    <p class="notesIntro">This is a place for you to keep your<br> notes about everything you have experienced</p>
    <br>
    
    <b-form-textarea v-model="note" type="text" placeholder="Describe what you've experienced" :rows="6":max-rows="56" class="notesInput"></b-form-textarea>
    <br>
    <b-btn v-on:click="saveNote" class="btn-default btn-saveFrom">Save</b-btn>
    <br>
    <br>
    <hr>
    <br>
    <div v-b-toggle.collapse1 variant="primary" class="noteHeader" v-on:click="getNotes">Show My Notes</div>
        <b-collapse id="collapse1" class="mt-2">
          <b-card>
            <div id="notesField">
              
            </div>
          </b-card>
        </b-collapse>
    </div>
</template>

<script>
import firebase from 'firebase';
import { selectRef } from '../firebase.js';
import { noteRef } from '../firebase.js';
import { db } from '../firebase.js';
import { currentUser } from '../firebase.js';


export default {
    name: 'notes',
    data () {
        return {
            currentUser: firebase.auth().currentUser,
            noteDate: '',
            noteBody: '',
            note: '',
            date: new Date(),
        }
    },
    methods: {
        getNotes() {
                  if (!console) {
                      console = {};
                  }
                  var old = console.log;
                  var logger = document.getElementById('notesField');
                  console.log = function (message) {
                      if (typeof message == 'object') {
                          logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
                      } else {
                          logger.innerHTML += message + '<br />';
                      }
                  }

                const additionalNotesRef = db.ref(this.currentUser.uid).child('additionalNotes');
                db.ref(this.currentUser.uid).child('additionalNotes').orderByKey().on('child_added', function(snapshot, ChildKey) {
                var formData = {};
                formData = snapshot.val();
                console.log('<strong>' + snapshot.key + '</strong>');
                console.log(formData.note + '<br />' + '<button style="background: #FF9B71; color: #fff;border-radius: 5px; border-style:none; width:40%;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);">Edit</button>' + '<hr />');
                var noteDate = snapshot.key;
                var noteBody = formData.note;
            });
        },
        saveNote() {
            db.ref(`${this.currentUser.uid}`).child('additionalNotes/' + this.date).set({
            note: this.note,
          })
        },
    }
}
</script>

<style>
.noteHeader {
    background: linear-gradient(to bottom right, rgb(255, 132, 153), rgb(237, 76, 103));
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: auto;
  color: #fff;
  border-radius:3px;
}

.notesInput {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    width: 80%;
    margin: auto;
}

.notesIntro {
    text-align: left;
    margin-left: 45px;
}
</style>