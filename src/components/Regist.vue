<template>
    <div class="regist">
        <h3>欢迎加入豆瓣</h3>
        <div class="info">
            <input type="email" name="" id="" placeholder="邮箱">
            <input type="text" name="" id="" placeholder="用户名">
            <input type="password" name="" id="" placeholder="密码">
            <router-link to="/pages/home"><button>立即注册</button></router-link>
        </div>
        <div class="argument">
            点击「注册」代表你已阅读并同意用户使用协议
        </div>
        <a href="#">下载豆瓣app</a>
    </div>
</template>

<script>
    export default {
        name: "Regist"
    }
</script>

<style scoped>
    .regist{
        padding:0 15px;
    }
    .regist h3{
        height: 50px;
        text-align: center;
        color:#42bd56;
        font-size: 40px;
        line-height:50px;
        font-weight: 500;
    }
    .info{
        margin-top: 50px;
    }
    .regist input{
        margin:0 auto;
        width: 100%;
        height: 55px;
    }
    .regist button{
        margin-top: -20px;
        width: 100%;
        height: 50px;
        background-color: #42bd56;
        color:white;
        border-radius: 10px;
    }
    .argument{
        margin-top:10px;
        text-align: center;
        font-size: 14px;
        color:#999;
    }
    a{
        color:#42bd56;
        display: block;
        text-align: center;
        margin-top: 50px;
    }
</style>