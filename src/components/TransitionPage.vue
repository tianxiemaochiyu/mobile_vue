<template>
    <transition :name="name" @after-leave="afterLeave" >
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        computed: {
            name(){
                return this.$pageStack.findFlag(this.$route.path)
            }
        },
        methods:{
            afterLeave: function () {
                this.$pageStack.pop(this.$route.path)
            },
        }
    }
</script>

<style lang='scss' scoped>
    .page{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white;
    }
    // left
    .left-enter-active {
        position: absolute;
        left: 100%;
        transition: left .4s ease;
        box-shadow: 0px 10px 50px #00000040;
        z-index: 1000;
    }
    .left-enter-to {
        left: 0%;
    }
    .left-leave-active {
        position: absolute;
        left: 0%;
        z-index: 999;
        transition: all .4s ease;
    }
    .left-leave-to {
        left: -40%;
    }
    // right
    .right-enter-active {
        position: absolute;
        left: -40%;
        transition: all .4s ease;
        z-index: 999;
    }
    .right-enter-to {
        left: 0%;
    }
    .right-leave-active {
        position: absolute;
        left: 0%;
        transition: left .4s ease;
        box-shadow: 0px 10px 50px #00000040;
        z-index: 1000;
    }
    .right-leave-to {
        left: 105%;
    }
</style>