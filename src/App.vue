<template>
  <main>
    <h1>{{ title }}</h1>
    <AddTodo @addTodo="addTodo" />
    <FilterTodo @filterTodos="filterTodos" />
    <!-- <SearchTodo/> -->
    <TodoList
      :todos="todos"
      @completeTodo="completeTodo"
      :deleteTodo="deleteTodo"
    />
  </main>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/Todo.vue";
import FilterTodo from "./components/FilterTodo.vue";
// import SearchTodo from './components/SearchTodo.vue'

export default {
  components: {
    TodoList,
    // SearchTodo,
    AddTodo,
    FilterTodo,
  },
  data() {
    return {
      title: "Todo",
      todos: JSON.parse(localStorage.getItem("todos")),
    };
  },
  methods: {
    addTodo(todo) {
      if (todo.trim()) {
        this.todos.push({
          id: Date.now(),
          title: todo,
          completed: false,
        });
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },
    completeTodo(id) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    filterTodos(isCompleted) {
      const prevData = JSON.parse(localStorage.getItem("todos"));
      if (isCompleted === "all") {
        this.todos = prevData;
      } else {
        this.todos = prevData;
        this.todos = this.todos.filter(
          (todo) => todo.completed === isCompleted
        );
      }
    },
    deleteTodo(id, ref) {
      ref.classList.add('todo-anim');
      setTimeout(() => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }, 300);
    },
  },
  created() {
    localStorage.setItem(
      "todos",
      JSON.stringify([
        {
          id: 1,
          title: "To become a middle",
          completed: false,
        },
        {
          id: 2,
          title: "To become a senior",
          completed: true,
        },
        {
          id: 3,
          title: "Celebrate and sack some dik",
          completed: false,
        },
      ])
    );
  },
};
</script>

<style>
main {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
body {
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  background-color: #3450a1;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.todo-anim {
  transition: .5s;
  transform: translateX(-100px) !important;
  opacity: 0;
}
</style>

