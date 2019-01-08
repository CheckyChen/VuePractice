
// 定义一个混入的变量
var Base = {
    data(){
        return {
            visible :false,
        }
    },
    methods: {
        show(){
            this.visible = true;
        },
        hide(){
            this.visible = false;
        }
    },
};

Vue.component("tooptips", {
   template:`
    <div>
        <span @mouseenter='show' @mouseleave='hide'>NBA</span>
        <span v-if="visible">National Basketball Asociation</span>
    </div>
   ` ,
   // 引用混入    
   mixins:[Base,],
   data(){
       return {
           // 如果data里面本身存在该变量，那么会覆盖掉混入的变量   
           visible:true,
       }
   }
});

Vue.component("well",{
    template:`
    <div>
        <button @click="toggel_show">显示文章</button>
        <div v-if="visible">
            <h4>文章标题</h4>
            <p>文章内容</p>
        </div>
    </div>
    `,
    mixins:[Base,],
    methods:{
        toggel_show(){
            this.visible = !this.visible;
        }
    }
})

var app = new Vue({
    el:"#app1",
});