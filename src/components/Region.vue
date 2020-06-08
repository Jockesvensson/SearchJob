<template>
    <div id="region" class="">
        <div id="region-large">
            <button class="region-button" @click="regionDiv = !regionDiv">Ort<i class="glyphicon glyphicon-chevron-down" style="float:right;"></i></button>
            <div v-if="regionDiv" class="region-container">
                <div class="region-wrapper">
                    <div class="row">
                    <div id="region-top" class="col-12 col-md-5">
                        <p class="title">Län</p>
                        <input type="checkbox" v-model="checkedRegion" true-value="10" false-value="0" @click="showMunicipalityBlekingeDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Blekinge län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="20" false-value="0" @click="showMunicipalityDalarnaDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Dalarnas län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="09" false-value="0" @click="showMunicipalityGotlandDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Gotlands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="21" false-value="0" @click="showMunicipalityGavleborgDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Gävleborgs län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="13" false-value="0" @click="showMunicipalityHallandDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Hallands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="23" false-value="0" @click="showMunicipalityJamtlandDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Jämtlands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="06" false-value="0" @click="showMunicipalityJonkopingDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Jönköpings län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="08" false-value="0" @click="showMunicipalityKalmarDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Kalmar län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="07" false-value="0" @click="showMunicipalityKronobergDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Kronobergs län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="25" false-value="0" @click="showMunicipalityNorrbottenDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Norrbottens län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="12" false-value="0" @click="showMunicipalitySkaneDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Skåne län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="01" false-value="0" @click="showMunicipalityStockholmDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Stockholms län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="04" false-value="0" @click="showMunicipalitySodermanlandDiv()" @change="getTotalAdsRegion()"> 
                        <label for=heltid>Södermanlands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="03" false-value="0" @click="showMunicipalityUppsalaDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Uppsala län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="17" false-value="0" @click="showMunicipalityVarmlandDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Värmlands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="24" false-value="0" @click="showMunicipalityVasterbottenDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Västerbottens län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="22" false-value="0" @click="showMunicipalityVasternorrlandDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Västernorrlands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="19" false-value="0" @click="showMunicipalityVastmanlandDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Västmanlands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="14" false-value="0" @click="showMunicipalityVastraGotalandDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Västa Götalands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="18" false-value="0" @click="showMunicipalityOrebroDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Örebro län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="05" false-value="0" @click="showMunicipalityOstergotlandDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Östergötlands län</label><br>
                        <div class="">
                            <input type="checkbox" v-model="checkedRegion" true-value="90" false-value="0" @change="getTotalAdsRegion()">
                            <label for=heltid>Obestämd ort</label><br>
                        </div>
                    </div>
                    <div v-show="showMunicipalityBlekinge" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1082" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Karlshamn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1080" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=deltid>Karlskrona</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1060" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Olofström</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1081" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=deltid>Ronneby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1083" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sölvesborg</label><br>
                    </div>
                    <div v-show="showMunicipalityDalarna" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2084" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Avesta</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2081" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=deltid>Borlänge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2080" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Falun</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2026" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=deltid>Gagnef</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2029" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Leksand</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2085" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ludvika</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2023" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Malung-Sälen</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2062" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mora</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2034" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Orsa</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2031" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Rättvik</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2061" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Smedjebacken</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2082" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Säter</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2021" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vansbro</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2039" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Älvdalen</label><br>
                    </div>
                    <div v-show="showMunicipalityGotland" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0980" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gotland</label><br>
                    </div>
                    <div v-show="showMunicipalityGavleborg" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2183" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bollnäs</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2180" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gävle</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2104" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hofors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2184" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hudiksvall</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2161" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ljusdal</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2132" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nordanstig</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2101" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ockelbo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2121" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ovanåker</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2181" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sandviken</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2182" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Söderhamn</label><br>
                    </div>
                    <div v-show="showMunicipalityHalland" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1382" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Falkenberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1380" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Halmstad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1315" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hylte</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1384" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kungsbacka</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1381" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Laholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1383" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Varberg</label><br>
                    </div>
                    <div v-show="showMunicipalityJamtland" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2326" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Berg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2305" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bräcke</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2361" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Härjedalen</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2309" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Krokom</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2303" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ragunda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2313" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Strömsund</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2321" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Åre</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2380" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Östersund</label><br>
                    </div>
                    <div v-show="showMunicipalityJonkoping" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0604" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Aneby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0686" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Eksjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0662" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gislaved</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0617" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gnosjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0643" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Habo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0680" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Jönköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0642" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mullsjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0682" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nässjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0684" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sävsjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0687" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tranås</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0665" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vaggeryd</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0685" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vetlanda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0683" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Värnamo</label><br>
                    </div>
                    <div v-show="showMunicipalityKalmar" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0885" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Borgholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0862" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Emmaboda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0860" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hultsfred</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0821" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Högsby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0880" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kalmar</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0861" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mönsterås</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0840" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mörbylånga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0881" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nybro</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0882" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Oskarshamn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0834" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Torsås</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0884" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vimmerby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0883" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Västervik</label><br>
                    </div>
                    <div v-show="showMunicipalityKronoberg" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0764" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Alvesta</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0761" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lessebo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0781" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ljungby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0767" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Markaryd</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0763" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tingsryd</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0760" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Uppvidinge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0780" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Växjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0765" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Älmhult</label><br>
                    </div>
                    <div v-show="showMunicipalityNorrbotten" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2506" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Arjeplog</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2505" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Arvidsjaur</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2582" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Boden</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2523" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gällivare</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2583" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Haparanda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2510" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Jokkmokk</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2514" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kalix</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2584" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kiruna</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2580" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Luleå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2521" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Pajala</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2581" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Piteå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2560" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Älvsbyn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2513" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Överkalix</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2518" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Övertorneå</label><br>
                    </div>
                    <div v-show="showMunicipalitySkane" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1260" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bjuv</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1272" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bromölla</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1231" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Burlöv</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1278" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Båstad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1285" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Eslöv</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1283" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Helsingborg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1293" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hässleholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1284" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Höganäs</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1266" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hörby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1267" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Höör</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1276" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Klippan</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1290" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kristianstad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1261" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kävlinge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1282" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Landskrona</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1262" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lomma</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1281" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lund</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1280" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Malmö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1273" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Osby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1275" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Perstorp</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1291" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Simrishamn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1265" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sjöbo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1264" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Skurup</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1230" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Staffanstorp</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1214" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Svalöv</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1263" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Svedala</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1270" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tomelilla</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1287" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Trelleborg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1233" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vellinge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1286" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ystad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1292" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ängelholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1277" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Åstorp</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1257" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Örkelljunga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1256" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Östra Göinge</label><br>
                    </div>
                    <div v-show="showMunicipalityStockholm" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0127" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Botkyrka</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0162" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Danderyd</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0125" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ekerö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0136" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Haninge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0126" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Huddinge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0123" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Järfälla</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0186" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lidingö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0182" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nacka</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0188" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Norrtälje</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0140" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nykvarn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0192" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nynäshamn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0128" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Salem</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0191" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sigtuna</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0163" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sollentuna</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0184" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Solna</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0180" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Stockholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0183" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sundbyberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0181" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Södertälje</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0138" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tyresö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0160" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Täby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0114" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Upplands Väsby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0139" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Upplands-Bro</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0115" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vallentuna</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0187" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vaxholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0120" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Värmdö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0117" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Österåker</label><br>
                    </div>
                    <div v-show="showMunicipalitySodermanland" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0484" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Eskilstuna</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0482" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Flen</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0461" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gnesta</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0483" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Katrineholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0480" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nyköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0481" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Oxelösund</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0486" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Strängnäs</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0488" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Trosa</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0428" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vingåker</label><br>
                    </div>
                    <div v-show="showMunicipalityUppsala" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0381" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Enköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0331" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Heby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0305" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Håbo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0330" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Knivsta</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0360" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tierp</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0380" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Uppsala</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0319" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Älvkarleby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0382" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Östhammar</label><br>
                    </div>
                    <div v-show="showMunicipalityVarmland" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1784" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Arvika</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1730" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Eda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1782" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Filipstad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1763" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Forshaga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1764" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Grums</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1783" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hagfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1761" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hammarö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1780" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Karlstad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1715" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kil</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1781" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kristinehamn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1762" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Munkfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1760" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Storfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1766" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sunne</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1785" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Säffle</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1737" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Torsby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1765" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Årjäng</label><br>
                    </div>
                    <div v-show="showMunicipalityVasterbotten" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2403" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bjurholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2425" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Dorotea</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2481" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lycksele</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2418" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Malå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2401" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nordmaling</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2417" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Norsjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2409" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Robertsfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2482" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Skellefteå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2422" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sorsele</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2421" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Storuman</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2480" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Umeå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2462" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vilhelmina</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2404" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vindeln</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2460" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vännäs</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2463" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Åsele</label><br>
                    </div>
                    <div v-show="showMunicipalityVasternorrland" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2280" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Härnösand</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2282" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kramfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2283" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sollefteå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2281" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sundsvall</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2262" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Timrå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2260" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ånge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2284" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Örnsköldsvik</label><br>
                    </div>
                    <div v-show="showMunicipalityVastmanland" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1984" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Arboga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1982" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Fagersta</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1961" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hallstahammar</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1960" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kungsör</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1983" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Köping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1962" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Norberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1981" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sala</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1904" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Skinnskatteberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1907" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Surahammar</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1980" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Västerås</label><br>
                    </div>
                    <div v-show="showMunicipalityVastraGotaland" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1440" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ale</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1489" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Alingsås</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1460" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bengtsfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1443" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bollebygd</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1490" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Borås</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1438" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Dals-Ed</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1445" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Essunga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1499" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Falköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1439" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Färgelanda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1444" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Grästorp</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1447" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gullspång</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1480" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Göteborg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1471" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Götene</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1466" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Herrljunga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1497" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hjo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1401" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Härryda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1446" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Karlsborg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1482" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kungälv</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1441" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lerum</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1494" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lidköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1462" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lilla Edet</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1484" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lysekil</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1493" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mariestad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1463" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mark</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1461" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mellerud</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1430" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Munkedal</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1481" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mölndal</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1421" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Orust</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1402" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Partille</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1495" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Skara</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1496" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Skövde</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1427" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sotenäs</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1415" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Stenungsund</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1486" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Strömstad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1465" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Svenljunga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1435" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tanum</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1472" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tibro</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1498" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tidaholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1419" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tjörn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1452" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tranemo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1488" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Trollhättan</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1473" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Töreboda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1485" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Uddevalla</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1491" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ulricehamn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1470" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vara</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1487" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vänersborg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1442" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vårgårda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1492" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Åmål</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1407" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Öckerö</label><br>
                    </div>
                    <div v-show="showMunicipalityOrebro" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1882" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Askersund</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1862" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Degerfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1861" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hallsberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1863" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hällefors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1883" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Karlskoga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1881" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kumla</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1860" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Laxå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1814" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lekeberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1885" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lindesberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1864" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ljusnarsberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1884" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nora</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1880" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Örebro</label><br>
                    </div>
                    <div v-show="showMunicipalityOstergotland" id="region-right" class="col-12 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0560" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Boxholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0562" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Finspång</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0513" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kinda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0580" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Linköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0586" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mjölby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0583" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Motala</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0581" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Norrköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0582" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Söderköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0584" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vadstena</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0563" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Valdemarsvik</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0512" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ydre</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0561" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Åtvidaberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0509" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ödeshög</label><br>
                    </div>
                    </div>
                    
                    <div class="container-bottom">
                        <div v-show="total" class="region-bottom">
                            <button class="button-show" @click="search()">Visa {{totalList.value}} annonser</button>
                        </div>
                        <div v-show="!total" class="region-bottom">
                            <button class="button-show" v-if="this.checkedRegion == 0" @click="search()">Visa {{totalAdsList.value}} annonser</button>
                            <button class="button-show" v-else @click="search()">Visa {{this.$store.state.totalList.value}} annonser</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <div id="region-small">
            <button class="region-button" @click="regionDiv = !regionDiv">Ort<i class="glyphicon glyphicon-chevron-down" style="float:right;"></i></button>
            <div v-if="regionDiv" class="region-container">
                <div class="region-wrapper">
                    <div class="row">
                    <div id="region-top" class="col-5 col-xs-5 col-md-5">
                        <p class="title">Län</p>
                        <input type="checkbox" v-model="checkedRegion" true-value="10" false-value="0" @click="showMunicipalityBlekingeDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Blekinge län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="20" false-value="0" @click="showMunicipalityDalarnaDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Dalarnas län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="09" false-value="0" @click="showMunicipalityGotlandDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Gotlands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="21" false-value="0" @click="showMunicipalityGavleborgDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Gävleborgs län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="13" false-value="0" @click="showMunicipalityHallandDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Hallands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="23" false-value="0" @click="showMunicipalityJamtlandDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Jämtlands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="06" false-value="0" @click="showMunicipalityJonkopingDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Jönköpings län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="08" false-value="0" @click="showMunicipalityKalmarDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Kalmar län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="07" false-value="0" @click="showMunicipalityKronobergDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Kronobergs län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="25" false-value="0" @click="showMunicipalityNorrbottenDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Norrbottens län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="12" false-value="0" @click="showMunicipalitySkaneDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Skåne län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="01" false-value="0" @click="showMunicipalityStockholmDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Stockholms län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="04" false-value="0" @click="showMunicipalitySodermanlandDiv()" @change="getTotalAdsRegion()"> 
                        <label for=heltid>Södermanlands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="03" false-value="0" @click="showMunicipalityUppsalaDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Uppsala län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="17" false-value="0" @click="showMunicipalityVarmlandDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Värmlands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="24" false-value="0" @click="showMunicipalityVasterbottenDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Västerbottens län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="22" false-value="0" @click="showMunicipalityVasternorrlandDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Västernorrlands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="19" false-value="0" @click="showMunicipalityVastmanlandDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Västmanlands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="14" false-value="0" @click="showMunicipalityVastraGotalandDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Västa Götalands län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="18" false-value="0" @click="showMunicipalityOrebroDiv()" @change="getTotalAdsRegion()">
                        <label for=deltid>Örebro län</label><br>
                        <input type="checkbox" v-model="checkedRegion" true-value="05" false-value="0" @click="showMunicipalityOstergotlandDiv()" @change="getTotalAdsRegion()">
                        <label for=heltid>Östergötlands län</label><br>
                        <div class="">
                            <input type="checkbox" v-model="checkedRegion" true-value="90" false-value="0" @change="getTotalAdsRegion()">
                            <label for=heltid>Obestämd ort</label><br>
                        </div>
                    </div>
                    <div v-show="showMunicipalityBlekinge" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1082" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Karlshamn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1080" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=deltid>Karlskrona</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1060" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Olofström</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1081" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=deltid>Ronneby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1083" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sölvesborg</label><br>
                    </div>
                    <div v-show="showMunicipalityDalarna" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2084" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Avesta</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2081" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=deltid>Borlänge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2080" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Falun</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2026" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=deltid>Gagnef</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2029" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Leksand</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2085" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ludvika</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2023" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Malung-Sälen</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2062" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mora</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2034" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Orsa</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2031" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Rättvik</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2061" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Smedjebacken</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2082" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Säter</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2021" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vansbro</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2039" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Älvdalen</label><br>
                    </div>
                    <div v-show="showMunicipalityGotland" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0980" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gotland</label><br>
                    </div>
                    <div v-show="showMunicipalityGavleborg" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2183" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bollnäs</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2180" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gävle</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2104" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hofors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2184" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hudiksvall</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2161" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ljusdal</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2132" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nordanstig</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2101" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ockelbo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2121" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ovanåker</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2181" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sandviken</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2182" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Söderhamn</label><br>
                    </div>
                    <div v-show="showMunicipalityHalland" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1382" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Falkenberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1380" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Halmstad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1315" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hylte</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1384" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kungsbacka</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1381" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Laholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1383" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Varberg</label><br>
                    </div>
                    <div v-show="showMunicipalityJamtland" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2326" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Berg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2305" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bräcke</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2361" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Härjedalen</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2309" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Krokom</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2303" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ragunda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2313" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Strömsund</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2321" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Åre</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2380" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Östersund</label><br>
                    </div>
                    <div v-show="showMunicipalityJonkoping" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0604" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Aneby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0686" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Eksjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0662" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gislaved</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0617" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gnosjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0643" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Habo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0680" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Jönköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0642" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mullsjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0682" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nässjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0684" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sävsjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0687" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tranås</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0665" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vaggeryd</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0685" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vetlanda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0683" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Värnamo</label><br>
                    </div>
                    <div v-show="showMunicipalityKalmar" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0885" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Borgholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0862" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Emmaboda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0860" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hultsfred</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0821" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Högsby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0880" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kalmar</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0861" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mönsterås</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0840" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mörbylånga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0881" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nybro</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0882" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Oskarshamn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0834" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Torsås</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0884" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vimmerby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0883" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Västervik</label><br>
                    </div>
                    <div v-show="showMunicipalityKronoberg" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0764" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Alvesta</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0761" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lessebo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0781" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ljungby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0767" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Markaryd</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0763" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tingsryd</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0760" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Uppvidinge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0780" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Växjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0765" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Älmhult</label><br>
                    </div>
                    <div v-show="showMunicipalityNorrbotten" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2506" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Arjeplog</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2505" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Arvidsjaur</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2582" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Boden</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2523" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gällivare</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2583" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Haparanda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2510" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Jokkmokk</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2514" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kalix</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2584" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kiruna</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2580" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Luleå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2521" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Pajala</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2581" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Piteå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2560" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Älvsbyn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2513" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Överkalix</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2518" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Övertorneå</label><br>
                    </div>
                    <div v-show="showMunicipalitySkane" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1260" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bjuv</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1272" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bromölla</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1231" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Burlöv</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1278" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Båstad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1285" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Eslöv</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1283" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Helsingborg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1293" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hässleholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1284" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Höganäs</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1266" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hörby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1267" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Höör</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1276" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Klippan</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1290" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kristianstad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1261" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kävlinge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1282" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Landskrona</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1262" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lomma</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1281" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lund</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1280" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Malmö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1273" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Osby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1275" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Perstorp</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1291" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Simrishamn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1265" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sjöbo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1264" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Skurup</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1230" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Staffanstorp</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1214" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Svalöv</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1263" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Svedala</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1270" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tomelilla</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1287" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Trelleborg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1233" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vellinge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1286" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ystad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1292" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ängelholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1277" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Åstorp</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1257" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Örkelljunga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1256" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Östra Göinge</label><br>
                    </div>
                    <div v-show="showMunicipalityStockholm" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0127" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Botkyrka</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0162" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Danderyd</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0125" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ekerö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0136" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Haninge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0126" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Huddinge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0123" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Järfälla</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0186" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lidingö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0182" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nacka</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0188" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Norrtälje</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0140" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nykvarn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0192" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nynäshamn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0128" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Salem</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0191" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sigtuna</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0163" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sollentuna</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0184" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Solna</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0180" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Stockholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0183" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sundbyberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0181" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Södertälje</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0138" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tyresö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0160" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Täby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0114" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Upplands Väsby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0139" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Upplands-Bro</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0115" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vallentuna</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0187" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vaxholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0120" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Värmdö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0117" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Österåker</label><br>
                    </div>
                    <div v-show="showMunicipalitySodermanland" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0484" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Eskilstuna</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0482" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Flen</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0461" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gnesta</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0483" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Katrineholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0480" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nyköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0481" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Oxelösund</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0486" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Strängnäs</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0488" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Trosa</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0428" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vingåker</label><br>
                    </div>
                    <div v-show="showMunicipalityUppsala" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0381" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Enköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0331" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Heby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0305" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Håbo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0330" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Knivsta</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0360" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tierp</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0380" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Uppsala</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0319" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Älvkarleby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0382" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Östhammar</label><br>
                    </div>
                    <div v-show="showMunicipalityVarmland" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1784" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Arvika</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1730" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Eda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1782" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Filipstad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1763" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Forshaga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1764" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Grums</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1783" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hagfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1761" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hammarö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1780" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Karlstad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1715" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kil</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1781" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kristinehamn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1762" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Munkfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1760" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Storfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1766" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sunne</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1785" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Säffle</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1737" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Torsby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1765" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Årjäng</label><br>
                    </div>
                    <div v-show="showMunicipalityVasterbotten" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2403" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bjurholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2425" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Dorotea</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2481" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lycksele</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2418" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Malå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2401" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nordmaling</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2417" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Norsjö</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2409" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Robertsfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2482" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Skellefteå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2422" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sorsele</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2421" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Storuman</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2480" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Umeå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2462" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vilhelmina</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2404" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vindeln</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2460" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vännäs</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2463" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Åsele</label><br>
                    </div>
                    <div v-show="showMunicipalityVasternorrland" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2280" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Härnösand</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2282" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kramfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2283" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sollefteå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2281" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sundsvall</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2262" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Timrå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2260" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ånge</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="2284" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Örnsköldsvik</label><br>
                    </div>
                    <div v-show="showMunicipalityVastmanland" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1984" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Arboga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1982" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Fagersta</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1961" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hallstahammar</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1960" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kungsör</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1983" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Köping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1962" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Norberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1981" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sala</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1904" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Skinnskatteberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1907" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Surahammar</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1980" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Västerås</label><br>
                    </div>
                    <div v-show="showMunicipalityVastraGotaland" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1440" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ale</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1489" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Alingsås</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1460" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bengtsfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1443" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Bollebygd</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1490" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Borås</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1438" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Dals-Ed</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1445" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Essunga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1499" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Falköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1439" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Färgelanda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1444" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Grästorp</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1447" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Gullspång</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1480" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Göteborg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1471" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Götene</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1466" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Herrljunga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1497" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hjo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1401" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Härryda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1446" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Karlsborg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1482" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kungälv</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1441" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lerum</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1494" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lidköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1462" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lilla Edet</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1484" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lysekil</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1493" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mariestad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1463" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mark</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1461" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mellerud</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1430" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Munkedal</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1481" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mölndal</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1421" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Orust</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1402" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Partille</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1495" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Skara</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1496" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Skövde</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1427" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Sotenäs</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1415" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Stenungsund</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1486" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Strömstad</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1465" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Svenljunga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1435" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tanum</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1472" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tibro</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1498" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tidaholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1419" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tjörn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1452" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Tranemo</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1488" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Trollhättan</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1473" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Töreboda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1485" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Uddevalla</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1491" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ulricehamn</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1470" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vara</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1487" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vänersborg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1442" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vårgårda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1492" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Åmål</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1407" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Öckerö</label><br>
                    </div>
                    <div v-show="showMunicipalityOrebro" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1882" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Askersund</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1862" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Degerfors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1861" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hallsberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1863" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Hällefors</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1883" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Karlskoga</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1881" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kumla</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1860" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Laxå</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1814" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lekeberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1885" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Lindesberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1864" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ljusnarsberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1884" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Nora</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1880" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Örebro</label><br>
                    </div>
                    <div v-show="showMunicipalityOstergotland" id="region-right" class="col-6 col-xs-6 col-md-5">
                        <p class="title">Kommuner</p>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="1" false-value="0" @change="getTotalAdsRegion()">
                        <label for=heltid>Välj alla kommuner</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0560" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Boxholm</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0562" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Finspång</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0513" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Kinda</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0580" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Linköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0586" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Mjölby</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0583" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Motala</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0581" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Norrköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0582" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Söderköping</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0584" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Vadstena</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0563" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Valdemarsvik</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0512" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ydre</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0561" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Åtvidaberg</label><br>
                        <input type="checkbox" v-model="checkedMunicipality" true-value="0509" false-value="0" @change="getTotalAdsMunicipality()">
                        <label for=heltid>Ödeshög</label><br>
                    </div>
                    </div>
                    
                    <div class="container-bottom">
                        <div v-show="total" class="region-bottom">
                            <button class="button-show" @click="search()">Visa {{totalList.value}} annonser</button>
                        </div>
                        <div v-show="!total" class="region-bottom">
                            <button class="button-show" v-if="this.checkedRegion == 0" @click="search()">Visa {{totalAdsList.value}} annonser</button>
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
    name: 'Region',
    data() {
        return {
            regionDiv: false,
            checkedRegion: '',
            checkedMunicipality: '',
            searchString: '',
            totalAds: [],
            total: true,
            showMunicipalityBlekinge: false,
            showMunicipalityDalarna: false,
            showMunicipalityGotland: false,
            showMunicipalityGavleborg: false,
            showMunicipalityHalland: false,
            showMunicipalityJamtland: false,
            showMunicipalityJonkoping: false,
            showMunicipalityKalmar: false,
            showMunicipalityKronoberg: false,
            showMunicipalityNorrbotten: false,
            showMunicipalitySkane: false,
            showMunicipalityStockholm: false,
            showMunicipalitySodermanland: false,
            showMunicipalityUppsala: false,
            showMunicipalityVarmland: false,
            showMunicipalityVasterbotten: false,
            showMunicipalityVasternorrland: false,
            showMunicipalityVastmanland: false,
            showMunicipalityVastraGotaland: false,
            showMunicipalityOrebro: false,
            showMunicipalityOstergotland: false
        }
    },
    mounted() {
        this.$store.dispatch('getRegionList', {
        updatedSearchText: this.searchString
        })
    },
    methods: {
        search() {
            if(this.checkedMunicipality == 1 || this.checkedMunicipality == 0 || this.checkedMunicipality == '') {
                this.$store.dispatch('changeRegion', {
                updatedRegion: this.checkedRegion
                })
                this.$store.dispatch('getRegionList', {
                updatedRegion: this.checkedRegion
                })
                this.$store.state.totalList = this.totalAds
            } else if(this.checkedMunicipality == '0'){
                this.$store.dispatch('changeRegion', {
                updatedRegion: this.checkedRegion
                })
                this.$store.dispatch('getRegionList', {
                updatedRegion: this.checkedRegion
                })
                this.$store.state.totalList = this.totalAds
            } else if(this.checkedRegion && this.checkedMunicipality){
                this.$store.dispatch('changeMunicipality', {
                updatedMunicipality: this.checkedMunicipality
                })
                this.$store.dispatch('getMunicipalityList', {
                updatedMunicipality: this.checkedMunicipality
                })
                this.$store.state.totalList = this.totalAds
                console.log(this.checkedRegion)
            }else {
                this.$store.dispatch('changeMunicipality', {
                updatedMunicipality: this.checkedMunicipality
                })
                this.$store.dispatch('getMunicipalityList', {
                updatedMunicipality: this.checkedMunicipality
                })
                this.$store.state.totalList = this.totalAds
                console.log(this.checkedRegion)
            }
                this.regionDiv = ! this.regionDiv
                
        },
        getTotalAdsRegion() {   
            axios.get('https://jobsearch.api.jobtechdev.se/search?region=' + this.checkedRegion + '&q=' + this.newSearchString + '&offset=0&limit=100', {
            headers: {
                'api-key': apiKey
            }
            }).then(response => {
            this.totalAds = response.data.total;
            this.$store.state.totalList = this.totalAds
            })
            this.total = false
            console.log(this.checkedRegion)
        },
        getTotalAdsMunicipality() {
            if(this.checkedMunicipality == 0) {
                this.test()
            } else {
            axios.get('https://jobsearch.api.jobtechdev.se/search?municipality=' + this.checkedMunicipality + '&q=' + this.newSearchString + '&offset=0&limit=100', {
            headers: {
                'api-key': apiKey
            }
            }).then(response => {
            this.totalAds = response.data.total;
            this.$store.state.totalList = this.totalAds
            })
            this.total = false
            console.log(this.checkedMunicipality)
            }
        },
        toggle() {
            this.regionDiv = ! this.regionDiv
        },
        close(e) {
        if (! this.$el.contains(e.target)) {
            this.regionDiv = false
            this.checkedMunicipality = 0
            this.checkedRegion = 0
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
            }
        },
        showMunicipalityBlekingeDiv() {
            this.showMunicipalityBlekinge = true
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityDalarnaDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = true,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityGotlandDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = true,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityGavleborgDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = true,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityHallandDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = true,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityJamtlandDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = true,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityJonkopingDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = true,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityKalmarDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = true,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityKronobergDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = true,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityNorrbottenDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = true,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalitySkaneDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = true,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityStockholmDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = true,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalitySodermanlandDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = true,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityUppsalaDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = true,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityVarmlandDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = true,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityVasterbottenDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = true,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityVasternorrlandDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = true,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },  
        showMunicipalityVastmanlandDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = true,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityVastraGotalandDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = true,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityOrebroDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = true,
            this.showMunicipalityOstergotland = false
        },
        showMunicipalityOstergotlandDiv() {
            this.showMunicipalityBlekinge = false
            this.showMunicipalityDalarna = false,
            this.showMunicipalityGotland = false,
            this.showMunicipalityGavleborg = false,
            this.showMunicipalityHalland = false,
            this.showMunicipalityJamtland = false,
            this.showMunicipalityJonkoping = false,
            this.showMunicipalityKalmar = false,
            this.showMunicipalityKronoberg = false,
            this.showMunicipalityNorrbotten = false,
            this.showMunicipalitySkane = false,
            this.showMunicipalityStockholm = false,
            this.showMunicipalitySodermanland = false,
            this.showMunicipalityUppsala = false,
            this.showMunicipalityVarmland = false,
            this.showMunicipalityVasterbotten = false,
            this.showMunicipalityVasternorrland = false,
            this.showMunicipalityVastmanland = false,
            this.showMunicipalityVastraGotaland = false,
            this.showMunicipalityOrebro = false,
            this.showMunicipalityOstergotland = true
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
#region{
    width: 100px;
}
.region-container {
    display: inline-flex;
    flex-direction: row;
    position: relative;
}
.region-wrapper {
    width: 500px;
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
#region-top{
    text-align: left;
    margin: 15px 10px 0px 10px;
    height: 640px;
}
.container-bottom{
    text-align: center;
    background-color: lightgrey;
    border-radius: 7px;
}
.region-bottom{
    background-color: lightgrey;
    margin: 30px 0px 15px 0px;
    padding: 10px 20px;
    max-height: 280px;
    display: inline-block;
}
#region-right{
    text-align: left;
    margin: 15px 10px 0px 10px;
    height: 640px;
    overflow: auto;
}
.region-button{
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
    border-radius: 10px 10px 10px 10px;
}
.region-button:hover{
    color: black;
    background-color: white;
}
.region-button:focus{
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
    #region-small{
        display: none !important;
    }
}

@media only screen and (max-width: 991px) {
    #region-large{
        display: none !important;
    }
    .region-button{
        margin-left: -18px;
        padding-right: 18px;
    }
    .region-wrapper {
        width: 470px;
        border: 1px solid black;
        border-radius: 7px;
        position: absolute;
        left: -80px;
        top: 20px;
        z-index: 1000;
        background-color: white;
    }
    #region-top{
        text-align: left;
        margin: 15px 10px 0px 10px;
        height: 465px;
        overflow: auto;
    }
    #region-right{
        text-align: left;
        margin: 15px 10px 0px 10px;
        height: 465px;
        overflow: auto;
    }
}
</style>