import VueRouter from 'vue-router'

import home from  '../components/Home.vue'
// import movie from '../view/Movies.vue'
import book from  '../view/Books.vue'
import broad from '../view/Broadcase.vue'
import search from '../view/Search.vue'
import submovie from '../view/SubMovies.vue'
import types from  '../components/Types.vue'
import searchDetail from  '../view/SearchDetail.vue'
import video from  '../view/VideosList.vue'
import comment from  '../view/Comment.vue'
import regist from '../components/Regist.vue'
import login from '../components/Login.vue'
var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/pages/home'},
        {path:'/pages/home',component:home},
        {path:'/pages/movie',name:'movie',component:resolve => {require(['../view/Movies.vue'], resolve)}},
        {path:'/pages/book',component:book},
        {path:'/pages/broad',component:broad},
        {path:'/pages/search',component:search},
        {path:'/pages/type',component:types},
        {path:'/pages/movies/sub:id',component:submovie},
        {path:'/pages/search/sub:content',component:searchDetail},
        {path:'/pages/search/sub',component:searchDetail},
        {path:'/pages/video',component:video},
        {path:'/pages/comment',component:comment},
        {path:'/regist',component:regist},
        {path:'/login',component:login},

    ]
})

export default router