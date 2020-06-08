<template>
    <div id="employmentType" class="">
        <div id="employmentType-large">
            <button class="employmentType-button" @click="employmentTypeDiv = !employmentTypeDiv">Anställningsform<i class="glyphicon glyphicon-chevron-down" style="float:right;"></i></button>
            <div v-if="employmentTypeDiv" class="employmentType-container">
                <div class="employmentType-wrapper">
                    <div class="employmentType-top">
                        <p class="title">Anställningsform</p>
                        <input type="checkbox" v-model="checkedEmploymentType" true-value="1" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Tillsvidare- eller tidsbegränsad anställning</label>
                        <br>
                        <input type="checkbox" v-model="checkedEmploymentType" true-value="2" false-value="0" @change="getTotalAds()">
                        <label for=deltid>Behovs- eller timanställning</label>
                        <br>
                        <input type="checkbox" v-model="checkedEmploymentType" true-value="4" false-value="0" @change="getTotalAds()">
                        <label for=deltid>Säsongsarbete</label>
                    </div>
                    <div class="container-bottom">
                        <div v-show="total" class="employmentType-bottom">
                            <button class="button-show" @click="search()">Visa {{totalList.value}} annonser</button>
                        </div>
                        <div v-show="!total" class="employmentType-bottom">
                            <button class="button-show" v-if="this.checkedEmploymentType == 0" @click="search()">Visa {{totalAdsList.value}} annonser</button>
                            <button class="button-show" v-else @click="search()">Visa {{this.$store.state.totalList.value}} annonser</button>
                        </div>
                        
                    </div>
                </div>   
            </div>
        </div>
        <div id="employmentType-small">
            <button class="employmentType-button" @click="employmentTypeDiv = !employmentTypeDiv">Anställningsform<i class="glyphicon glyphicon-chevron-down" style="float:right;"></i></button>
            <div v-if="employmentTypeDiv" class="employmentType-container">
                <div class="employmentType-wrapper">
                    <div class="employmentType-top">
                        <p class="title">Anställningsform</p>
                        <input type="checkbox" v-model="checkedEmploymentType" true-value="1" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Tillsvidare- eller tidsbegränsad anställning</label>
                        <br>
                        <input type="checkbox" v-model="checkedEmploymentType" true-value="2" false-value="0" @change="getTotalAds()">
                        <label for=deltid>Behovs- eller timanställning</label>
                        <br>
                        <input type="checkbox" v-model="checkedEmploymentType" true-value="4" false-value="0" @change="getTotalAds()">
                        <label for=deltid>Säsongsarbete</label>
                    </div>
                    <div class="container-bottom">
                        <div v-show="total" class="employmentType-bottom">
                            <button class="button-show" @click="search()">Visa {{totalList.value}} annonser</button>
                        </div>
                        <div v-show="!total" class="employmentType-bottom">
                            <button class="button-show" v-if="this.checkedEmploymentType == 0" @click="search()">Visa {{totalAdsList.value}} annonser</button>
                            <button class="button-show" v-else @click="search()">Visa {{this.$store.state.totalList.value}} annonser</button>
                        </div>
                        
                    </div>
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {apiKey} from '../store/apiKey'
import axios from 'axios'
export default {
    name: 'EmploymentType',
    data() {
        return {
            employmentTypeDiv: false,
            checkedEmploymentType: '',
            searchString: '',
            totalAds: [],
            total: true,
        }
    },
    mounted() {
        this.$store.dispatch('getEmploymentTypeList', {
        updatedSearchText: this.searchString
        })
        console.log()
    },
    methods: {
        search() {
            console.log(this.searchString)
            this.$store.dispatch('changeEmploymentType', {
            updatedEmploymentType: this.checkedEmploymentType
            })
            this.$store.dispatch('getEmploymentTypeList', {
            updatedEmploymentType: this.checkedEmploymentType
            })
            this.$store.state.totalList = this.totalAds
            this.employmentTypeDiv = ! this.employmentTypeDiv
            console.log(this.checkedEmploymentType)
        },
        getTotalAds() {   
            axios.get('https://jobsearch.api.jobtechdev.se/search?employment-type=' + this.checkedEmploymentType + '&employment-type=&q=' + this.newSearchString + '&offset=0&limit=100', {
            headers: {
                'api-key': apiKey
            }
            }).then(response => {
            this.totalAds = response.data.total;
            this.$store.state.totalList = this.totalAds
            })
            this.total = false
            console.log(this.checkedEmploymentType)
        },
        toggle() {
            this.employmentTypeDiv = ! this.employmentTypeDiv
        },
        close(e) {
        if (! this.$el.contains(e.target)) {
            this.employmentTypeDiv = false
            }
        },
    },
    created() {
    window.addEventListener('click', this.close)
    },

    beforeDestroy() {
        window.removeEventListener('click', this.close)
    },
    computed: {
        ...mapState([
    'jobList', 'totalList', 'totalAdsList'
    ]),
    newSearchString() {
        return this.$store.getters.firstTest
    },
    }
}
</script>

<style scoped>
#employmentType{
    width: 170px;
}
.employmentType-container {
    display: inline-flex;
    flex-direction: row;
    position: relative;
}
.employmentType-wrapper {
    width: 320px;
    border: 1px solid black;
    border-radius: 7px;

    position: absolute;
    left: -85px;
    top: -18px;
    z-index: 1000;
    background-color: white;
}
.title{
    font-weight: 700;
    border-bottom: 1px solid black;
}
.employmentType-top{
    text-align: left;
    margin: 15px 10px 0px 10px;
}
.container-bottom{
    text-align: center;
    background-color: lightgrey;
    border-radius: 7px;
}
.employmentType-bottom{
    background-color: lightgrey;
    margin: 30px 0px 15px 0px;
    padding: 10px 20px;
    max-height: 280px;
    display: inline-block;
}
.employmentType-button{
    background-color: darkblue;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    margin: 4px 0px;
    width: 180px;
    height: 50px;
    border-radius: 10px 10px 10px 10px;
}
.employmentType-button:hover{
    color: black;
    background-color: white;
}
.employmentType-button:focus{
    color: darkblue;
    background-color: white;
}
.button-show{
    background-color: darkblue;
    color: white;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 0px;
    width: 200px;
    height: 40px;
    border-radius: 8px 8px 8px 8px;
}

@media only screen and (min-width: 992px) {
    #employmentType-small{
        display: none !important;
    }
}

@media only screen and (max-width: 991px) {
    #employmentType-large{
        display: none !important;
    }
}
</style>