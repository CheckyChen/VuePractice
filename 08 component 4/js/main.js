
// 父组件
Vue.component("balance", {
    template: `
    <div>
        <show @showBalance="show_balance" ></show>
        <p v-if="isShow"> 您的余额：￥{{balance}} </p>
    </div>
    `,
    data: function () {
        return {
            isShow: false,
            balance: 1000000
        }
    },
    methods: {
        show_balance(newBlance) {
            //console.log(22);
            this.isShow = true;
            this.balance = newBlance
        }
    }
});

// 子组件
Vue.component("show", {
    template: "<button @click='show_blance()'>显示余额</button>",
    methods: {
        show_blance() {
            // 触发绑定父组件的方法，20000000是传过去的数据
            //父组件绑定的方法，可以通过形参获取该数据            
            this.$emit('showBalance', 2000000);
        }
    }
});


Vue.component("parent-component",{
    data(){
        return {
            msg:"",
            flag:false
        }
    },
    template:`
    <div>
        <child-component @recivemsg="showMsg"></child-component>
        <span v-show="flag">来自子组件的消息：{{ msg }}</span>
    </div>
    `,
    methods:{
        showMsg(childMsg){
            console.log("parent showMsg function ",childMsg);
            this.msg = childMsg;
            this.flag=true;
        }
    }
})

Vue.component("child-component", {
    data() {
        return {
            msg: ""
        }
    },
    template: `
    <div>    
        <input type="text" value="发消息给父组件" v-model="msg"/>
        <input type="button" value="发送" @click="send"/>
    </div>
    `,
    methods: {
        send() {
            console.log("child send the message",this.msg);
            this.$emit("recivemsg", this.msg);            
        }
    }
});


Vue.component('base-checkbox', {
    // 当没有加 model 属性时，那么点击多选框时data中的 checked 的值是不会改变的
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: Boolean
    },
    template: `
      <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      >
    `
  })


var app = new Vue({
    el: "#app1",
    data:{
        lovingVue:""
    },
    computed: {
         
    }
});
