var app = new Vue({
    el:"#app",
    data:{

    },
    methods: {
        myAlert(){
            alert("点我干嘛呀。。");
        },
        onMouseEnter(){
           console.log("mouse entered");
        },
        onMouseLeave(){
            console.log("mouse leaved");
        },
        onSubmit(e){
            e.preventDefault();
            console.log("submited");
        },
        onSubmit(){           
            console.log("submited");
        },
        onKeyup(){           
            console.log("keyup");
        },
        onEnter(){
            console.log("key entered")
        }
    },
})