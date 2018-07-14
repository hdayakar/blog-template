import Vue from 'vue'
import App from './App.vue'
import Article from './components/Article.vue';
import Contact from "./components/Contact.vue";

Vue.config.productionTip = false

Vue.component('appArticle', Article);
Vue.component('appContact', Contact);

export const eventBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')
