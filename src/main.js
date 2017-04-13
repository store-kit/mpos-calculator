// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable no-unused-vars */
import Tachyons from 'tachyons/css/tachyons.css';
import formatMoney from 'accounting-js/lib/formatMoney.js'

/* eslint-enable no-unused-vars */

import Vue from 'vue';
import App from './App';
import Hello from './components/Calc'


Vue.config.productionTip = false;


// register filter
Vue.filter('currencyDisplay', function (value) {
  return formatMoney(value, { symbol: "", precision: 0});
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});

