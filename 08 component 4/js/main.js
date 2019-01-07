
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
            isShow : false,
            balance : 1000000
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



new Vue({
    el: "#app1"
});
