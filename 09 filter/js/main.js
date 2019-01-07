
// 过滤器
Vue.filter("curency",function(val,unit){
    val = val || 0
    unit = unit || "￥"
    return unit + val
});



new Vue({
    el: "#app1",
    data() {
        return {
            price:100,
        }
    },
});
