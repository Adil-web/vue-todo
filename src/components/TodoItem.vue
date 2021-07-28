<template>
  <div>
    <li
      ref="todo"
      class="todo-item todo-anim"
      @click="$emit('completeTodo', todo.id)"
    >
      <div>
        {{ index + 1 + ". " + todo.title }}
      </div>
      <div class="icons">
        <span class="icon-completed" v-if="todo.completed">&#9745;</span>
        <span class="icon-delete" @click="deleteTodo(todo.id, $refs.todo)"
          >&#128465;</span
        >
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      required: true,
      type: Number,
    },
    todo: {
      required: true,
      type: Object,
    },
    deleteTodo: {
      required: true,
      type: Function,
    },
  },
  mounted() {
    setTimeout(() => this.$refs.todo.classList.remove("todo-anim"), 300);
  },
};
</script>

<style scoped>
.todo-item {
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(192, 209, 255);
  background-color: #041955;
  border-radius: 10px;
  transition: 0.2s ease-out;
  box-shadow: 0 5px 5px 0px #041a558f;
  cursor: pointer;

  margin: 10px 0;
  padding: 15px 20px;
}

.todo-item:hover {
  filter: brightness(1.3);
  transform: translateY(-1px);
}

.todo-anim {
  transform: translateX(-30px);
  opacity: 0;
}

.checkbox {
  width: auto;
}

.icons {
  min-width: 50px;
  font-size: 25px;
}

.icon-completed {
  color: #1f73ef;
  margin-right: 10px;
}

.icon-delete {
  color: red;
  cursor: pointer;
}
.icon-delete:hover {
  color: red;
  cursor: pointer;
}
</style>