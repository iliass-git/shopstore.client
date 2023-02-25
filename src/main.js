import App from './App.vue'
import Vue from 'vue';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


new Vue({
    store,
    render: h => h(App)
  }).$mount('#app');
