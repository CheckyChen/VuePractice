
Vue.component("pannel", {
   template: "#pannel"
});


Vue.component("my-component", {
   template: `
   <div>
      <h3>我的组件</h3>
      <br/>
      <slot name="header">默认头部</slot>
      <br/>
      <slot name="content">默认内容</slot>
      <br/>
      <slot name="footer">默认脚步</slot>
   </div>
   `,
})

Vue.component("todo-list", {
   data() {
      return {
         // todos: [
         //    { id: 1, text: "things1", isComplate: false },
         //    { id: 2, text: "things2", isComplate: true },
         //    { id: 3, text: "things3", isComplate: false },
         //    { id: 4, text: "things4", isComplate: false },
         //    { id: 5, text: "things5", isComplate: true },
         // ]
      }
   },
   props: ["todos","items"],
   template: `<ul>
                  <li
                  v-for="todo in todos"
                  v-bind:key="todo.id"
                  >
                  <!-- 我们为每个 todo 准备了一个插槽，-->
                  <!-- 将 'todo' 对象作为一个插槽的 prop 传入。-->
                  <slot v-bind:todo="todo">
                     <!-- 回退的内容 -->
                     {{ todo.text }}
                  </slot>
                  </li>
               </ul>`
})
var app = new Vue({
   el: "#app1",
   data: {
      todos: [
         { id: 1, text: "things1 from parent", isComplete: false },
         { id: 2, text: "things2 from parent", isComplete: true },
         { id: 3, text: "things3 from parent", isComplete: false },
         { id: 4, text: "things4 from parent", isComplete: false },
         { id: 5, text: "things5 from parent", isComplete: true },
      ],
      items: [
         { id: 1, text: "item1 from parent", isComplete: false },
         { id: 2, text: "item2 from parent", isComplete: true },
         { id: 3, text: "item3 from parent", isComplete: false },
         { id: 4, text: "item4 from parent", isComplete: false },
         { id: 5, text: "item5 from parent", isComplete: true },
      ]
   }
});