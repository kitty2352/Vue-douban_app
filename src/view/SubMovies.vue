<template>
    <div class="subMovie">
        <headerBar></headerBar>
        <div class="promotion">
            <span>聊聊你的观影感受</span>
            <button class="down">极速下载</button>
            <button class="open">打开</button>
        </div>
        <div class="movieInfo">
            <h3>{{movieInfo.title}}</h3>
            <div class="left">
                <span>{{movieInfo.rating?movieInfo.rating.average:'暂无评分'}}</span><span>{{movieInfo.ratings_count}}人评分</span>
                <p>{{movieInfo.year}}/{{movieInfo.genres[0]}} / {{movieInfo.genres[1]}} / {{movieInfo.casts[0].name}} / {{movieInfo.casts[1].name}} / {{movieInfo.casts[2]?movieInfo.casts[2].name:''}} / {{movieInfo.casts[3]?movieInfo.casts[3].name:''}} / {{movieInfo.countries[0]}}</p>
                <a href="#">用app查看影人资料</a>
            </div>
            <div class="right">
                <img :src="movieInfo.images.small" alt="">
            </div>
            <div class="see">
                <a href="#">想看</a>
                <a href="#">看过</a>
            </div>
        </div>
        <div class="movieIntro">
            <h5>{{movieInfo.title}}的简介</h5>
            <p>{{movieInfo.summary}}……</p>
        </div>
        <div class="movieType">
            <h5>查看更多相关分类</h5>
            <a href="#">{{movieInfo.genres[0]}}</a>
            <a href="#">{{movieInfo.genres[1]?movieInfo.genres[1]:'only one'}}</a>

        </div>
        <div class="movieImg">
            <h5>{{movieInfo.title}}的图片</h5>
            <div class="movieWrap" ref="Wrap">
                <ul  ref="Tab">
                    <li class="item">
                        <img :src="movieInfo.casts[0].avatars.small" alt="">
                        <img :src="movieInfo.casts[1].avatars.small" alt="">
                        <img :src="movieInfo.casts[2].avatars.small" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="movieComment">
            <h5>{{movieInfo.title}}的短评</h5>
            <div class="commentBox">
                <div class="header"><img src="../images/douban-app-logo.png" alt=""></div>
                <div class="content">
                    <h4>豆瓣</h4>
                    <p class="time">2019-04-21 12:20:50</p>
                    <p class="comment">
                        可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。
                    </p>
                    <a><span class="mui-icon-extra mui-icon-extra-like"></span></a>&nbsp;4
                    <a><span class="mui-icon mui-icon-more"></span></a>
                </div>
            </div>
            <div class="commentBox">
                <div class="header"><img src="../images/douban-app-logo.png" alt=""></div>
                <div class="content">
                    <h4>豆瓣</h4>
                    <p class="time">2019-04-21 12:20:50</p>
                    <p class="comment">
                        可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。
                    </p>
                    <a><span class="mui-icon-extra mui-icon-extra-like"></span></a>&nbsp;4
                    <a><span class="mui-icon mui-icon-more"></span></a>
                </div>
            </div>
            <div class="commentBox">
                <div class="header"><img src="../images/douban-app-logo.png" alt=""></div>
                <div class="content">
                    <h4>豆瓣</h4>
                    <p class="time">2019-04-21 12:20:50</p>
                    <p class="comment">
                        可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。
                    </p>
                    <a><span class="mui-icon-extra mui-icon-extra-like"></span></a>&nbsp;4
                    <a><span class="mui-icon mui-icon-more"></span></a>
                </div>
            </div>
            <div class="more">
                <a href="#">显示更多评论</a>
            </div>
        </div>
        <down></down>
    </div>
</template>

<script>
    import down from '../components/Down.vue'
    import headerBar from '../components/Header.vue'
    export default {
        name: "SubMovies",
        components:{
            down,
            headerBar
        },
        data(){
            return{
                id:this.$route.params.id,//将url地址中传过来的Id挂载到data上
                movieInfo:[],//新闻详情
            }
        },
        created(){
            this.getMovieInfo();
        },
        methods:{
            getMovieInfo(){
                this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.id).then(res=>{
                    if(res.status==200){
                        this.movieInfo=res.body
                    }else{
                        alert("请求错误")
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .promotion{
        width: 100%;
        height: 80px;
        background:url("../images/promotion_bg.jpg") no-repeat ;
        background-size: cover;
        padding-top: 30px;
    }
    .promotion span{
        color:#2ca532;
        margin:0 25px 0 45px;
        font-size: 14px;
    }
    .promotion .down{
        display: inline-block;
        width: 88px;
        height: 30px;
        color:white;
        background-color: #42bd56;
        outline: none;
        border:none;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 700;
    }
    .promotion .open{
        display: inline-block;
        width: 65px;
        height: 30px;
        color: #42bd56;
        outline: none;
        background-color: rgba(255,255,255,0.1);
        border:none;
        border:1px solid #42bd56;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 700;
    }
    .movieInfo{
        width: 100%;
        height: 300px;
        padding:30px 20px;
        font-size: 13px;
    }
    .movieInfo h3{
        font-size: 20px;
    }
    .movieInfo .left{
        float: left;
        width: 60%;
        height: 170px;
        padding-top: 5px;
    }
    .movieInfo .right{
        float:right;
        width: 35%;
        height: 170px;
    }
    .right img{
        width: 100%;
    }
    .left span{
        margin-right: 20px;
        color:#aaa;
        margin-top: 10px;
    }
    .left p{
        margin-top: 20px;
        color: #494949;
    }
    .left a{
        display: block;
        color:#42bd56;
        margin-top: 20px;
    }
    .see a{
        margin-top: 20px;
        margin-right: 15px;
        display:inline-block;
        width: 150px;
        height: 40px;
        text-align: center;
        color:#FFB712;
        border:1px solid #ffb712;
        line-height: 40px;
    }
    .movieIntro{
        height: 200px;
        width: 100%;
        padding: 20px;
    }
    h5{
        color:#aaa;
        font-weight: 400;
    }
    .movieIntro p{
        margin-top: 20px;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:6;
        text-overflow:ellipsis;
        overflow: hidden;
        height: 129px;
    }
    .movieType{
        width: 100%;
        height: 120px;
        padding: 20px;
    }
    .movieType a{
        display: inline-block;
        margin-top: 20px;
        width: 60px;
        height: 30px;
        background-color: #f5f5f5;
        text-align: center;
        border-radius: 10px;
        line-height: 30px;
    }
    .movieImg{
        width: 100%;
        height: 250px;
        padding: 20px;
    }
    .movieImg img{
        width: 100px;
    }
    .movieImg .movieWrap{
        margin-top: 20px;
    }
    .movieComment{
        width: 100%;
        padding: 20px;
    }
    .movieComment .commentBox{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid #ddd;
        padding-bottom: 20px;
    }
    .movieComment .more{
        height: 50px;
        text-align: center;
        width:100%;
    }
    .more a{
        display: block;
        color:#42bd56;
        line-height: 50px;
    }
    .commentBox .header{
        flex:1;
    }
    .commentBox .header img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .commentBox .content{
        flex:4;
    }
    .content .time{
        margin-top: 5px;
        color:#aaa;
    }
    .content .comment{
        margin-top:10px;
    }
    .mui-icon-extra-like{
        font-size: 16px;
        color:#ddd;
    }
    .mui-icon-more{
        float: right;
        font-size: 30px;
        color:#ccc;
    }

</style>