<template>
    
    <div class="container-flex" style="background-color:darkblue;">

        <div class="container">
                    <div class="row">
                    <div id="test" class="col-12 col-md-12">
                        <div id="nav-title" class="title">
                           <h1 class="title-text"><router-link v-bind:to="'/'">Platsbanken</router-link></h1>
                        </div>
                    </div>
                    <div id="test1" class="col-12 col-md-12">
                        <div id="nav-search" class="text">
                            <p>Sök på ett eller flera ord</p>
                        </div>
                    </div>
                    
                    <div id="test1" class="col-12 col-md-12">
                        <div id="nav-search" class="search">
                            <input type="text" class="search-field" @keyup.enter="search" v-model="searchString" placeholder="Skriv t.ex. förskollärare Helsingborg"/>
                            <button class="search-button" @click="search()">
                            <i class="glyphicon glyphicon-search"></i>
                            <span>Sök</span>
                            </button>
                        </div>
                    </div>
                </div>
        </div>

        <div class="container">
                <div id="" class="col-12 col-md-12">
                    <div class="row">
                        <div id="small-screen" class=""><button class="small-screen-button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <i class="glyphicon glyphicon-menu-hamburger"></i>
                        </button></div>
                        <div class="collapse" id="collapseExample">
                            <div id="" class="col-12 col-xs-2 col-sm-2 col-md-2">
                            <div id="small-screen" class="row" style="margin-left:-24px;">
                                <div id="small-screen" class="occupation"><Occupation/></div>
                                <div id="small-screen" class="region"><Region/></div>
                                <div id="small-screen" class="scopeOfWork"><ScopeOfWork/></div>
                                <div id="small-screen" class="employmentTyp"><EmploymentType/></div>
                                <div id="small-screen" class="published"><Published/></div>
                                <div id="small-screen" class="competence"><Competence/></div>
                            </div>
                            </div>
                        </div>
                        <div id="large-screen" class="row" style="margin-left:-10px;">
                            <div id="large-screen" class="occupation"><Occupation/></div>
                            <div id="large-screen" class="region"><Region/></div>
                            <div id="large-screen" class="scopeOfWork"><ScopeOfWork/></div>
                            <div id="large-screen" class="employmentTyp"><EmploymentType/></div>
                            <div id="large-screen" class="published"><Published/></div>
                            <div id="large-screen" class="competence"><Competence/></div>
                        </div>
                    </div>
                </div>              
        </div>
    </div>
</template>

<script>
import ScopeOfWork from '../components/ScopeOfWork'
import EmploymentType from '../components/EmploymentType'
import Published from '../components/Published'
import Competence from '../components/Competence'
import Region from '../components/Region'
import Occupation from '../components/Occupation'
import {mapState} from 'vuex'
export default {
    name: 'Navbar',
    components: {
    ScopeOfWork, EmploymentType, Published, Competence, Region, Occupation,
    },
    data() {
        return {
            searchString: '',
            showOccupationComponent: false,
            showRegionComponent: false,
            showScopeOfWorkComponent: false,
            showEmploymentTypeComponent: false,
            showPublishedComponent: false,
            showCompetenceComponent: false,
        }
    },
    methods: {
    search() {
        this.$store.dispatch('changeSearchText', {
        updatedSearchText: this.searchString
        })
        this.$store.dispatch('getJobList', {
            updatedSearchText: this.searchString
        })
        this.$store.dispatch('getTotalList', {
            updatedSearchText: this.searchString
        })
        this.$store.dispatch('getTotalAdsList', {
            updatedSearchText: this.searchString
        })

    },
    computed: {
        ...mapState([
    'jobList', 'totalList', 'totalAdsList'
    ]),
    }
  }
}
</script>

<style scoped lang="scss">
.nav-container {
  text-align: center;
}

#nav-title{
    padding-left: 2px;
  text-decoration: none;
    a {
        color: white;
        text-decoration: none;
    }
}
#nav-search{
    margin-left: 2px;
}
#test{
    background-color: darkblue;
}
#test1{
    background-color: darkblue;
}
#test2{
    background-color: darkblue;
}

#fill{
    background-color: darkblue;
}
.occupation{
    width: 105px;
}
.region{
    width: 105px;
}
.scopeOfWork{
    width: 135px;
}
.employmentTyp{
    width: 185px;
    height: 58px;
}
.published{
    width: 135px;
    height: 58px;
}
.competence{
    width: 135px;
}
.title{
    text-align: left;
    color: white;
    text-decoration: none;
    a {
        text-decoration: none;
    }
}
.text{
    text-align: left;
    color: white;
    font-weight: 600;
    padding-top: 20px;
}
.search{
    text-align: left;
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
    width: 130px;
    height: 49px;
    border-radius: 0px 8px 8px 0px;
}
.search-field{
    text-decoration: none;
    display: inline-block;
    width: 800px;
    height: 49px;
    font-size: 20px;
    margin: 10px -1px;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid white;
}
.small-screen-button{
    background-color: darkblue;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 24px;
    font-weight: 600;
    margin: 4px 0px 8px -7px;
    width: 35px;
    height: 30px;

}

#modal-nav{
    background-color: lightgrey;
}
.back-text{
    text-decoration: none;
}
@media only screen and (min-width: 992px) {
    
    #small-screen{
        display: none !important;
    }

}

@media only screen and (max-width: 991px) {
    .search-field{
        text-decoration: none;
        display: inline-block;
        width: 450px;
        height: 49px;
        font-size: 20px;
        margin: 10px -1px;
        border-radius: 8px 0px 0px 8px;
        border: 1px solid white;
    }
    #large-screen{
        display: none !important;
    }

}
@media only screen and (max-width: 767px) {
    .search-field{
        text-decoration: none;
        display: inline-block;
        width: 350px;
        height: 49px;
        font-size: 20px;
        margin: 10px -1px;
        border-radius: 8px 0px 0px 8px;
        border: 1px solid white;
    }
  
}
@media only screen and (max-width: 554px) {
    
    .search-button{
        background-color: lightgreen;
        border: none;
        color: darkblue;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
        margin: 4px 0px;
        width: 100px;
        height: 49px;
        border-radius: 0px 8px 8px 0px;
    }
}

</style>