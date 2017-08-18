import Vue from 'vue'
import App from './App.vue'
import 'vueify/lib/insert-css';

new Vue({
  el: '#app',
  render: h => h(App)
})

setTimeout(() => {
  console.log('zzz');
}, 1000);
