<template>
  <div id="app">
    <b-container>
    <router-view class='dada'></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  /* background-color: #9f9; */
  box-sizing:border-box;
  background-image: url('./assets/bg4.jpg')  ;
}
.dada:after，.dada:before{
      content:'';
      display: table ;
        } 
    .dada:after{
     clear:both
     }  
</style>
