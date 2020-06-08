import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from "vue-axios";
import { apiKey } from '../store/apiKey'

Vue.use(Vuex)
Vue.use(VueAxios, axios);


export default new Vuex.Store({
    state: {
        jobList: [],
        totalList: [],
        totalAdsList: [],
        RegionList: [],
        searchText: '',
        checkedScopeOfWork: '',
        checkedEmploymentType: '',
        checkedPublished: 0,
        checkedWorkExperience: '',
        checkedDrivingLicense: '',
        checkedRegion: '',
        checkedMunicipality: '',
        checkedOccupation: '',
        numberOfPages: [],
        perPage: 25,
    },
    getters: {

        numberOfPages: state => {
            return Math.ceil(state.jobList.length / state.perPage)
        },
        jobList: state => {
            return state.jobList
        },
        totalList: state => {
            return state.totalList
        },
        totalAdsList: state => {
            return state.totalAdsList
        },
        firstTest: state => {
            return state.searchText
        },
        scopeOfWorkTest: state => {
            return state.checkedScopeOfWork
        },
        employmentTypeTest: state => {
            return state.checkedEmploymentType
        },
        publishedTest: state => {
            return state.checkedPublished
        },
        workExperienceTest: state => {
            return state.checkedWorkExperience
        },
        drivingLicenseTest: state => {
            return state.checkedDrivingLicense
        },
        regionTest: state => {
            return state.checkedRegion
        },
        municipalityTest: state => {
            return state.checkedMunicipality
        },
        occupationTest: state => {
            return state.checkedOccupation
        },
    },
    mutations: {
        changeName(state, payload) {
            state.user.fullName = payload.newName
        },
        SET_JOB_LIST(state, jobList) {
            state.jobList = jobList
        },
        SET_SCOPE_OF_WORK_LIST(state, jobList) {
            state.jobList = jobList
        },
        SET_EMPLOYMENT_TYPE_LIST(state, jobList) {
            state.jobList = jobList
        },
        SET_PUBLISHED_LIST(state, jobList) {
            state.jobList = jobList
        },
        SET_WORK_EXPERIENCE_LIST(state, jobList) {
            state.jobList = jobList
        },
        SET_DRIVING_LICENSE_LIST(state, jobList) {
            state.jobList = jobList
        },
        SET_COMPETENCE_LIST(state, jobList) {
            state.jobList = jobList
        },
        SET_REGION_LIST(state, jobList) {
            state.jobList = jobList
        },
        SET_MUNICIPALITY_LIST(state, jobList) {
            state.jobList = jobList
        },
        SET_OCCUPATION_LIST(state, jobList) {
            state.jobList = jobList
        },
        SET_TOTAL_LIST(state, totalList) {
            state.totalList = totalList
        },
        SET_TOTAL_ADS_LIST(state, totalAdsList) {
            state.totalAdsList = totalAdsList
        },
        changeSearchText(state, payload) {
            state.searchText = payload.updatedSearchText
        },
        changeScopeOfWork(state, payload) {
            state.checkedScopeOfWork = payload.updatedScopeOfWork
        },
        changeEmploymentType(state, payload) {
            state.checkedEmploymentType = payload.updatedEmploymentType
        },
        changePublished(state, payload) {
            state.checkedPublished = payload.updatedPublish
        },
        changeWorkExperience(state, payload) {
            state.checkedWorkExperience = payload.updatedWorkExperience
        },
        changeDrivingLicense(state, payload) {
            state.checkedDrivingLicense = payload.updatedDrivingLicense
        },
        changeCompetence(state, payload) {
            state.checkedWorkExperience = payload.updatedWorkExperience,
                state.checkedDrivingLicense = payload.updatedDrivingLicense
        },
        changeRegion(state, payload) {
            state.checkedRegion = payload.updatedRegion
        },
        changeMunicipality(state, payload) {
            state.checkedMunicipality = payload.updatedMunicipality
        },
        changeOccupation(state, payload) {
            state.checkedOccupation = payload.updatedOccupation
        },

    },
    actions: {
        changeSearchText(context, payload) {
            context.commit('changeSearchText', payload);
        },
        changeScopeOfWork(context, payload) {
            context.commit('changeScopeOfWork', payload)
        },
        changeEmploymentType(context, payload) {
            context.commit('changeEmploymentType', payload)
        },
        changePublished(context, payload) {
            context.commit('changePublished', payload)
        },
        changeWorkExperience(context, payload) {
            context.commit('changeWorkExperience', payload)
        },
        changeDrivingLicense(context, payload) {
            context.commit('changeDrivingLicense', payload)
        },
        changeCompetence(context, payload) {
            context.commit('changeCompetence', payload)
        },
        changeRegion(context, payload) {
            context.commit('changeRegion', payload)
        },
        changeMunicipality(context, payload) {
            context.commit('changeMunicipality', payload)
        },
        changeOccupation(context, payload) {
            context.commit('changeOccupation', payload)
        },
        getJobList({ commit }) {
            axios.get('https://jobsearch.api.jobtechdev.se/search?q=' + this.state.searchText + '&offset=0&limit=100', {
                    headers: {
                        'api-key': apiKey
                    }
                }).then(response => response.data.hits)
                .then(jobList => {
                    commit('SET_JOB_LIST', jobList)
                        //console.log(jobList);
                })
        },
        getTotalList({ commit }) {
            axios.get('https://jobsearch.api.jobtechdev.se/search?q=' + this.state.searchText + '&offset=0&limit=100', {
                    headers: {
                        'api-key': apiKey
                    }
                }).then(response => response.data.total)
                .then(totalList => {
                    commit('SET_TOTAL_LIST', totalList)
                        //console.log(jobList);
                })
        },
        getTotalAdsList({ commit }) {
            axios.get('https://jobsearch.api.jobtechdev.se/search?q=' + this.state.searchText + '&offset=0&limit=100', {
                    headers: {
                        'api-key': apiKey
                    }
                }).then(response => response.data.total)
                .then(totalAdsList => {
                    commit('SET_TOTAL_ADS_LIST', totalAdsList)
                        //console.log(jobList);
                })
        },
        getScopeOfWorkList({ commit }) {
            if (this.state.checkedScopeOfWork == 0) {
                axios.get('https://jobsearch.api.jobtechdev.se/search?&q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_SCOPE_OF_WORK_LIST', jobList)
                            //console.log(jobList);
                    })
            } else {

                axios.get('https://jobsearch.api.jobtechdev.se/search?worktime-extent=' + this.state.checkedScopeOfWork + '&q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_SCOPE_OF_WORK_LIST', jobList)
                            //console.log(jobList);
                    })
            }
        },
        getEmploymentTypeList({ commit }) {
            if (this.state.checkedEmploymentType == '0' || this.state.checkedEmploymentType == '3') {
                axios.get('https://jobsearch.api.jobtechdev.se/search?&q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_EMPLOYMENT_TYPE_LIST', jobList)
                            //console.log(jobList);
                    })
            } else {

                axios.get('https://jobsearch.api.jobtechdev.se/search?employment-type=' + this.state.checkedEmploymentType + '&employment-type=&q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_EMPLOYMENT_TYPE_LIST', jobList)
                            //console.log(jobList);
                    })
            }
        },
        getPublishedList({ commit }) {
            if (this.state.checkedPublished < 1000) {
                axios.get('https://jobsearch.api.jobtechdev.se/search?q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_PUBLISHED_LIST', jobList)
                    })
            } else {

                axios.get('https://jobsearch.api.jobtechdev.se/search?published-after=' + this.state.checkedPublished + '&q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_PUBLISHED_LIST', jobList)
                    })
            }
        },
        getWorkExperienceList({ commit }) {
            if (this.state.checkedWorkExperience == '') {
                axios.get('https://jobsearch.api.jobtechdev.se/search?q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_WORK_EXPERIENCE_LIST', jobList)
                            //console.log(jobList);
                    })
            } else {

                axios.get('https://jobsearch.api.jobtechdev.se/search?experience=' + this.state.checkedWorkExperience + '&q=Kramfors&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_WORK_EXPERIENCE_LIST', jobList)
                            //console.log(jobList);
                    })
            }
        },
        getDrivingLicenseList({ commit }) {
            if (this.state.checkedDrivingLicense == '') {
                axios.get('https://jobsearch.api.jobtechdev.se/search?q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_DRIVING_LICENSE_LIST', jobList)
                            //console.log(jobList);
                    })
            } else {
                axios.get('https://jobsearch.api.jobtechdev.se/search?driving-license-required=' + this.state.checkedDrivingLicense + '&q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_DRIVING_LICENSE_LIST', jobList)
                            //console.log(jobList);
                    })
            }
        },
        getCompetenceList({ commit }) {
            if (this.state.checkedEmploymentType == '' && this.state.checkedDrivingLicense == '') {
                axios.get('https://jobsearch.api.jobtechdev.se/search?q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_COMPETENCE_LIST', jobList)
                            //console.log(jobList);
                    })
            } else {

                axios.get('https://jobsearch.api.jobtechdev.se/search?driving-license-required=' + this.state.checkedDrivingLicense + '&experience=' + this.state.checkedWorkExperience + '&q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_COMPETENCE_LIST', jobList)
                            //console.log(jobList);
                    })
            }
        },
        getRegionList({ commit }) {
            if (this.state.checkedRegion == 0) {
                axios.get('https://jobsearch.api.jobtechdev.se/search?q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_REGION_LIST', jobList)
                            //console.log(jobList);
                    })
            } else {

                axios.get('https://jobsearch.api.jobtechdev.se/search?region=' + this.state.checkedRegion + '&q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_REGION_LIST', jobList)
                            //console.log(jobList);
                    })
            }
        },
        getMunicipalityList({ commit }) {
            if (this.state.checkedMunicipality == '' || this.state.checkedMunicipality == '1' || this.state.checkedMunicipality == '0') {
                axios.get('https://jobsearch.api.jobtechdev.se/search?municipality=' + this.state.checkedMunicipality + '&region=' + this.state.checkedRegion + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_MUNICIPALITY_LIST', jobList)
                            //console.log(jobList);
                    })
            } else {

                axios.get('https://jobsearch.api.jobtechdev.se/search?municipality=' + this.state.checkedMunicipality + '&q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_MUNICIPALITY_LIST', jobList)
                            //console.log(jobList);
                    })
            }
        },
        getOccupationList({ commit }) {
            if (this.state.checkedOccupation == '' || this.state.checkedOccupation == '0') {
                axios.get('https://jobsearch.api.jobtechdev.se/search?q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_OCCUPATION_LIST', jobList)
                            // console.log(jobList);
                    })
            } else {

                axios.get('https://jobsearch.api.jobtechdev.se/search?occupation-field=' + this.state.checkedOccupation + '&q=' + this.state.searchText + '&offset=0&limit=100', {
                        headers: {
                            'api-key': apiKey
                        }
                    }).then(response => response.data.hits)
                    .then(jobList => {
                        commit('SET_OCCUPATION_LIST', jobList)
                            // console.log(jobList);
                    })
            }
        },
    },
    modules: {}
})