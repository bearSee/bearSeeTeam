/*
 * @Author: 熊望
 * @Date: 2022-07-06 10:08:30
 * @LastEditors: 熊望
 * @LastEditTime: 2022-08-17 12:05:50
 * @FilePath: /nginx/Users/bear/projects/project-bear/bearSeeTeam/src/plugins/axios.js
 * @Description:
 */
import Vue from 'vue';
import axios from 'axios';

const { origin, pathname } = window.location;

const axiosConfig = {
    baseURL: `${origin}${pathname}assets/`,
    timeout: 30 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};
const Axios = axios.create(axiosConfig);
// 请求拦截
Axios.interceptors.request.use(
    (config) => {
        const timeStamp = window.SIB.formatDate(new Date(), 'YYYYMMDDhhmmss');
        // get请求增加时间戳，避免服务器304
        if (config.method === 'get') {
            config.params = {
                _t: timeStamp,
                ...config.params,
            };
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

// 响应拦截
Axios.interceptors.response.use(
    response => response,
    (error) => {
        Vue.prototype.$message.error((error.data || {}).message || '服务器内部异常');

        return Promise.reject(error);
    },
);

window.axios = Axios;
Vue.prototype.$http = Axios;
