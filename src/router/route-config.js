/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-01 18:55:22
 * @LastEditTime: 2022-08-18 16:36:56
 * @LastEditors: 熊望
 */
export default {
    routes: [
        {
            path: '/',
            redirect: '/index',
            component: () => import(/* webpackChunkName: "master" */ '@/views/master'),
            children: [
                {
                    name: 'index',
                    path: '/index',
                    component: () => import(/* webpackChunkName: "index" */ '@/views/index'),
                },
            ],
        },
    ],
};
