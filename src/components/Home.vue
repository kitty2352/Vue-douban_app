<template>

    <!--头部导航-->
    <div class="home">
        <headerBar></headerBar>
        <div class="nav">
            <ul>
                <li><router-link to="/pages/movie" style="color: #494949">影院热映</router-link></li>
                <li><router-link to="/pages/video" style="color: #494949">欧美新碟榜</router-link></li>
                <li><router-link to="/regist" style="color: #494949">注册账号</router-link></li>
                <li><router-link to="/login" style="color: #494949">登录豆瓣</router-link></li>
            </ul>
        </div>
        <div class="event" v-for="(value,key) in EventList">
            <a :href="value.link">
                <div class="info">
                    <div class="left">
                        <h3>{{value.title}}</h3>
                        <p>{{value.digest}}</p>
                    </div>
                    <div class="right">
                        <img :src="value.picInfo[0]?value.picInfo[0].url:'https://img3.doubanio.com/pview/event_poster/hlarge/public/82db3aa06f1fe7e.jpg'" alt="新闻图片">
                    </div>
                </div>
                <div class="author">
                    <span class="type">{{value.ptime}}</span>
                    <span class="source">本活动来自 {{value.source}}</span>
                </div>
            </a>
        </div>
        <!--无限加载-->
        <infinite-loading @infinite="onInfinite" ref="infiniteLoading" spinner="waveDots">
            <span slot="no-more">
            我们是有底线的
          </span>
        </infinite-loading>

    </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';
    import headerBar from '../components/Header.vue'
    export default {
        name: "Home",
        components: {
            InfiniteLoading,
            headerBar,
        },
        data(){
            return{
                EventList:[],//存放新闻数据
                isshow: false,
                page:0,
            }
        },
        created(){
          // this.getEventList();
        },
        methods:{
            //无限加载新闻列表
            onInfinite($state) {//写一个方法
                var _this = this;
                var pagesize=2;
                _this.page+=1;
                _this.$http.get('https://www.apiopen.top/journalismApi').then(function(res) {
                    if(res.body.data.toutiao.length>0) {
                        if(pagesize*(_this.page)>=res.body.data.toutiao.length) {
                            $state.complete();//停止加载
                        }else{
                            for(var i=pagesize*((_this.page)-1);i<pagesize*(_this.page);i++){
                                _this.EventList.push(res.body.data.toutiao[i]) ;
                                $state.loaded();//加载
                            }
                        }
                    } else {
                        console.log("3+:" + _this.EventList.length)
                        $state.complete();
                    }
                }).catch(function() {
                    console.log("ajax error")
                });
            },
            // 获取新闻列表
            // getEventList:function () {
            //     this.$http.get('https://www.apiopen.top/journalismApi').then(res=>{
            //         if(res.body.code=200){
            //             this.EventList=res.body.data.toutiao;
            //         }
            //         else{
            //             alert("资源加载失败")
            //         }
            //     })
            // },
        }
    }
</script>

<style scoped>
    .home{
        width: 100%;
        padding:20px;
    }
    .nav{
        width: 100%;
        height: 150px;
        text-align: center;
    }
    .nav ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

    }
    .nav ul li{
        line-height: 60px;
        width: 48%;
        height: 60px;
        background-color: #f6f6f6;
        font-size: 15px;
        font-size: 15px;
    }
    .event{
        width: 100%;
        padding: 20px 0;
        border-bottom: 1px solid #ddd;
    }
    .event .info{
        height: 130px;
    }
    .event .left{
        float: left;
        width: 70%;
    }
    .left h3{
        font-weight: 400;
        font-size: 17px;
    }
    .left p{
        margin-top: 20px;
        font-size: 12px;
        color:#999;
    }
    .event .right{
        float: right;
        width: 25%;
    }
    .right img{
        width: 100%;
        height: 100%;
    }
    .event .author{
        height: 30px;
        line-height: 30px;

    }
    .type{
        float: left;
        font-size: 12px;
        color:#999;
    }
    .source{
        float: right;
        font-size: 12px;
        color:#999;
    }
</style>