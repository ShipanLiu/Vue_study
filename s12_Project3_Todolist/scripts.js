
const todosApp = {
    data() {
        return {
            todos: [],
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodo.text) {
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
                // long time storage under chrome brower storage, you can "window.localStorage" ==> you can omit the window.
                // JSON.stringify() will transform a object or array into json
                // The JSON.stringify() method in JavaScript converts a JavaScript value to a JSON string. This value can be an object, an array, a number, a string, a boolean, or even null. However, functions and undefined values are excluded and won’t be included in the resulting JSON string.
                localStorage.setItem("todos", JSON.stringify(this.todos));
            } else {
                alert("To-do text is required");
            }
        },
        // this is an altnertiv for updated() hooks:
        updateTodos() {
          console.log("this.todos is updated");
          localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    },

    // here is for using the hooks!!!

    beforeCreate() {
      console.log("beforeCreate");
    },

    // the data is loaded, but the html is not loaded yet.
    created() {
      console.log("created");
        // load the data from the brower storage.
        this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
    },

    // 就是你输入内容的时候, 输入一个字母， beforeUpdate 和 updated 会成对出现。
    beforeUpdate() {
      console.log("beforeUpdate");
    },

    // data changes actives the update hooks
    updated() {
      // console.log("updated")
      // if you a item is done, or what ever each operation, the localstorage is updated, this works but have pons(不管什么数据的变化，都会 update localStorage, this is so heavy);
      // localStorage.setItem("todos", JSON.stringify(this.todos));
    }

}

Vue.createApp(todosApp).mount('#app');
