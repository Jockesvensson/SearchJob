<template>
    <div id="competence" class="">
        <div id="competence-large">
            <button class="competence-button" @click="competenceDiv = !competenceDiv">Kompetens<i class="glyphicon glyphicon-chevron-down" style="float:right;"></i></button>
            <div v-if="competenceDiv" class="competence-container">
                <div class="competence-wrapper">
                    <div class="competence-top">
                        <p class="title">Visa endast annonser</p>
                        <input type="checkbox" v-model="checkedWorkExperience" true-value="false" false-value="true" @change="getTotalAds()">
                        <label for=heltid>Utan krav på arbetslivserfarenhet</label>
                        <br>
                        <input type="checkbox" v-model="checkedDrivingLicense" true-value="false" false-value="true" @change="getTotalAds()">
                        <label for=deltid>Utan krav på körkort</label>
                    </div>
                    <div class="container-bottom">
                        <div v-show="total" class="competence-bottom">
                            <button class="button-show" @click="search()">Visa {{totalList.value}} annonser</button>
                        </div>
                        <div v-show="!total" class="competence-bottom">
                            <button class="button-show" @click="search()">Visa {{this.$store.state.totalList.value}} annonser</button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        <div id="competence-small">
            <button class="competence-button" @click="competenceDiv = !competenceDiv">Kompetens<i class="glyphicon glyphicon-chevron-down" style="float:right;"></i></button>
            <div v-if="competenceDiv" class="competence-container">
                <div class="competence-wrapper">
                    <div class="competence-top">
                        <p class="title">Visa endast annonser</p>
                        <input type="checkbox" v-model="checkedWorkExperience" true-value="false" false-value="true" @change="getTotalAds()">
                        <label for=heltid>Utan krav på arbetslivserfarenhet</label>
                        <br>
                        <input type="checkbox" v-model="checkedDrivingLicense" true-value="false" false-value="true" @change="getTotalAds()">
                        <label for=deltid>Utan krav på körkort</label>
                    </div>
                    <div class="container-bottom">
                        <div v-show="total" class="competence-bottom">
                            <button class="button-show" @click="search()">Visa {{totalList.value}} annonser</button>
                        </div>
                        <div v-show="!total" class="competence-bottom">
                            <button class="button-show" @click="search()">Visa {{this.$store.state.totalList.value}} annonser</button>
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
    name: 'Competence',
    data() {
        return {
            competenceDiv: false,
            checkedWorkExperience: '',
            checkedDrivingLicense: '',
            searchString: '',
            totalAds: [],
            total: true,
        }
    },
    mounted() {
        this.$store.dispatch('getCompetenceList', {
        updatedSearchText: this.searchString
        })
    },
    methods: {
        search() {
            if(this.checkedWorkExperience == 'false' && this.checkedDrivingLicense == '' || this.checkedWorkExperience == 'false' && this.checkedDrivingLicense == 'true') {
                this.$store.dispatch('changeCompetence', {
                updatedWorkExperience: this.checkedWorkExperience,
                updatedDrivingLicense: 'true'
                })
                this.$store.dispatch('getCompetenceList', {
                updatedWorkExperience: this.checkedWorkExperience,
                updatedDrivingLicense: 'true'
                })
                this.$store.state.totalList = this.totalAds
                this.competenceDiv = ! this.competenceDiv
            } else if(this.checkedWorkExperience == '' && this.checkedDrivingLicense == 'false' || this.checkedWorkExperience == 'true' && this.checkedDrivingLicense == 'false') {

                this.$store.dispatch('changeCompetence', {
                updatedWorkExperience: 'true',
                updatedDrivingLicense: this.checkedDrivingLicense
                })
                this.$store.dispatch('getCompetenceList', {
                updatedWorkExperience: 'true',
                updatedDrivingLicense: this.checkedDrivingLicense
                })
                this.$store.state.totalList = this.totalAds
                this.competenceDiv = ! this.competenceDiv
            } else if(this.checkedWorkExperience == 'true' && this.checkedDrivingLicense == 'true' || this.checkedWorkExperience == 'false' && this.checkedDrivingLicense == 'false'){
                this.$store.dispatch('changeCompetence', {
                updatedWorkExperience: 'false',
                updatedDrivingLicense: 'false'
                })
                this.$store.dispatch('getCompetenceList', {
                updatedWorkExperience: 'false',
                updatedDrivingLicense: 'false'
                })
                this.$store.state.totalList = this.totalAds
                this.competenceDiv = ! this.competenceDiv
            } else {
                this.$store.dispatch('getJobList', {
                updatedSearchText: this.searchString
                })
                this.$store.state.totalList = this.totalAds
                this.competenceDiv = ! this.competenceDiv
            }
        },
        getTotalAds() {   
            axios.get('https://jobsearch.api.jobtechdev.se/search?driving-license-required=' + this.checkedDrivingLicense + '&experience=' + this.checkedWorkExperience + '&q=' + this.newSearchString + '&offset=0&limit=100', {
            headers: {
                'api-key': apiKey
            }
            }).then(response => {
            this.totalAds = response.data.total;
            this.$store.state.totalList = this.totalAds
            })
            this.total = false
            console.log(this.checkedWorkExperience)
            console.log(this.checkedDrivingLicense)
        },
        toggle() {
            this.competenceDiv = ! this.competenceDiv
        },
        close(e) {
        if (! this.$el.contains(e.target)) {
            this.competenceDiv = false
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
    'jobList', 'totalList'
    ]),
    newSearchString() {
        return this.$store.getters.firstTest
    },
    },
    
}
</script>

<style scoped>
#competence{
    width: 130px;
}
.competence-container {
    display: inline-flex;
    flex-direction: row;
    position: relative;
}
.competence-wrapper {
    width: 300px;
    border: 1px solid black;
    border-radius: 7px;

    position: absolute;
    left: -130px;
    top: 20px;
    z-index: 1000;
    background-color: white;
}
.title{
    font-weight: 700;
    border-bottom: 1px solid black;
}
.competence-top{
    text-align: left;
    margin: 15px 10px 0px 10px;
}
.container-bottom{
    text-align: center;
    background-color: lightgrey;
    border-radius: 7px;
}
.competence-bottom{
    background-color: lightgrey;
    margin: 30px 0px 15px 0px;
    padding: 10px 20px;
    max-height: 280px;
    display: inline-block;
}
.competence-button{
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
.competence-button:hover{
    color: black;
    background-color: white;
}
.competence-button:focus{
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
    #competence-small{
        display: none !important;
    }
}

@media only screen and (max-width: 991px) {
    #competence-large{
        display: none !important;
    }
}

@media only screen and (max-width: 300px) {
    .competence-button{
        font-size: 12px;
        height: 30px;
        width: 100px;
        margin: -10px 30px 10px 0px;
    }
    .competence-wrapper {
        width: 225px;
        border: 1px solid black;
        border-radius: 7px;
        position: absolute;
        left: -131px;
        top: 14px;
        z-index: 1000;
        background-color: white;
        font-size: 11px;
    }
    #competence-top{
        text-align: left;
        margin: 15px 10px 0px 6px;
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