<template>
  <div id="app">
    <div id="nav">
      <div class="nav-container-home">
        <div class="nav-title-home">
          <router-link v-bind:to="'/'"><img src="./assets/logo1.png"></router-link>
        </div>
        <div class="nav-title-home-small">
          <router-link v-bind:to="'/'"><img src="./assets/logo2.png"></router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightgray;
  min-height: 100vh;
}


.nav-container-home {
  background-color: white;
  text-align: center;
}

.nav-title-home{
  display: inline-block;
  // width: 1100px;
  text-align: left;
}
@media only screen and (min-width: 351px){
  .nav-title-home-small{
    display: none !important;
  }
}

@media only screen and (max-width: 350px) {
  .nav-title-home{
    display: none !important;
  }
}

</style>
