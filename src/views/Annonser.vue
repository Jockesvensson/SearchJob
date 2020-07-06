<template>
    <div class="">
        <div class="container-flex">
            <Navbar/>
        </div>
    <div id="top" class="container">
        <div v-show="jobList.length > 0" id="total-ads" class="container-flex">
            <p v-if="jobList.length < 100">{{jobList.length}} annonser</p>
            <p v-else-if="totalList.value == 0">{{totalAdsList.value}} annonser</p>
            <p v-else>{{totalList.value}} annonser</p>
        </div>
        
        <div v-if="jobList.length == 0" class="zero-hits-container">
            <div class="zero-hits-wrapper">
                <div class="zero-hits-title">
                    <h2>{{totalList.value}} hittade träffar</h2>
                </div>
                <div class="zero-hits-text">
                    <h4>Testa att byta ut eller ta bort ett, eller fler, sökord.</h4>
                </div>
            </div>
        </div>  
        <div v-else id="card" class="card">
        <div id="card-body" class="card-body mt-3" style="height:170px;" v-for="item in displayedItems" :key="item.id">
          <div id="card-container" class="card-container">
            <div class="row">
              <div id="card-left" class="col-12 col-md-8">
                <div id="card-title" class="card-title">
                  <router-link :to="'/annonser/' + item.id"><h3 class="title-text">{{item.headline}}</h3></router-link>
                  <h4>{{item.employer.workplace}} - {{item.workplace_address.municipality}}</h4>
                </div>
                <div id="card-text" class="card-text">
                  <p id="big-screen">{{item.occupation.label}}</p>
                  <p id="big-screen">{{item.working_hours_type.label}}, {{item.duration.label}}</p>
                  <p id="small-screen"><span>Ansök senast {{item.application_deadline | dateDeadline }} (om {{daysRemaining.toFixed(0)}} dagar)</span></p>
                  <p id="small-screen">Publicerad {{item.publication_date | datePublished}}</p>
                </div>
              </div>
              <div id="card-right" class="col-6 col-md-4">
                <div id="card-text1" class="card-text">
                  <p><span>Ansök senast {{item.application_deadline | dateDeadline }} (om {{daysRemaining.toFixed(0)}} dagar)</span></p>
                  <p>Publicerad {{item.publication_date | datePublished}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="pagination-container" v-show="this.TotalPages > 1">
        <button class="page-button" @click="prevPage()" :disabled="isDisabledPrev">
          <i class="glyphicon glyphicon-chevron-left"></i>
          <span>Föregående</span>
        </button>
        <button type="button" class="pageNumber-button" v-for="(pageNumber, i) in TotalPages" :key="i" :class="{active: i === activeItem}" @click="page = pageNumber, selectedItem(i)" @click.prevent="goTop()">
         {{pageNumber}}
        </button>
        <button class="page-button" @click="nextPage()" :disabled="isDisabledNext">
          <span>Nästa</span>
          <i class="glyphicon glyphicon-chevron-right"></i>
        </button>
      </div>

      <div class="pagination-container-small" v-show="this.TotalPages > 1">
        <button class="page-button" @click="prevPage()" :disabled="isDisabledPrev">
          <i class="glyphicon glyphicon-chevron-left"></i>
        </button>
        <button type="button" class="pageNumber-button" v-for="(pageNumber, i) in TotalPages" :key="i" :class="{active: i === activeItem}" @click="page = pageNumber, selectedItem(i)" @click.prevent="goTop()">
         {{pageNumber}}
        </button>
        <button class="page-button" @click="nextPage()" :disabled="isDisabledNext">
          <i class="glyphicon glyphicon-chevron-right"></i>
        </button>
      </div>

      <div v-show="jobList.length > 0" class="info">
        <p v-if="jobList.length < 25" >Visar {{lowestNumber + '-' + highestNumber1}} av {{jobList.length}} <span v-if="jobList.length > 100">(100 st)</span> annonser</p>
        <p v-else>Visar {{lowestNumber + '-' + highestNumber}} av {{totalList.value}} <span v-if="totalList.value > 100">(100 st)</span> annonser</p>
      </div>

    </div>
    </div>

</template>

<script>
import {mapState} from 'vuex'
import moment from 'moment'
import Navbar from '../components/Navbar'

export default {
  name: "Annonser",
  components: {Navbar},
  data() {
    return {
      childData: "",
      searchString: '',
      timeLeft: '',
      page: 1,
      perPage: 25,
      pages: [],
      test: false,
      activeItem: 0,
    };
  },
  methods: {
    updateMessage(variable) {
      this.childData = variable;
    },
    test1() {
      this.$store.dispatch('changeSearchText', {
        updatedSearchText: this.searchString
      })
      this.$store.dispatch('getJobList', {
        updatedSearchText: this.searchString
      })
      this.$store.dispatch('getTotalList', {
        updatedSearchText: this.searchString
    })
      console.log(this.$store.state.searchText)
    },
    callFunction() {
      var currentDate = new Date();
      currentDate = this.timeLeft;
      console.log(currentDate);
    },
    selectedItem(i){
        this.activeItem = null,
        this.activeItem = i;
    },
    setPages() {
      let numberOfPages = Math.ceil(this.jobList.length / this.perPage);
      console.log(this.perPage)
      console.log(this.myItems.length)
      console.log(numberOfPages)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(jobList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return jobList.slice(from, to);
    },
    nextPage() {
      this.page++;
      window.scrollTo(0, 0);
      this.activeItem = this.page - 1
      console.log(this.page)
    },
    prevPage() {
      this.page--;
      window.scrollTo(0, 0);
      this.activeItem = this.page - 1
      console.log(this.page)
    },
    goTop() {
      window.scrollTo(0, 0);
    },
    },
    watch: {
        myItems() {
            this.setPages();
        },
    },
    
  mounted() {
    this.$store.dispatch('getJobList', {
        updatedSearchText: this.searchString
    })
    this.$store.dispatch('getTotalList', {
        updatedSearchText: this.searchString
    })
    this.$store.dispatch('getTotalAdsList', {
        updatedSearchText: this.searchString
    })
    this.callFunction()
  },
  
  computed: {
      ...mapState([
    'jobList', 'totalList', 'totalAdsList'
  ]),
  TotalPages() {
      return this.$store.getters.numberOfPages
  },
  isDisabledPrev() {
      if (this.page != 1) {
        return this.test == true
      } else return this.test == false
    },
    isDisabledNext() {
      //egentligen ska det vara this.pages.length (om jag hade tillgång till mer än 100 annonser)
      if (this.page < this.TotalPages) {
        return this.test == true
      } else return this.test == false
    },
    displayedItems() {
      return this.paginate(this.jobList);
    },
    lowestNumber() {
      var number = this.page * this.perPage - 24;
      return number;
    },
    highestNumber() {
      var number1 = this.perPage * this.page;
      return number1;
    },
    highestNumber1() {
        var number1 = this.jobList.length;
        return number1;
    },
    daysRemaining() {
        const deadlineDate = new Date(this.jobList[0].application_deadline)
        const myDate = new Date()
        const difference = (deadlineDate - myDate) / 1000 / 60 / 60 / 24
        console.log(difference.toFixed(0))
        return difference
    },
    timeShit2() {
        var now = moment().endOf('day').fromNow();
        return now;
    },
  }
};
</script>

<style scoped lang="scss">
button:disabled{
  opacity: 0.6;
}
.active{
    background-color: darkblue;
    color: white;
}
.zero-hits-container {
  margin-top: 70px;
  text-align: left;
}
.zero-hits-wrapper {
  background-color: white;
  /* width: 1100px; */
  height: 250px;
  width: 100%;
  display: inline-block;
}
.zero-hits-title{
    padding: 10px 0px 0px 50px;
}
.zero-hits-text{
    padding: 0px 0px 0px 50px;
}
.pageNumber-button{
  width: 40px;
  height: 40px;
  margin: 0px 2px;
}
.page-button{
  width: 120px;
  height: 40px;
  margin: 0px 2px;
}
#total-ads{
    text-align: left;
    font-size: 30px;
    margin: 10px 0px 0px 0px;
}
#card{
  border: 0px;
  background-color: lightgrey;
}
#card-body{
  background-color: white;
}
#card-title{
  text-align: left;
  margin-top: -10px;
}
#card-text{
  text-align: left;
  line-height: 60%;
  margin-top: 30px;
}
#card-text1{
  text-align: right;
  line-height: 60%;
  padding-top: 25px;
}

