<template>
    <div class="commentBox">
        <headerBar></headerBar>
        <div class="publishComment">
            <textarea name="" id="" v-model="msg"></textarea>
            <input type="button" value="发表评论" @click="postComment"/>
        </div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for="item in commentList.data.normal.list" :key="item.id">
                <p>用户id：{{item.id}}</p>
                <p class='mui-ellipsis'>{{item.content}}</p>
                <p>发表时间：{{item.ctime}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import headerBar from '../components/Header.vue'
    export default {
        data(){
            return{
                commentList:[],
                msg:'', //评论内容

            }
        },
        components:{
            headerBar
        },
        created(){
          this.getComment()
        },
        methods:{
            getComment(){
                this.$http.get('https://www.apiopen.top/satinCommentApi?id=27610708&page=1').then(res => {
                    this.commentList = res.data;
                }, error => {
                    this.msg = error;
                })
            },

            //发表评论
            postComment(){
                if(this.msg.trim().length===0){
                    return Toast("评论不能为空")
                }
                this.$http.post('https://www.apiopen.top/satinCommentApi?id=27610708&page=1',{content:this.msg.trim()}).then(res=>{
                    if(res.body.code===200){

                        Toast("由于无相关数据api，无法实现该功能，敬请期待。。。")
                        // var cmt={ctime:Date.now(), content:this.msg.trim(), id:235235};
                        // this.commentList.unshift(cmt)
                        // this.msg=''
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .mui-table-view-cell p{
        line-height: 40px;
        color:black;
        font-size: 16px;
    }
    .mui-table-view-cell p:last-child{
        font-size: 14px;
    }
    .mui-table-view-cell p:first-child{
        background-color: #42bd56;
        color:white;
    }
    .publishComment{
        margin:10px;
    }
    .publishComment input{
        background-color: #42bd56;
        color:white;
    }
</style>