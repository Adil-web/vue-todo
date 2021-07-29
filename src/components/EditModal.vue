<template>
  <div class="modal">
    <div class="container">
      <button class="close" @click="modalIsOpen(false)">&times;</button>
      <div class="form">
        <input type="text" />
        <button>Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalIsOpen: {
      required: true,
    },
  },
};
</script>

<style>
.modal {
  position: absolute;
  top: 35%;
  left: 35%;
  background: white;
  width: 600px;
  height: 300px;
  display: flex;
  background-color: #041955;
  border: 1px solid #eb06ff;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
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
}

.form {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
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

  margin-left: 20px;
  padding: 12px 20px;
}

.form button:hover {
  filter: brightness(1.1);
}

.form button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgb(231, 108, 255);
}
</style>