/*
 * @Author: 熊望
 * @Date: 2022-07-06 10:08:30
 * @LastEditors: 熊望
 * @LastEditTime: 2022-08-17 12:16:40
 * @FilePath: /nginx/Users/bear/projects/project-bear/bearSeeTeam/src/main.js
 * @Description:
 */
import Vue from 'vue';
// 引入 sibionics-ui 框架
import sibUI from 'sibionics-ui';
import App from './App';
import router from './router';
import store from './store';

// 引入插件集合
import './plugins';

// 引入样式表集合
import './assets/styles';

Vue.use(sibUI);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#bear');
