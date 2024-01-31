import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import About from '../pages/About'
import Home from '../pages/Home'
import Skills from '../pages/Skills'
import Work from '../pages/Work'
import Contact from '../pages/Contact'
import FullcalendarProject from '../pages/FullcalendarProject'

export default new VueRouter({
    routes:[
        {
            path:'/project/fullcalendar',
            component: FullcalendarProject,
        },
        {
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/skills',
            component:Skills,
        },
        {
            path:'/work',
            component:Work,
        },
        {
            path:'/contact',
            component:Contact,
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})