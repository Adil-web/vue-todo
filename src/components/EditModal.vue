<template>
  <div ref="modal" class="modal">
    <div class="container">
      <button class="close" @click="$emit('modalClose', $refs.modal)">
        &times;
      </button>
      <div class="form">
        <input v-model="title" class="form-control" type="text" v-on:keyup.enter="setTitle" />
        <button @click="setTitle">Изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditModal",
  data() {
    return {
      title: "",
    };
  },
  props: {
    todoTitle: {
      type: String,
      required: true,
    },
  },
  methods: {
    setTitle() {
      if (this.title.trim()) {
        this.$emit("setTodoTitle", this.title);
        this.$emit("modalClose", this.$refs.modal);
      }
    },
  },
  mounted() {
    setTimeout(() => this.$refs.modal.classList.add("active"), 100);
    this.title = this.todoTitle;
  },
};
</script>

<style>
.modal {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 90%;
  height: 150px;
  background-color: #7f86997a;
  display: flex;
  border-radius: 10px;
  transition: 0.5s ease;
  opacity: 0;
  backdrop-filter: blur(10px);
}

.modal.active {
  top: 50%;
  opacity: 1;
  backdrop-filter: blur(10px);
}

.container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 600;
  color: #fff;
  background-color: #eb06ff;
  border: none;
  border-radius: 3px;
  transition: 0.5s ease;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgb(231, 108, 255);
  padding: 12px 20px;
  margin: 0;
}

.close:hover {
  filter: brightness(1.1);
}

.form {
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.form button {
  font-weight: 600;
  color: #fff;
  background-color: #eb06ff;
  border: none;
  border-radius: 3px;
  transition: 0.5s ease;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgb(231, 108, 255);

  margin: 0 auto;
  margin-top: 10px;
  padding: 12px 20px;
}

.form button:hover {
  filter: brightness(1.1);
}

.form button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgb(231, 108, 255);
}

.form-control {
  flex: 0.9;
  color: #fff;
  background-color: #a9aebd;
  box-shadow: 0 0 0 0 rgb(108, 147, 255);
  transition: 0.2s;

  border: none;
  border-radius: 3px;
  margin-top: 10px;
  padding: 10px 15px;
}

.form-control:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgb(108, 147, 255);
}
</style>