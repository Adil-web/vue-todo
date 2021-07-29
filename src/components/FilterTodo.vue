<template>
  <div class="filter-buttons">
    <select id="select" v-model="selected" @change="$emit('filterTodos', selected)">
        <option v-for="select in selectFilter"
            :value="select.value" 
            :key="select.value"
        >{{select.title}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    selectFilter: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      selected: localStorage.getItem('seleсted') || 'all'
    }
  },
  created() {
    this.seleсted = localStorage.getItem('seleсted') || 'all'
    console.log(this.selected)
  }
};
</script>

<style>
.filter-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
</style>