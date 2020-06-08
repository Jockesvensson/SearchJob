<template>
    <div class="container">
        <div class="container-flex">
            <div class="back-container">
                <router-link :to="'/annonser'"><i class="glyphicon glyphicon-chevron-left"></i><span class="back-text">Till sökresultatet</span></router-link>
            </div>
        </div>
        <div id="row" class="row">
            <div id="first" class="col-12 col-md-8">
                <div class="">
                    <div class="image">
                        <img :src="allInfo.logo_url">
                    </div>
                    <h1>{{allInfo.headline}}</h1>
                    <div class="">
                        <h3>{{allInfo.occupation.label}}</h3>
                        <h3>Kommun: {{allInfo.workplace_address.municipality}}</h3>
                    </div>
                    <div class="omfattning">
                        <p v-show="scopes">Omfattning: {{allInfo.working_hours_type.label}}</p>
                        <p v-show="durations">Varaktighet: {{allInfo.duration.label}}</p>
                        <p v-show="employmentTypes">Anställningsform: {{allInfo.duration.label}}- eller tidsbegränsad anställning</p>
                        <p v-show="!numberOfJobs">Antal jobb: {{allInfo.number_of_vacancies}}</p>
                    </div>
                    <div class="container-left">
                        <div class="left">
                            <h3>Kvalifikationer</h3>
                            <div v-if="!experienceNeed" class="work-experience">
                                <h4>Arbetslivserfarenhet</h4>
                                <p style="font-weight:700">Krav</p>
                                <i class="glyphicon glyphicon-asterisk"></i> {{allInfo.occupation.label}} - erfarenhet efterfrågas
                            </div>
                            <div v-else class="work-experience">
                                <h4>Arbetslivserfarenhet</h4>
                                <p>Ingen Arbetslivserfarenhet krävs</p>
                                
                            </div>
                            <!-- Denna är för att få fram 'meriterande', men i mitt svar från API får jag endast en tom array -->
                            <!-- <div v-if="!qualification" class="qualification">
                                <h4>Meriterande</h4>
                                <p style="font-weight:700"></p>
                                <i class="glyphicon glyphicon-asterisk"></i> {{allInfo.must_have.skills}} - erfarenhet efterfrågas (skrivit själv)
                            </div> -->
                            <!-- Denna är för att få fram 'språkkrav', men i mitt svar från API får jag endast en tom array -->
                            <!-- <div v-if="!language" class="language">
                                <h4>Språk</h4>
                                <p style="font-weight:700"></p>
                                <i class="glyphicon glyphicon-asterisk"></i> {{allInfo.must_have.languages}} - erfarenhet efterfrågas (skrivit själv)
                            </div> -->
                            <div v-show="!driverLicense" class="drivers-license">
                                <h4>Körkort</h4>
                                <p style="font-weight:700">Krav</p>
                                <i class="glyphicon glyphicon-asterisk"></i> B
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <h2>Om jobbet</h2>
                        <div class="">
                            <p v-html="allInfo.description.text_formatted"></p>
                        </div>
                    </div>
                    <div class="">
                        <h2>Om anställningen</h2>
                        <div class="">
                            <h3>Lön</h3>
                            <p>{{allInfo.salary_description}}</p>
                            <p>Lönetyp: {{allInfo.salary_type.label}}</p>
                        </div>
                        <div class="terms-of-employment">
                            <h3>Anställningsvillkor</h3>
                            <p>{{allInfo.duration.label}}anställning</p>
                            <p>{{allInfo.working_hours_type.label}}</p>
                        </div>
                        <div class="">
                            <h3>Var ligger arbetsplatsen?</h3>
                            <i class="glyphicon glyphicon-globe"></i>Arbetsplatsen ligger i kommunen {{allInfo.workplace_address.municipality + ' i ' + allInfo.workplace_address.region}}
                        </div>
                        <div class="">
                            <div class="employer">
                                <h2>Arbetsgivaren</h2>
                                <div class="employer-info">
                                    <p>{{allInfo.employer.name}}</p>
                                    <div style="cursor:pointer;" @click="openUrl()"><i class="glyphicon glyphicon-new-window"></i><span>Till annnonsen</span></div>
                                </div>
                            </div>
                            <div class="mailing-address">
                                <h4>Postadress</h4>
                                <div class="mailing-address-info">
                                    <p>Namn på arbetsgivaren</p>
                                    <p>Gatuadress</p>
                                    <p>Postnummer + Stad/Kommun</p>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <h2>Kontakt</h2>
                            <div id="contact" class="">
                                <h4>Kontaktpersoner</h4>
                                <div class="row">
                                    <div id="contact-icon" class="">
                                        <i class="glyphicon glyphicon-user"></i>
                                    </div>
                                    <div id="contact-info" class="">
                                        <p>Namn, title</p>
                                        <p>Mailadress</p>
                                        <p>telefonnummer</p>
                                    </div>
                                </div>
                            </div>
                            <div id="contact" class="">
                                <h4>Fackliga kontaktpersoner</h4>
                                <div class="row">
                                    <div id="contact-icon" class="">
                                        <i class="glyphicon glyphicon-user"></i>
                                    </div>
                                    <div id="contact-info" class="">
                                        <p>Namn, title</p>
                                        <p>Mailadress</p>
                                        <p>telefonnummer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="second-small" class="col-12 col-md-4">
                    <div class="container-right-small">
                        <div class="right-small">
                            <h2>Sök jobbet</h2>
                            <div class="">
                            <div class="">
                                <p>Ansök senast {{allInfo.application_deadline | dateDeadline }} (om {{daysRemaining.toFixed(0)}} dagar)</p>
                            <div v-show="references" class="">
                                <p>Ange referens {{allInfo.application_details.reference}} i din ansökan</p>
                            </div>
                            </div>
                            <div v-show="webbUrls" class="">
                                <i class="glyphicon glyphicon-globe"></i>Ansökan via arbetsgivaren webbplats
                                <div class="">
                                    <button class="button-url" @click="openUrl()">Ansök här</button>
                                </div>
                            </div>
                            <div v-show="emailContacts" class="">
                                <i class="glyphicon glyphicon-globe"></i>Ansökan via mejl
                                <p>Mejla din ansökan till {{allInfo.application_details.email}}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="second-large" class="col-12 col-md-4">
                <div class="container-right">
                    <div class="right">
                        <h2>Sök jobbet</h2>
                        <div class="">
                            <div class="">
                                <p>Ansök senast {{allInfo.application_deadline | dateDeadline }} (om {{daysRemaining.toFixed(0)}} dagar)</p>
                            <div v-show="references" class="">
                                <p>Ange referens {{allInfo.application_details.reference}} i din ansökan</p>
                            </div>
                            </div>
                            <div v-show="webbUrls" class="">
                                <i class="glyphicon glyphicon-globe"></i>Ansökan via arbetsgivaren webbplats
                                <div class="">
                                    <button class="button-url" @click="openUrl()">Ansök här</button>
                                </div>
                            </div>
                            <div v-show="emailContacts" class="">
                                <i class="glyphicon glyphicon-globe"></i>Ansökan via mejl
                                <p>Mejla din ansökan till {{allInfo.application_details.email}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="row" class="row">
            <div id="foot-wrapper" class="col-12 col-md-12">
                <div class="footer-info">
                    <p>Annons-id: {{allInfo.id}}</p>
                    <p>Publicerad: {{allInfo.publication_date}}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'SinglePage',
    data() {
        return {
            items: [],
            allInfo: [],
            driversLicense: false,
            experienceNeeded: false,
            numberOfJob: true,
            scope: true,
            duration: true,
            employmentType: true,
            webbUrl: true,
            referenceNumber: false,
            emailContact: true,
            id: this.$route.params.id,
        }
    },
    created() {
    axios.get('https://jobsearch.api.jobtechdev.se/ad/' + this.id, {
      headers: {
        'api-key': 'YidceDkxXHg5Ylx4MTFgLlx4ODUjXHhlN1x4MDZceDk3XHhkY1x4MDJceGZjXHhmMVx4ODBceGNmNlx4MDdceDA1NSc'
      }
    }).then(response => {
      console.log(response.data)
      console.log(response)
      this.items = response;
      this.allInfo = response.data;
    //   this.total = response.data;
    })
    // setInterval(this.daysLeftToDeadline, 1000);
  },
    computed: {
        driverLicense() {
            if (this.allInfo.driving_license_required === true) {
                return this.driversLicense === true
            } else return this.driversLicense === false
        },
        experienceNeed() {
            if (this.allInfo.experience_required === true) {
                return this.experienceNeeded === true
            } else return this.experienceNeeded === false
        },
        numberOfJobs() {
            if (this.allInfo.number_of_vacancies === 1) {
                return this.numberOfJob === true
            }   else return this.numberOfJob === false
        },
        scopes() {
            if(this.allInfo.working_hours_type.label === null) {
                return this.scope === false
            } else return this.scope === true
        },
        durations() {
            if(this.allInfo.duration.label === null) {
                return this.duration === false
            } else return this.duration === true
        },
        employmentTypes() {
            if(this.allInfo.duration.label === null) {
                return this.duration === false
            } else return this.duration === true
        },
        webbUrls() {
            if(this.allInfo.application_details.url === null) {
                return this.webbUrl === false
            } else return this.webbUrl === true
        },
        emailContacts() {
            if(this.allInfo.application_details.email === null) {
                return this.webbUrl === false
            } else return this.webbUrl === true
        },
        references() {
            if(this.allInfo.application_details.reference === null) {
                return this.referenceNumber === true
            } else return this.referenceNumber === false
        },
        pageUrl() {
            return this.allInfo.application_details.url
        },
        workEmail() {
            return this.allInfo.application_details.email
        },
        daysRemaining() {
        const deadlineDate = new Date(this.allInfo.application_deadline)
        const myDate = new Date()
        const difference = (deadlineDate - myDate) / 1000 / 60 / 60 / 24
        console.log(difference.toFixed(0))
        return difference
        },

    },
    methods: {
        openUrl() {
            window.open(this.pageUrl, '_blank');
        },
    },
}
</script>

