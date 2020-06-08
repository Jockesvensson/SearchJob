<template>
    <div id="occupation" class="">
        <div id="occupation-large">
            <button class="occupation-button" @click="occupationDiv = !occupationDiv">Yrke<i class="glyphicon glyphicon-chevron-down" style="float:right;"></i></button>
            <div v-if="occupationDiv" class="occupation-container">
                <div class="occupation-wrapper">
                    <div id="occupation-top" class="">
                        <p class="title">Yrkesområden</p>
                        <input type="checkbox" v-model="checkedoccupation" true-value="1" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Administration, ekonomi, juridik</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="2" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Bygg och anläggning</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="20" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Chefer och verksamhetsledare</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="3" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Data/IT</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="5" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Försäljning, inköp, marknadsföring</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="6" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Hanterksyrken</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="7" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Hotell, restaurang, storhushåll</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="8" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Hälso- och sjukvård</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="9" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Industriell tillverkning</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="10" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Installation, drift, underhåll</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="4" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Kropps- och skönhetsvård</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="11" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Kultur, media, design</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="22" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Militärt arbete</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="13" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Naturbruk</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="14" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Naturvetenskapligt arbete</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="15" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Pedagogiskt arbete</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="12" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Sanering och renhållning</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="16" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Socialt arbete</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="17" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Säkerhetsarbete</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="18" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Tekniskt arbete</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="19" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Transport</label><br>
                    </div>
                    
                    <div class="container-bottom">
                        <div v-show="total" class="occupation-bottom">
                            <button class="button-show" @click="search()">Visa {{totalList.value}} annonser</button>
                        </div>
                        <div v-show="!total" class="occupation-bottom">
                            <button class="button-show" v-if="this.checkedoccupation == 0" @click="search()">Visa {{totalAdsList.value}} annonser</button>
                            <button class="button-show" v-else @click="search()">Visa {{this.$store.state.totalList.value}} annonser</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <div id="occupation-small">
            <button class="occupation-button" @click="occupationDiv = !occupationDiv">Yrke<i class="glyphicon glyphicon-chevron-down" style="float:right;"></i></button>
            <div v-if="occupationDiv" class="occupation-container">
                <div class="occupation-wrapper">
                    <div id="occupation-top" class="">
                        <p class="title">Yrkesområden</p>
                        <input type="checkbox" v-model="checkedoccupation" true-value="1" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Administration, ekonomi, juridik</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="2" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Bygg och anläggning</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="20" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Chefer och verksamhetsledare</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="3" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Data/IT</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="5" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Försäljning, inköp, marknadsföring</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="6" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Hanterksyrken</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="7" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Hotell, restaurang, storhushåll</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="8" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Hälso- och sjukvård</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="9" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Industriell tillverkning</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="10" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Installation, drift, underhåll</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="4" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Kropps- och skönhetsvård</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="11" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Kultur, media, design</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="22" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Militärt arbete</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="13" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Naturbruk</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="14" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Naturvetenskapligt arbete</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="15" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Pedagogiskt arbete</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="12" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Sanering och renhållning</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="16" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Socialt arbete</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="17" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Säkerhetsarbete</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="18" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Tekniskt arbete</label><br>
                        <input type="checkbox" v-model="checkedoccupation" true-value="19" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Transport</label><br>
                    </div>
                    
                    <div class="container-bottom">
                        <div v-show="total" class="occupation-bottom">
                            <button class="button-show" @click="search()">Visa {{totalList.value}} annonser</button>
                        </div>
                        <div v-show="!total" class="occupation-bottom">
                            <button class="button-show" v-if="this.checkedoccupation == 0" @click="search()">Visa {{totalAdsList.value}} annonser</button>
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
    name: 'Occupation',
    data() {
        return {
            occupationDiv: false,
            checkedoccupation: '',
            searchString: '',
            totalAds: [],
            total: true,
        }
    },

    mounted() {
        this.$store.dispatch('getOccupationList', {
        updatedSearchText: this.searchString
        })
        
    },
    methods: {
        search() {
                this.$store.dispatch('changeOccupation', {
                updatedOccupation: this.checkedoccupation
                })
                this.$store.dispatch('getOccupationList', {
                updatedOccupation: this.checkedoccupation
                })
                this.$store.state.totalList = this.totalAds
                this.occupationDiv = ! this.occupationDiv
                console.log(this.checkedoccupation) 
        },
        getTotalAds() {   
            axios.get('https://jobsearch.api.jobtechdev.se/search?occupation-field=' + this.checkedoccupation + '&q=' + this.newSearchString + '&offset=0&limit=100', {
            headers: {
                'api-key': apiKey
            }
            }).then(response => {
            this.totalAds = response.data.total;
            this.$store.state.totalList = this.totalAds
            })
            this.total = false
            console.log(this.checkedoccupation)
        },
        toggle() {
            this.occupationDiv = ! this.occupationDiv
        },
        close(e) {
        if (! this.$el.contains(e.target)) {
            this.occupationDiv = false
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
#occupation{
    width: 100px;
}
.occupation-container {
    display: inline-flex;
    flex-direction: row;
    position: relative;
}
.occupation-wrapper {
    width: 300px;
    border: 1px solid black;
    border-radius: 7px;
    position: absolute;
    left: -80px;
    top: 20px;
    z-index: 1000;
    background-color: white;
}
.title{
    font-weight: 700;
    border-bottom: 1px solid black;
}
#occupation-top{
    text-align: left;
    margin: 15px 10px 0px 10px;
    height: 610px;
}
.container-bottom{
    text-align: center;
    background-color: lightgrey;
    border-radius: 7px;
}
.occupation-bottom{
    background-color: lightgrey;
    margin: 30px 0px 15px 0px;
    padding: 10px 20px;
    max-height: 280px;
    display: inline-block;
}
.occupation-button{
    background-color: darkblue;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    margin: 4px 0px;
    width: 80px;
    height: 50px;
    border-radius: 6px 6px 6px 6px;
}
.occupation-button:hover{
    color: black;
    background-color: white;
}
.occupation-button:focus{
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
    #occupation-small{
        display: none !important;
    }
}

@media only screen and (max-width: 991px) {
    #occupation-large{
        display: none !important;
    }
    .occupation-button{
        margin-left: -18px;
    }
    .occupation-wrapper {
        height: 505px;
        width: 300px;
        border: 1px solid black;
        border-radius: 7px;
        overflow: auto;
        position: absolute;
        left: -80px;
        top: 20px;
        z-index: 1000;
        background-color: white;
    }
}
</style>