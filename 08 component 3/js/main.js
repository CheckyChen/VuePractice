
// ?--??????
Vue.component("user", {
    template: "<a :href=\"'/user/'+username\">@{{username}}</a>",
    props: ["username"],
    methods: {
    }
});


Vue.component("tmp1", {
    props: {
        "parentdata": String,
        "age": Number,
        "gender": Boolean,
        "hobby":Array
    },
    template: `<div>
        <h2>this is a child component -- {{ parentdata }}</h2>
        <p>{{ age }}</p>
        <p>{{ gender }}</p>
        <ul>
            <li v-for="item,i in hobby" :key="i">{{ item }}</li>
        </ul>
    </div>`,
})

var app = new Vue({
    el: "#app1",
    data:{
        age:18,
        gender:false,
        hobby:["basketball","guitar","moives"]
    }
});


