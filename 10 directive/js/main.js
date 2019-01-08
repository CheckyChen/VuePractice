
// 自定义指令
Vue.directive("pin",function(el,binding){

    //获取指令等于号后面的值
    var val = binding.value;

    //获取指令名点.后面的值(true)
    var position = binding.modifiers;

    //获取指令名冒号：的值
    var arg = binding.arg;

    console.log("arg",arg);
    console.log(position)
    if(val){
        
        el.style.position = "fixed";

        // el.style.bottom = 150;
        // el.style.right = 5;

        for(var key in position)
        {          
            if(position[key])
            {
                el.style[key] = 5;
            }
        }

        if(arg==="true")
            el.style.background = "yellow";

    }else{
        el.style.position = "static";
    }

});



new Vue({
    el: "#app1",
    data() {
        return {
            card1:{
                pined:false
            },
            card2:{
                pined:false
            }
        }
    },
    methods: {
        toggle_pin1(){
            this.card1.pined = !this.card1.pined;
            
        },
        toggle_pin2(){
     
            this.card2.pined = !this.card2.pined
        }
    },
});