.title-text{
  font-size: 22px;
}
.pagination-container{
  margin-top: 50px;
}
.info{
  margin: 20px 0px;
}


@media only screen and (max-width: 768px) {
    #card-body{
      height: 160px;
    }
}
@media only screen and (max-width: 991px) {
  #card-right{
    opacity: 0;
  }
  #card-text{
    margin-top: -17px;
  }
  #big-screen{
    visibility: hidden;
  }
  #small-screen{
    visibility: visible;
  }
  
}
@media only screen and (min-width: 992px) {
  #big-screen{
    visibility: visible;
  }
  #small-screen{
    visibility: hidden;
  }
  #card-body{
      height: 160px;
  }
}

@media only screen and (max-width: 1050px) {
  #card-body{
    h3{
      font-size: 18px;
    }
    h4{
      font-size: 15px;
    }
    p{
      font-size: 12px;
    }
  }
  #total-ads{
    font-size: 24px;
  }
}

@media only screen and (min-width: 482px) {
  .pagination-container-small{
    display: none !important;
  }
}

@media only screen and (min-width: 480px) {
  .zero-hits-title{
    padding: 10px 0px 0px 20px;
  }
  .zero-hits-text{
      padding: 0px 10px 0px 20px;
  }
}

@media only screen and (max-width: 481px) {
  #card-body{
    h3{
      font-size: 16px;
    }
    h4{
      font-size: 13px;
    }
    p{
      font-size: 11px;
    }
  }
  #total-ads{
    font-size: 24px;
  }
  .info{
    font-size: 12px;
  }
  .pageNumber-button{
  width: 40px;
  height: 40px;
  margin: 0px 2px;
  font-size: 12px;
  }
  .page-button{
    width: 40px;
    height: 40px;
    margin: 20px 2px 0px 2px;
    font-size: 12px;
  }
  .pagination-container{
    display: none !important;
  }
  .zero-hits-title{
    padding: 10px 0px 0px 20px;
  }
  .zero-hits-text{
      padding: 0px 10px 0px 20px;
  }
}

@media only screen and (max-width: 319px) {
  #card-body{
    h3{
      font-size: 13px;
    }
    h4{
      font-size: 11px;
    }
    p{
      font-size: 8px;
    }
  }
  #total-ads{
    font-size: 20px;
  }
  .info{
    font-size: 10px;
  }
  .pageNumber-button{
  width: 30px;
  height: 30px;
  margin: 0px 2px;
  font-size: 10px;
  }
  .page-button{
    width: 30px;
    height: 30px;
    margin: 10px 2px 0px 2px;
    font-size: 10px;
  }
  .pagination-container{
    display: none !important;
  }
}

</style>