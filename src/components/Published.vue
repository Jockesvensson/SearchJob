<template>
    <div id="published" class="">
        <div id="published-large">
            <button class="published-button" @click="publishedDiv = !publishedDiv">Publicerad<i class="glyphicon glyphicon-chevron-down" style="float:right;"></i></button>
            <div v-if="publishedDiv" class="published-container">
                <div class="published-wrapper">
                    <div class="published-top">
                        <p class="title">Publiserad</p>
                        <input type="checkbox" v-model="checkedPublished" true-value="9999999" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Alla datum</label>
                        <br>
                        <input type="checkbox" v-model="checkedPublished" true-value="1440" false-value="0" @change="getTotalAds()">
                        <label for=deltid>Idag</label>
                        <br>
                        <input type="checkbox" v-model="checkedPublished" true-value="9300" false-value="0" @change="getTotalAds()">
                        <label for=deltid>Senaste 7 dagarna</label>
                        <br>
                        <input type="checkbox" v-model="checkedPublished" true-value="43200" false-value="0" @change="getTotalAds()">
                        <label for=deltid>Senaste 30 dagarna</label>
                    </div>
                    <div class="container-bottom">
                        <div v-show="total" class="published-bottom">
                            <button class="button-show" @click="search()">Visa {{totalList.value}} annonser</button>
                        </div>
                        <div v-show="!total" class="published-bottom">
                            <button class="button-show" v-if="this.checkedPublished == 0" @click="search()">Visa {{totalAdsList.value}} annonser</button>
                            <button class="button-show" v-else @click="search()">Visa {{this.$store.state.totalList.value}} annonser</button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        <div id="published-small">
            <button class="published-button" @click="publishedDiv = !publishedDiv">Publicerad<i class="glyphicon glyphicon-chevron-down" style="float:right;"></i></button>
            <div v-if="publishedDiv" class="published-container">
                <div class="published-wrapper">
                    <div class="published-top">
                        <p class="title">Publiserad</p>
                        <input type="checkbox" v-model="checkedPublished" true-value="9999999" false-value="0" @change="getTotalAds()">
                        <label for=heltid>Alla datum</label>
                        <br>
                        <input type="checkbox" v-model="checkedPublished" true-value="1440" false-value="0" @change="getTotalAds()">
                        <label for=deltid>Idag</label>
                        <br>
                        <input type="checkbox" v-model="checkedPublished" true-value="9300" false-value="0" @change="getTotalAds()">
                        <label for=deltid>Senaste 7 dagarna</label>
                        <br>
                        <input type="checkbox" v-model="checkedPublished" true-value="43200" false-value="0" @change="getTotalAds()">
                        <label for=deltid>Senaste 30 dagarna</label>
                    </div>
                    <div class="container-bottom">
                        <div v-show="total" class="published-bottom">
                            <button class="button-show" @click="search()">Visa {{totalList.value}} annonser</button>
                        </div>
                        <div v-show="!total" class="published-bottom">
                            <button class="button-show" v-if="this.checkedPublished == 0" @click="search()">Visa {{totalAdsList.value}} annonser</button>
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
    name: 'Published',
    data() {
        return {
            publishedDiv: false,
            checkedPublished: 0,
            searchString: '',
            totalAds: [],
            total: true,

        }
    },
    mounted() {
        this.$store.dispatch('getPublishedList', {
        updatedSearchText: this.searchString
        })
        
    },
    methods: {
        search() {
            if(this.checkedPublished == 0) {
                this.$store.dispatch('changePublished', {
                updatedPublish: this.checkedPublished
                })
                this.$store.dispatch('getPublishedList', {
                updatedPublish: this.checkedPublished
                })
                console.log(this.checkedPublished)
                this.$store.state.totalList = this.totalAds
                this.publishedDiv = ! this.publishedDiv
            } else {
                this.$store.dispatch('changePublished', {
                updatedPublish: this.checkedPublished
                })
                this.$store.dispatch('getPublishedList', {
                updatedPublish: this.checkedPublished
                })
                console.log(this.checkedPublished)
                this.$store.state.totalList = this.totalAds
                this.publishedDiv = ! this.publishedDiv
            }
        },
        getTotalAds() {   
            axios.get('https://jobsearch.api.jobtechdev.se/search?published-after=' + this.checkedPublished + '&q=' + this.newSearchString + '&offset=0&limit=100', {
            headers: {
                'api-key': apiKey
            }
            }).then(response => {
            this.totalAds = response.data.total;
            this.$store.state.totalList = this.totalAds
            })
            this.total = false
            console.log(this.checkedPublished)
        },
        toggle() {
            this.publishedDiv = ! this.publishedDiv
        },
        close(e) {
        if (! this.$el.contains(e.target)) {
            this.publishedDiv = false
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
    },

}
</script>

<style scoped>
#published{
    width: 120px;
}
.published-container {
    display: inline-flex;
    flex-direction: row;
    position: relative;
}
.published-wrapper {
    width: 300px;
    border: 1px solid black;
    border-radius: 7px;
    position: absolute;
    left: -60px;
    top: -18px;
    z-index: 1000;
    background-color: white;
}
.title{
    font-weight: 700;
    border-bottom: 1px solid black;
}
.published-top{
    text-align: left;
    margin: 15px 10px 0px 10px;
}
.container-bottom{
    text-align: center;
    background-color: lightgrey;
    border-radius: 7px;
}
.published-bottom{
    background-color: lightgrey;
    margin: 30px 0px 15px 0px;
    padding: 10px 20px;
    max-height: 280px;
    display: inline-block;
}
.published-button{
    background-color: darkblue;
    border: none;
    color: white;
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
.published-button:hover{
    color: black;
    background-color: white;
}

.published-button:focus{
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
    #published-small{
        display: none !important;
    }
}

@media only screen and (max-width: 991px) {
    #published-large{
        display: none !important;
    }
}

@media only screen and (max-width: 300px) {
    .published-button{
        font-size: 12px;
        height: 30px;
        width: 95px;
        margin-right: 40px;
        /* margin: -10px 40px -10px 0px; */
    }
    .published-wrapper {
        width: 225px;
        border: 1px solid black;
        border-radius: 7px;
        position: absolute;
        left: -62px;
        top: -16px;
        z-index: 1000;
        background-color: white;
        font-size: 12px;
    }
    #published-top{
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