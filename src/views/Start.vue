<template>

    <div class="container">
        <div class="wrapper">
            <div class="text-container">
                <div class="text">
                    <h1 style="color:white;">Platsbanken</h1>
                    <p style="color:white;">Lediga jobb för hela Sverige</p>
                </div>
                <div class="search">
                    <p style="color:white;">Sök på ett eller flera ord</p>
                    <input type="text" class="search-field" @keyup.enter="test" v-model="searchString" placeholder="Ort, yrke, fritext..."/>
                    <button class="search-button" @click="test()">
                    <i class="glyphicon glyphicon-search"></i>
                    <span>Sök</span>
                    </button>
                </div>
                <div class="search-small">
                    <p style="color:white;">Sök på ett eller flera ord</p>
                    <input type="text" class="search-field" @keyup.enter="test" v-model="searchString" placeholder="Ort, yrke, fritext..."/>
                    <button class="search-button-small" @click="test()">
                    <i class="glyphicon glyphicon-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
  name: "Start",
  data() {
    return {
      childData: "",
      searchString: '',
    }
  },
  computed: {
      searchUrl() {
          console.log(this.$store.getters.searchText)
          return this.$store.getters.searchText   
      }
  },
  methods: {
    test() {
        this.$store.dispatch('changeSearchText', {
        updatedSearchText: this.searchString
        })
        this.$router.push({name: 'Annonser'})
        console.log(this.$store.state.searchText)
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  text-align: center;
}
.text-container {
  background-color: darkblue;
  width: 400px;
  height: 250px;
  display: inline-block;
}
.text{
    text-align: left;
    padding-left: 30px;
}
.search{
    text-align: left;
    padding-left: 30px;
    margin-top: 50px;
}

.search-small{
    text-align: left;
    padding-left: 30px;
    margin-top: 50px;
}

.search-button{
    background-color: lightgreen;
    border: none;
    color: darkblue;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 0px;
    width: 90px;
    height: 49px;
    border-radius: 0px 8px 8px 0px;
}
.search-field{
    text-decoration: none;
    display: inline-block;
    height: 49px;
    font-size: 20px;
    margin: 10px -1px;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid white;
}

@media only screen and (min-width: 352px){
  .search-small{
    display: none !important;
  }
}

@media only screen and (max-width: 479px){
  .search{
    display: none !important;
  }

  .text-container {
  background-color: darkblue;
  width: 100%;
  height: 250px;
  display: inline-block;
  }

  .text{
    padding-left: 15px;
    h1{
      font-size: 26px;
    }
    p{
      font-size: 12px;
    }
  }

  .search-small{
    text-align: left;
    padding-left: 15px;
    margin-top: 40px;
    p{
      font-size: 12px;
    }
  }
  
  .search-field{
        text-decoration: none;
        display: inline-block;
        width: 200px;
        height: 40px;
        font-size: 16px;
        margin: 10px -1px;
        border-radius: 8px 0px 0px 8px;
        border: 1px solid white;
    }
    .search-button-small{
        background-color: lightgreen;
        border: none;
        color: darkblue;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 0px;
        width: 46px;
        height: 40px;
        border-radius: 0px 8px 8px 0px;
    }
}

@media only screen and (max-width: 300px){
  .search-field{
        text-decoration: none;
        display: inline-block;
        width: 165px;
        height: 36px;
        font-size: 12px;
        margin: 10px -1px;
        border-radius: 8px 0px 0px 8px;
        border: 1px solid white;
    }
    .search-button-small{
        background-color: lightgreen;
        border: none;
        color: darkblue;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 13px;
        margin: 4px 0px;
        width: 35px;
        height: 36px;
        border-radius: 0px 8px 8px 0px;
    }

}


</style>