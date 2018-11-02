<template>
    <div class="navbar">
        <ul v-if="!this.$slots.default">
            <li @click="$routerJump('/')">首页</li>
            <li class="content">{{name}}</li>
            <li @click="$routerJump('/about')">关于</li>
        </ul>
        <slot v-else></slot>
    </div>
</template>

<script>
    export default {
        props:{
            name: {
                type: String,
                default: ''
            }
        },
        data(){
            return {
                // temp:
            }
        },
        computed: {
            isTemp(){
                return this.$slots.default ? true : false
            }
        },
        created(){
            console.log(this.$slots.default)
        }
    }
</script>

<style lang='scss' scoped>
    .navbar{
        width: 100%;
        height: $--navbar-height;
        display: flex;
        justify-content: center;
        align-items: center;
        ul{
            list-style: none;
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            border-bottom: 1px solid #00000020;
            li{
                height: 100%;
                float: left;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            li:first-child, li:last-child{
                width: 50px;
            }
            li.content{
                flex: 1 0 auto;
            }
        }
    }
</style>