<template>
  <div>
    <input
      v-on:keyup.enter="clickHandler"
      class="search-todo"
      v-model="search"
      type="text"
    />
    <button @click="clickHandler">Найти</button>
  </div>
</template>

<script>
export default {
  name: "searchTodo",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    clickHandler() {
      this.$emit("searchTodo", this.search);
      this.search = "";
    },
  },
};
</script>

<style scoped>
.search-todo {
  font-size: 18px;
  color: rgb(192, 209, 255);
  background-color: #041955;
  box-shadow: 0 0 0 0 #27428e;
  transition: 0.5s ease;
  padding: 10px 15px;

  border: none;
  border-radius: 3px;
}

.search-todo:hover {
  filter: brightness(1.1);
}

.search-todo:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgb(108, 147, 255);
}

button {
  font-weight: 600;
  color: #fff;
  background-color: #eb06ff;
  border: none;
  border-radius: 3px;
  transition: 0.5s ease;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgb(231, 108, 255);

  margin-top: 30px;
  margin-left: 20px;
  padding: 12px 20px;
}

button:hover {
  filter: brightness(1.1);
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgb(231, 108, 255);
}
</style>