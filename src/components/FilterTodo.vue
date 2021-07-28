<template>
  <div class="filter-buttons">
    <button @click="$emit('filterTodos', 'all')">Все</button>
    <button @click="$emit('filterTodos', true)">Выполнено</button>
    <button @click="$emit('filterTodos', false)">Не выполнено</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.filter-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>