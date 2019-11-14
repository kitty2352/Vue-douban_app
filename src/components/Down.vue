<template>
    <div class="footer">
        <div class="logo">
            <h3>豆瓣</h3>
        </div>
        <div class="right">
            <h3>豆瓣</h3>
            <p>我的的精神世界</p>
        </div>
        <a href="#">去App Store免费下载ios客户端</a>
    </div>
</template>

<script>
    export default {
        name: "Down"
    }
</script>

<style scoped>
    .footer{
        width: 100%;
        height: 150px;
        padding: 30px 50px 50px;
        text-align: center;
        margin-top:20px;
    }
    .footer .logo{
        float: left;
        width: 55px;
        height: 55px;
        background: url("../images/douban-app-logo.png") no-repeat left center;
        background-size: 100%;
        margin-left: 40px;
    }
    .logo h3{
        text-indent: -999px;
        overflow: hidden;
    }
    .footer .right{
        float: left;
        margin-left: 10px;
    }
    .footer .right p{
        color:#494949;
    }
    .footer a{
        display: inline-block;
        color:#42bd56;
    }
</style>