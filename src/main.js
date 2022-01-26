import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  MenuItemGroup,
  Submenu,
  Row,
  Col,
  Menu,
  MenuItem,
  Input,
  Message,
} from 'element-ui';
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(MenuItemGroup).use(Submenu).use(Row).use(Col).use(Menu).use(MenuItem).use(Input);
Vue.component(Message.name, Message)

Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')