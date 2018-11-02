<template>
    <div id="app">
        <TransitionPage>
            <router-view/>
        </TransitionPage>
    </div>
</template>

<script>
    import TransitionPage from '@/components/TransitionPage'
    export default {
        components: {
            "TransitionPage": TransitionPage
        }
    }
</script>

<style lang="scss">
    @import "assets/styles/index.scss";
    #app{

    }
    .navbar{
        flex: 0 0 auto;
    }
    .main{
        width: 100%;
        flex: 1 0 auto;
    }
    .footerbar{
        flex: 0 0 auto;
    }
</style>
