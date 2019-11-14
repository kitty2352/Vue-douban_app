<template>
    <div class="videoListContainer">
        <headerBar></headerBar>
        <!--顶部滑动区域-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.data.id==14?'mui-active':'']" v-for="item in category" :key="item.data.id" v-on:click="getVideos(item.data.id)">
                        {{ item.data.title.substr(1)}}
                    </a>
                </div>
            </div>
        </div>

        <!--视频加载区域-->
       <div class="wrap">
           <div class="videoList" v-for="item in videos" :key="item.id">
               <p class="title">{{ item.data.content.data.title}}</p>
               <video controls width="100%" :src="item.data.content.data.playUrl"></video>
               <p class="description">{{ item.data.content.data.description}}</p>
               <hr>
               <p class="do">
                   <a ><span class="mui-icon mui-icon-star">收藏</span></a>
                   <a ><span class="mui-icon mui-icon-redo">分享</span></a>
                   <a ><span class="mui-icon mui-icon-chat">评论</span></a>
               </p>
           </div>
       </div>
        <!--无限加载-->
        <infinite-loading @infinite="onInfinite" ref="infiniteLoading" spinner="bubbles">
            <span slot="no-more">
            我们是有底线的
          </span>
        </infinite-loading>
    </div>
</template>

<script>
    import mui from '../lib/mui/js/mui.js'
    import {Toast} from 'mint-ui'
    import InfiniteLoading from 'vue-infinite-loading';
    import headerBar from '../components/Header.vue'
    export default {
        data(){
            return{
                category:[],//存储页面分类
                videos:[], //存储视频数据
                page:0,
            }
        },
        components: {
            InfiniteLoading,
            headerBar
        },
        mounted(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        created(){
            this.getCategory()
            this.getVideos(14)
        },
        methods:{
            //获取页面分类
            getCategory(){
                this.$http.get('https://api.apiopen.top/videoCategory').then(res=>{
                    if(res.body.code===200){
                        this.category=res.body.result.itemList
                    }else{
                        Toast("获取数据失败！！！")
                    }
                })
            },

            // 获取视频
            getVideos(cateid){
                this.$http.get('https://api.apiopen.top/videoCategoryDetails?id='+cateid).then(res=>{
                    if(res.body.code===200){
                        this.videos=res.body.result
                    }else{
                        Toast("获取视频资源失败")
                    }
                })
            },

            //无限加载视频
            onInfinite($state) {//写一个方法
                var _this = this;
                var pagesize=3;
                _this.page+=1;
                _this.$http.get('https://api.apiopen.top/videoCategoryDetails?id=14').then(function(res) {
                    if(res.body.result.length>0) {
                        if(pagesize*(_this.page)>=res.body.result.length) {
                            $state.complete();//停止加载
                        }else{
                            for(var i=pagesize*((_this.page)-1);i<pagesize*(_this.page);i++){
                                _this.videos.push(res.body.result[i]) ;
                                $state.loaded();//加载
                            }
                        }
                    } else {
                        console.log("3+:" + _this.videos.length)
                        $state.complete();
                    }
                }).catch(function() {
                    Toast("获取视频资源失败")
                });
            },

        }

    }
</script>

<style scoped>
    *{
        touch-action: pan-y;
        margin:0;
        padding: 0;
    }
    .mui-scroll {
        border-bottom: 3px solid cadetblue !important;
    }
    .videoListContainer{
        background-color: #fff;
    }
    .wrap{
        background-color: #ccc;
        margin-top: 70px;
    }
    .videoList{
        background-color: white;
        margin-top:10px;
        padding: 10px;
    }
    .videoList .title{
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        color:black;
    }
    .videoList video{
        vertical-align: middle;
    }
    .videoList .description{
        font-size: 12px;
        color:black;
        margin:5px 0;
    }
    #slider{
        position: fixed;
        top:50px;
        z-index:999;
        background-color: #fff;
    }
    .mui-icon{
        font-size: 12px;
        color:black;
        margin-right: 75px;
        margin-top: 10px;
    }
    .mui-icon-chat{
        margin-right: 0!important;
    }
</style>