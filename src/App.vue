<template>
  <main>
    <div class="title">
      &#9998;
      <input type="text" v-model="title" @input="titleName($event)" />
    </div>
    <div>
      <AddTodo @addTodo="addTodo" />
    </div>
    <FilterTodo @filterTodos="filterTodos" :selectFilter="selectFilter" />
    <SearchTodo @searchTodo="searchTodo" />
    <TodoList
      :todos="todos"
      @completeTodo="completeTodo"
      :deleteTodo="deleteTodo"
      :modalIsOpen="modalIsOpen"
    />
    <EditModal 
        v-if="modal" 
        :modalIsOpen="modalIsOpen"
    />
  </main>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/Todo.vue";
import FilterTodo from "./components/FilterTodo.vue";
import SearchTodo from "./components/SearchTodo.vue";
import EditModal from "./components/EditModal.vue";

export default {
  components: {
    TodoList,
    SearchTodo,
    AddTodo,
    FilterTodo,
    EditModal,
  },
  data() {
    return {
      modal: true,
      title: localStorage.getItem("title") || "Todo",
      todos: JSON.parse(localStorage.getItem("todos")) || [
        {
          id: 1,
          title: "Buy products",
          completed: false,
        },
        {
          id: 2,
          title: "Feed the pet",
          completed: true,
        },
        {
          id: 3,
          title: "Repair site",
          completed: false,
        },
      ],
      selectFilter: JSON.parse(localStorage.getItem("selectFilter")) || [
        {
          title: "Все",
          value: "all",
          selected: true,
        },
        {
          title: "Выполнено",
          value: "completed",
          selected: false,
        },
        {
          title: "Невыполнено",
          value: "uncompleted",
          selected: false,
        },
      ],
    };
  },
  methods: {
    titleName(e) {
      this.title = e.target.value;
      localStorage.setItem("title", this.title);
    },
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
      localStorage.setItem("allTodos", JSON.stringify(this.todos));
    },
    filterTodos(isCompleted) {
      console.log(isCompleted);
      localStorage.setItem("seleсted", isCompleted);
      const prevData = JSON.parse(localStorage.getItem("allTodos"));
      if (isCompleted === "all") {
        this.todos = prevData;
        this.selectFilter[0].selected = true;
        this.selectFilter[1].selected = false;
        this.selectFilter[2].selected = false;
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
      if (isCompleted === "completed") {
        this.todos = prevData;
        this.todos = this.todos.filter((todo) => todo.completed === true);
        this.selectFilter[0].selected = false;
        this.selectFilter[1].selected = true;
        this.selectFilter[2].selected = false;
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
      if (isCompleted === "uncompleted") {
        this.todos = prevData;
        this.todos = this.todos.filter((todo) => todo.completed === false);
        this.selectFilter[0].selected = false;
        this.selectFilter[1].selected = false;
        this.selectFilter[2].selected = true;
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
      localStorage.setItem("selectFilter", JSON.stringify(this.selectFilter));
    },
    deleteTodo(id, ref) {
      ref.classList.add("todo-anim");
      setTimeout(() => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(this.todos));
        localStorage.setItem("allTodos", JSON.stringify(this.todos));
      }, 300);
    },
    searchTodo(value) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
      this.todos = this.todos.filter((todo) => {
        if (todo.title.includes(value.trim())) {
          return true;
        }
        return false;
      });
    },
    changeTodo(id, e) {
      console.log(e.target.value);
      this.todos = this.todos.map(todo => {
        if(+todo.id === +id) {
          todo.title = e.target.value
        }
        return todo
      });
      localStorage.setItem('todos', this.todos)
      localStorage.setItem('allTodos', this.todos)
    },
    modalIsOpen(value) {
      console.log(value)
      this.modal = value
    }
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
  position: relative;
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  background-color: #3450a1;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.title {
  margin: 30px 0;
  width: 100%;
}

.title input {
  min-width: inherit;
  color: white;
  font-size: 20px;
  text-align: center;
  background: transparent;
  border: none;
  overflow-x: hidden;
}

.title input:hover {
  border: 1px solid white;
}

.todo-anim {
  transition: 0.5s;
  transform: translateX(-100px) !important;
  opacity: 0;
}
</style>

