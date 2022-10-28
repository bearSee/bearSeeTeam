/*
 * @Author: 熊望
 * @Date: 2022-08-17 11:56:53
 * @LastEditors: 熊望
 * @LastEditTime: 2022-08-17 12:18:28
 * @FilePath: /nginx/Users/bear/projects/project-bear/bearSeeTeam/src/store/index.js
 * @Description:
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        config: null,
    },
    mutations: {
        setConfig(state, payload) {
            state.config = payload;
        },
    },
    actions: {
        getConfig({ commit }) {
            Vue.prototype.$http.get('config.json').then(({ data = {} }) => {
                commit('setConfig', data.data || {});
            });
        },
    },
});
