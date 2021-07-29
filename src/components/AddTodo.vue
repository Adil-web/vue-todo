<template>
  <div class="search-box">
    <input v-on:keyup.enter="clickHandler" type="text" v-model="title" />
    <button @click="clickHandler">Создать</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    clickHandler() {
      if (this.title.trim()) {
        this.$emit("addTodo", this.title);
      }
      this.title = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input {
  flex: 1;
  font-size: 18px;
  color: rgb(192, 209, 255);
  background-color: #041955;
  box-shadow: 0 0 0 0 #27428e;
  transition: 0.5s ease;
  padding: 10px 15px;

  border: none;
  border-radius: 3px;
}

input:hover {
  filter: brightness(1.1);
}

input:focus {
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

.search-box {
  display: flex;
  max-width: 1000px;

  margin: 0 auto;
}

@media screen and (max-width: 400px) {
  .search-box {
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    margin-top: 20px;
  }
}
</style>