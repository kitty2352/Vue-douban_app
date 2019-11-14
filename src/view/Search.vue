<template>
    <div class="search">
        <div class="header-bar">
            <i @click="back()">关闭</i>
            <input type="search" v-model="content"/>
            <router-link :to="'/pages/search/sub'+content">
                <span class="mui-icon mui-icon-search"></span>
            </router-link>
        </div>
        <ul class="classTab">
            <li>
                <div>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(35, 132, 232);">电影</strong>
                        <span>影院热映</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(230, 70, 126);">同城</strong>
                        <span>周末活动</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(159, 120, 96);">阅读</strong>
                        <span>电子书</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(225, 100, 77);">东西</strong>
                        <span>心爱之物</span>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(122, 106, 219);">电视</strong>
                        <span>正在热播</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(42, 184, 204);">小组</strong>
                        <span>志趣相投</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(87, 116, 197);">游戏</strong>
                        <span>虚拟世界</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(64, 207, 169);">FM</strong>
                        <span>红心歌单</span>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(159, 120, 96);">图书</strong>
                        <span>畅销排行</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(244, 143, 46);">音乐</strong>
                        <span>新碟榜</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(89, 108, 221);">应用</strong>
                        <span>玩手机</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(66, 189, 86);">市集</strong>
                        <span>购买原创</span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return{
                content:'',//搜索内容
            }
        },
        methods:{
            //返回上一级
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .classTab{
        display: flex;
        justify-content: space-around;
    }
    .classTab li{
        flex: 1;
    }
    li a {
        display: block;
        margin-top: 30px;
        text-align: center;
    }

    li strong {
        display: block;
        font-weight: 400;
        font-size: 25px;
        line-height: 25px;
    }

    li span {
        display: block;
        color: #999;
        height: 20px;
        font-size: 12px;
        letter-spacing: 1px;
    }
    .header-bar{
        width: 100%;
        height: 80px;
        padding:0 20px;
        line-height: 80px;
        margin-top: -60px;
    }
    .header-bar i{
        color:#42bd56;
        font-style: normal;
        font-size: 16px;
    }
    .header-bar input{
        width: 75%;
        height: 40px;
        background-color: #eee;
    }
    .mui-icon-search{
        position: absolute;
        right:35px;
        top: 20px;
        font-size: 30px;
    }
</style>