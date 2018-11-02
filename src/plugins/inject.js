import Stack from './stack'
export default {
    install: function (Vue) {
        Vue.prototype.$pageStack = new Stack([])
        Vue.prototype.$routerJump = function (path) {
            if(path !== this.$route.path){
                this.$pageStack.go(path, this.$route.path)
                this.$router.push(path)
            }
        }
    }
}