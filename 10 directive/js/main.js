
// 自定义指令
Vue.directive("pin",function(el,binding){

    var val = binding.value;

    if(val){
        el.style.position = "fixed";
        el.style.top = 5;
        el.style.left = 5;
    }else{
        el.style.position = "static";
    }

});



new Vue({
    el: "#app1",
    data() {
        return {
            card1:{
                pined:true
            },
            card2:{
                pined:true
            }
        }
    },
    methods: {
        toggle_pin(){
            this.card1.pined = !this.card1.pined;
            this.card2.pined = !this.card2.pined
        }
    },
});
