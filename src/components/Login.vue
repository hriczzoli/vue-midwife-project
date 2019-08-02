<template>
  <div class="login">
    <br>
    <br>
    <h1>W</h1>
    
    <h2>W i F y</h2>
    <br>
    <br>
    <br>
    
    
    <b-form-input type="text" v-model="email" placeholder="1010101@ucn.dk" class="input"></b-form-input><br>
    <b-form-input type="password" v-model="password" placeholder="Password" class="input"></b-form-input><br>
    <b-btn v-on:click="signIn" class="loginBtn">Login</b-btn>
    
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: '',
        user: ''
      }
    },
    methods: {
      signIn: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  h1 {
    font-size: 750%;
    font-weight: bolder;
    color: white;
  }
  h2 {
    margin-top: -20px;
    font-weight: bolder;
    color: white;
  }
  .login {
    background: linear-gradient(to bottom right, rgb(255, 132, 153), rgb(237, 76, 103));
    height: 700px;
    margin-bottom: -50px;
  }
  input {
    margin: 10px 0;
    width: 60%;
    padding: 15px;
    opacity: 0.7;
    border-style: none;
  }
  button {
    margin-top: 20px;
    width: 30%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    
  }
  input {
    border-radius: 5px;
  }
  .loginBtn {
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    border-style: none;
    color: rgb(237, 76, 103);
  }
  .input {
    margin: auto;
    border-style: none;
    
  }

  
</style>
