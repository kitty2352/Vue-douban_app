<template>
    <div class="wrap">
        <!--顶部导航-->
        <!--<Header></Header>-->
        <!--中间路由部分-->
        <div class="container">
            <!--<transition name="slide" class="tr">-->
                <router-view></router-view>
            <!--</transition>-->
        </div>

    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        name: "App",
        components:{
            Header,
        }
    }
</script>

<style scoped>
    .wrap{
        overflow-x: hidden;
    }
    .container{
        margin-top: 60px;
    }
    .slide-enter{
        opacity:0;
        transform: translateX(100%);
    }
    .slide-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: fixed;
    }
    .slide-enter-active,.slide-leave-active{
        transition: all 0.5s linear;
    }

</style>