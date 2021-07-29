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
      :modalOpen="modalOpen"
    />
    <EditModal
      v-if="modal"
      @modalClose="modalClose"
      @setProductTitle="setProductTitle"
      :todoTitle="editTodoTitle"
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
      modal: false,
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
      allTodos: JSON.parse(localStorage.getItem("allTodos")) || [
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
      editProductId: "",
      editTodoTitle: "",
    };
  },
  methods: {
    titleName(e) {
      this.title = e.target.value;
      localStorage.setItem("title", this.title);
    },
    addTodo(todo) {
      if (todo.trim()) {
        const prevData = this.allTodos;
        this.todos = prevData;
        this.todos.push({
          id: Date.now(),
          title: todo,
          completed: false,
        });
        this.allTodos = this.todos;
        localStorage.setItem("allTodos", JSON.stringify(this.todos));
        localStorage.setItem("todos", JSON.stringify(this.todos));
        const seleсted = localStorage.getItem("seleсted");
        this.filterTodos(seleсted);
      }
    },
    completeTodo(id) {
      const prevData = this.allTodos;
      this.todos = prevData;
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      const seleсted = localStorage.getItem("seleсted");
      this.filterTodos(seleсted);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    filterTodos(isCompleted) {
      localStorage.setItem("seleсted", isCompleted);
      const prevData = this.allTodos;
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
        this.allTodos = this.allTodos.filter((todo) => todo.id !== id);
        this.todos = this.allTodos;
        const seleсted = localStorage.getItem("seleсted");
        this.filterTodos(seleсted);
        localStorage.setItem("todos", JSON.stringify(this.todos));
        localStorage.setItem("allTodos", JSON.stringify(this.todos));
      }, 300);
    },
    searchTodo(value) {
      if (value.trim()) {
        this.todos = JSON.parse(localStorage.getItem("todos"));
        this.todos = this.todos.filter((todo) => {
          if (todo.title.includes(value.trim())) {
            return true;
          }
          return false;
        });
      }
      if (!value.trim()) {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      }
    },
    modalOpen(id, title) {
      this.modal = true;
      this.editProductId = id;
      this.editTodoTitle = title;
      console.log(this.editProductId);
    },
    modalClose(ref) {
      ref.classList.remove("active");
      setTimeout(() => {
        this.modal = false;
      }, 300);
    },
    setProductTitle(title) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === this.editProductId) {
          todo.title = title;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(this.todos));
      localStorage.setItem("allTodos", JSON.stringify(this.todos));
    },
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

