import Vue from 'vue'
import Router from 'vue-router'
import Mine from '../pages/mine'
import Main from  '../pages/main'
import Type from  '../pages/type'
import Discover from '../pages/discover'
import Detail from '../pages/detail'
import Issue from '../pages/issue'
import Profile from '../pages/profile'
import EditProfile from '../pages/editProfile'
import ChangePs from '../pages/changePs'
import Blogs from '../pages/blogs'
import Login from '../pages/login'
import Blogdetail from '../pages/blogdetail'
import Regist from '../pages/regist'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      meta:{bool: true},
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/type',
      name: 'Type',
      component: Type
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/issue',
      name: 'Issue',
      meta:{bool: true},
      component: Issue
    },
    {
      path: '/profile',
      name: 'Profile',
      meta:{bool: true},
      component: Profile
    },
    {
      path: '/editProfile',
      name: 'EditProfile',
      meta:{bool: true},
      component: EditProfile
    },
    {
      path: '/changePs',
      name: 'ChangePs',
      meta:{bool: true},
      component: ChangePs
    },
    {
      path: '/blogs',
      name: 'Blogs',
      meta:{bool: true},
      component: Blogs
    },
    {
      path: '/blogdetail',
      name: 'Blogdetail',
      meta:{bool: true},
      component: Blogdetail
    },
    {
      path: '/regist',
      name: 'Regist',
      meta:{bool: true},
      component: Regist
    }
  ]
})