<style scoped>
#first{
    background-color: white;
    text-align: left;
}
#second{
    background-color: white;
}
#second-small{
    background-color: white;
}
#row{
    background-color: white;
    padding: 0px 20px;
}
#foot-wrapper{
    background-color: white;
    text-align: left;
}
.image{
    margin-top: 20px;
}
.omfattning{
    line-height: 100%;
}
.container-left {
  text-align: center;
}
.left {
  background-color: lightgrey;
  text-align: left;
  margin: 30px 0px 15px 0px;
  padding: 10px 20px;
  width: 700px;
  max-height: 280px;
  display: inline-block;
}
.container-right {
  text-align: center;
  margin-top: 30px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.right {
  background-color: lightgrey;
  text-align: left;
  padding: 10px 20px;
  width: 300px;
  max-height: 220px;
  display: inline-block;
}

.drivers-license{
    margin-top: 30px;
}
.terms-of-employment{
    line-height: 60%;
}
.employer-info{
    line-height: 60%;
}
.mailing-address{
    margin-top: 20px;
}
.mailing-address-info{
    line-height: 60%;
}
#contact-icon{
   padding-left: 20px;
}
#contact-info{
   line-height: 80%;
   margin: 4px 0px 0px 5px;
}
.footer-info{
    margin-top: 30px;
    line-height: 80%;
}
.back-container{
    text-align: left;
}
.back-text{
    font-size: 20px;
}
.button-url{
    background-color: darkblue;
    color: white;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 0px;
    width: 100px;
    height: 40px;
    border-radius: 8px 8px 8px 8px;
}
.container-right-small {
  text-align: center;
}

