import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import 'bootstrap';
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/tooltip'
import 'bootstrap/scss/bootstrap.scss'

global.$ = $


Vue.config.productionTip = false

import math_digit_plus from '@/components/games/math_digit_plus.vue'
import Navbar from '@/components/navbar.vue'
Vue.component('math-digit-plus', math_digit_plus)
Vue.component('app-navbar', Navbar)

import VModal from 'vue-js-modal'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

Vue.use(VModal)
Vue.use(datePicker)

import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
$.extend(true, jQuery.fn.datetimepicker.defaults, {
    icons: {
        time: 'far fa-clock',
        date: 'far fa-calendar',
        up: 'fas fa-arrow-up',
        down: 'fas fa-arrow-down',
        previous: 'fas fa-chevron-left',
        next: 'fas fa-chevron-right',
        today: 'fas fa-calendar-check',
        clear: 'far fa-trash-alt',
        close: 'far fa-times-circle'
    }
});



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')