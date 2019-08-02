<template>
<div class="export">
<br>
<br>
    <h2>Vælg et dokument til export/print</h2>
    <br>
    <br>
    <br>
    <br>
    <div>
        <b-button v-on:click="openExport2" variant="primary" class="cardBtnAlternative">
        <img src="" class="menuIcon1"/><br>
        2nd Semester</b-button>
        <b-button v-on:click="openNotes" variant="primary" class="cardBtnAlternative2">
        <img src="" class="menuIcon1"/><br>
        4th Semester</b-button>
      </div>
      <div class="menuGroup2">
        <b-button v-on:click="openProgress" variant="primary" class="cardBtnAlternative2">
        <img src="" class="menuIcon1"/><br>
        6th Semester</b-button>
        <b-button v-on:click="openExport" variant="primary" class="cardBtnAlternative">
        <img src="" class="menuIcon1"/><br>
        7th Semester</b-button>
      </div>
</div>
</template>

<script>
    export default {
        name: 'export',
        data() {
            return {

            }
        },
        methods: {
            openExport2(){
            this.$router.replace('export2')
            console.log("next page clicked!")
    }
        }
    }
</script>

<style>
.cardBtnAlternative {
  background: transparent;
  border-style: none;
  color: rgb(237, 76, 103);
  height: 150px;
  min-width: 40%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 3px;
}
.cardBtnAlternative2 {
  background: linear-gradient(to bottom right, rgb(255, 132, 153), rgb(237, 76, 103));
  border-style: none;
  color: #fff;;
  height: 150px;
  min-width: 40%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 3px;
}

.cardBtnAlternative:active {
  background-color: rgb(237, 76, 103) !important;
}
.cardBtnAlternative2:active {
  background-color: rgb(237, 76, 103) !important;
}
.cardBtnAlternative:hover {
  background-color: #fff !important;
  color: rgb(237, 76, 103);
}
.cardBtnAlternative2:hover {
  background-color: rgb(237, 76, 103) !important;
}
</style>