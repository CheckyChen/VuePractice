
// 类似于一个调度器
var Event = new Vue();

Vue.component("i-said", {
    template: `
    <div>
       我说：<input @keyup='on_changed' type='text' v-model='i_said'/> {{i_said}}
    </div>
    `,
    data: function () {
        return {
            i_said : "",
        }
    },
    methods:{
        on_changed(){
            // 输入框改变了，触发一个事件，并传递参数
            Event.$emit("i-said-something",this.i_said);
        },
    }
});

Vue.component("o-said", {
    template: `
    <div>其他人跟着说：{{o_said}}</div>
    `,
    data(){
        return {
            o_said:"",
        }
    },
    mounted() {
        /*
        初始化页面完成后,再对html的dom节点进行一些需要的操作。
        */

        // 需要缓存该组件对象，在侦听的回调函数中要用到
        var obj = this;

        // 页面初始化完成后就侦听Event中的i-said-somithing事件
        Event.$on("i-said-something",function(data){
            // 这里的this指的是Event对象了

            // 获取缓存的对象
            obj.o_said = data;
        });
    },
});



new Vue({
    el: "#app1"
});
