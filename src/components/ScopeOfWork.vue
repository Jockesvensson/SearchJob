<template>
    <div id="scopeOfWork" class="">
        <div id="scopeOfWork-large">
        <button class="scopeOfWork-button" @click="scopeOfWorkDiv = !scopeOfWorkDiv">Omfattning<i class="glyphicon glyphicon-chevron-down" style="float:right;"></i></button>
        <div v-if="scopeOfWorkDiv" class="scopeOfWork-container">
            <div class="scopeOfWork-wrapper">
                <div class="scopeOfWork-top">
                    <p class="title">Omfattning</p>
                    <input type="checkbox" v-model="checkedWorkType" true-value="1" false-value="0" @change="getTotalAds()">
                    <label for=heltid>Heltid</label>
                    <br>
                    <input type="checkbox" v-model="checkedWorkType" true-value="2" false-value="0" @change="getTotalAds()">
                    <label for=deltid>Deltid</label>
                </div>
                <div class="container-bottom">
                    <div v-show="total" class="scopeOfWork-bottom">
                        <button class="button-show" @click="search()">Visa {{totalList.value}} annonser</button>
                    </div>
                    <div v-show="!total" class="scopeOfWork-bottom">
                        <button class="button-show" v-if="this.checkedWorkType == 0" @click="search()">Visa {{totalAdsList.value}} annonser</button>
                        <button class="button-show" v-else @click="search()">Visa {{this.$store.state.totalList.value}} annonser</button>
                    </div>
                </div>
            </div>    
        </div>
        </div>

        <div id="scopeOfWork-small">
        <button class="scopeOfWork-button" @click="scopeOfWorkDiv = !scopeOfWorkDiv">Omfattning<i class="glyphicon glyphicon-chevron-down" style="float:right;"></i></button>
        <div v-if="scopeOfWorkDiv" class="scopeOfWork-container">
            <div class="scopeOfWork-wrapper">
                <div class="scopeOfWork-top">
                    <p class="title">Omfattning</p>
                    <input type="checkbox" v-model="checkedWorkType" true-value="1" false-value="0" @change="getTotalAds()">
                    <label for=heltid>Heltid</label>
                    <br>
                    <input type="checkbox" v-model="checkedWorkType" true-value="2" false-value="0" @change="getTotalAds()">
                    <label for=deltid>Deltid</label>
                </div>
                <div class="container-bottom">
                    <div v-show="total" class="scopeOfWork-bottom">
                        <button class="button-show" @click="search()">Visa {{totalList.value}} annonser</button>
                    </div>
                    <div v-show="!total" class="scopeOfWork-bottom">
                        <button class="button-show" v-if="this.checkedWorkType == 0" @click="search()">Visa {{totalAdsList.value}} annonser</button>
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
    name: 'ScopeOfWork',
    data() {
        return {
            scopeOfWorkDiv: false,
            checkedWorkType: '',
            searchString: '',
            totalAds: [],
            total: true,
        }
    },
    mounted() {
        this.$store.dispatch('getScopeOfWorkList', {
        updatedSearchText: this.searchString
        })
        
        console.log()
    },
    methods: {
        search() {
            this.$store.dispatch('changeScopeOfWork', {
            updatedScopeOfWork: this.checkedWorkType
            })
            this.$store.dispatch('getScopeOfWorkList', {
            updatedScopeOfWork: this.checkedWorkType
            })
            this.$store.state.totalList = this.totalAds
            this.scopeOfWorkDiv = ! this.scopeOfWorkDiv
            console.log(this.scopeOfWorkDiv)
        },
        getTotalAds() {   
            axios.get('https://jobsearch.api.jobtechdev.se/search?worktime-extent=' + this.checkedWorkType + '&q=' + this.newSearchString + '&offset=0&limit=100', {
            headers: {
                'api-key': apiKey
            }
            }).then(response => {
            this.totalAds = response.data.total;
            this.$store.state.totalList = this.totalAds
            })
            this.total = false
            console.log(this.checkedWorkType)
        },
        toggle() {
            this.scopeOfWorkDiv = ! this.scopeOfWorkDiv
        },
        close(e) {
        if (! this.$el.contains(e.target)) {
            this.scopeOfWorkDiv = false
            // this.checkedWorkType = 0
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

<style scoped lang="scss">
#scopeOfWork{
    width: 130px;
}
.scopeOfWork-container {
    display: inline-flex;
    flex-direction: row;
    position: relative;
}
.scopeOfWork-wrapper {
    // height: 225px;
    width: 300px;
    border: 1px solid black;
    border-radius: 7px;

    position: absolute;
    left: -132px;
    top: 20px;
    z-index: 1000;
    background-color: white;
}
.title{
    font-weight: 700;
    border-bottom: 1px solid black;
}
.scopeOfWork-top{
    text-align: left;
    margin: 15px 10px 0px 10px;
}
.container-bottom{
    text-align: center;
    background-color: lightgrey;
    border-radius: 7px;
}
.scopeOfWork-bottom{
    background-color: lightgrey;
    margin: 30px 0px 15px 0px;
    padding: 10px 20px;
    max-height: 280px;
    display: inline-block;
}
.scopeOfWork-button{
    background-color: darkblue;
    border: none;
    color: white;
    /* padding: 20px; */
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    margin: 4px 0px;
    width: 130px;
    height: 50px;
    border-radius: 10px 10px 10px 10px;
}
.scopeOfWork-button:hover{
    color: black;
    background-color: white;
}
.scopeOfWork-button:focus{
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
    #scopeOfWork-small{
        display: none !important;
    }
}

@media only screen and (max-width: 991px) {
    #scopeOfWork-large{
        display: none !important;
    }
}

@media only screen and (max-width: 300px) {
    .scopeOfWork-button{
        font-size: 12px;
        height: 30px;
        width: 100px;
        margin-right: 30px;
    }
    .scopeOfWork-wrapper {
        width: 225px;
        border: 1px solid black;
        border-radius: 7px;
        position: absolute;
        left: -131px;
        top: 14px;
        z-index: 1000;
        background-color: white;
        font-size: 12px;
    }
    #scopeOfWork-top{
        text-align: left;
        margin: 15px 10px 0px 25px;
        height: 465px;
        overflow: auto;
        width: 200px;
    }
    .button-show{
        width: 160px;
        font-size: 14px;
    }
}

</style>