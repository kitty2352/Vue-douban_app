<template>
    <div class="log">
        <div class="header">
            <h3>
                <router-link to="/pages/home" class="cancel">取消</router-link>
                登录豆瓣
            </h3>
        </div>
        <div class="login">
            <input type="email" placeholder="邮箱" />
            <input type="password" placeholder="密码" />
            <button>登录</button>
        </div>
        <div class="footer">
            <div class="more-login">使用其他方式登录 &amp; 找回密码</div>
            <div class="btns">
                <router-link to="/regist">注册豆瓣帐号</router-link>
                <a href="#">下载豆瓣App</a>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'login-view',
        data() {
            return {}
        },
    }
</script>

<style lang="scss" scoped>
    .header{

        margin-top:-60px;
        padding:0 20px;
        border-bottom: 1px solid #eee;
        height: 60px;

        h3{
            text-align: center;
            line-height: 60px;
            font-size: 18px;

            .cancel{
                color:#42bd56;
                position: absolute;
                top:0;
                left: 20px;
                font-weight: 400;
            }
        }

    }
    .login{
        margin-top: 40px;
        padding: 0 20px;
        input{
            width: 100%;
            height: 50px;
            margin-top:-21px;
        }
        button{
            width: 100%;
            height: 50px;
            background-color: #42bd56;
            color:white;
        }
    }
    .footer {
        margin-top: 20px;
        .more-login {
            font-size: 15px;
            color: #aaa;
            text-align: center;
        }

        .btns {
            margin-top: 40px;
            text-align: center;
            font-size: 15px;

            a {
                color: #42bd56;
                margin-right: 15px;
            }
        }
    }
</style>
