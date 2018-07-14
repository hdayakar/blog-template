import Vue from 'vue'
import App from './App.vue'
import Article from './components/Article.vue';

Vue.config.productionTip = false

Vue.component('appArticle', Article);

new Vue({
  render: h => h(App)
}).$mount('#app')
