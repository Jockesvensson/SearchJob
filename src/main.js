import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMoment from 'vue-moment'
import moment from 'moment'
import 'moment/locale/sv'
import localization from 'moment/locale/sv'
import vueSmoothScroll from 'vue-smooth-scroll'
import Vue2Filters from 'vue2-filters'
import DateDeadline from './shared/DateDeadline'
import DatePublished from './shared/DatePublished'
import TimePublished from './shared/TimePublished'

moment.locale('sv')

Vue.filter('dateDeadline', DateDeadline)
Vue.filter('datePublished', DatePublished)
Vue.filter('timePublished', TimePublished)

Vue.use(VueAxios, axios)
Vue.use(Vue2Filters)
Vue.use(vueSmoothScroll)

moment.locale('sv', localization)

Vue.use(VueMoment);

Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')