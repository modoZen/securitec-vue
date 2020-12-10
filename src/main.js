import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex';
import storeIndex from './store/index'
import service from  './services/index'

Vue.config.productionTip = false

//Vuex config
Vue.use(Vuex);
let store = new Vuex.Store(storeIndex);


router.beforeEach((to,from,next)=>{
  if(!store.state.isAuthenticated && !to.path.includes('/login')){
    next({path:'/login'});
    return;
  }
  next();
})


//Global logic methods
Vue.use({
  install(Vue){
    Object.defineProperty(Vue.prototype,"$service",{
      value:service
    })
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