.right-small {
  background-color: lightgrey;
  text-align: left;
  margin: 30px 0px 15px 0px;
  padding: 10px 20px;
  width: 620px;
  max-height: 280px;
  display: inline-block;
}

@media only screen and (min-width: 992px) {
    #second-small{
        display: none !important;
    }
}

@media only screen and (max-width: 991px) {
    .left {
        background-color: lightgrey;
        text-align: left;
        margin: 30px 0px 15px 0px;
        padding: 10px 20px;
        max-width: 650px;
        max-height: 280px;
        display: inline-block;
    }
    #second-large{
        display: none !important;
    }  
}

@media only screen and (max-width: 767px) {
    .right-small {
        background-color: lightgrey;
        text-align: left;
        margin: 30px 0px 15px 0px;
        padding: 10px 20px;
        width: 440px;
        max-height: 280px;
        display: inline-block;
    }
    .left {
        background-color: lightgrey;
        text-align: left;
        margin: 30px 0px 15px 0px;
        padding: 10px 20px;
        max-width: 440px;
        max-height: 280px;
        display: inline-block;
    }
}
@media only screen and (max-width: 554px) {
    .right-small {
        background-color: lightgrey;
        text-align: left;
        margin: 30px 0px 15px 0px;
        padding: 10px 20px;
        width: 380px;
        max-height: 280px;
        display: inline-block;
    }
    .left {
        background-color: lightgrey;
        text-align: left;
        margin: 30px 0px 15px 0px;
        padding: 10px 20px;
        max-width: 380px;
        max-height: 280px;
        display: inline-block;
    }
}

</style>