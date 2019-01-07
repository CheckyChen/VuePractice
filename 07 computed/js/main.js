var app = new Vue({
    el: "#app",
    data: {
        math: 95,
        physics: 80,
        english: 60,
    },
    computed: {

        sum(){
            return this.math + this.english + this.physics
        },
        average(){
           return Math.round(this.sum/3)  
        }
    },
})