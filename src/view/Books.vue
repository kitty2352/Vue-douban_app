<template>
    <div class="books">
        <headerBar></headerBar>
        <p><span>最受关注图书｜虚构类</span><span class="more">更多</span></p>
        <p><span>最受关注图书｜非虚构类</span><span class="more">更多</span></p>
        <p><span>豆瓣纸书</span><span class="more">更多</span></p>
        <div class="promItem">
            <img class="corver" src="../images/book_zw.jpg" alt="">
            <div class="content">
                <span class="price">¥ 68</span>
                <p class="name">造物</p>
                <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
            </div>
        </div>
        <p><span>发现好书</span><span class="more">更多</span></p>
        <types></types>
    </div>
</template>

<script>

    import Types from '../components/Types.vue'
    import headerBar from '../components/Header.vue'
    export default {
        name: 'book-view',
        components: { Types,headerBar},

    }
</script>

<style scoped>
    .books{
        width: 100%;
        padding: 20px;
    }
    .books p{
        font-size: 18px;
        height: 40px;
        line-height: 40px;
        font-weight: 500;
    }
    .promItem {
        overflow: hidden;
        margin: 15px 0;
    }

    .corver {
        float: left;
        width: 120px;
        margin-right: 15px;
    }

    .content {
        margin-right: 10px;
    }

    .name {
        font-size: 20px;
        color: #494949;
        margin: 10px;
        max-width: 100%;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }

    .price {
        float: right;
        color: #E76648;
        font-size: 16px;
        line-height: 20px;
    }

    .promItem .info {
        font-size: 13px;
        font-weight: 300;
        line-height: 1.5;
        color: #9B9B9B;
    }
</style>
