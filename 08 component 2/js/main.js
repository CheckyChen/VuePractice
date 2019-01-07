
// 全局组件
Vue.component("like-component", {
    template: "<button :class={likedCls:liked} @click='toggle_like()'> 赞 {{likeCount}}</button>",
    data: function () {
        return {
            likeCount: 10,
            liked: false
        }
    },
    methods: {

        toggle_like() {
            if (!this.liked)
                this.likeCount++;
            else
                this.likeCount--;

            this.liked = !this.liked;
        }
    },
});

new Vue({
    el: "#app1"
});
