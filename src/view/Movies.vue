<template>
    <div class="movie">
        <headerBar></headerBar>
        <div class="select-movie">
            <div class="tip">
                <router-link to="/pages/movies/sub">
                    <h3 class="title">影院热映</h3>
                </router-link>
                <span class="more">更多</span>
            </div>
            <div class="movieWrap" ref="hotWrap">
                <ul  ref="hotTab">
                    <li class="item" v-for="(value,key) in hotMovie" :key="value.id">
                        <router-link :to="'/pages/movies/sub'+value.id">
                            <img v-lazy="value.images.small" alt="">
                            <p>{{value.title}}</p>
                            <span class="vote-number">{{value.rating.average?value.rating.average:'暂无评'}}分</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>


        <div class="select-movie">
            <div class="tip">
                <h3 class="title">免费在线观影</h3>
                <span class="more">更多</span>
            </div>
            <div class="movieWrap" ref="freeWrap">
                <ul  ref="freeTab">
                    <li class="item" v-for="(value,key) in freeMovie" :key="value.id">
                        <router-link :to="'/pages/movies/sub'+value.id">
                            <img v-lazy="value.images.small" alt="">
                            <p>{{value.title}}</p>
                            <span class="vote-number">{{value.rating.average?value.rating.average:'暂无评'}}分</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="select-movie">
            <div class="tip">
                <h3 class="title">新片速递</h3>
                <span class="more">更多</span>
            </div>
            <div class="movieWrap" ref="newWrap">
                <ul  ref="newTab">
                    <li class="item" v-for="(value,key) in newMovie" :key="value.id">
                        <router-link :to="'/pages/movies/sub'+value.id">
                            <img v-lazy="value.images.small" alt="">
                            <p>{{value.title}}</p>
                            <span class="vote-number">{{value.rating.average?value.rating.average:'暂无评'}}分</span>
                        </router-link>
                    </li>
                </ul>
            </div>

            <types></types>
            <down></down>
        </div>

    </div>
</template>

<script>
    import Types from '../components/Types.vue'
    import down from  '../components/Down.vue'
    import BScroll from "better-scroll";
    import headerBar from '../components/Header.vue'
    export default {
        name: "Movies",
        components: { Types,down,headerBar},
        data() {
            return {
                hotMovie:[],//热映电影
                freeMovie:[],//免费电影
                newMovie:[]//最新电影
            };
        },
        created() {
            this.$nextTick(() => {
                // this.freeScroll();
                // this.hotScroll();
                this.Scroll(this.$refs.freeTab,this.$refs.freeWrap);
                this.Scroll(this.$refs.hotTab,this.$refs.hotWrap);
                this.Scroll(this.$refs.newTab,this.$refs.newWrap);
            });
            this.getHotMovie();
            this.getFreeMovie();
            this.getNewMovie();

        },
        methods: {
            //处理图片403
            getImages( _url ){
                if( _url !== undefined ){
                    let _u = _url.substring( 7 );
                    return 'https://images.weserv.nl/?url=' + _u;
                }
            },
            //滚动
            Scroll(tab,wrap){
                let width = 8* 130;
                tab.style.width = width + "px";
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(wrap, {
                            scrollX: true,
                            click:true
                        });
                        this.scroll=''
                    } else {
                        this.scroll.refresh();
                    }
                });
            },
            //热映电影
            getHotMovie() {
                this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?city=成都&start=0&count=7').then(res=>{
                    if(res.status==200){
                        this.hotMovie=res.body.subjects
                    }
                })
            },
            //免费电影
            getFreeMovie() {
                this.$http.jsonp('https://api.douban.com/v2/movie/top250?start=0&count=7').then(res=>{
                    if(res.status==200){
                        this.freeMovie=res.body.subjects
                    }
                })
            },
            //最新电影
            getNewMovie(){
                this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon?count=7').then(res=>{
                    if(res.status==200){
                        this.newMovie=res.body.subjects
                    }
                })
            }
        }
    };
</script>

<style scoped>
    .title{
        font-size: 17px;
        float: left;
        font-weight: 400;
    }

    .tip{
        height: 30px;
    }


    .select-movie{
        background-color: rgb(250, 250, 250);
        padding: 10px 20px;
        touch-action: none;
        overflow: hidden;
    }
    .item {
        display: inline-block;
        height: 240px;
        width: 130px;
        margin-right: 10px;
        border: 1px solid #ccc;
        text-align: center;
    }
    .item img{
        width: 120px;
        height: 168px;
    }
    .item p{
        margin-top: 10px;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
    }
    .item span{
        font-size: 14px;
        color:#aaa;
    }
    .star-vote{
        width:75px;
        height:15px;
        position:relative;
        overflow:hidden;
    }
    .star-vote>span{
        position:absolute;
        width:100px;
        height:15px;
        background-size:cover;
        background-repeat:no-repeat;
        left:0px;
        top:0px;
    }
    .star-vote>.add-star{
        background:url("../images/star.gif") 0 -29px;
        background-size: 15%;
    }
    .star-vote>.del-star{
        background:url("../images/star.gif") 0 0;
        background-size: 15%;
        background-color:white;
    }
</style>