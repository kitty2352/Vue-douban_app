<template>
    <div class="searchDetail">
        <headerBar></headerBar>
        <div class="header-bar">
            <input type="search" v-model="content" placeholder="搜索 书/影/音/标签"/>
            <i @click="getSearch()">搜索</i>
        </div>
        <div class="movie">
            <h4>影视</h4>
            <div class="searchContent clear" v-for="value in searchResult" >
                <router-link :to="'/pages/movies/sub'+value.id">
                    <div class="images" v-if="value.subtype=='movie'"><img v-lazy="value.images.small" alt=""></div>
                    <div class="right" v-if="value.subtype=='movie'">
                        <h5>{{value.title}}</h5>
                        <span>{{value.rating.average}}分</span>&nbsp;<span>收藏人数：{{value.collect_count}}人</span>
                    </div>
                </router-link>
            </div>
            <a class="searchMore">查看更多影视结果</a>
        </div>
        <div class="movie">
            <h4>TV</h4>
            <div class="searchContent clear" v-for="value in searchResult" v-model="value.id">
                <router-link :to="'/pages/movies/sub'+value.id">
                    <div class="images" v-if="value.subtype=='tv'"><img v-lazy="value.images.small" alt=""></div>
                    <div class="right" v-if="value.subtype=='tv'">
                        <h5>{{value.title}}</h5>
                        <span>{{value.rating.average}}分</span>&nbsp;<span>收藏人数：{{value.collect_count}}人</span>
                    </div>
                </router-link>
            </div>
            <a class="searchMore">查看更多tv结果</a>
        </div>

    </div>
</template>

<script>
    import headerBar from '../components/Header.vue'
    export default {
        name: "SearchDetail",
        data(){
          return{
              content:this.$route.params.content,//获得路由返回的搜索关键词
              searchResult:[],// 搜索结果
              id:''
          }
        },
        components:{
            headerBar
        },
        created() {
            this.getSearch();
        },
        methods: {
            //获取搜索结果
            getSearch() {
                this.$http.jsonp('https://api.douban.com/v2/movie/search?subtype=movie&q='+this.content).then(res => {
                    if (res.status == 200) {
                        this.searchResult = res.body.subjects
                    }
                })
            },
        }
    }
</script>

<style scoped>
    .header-bar{
        width: 100%;
        height: 60px;
        padding:10px 20px;
        border-bottom: 1px solid #eee;
    }
    .header-bar i{
        font-style: normal;
        font-size: 16px;
    }
    .header-bar input{
        width: 280px;
        height: 40px;
        background-color: #f5f5f5;
        margin-right: 10px;
    }
    .movie{
        width: 100%;
        padding: 0 20px;
        border-bottom: 1px solid #eee;
        margin:20px 0;
    }
    .movie h4{
        font-weight: 400;
    }
    .searchContent{
        width:100%;
    }
    .searchContent .images{
        float:left;
        width:30%
    }
    .images img{
        display: inline-block;
        width:100%;
        background-color: #ddd;

    }
    .searchContent .right{
       float: right;
        width:65%;
    }
    .right h5{
        font-size: 18px;
        color:black;
    }
    .right span{
        margin-top: 10px;
        display: inline-block;
    }
    .searchMore{
        display: block;
        color:#42bd56;
        text-align: center;
        font-size: 16px;
        margin-top: 20px;
    }
    input{
        font-size: 14px;
    }
</style>