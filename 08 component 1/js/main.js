
// 全局组件
Vue.component("alert", {
    template: "<button @click='clickMe()'>点我</button>",
    methods: {
        clickMe() {
            alert("点我了");
        }
    },
});

new Vue({
    el: "#app1"
});

new Vue({
    el: "#app2"
});


// 局部组件
new Vue({
    el: "#app3",

    // 局部组件，在别的域里面不会起作用
    components: {
        'my-alert': {
            template: "<button @click='notClickMe()'>别点我</button>",
            methods: {
                notClickMe() {
                    alert("点我干嘛");
                }
            }
        }
    }
});

