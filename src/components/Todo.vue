<template>
    <ul>
        <TodoItem 
            v-for="(item, index) in todos" 
            :key="item.id" 
            :todo="item" 
            :index="index" 
            @completeTodo="$emit('completeTodo', item.id)"
            @modalIsOpen="$emit('modalIsOpen', true)"
            :deleteTodo="deleteTodo" 
            :modalOpen="modalOpen"
        />
    </ul>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'

export default {
    props: {
        todos: {
            required: true,
            type: Array
        },
        deleteTodo: {
            required: true,
            type: Function
        },
        modalOpen: {
            required: true
        }
    },
    components: {
        TodoItem
    },
}
</script>

<style scoped>
    ul {   
        max-width: 700px;
        
        list-style: none;
        margin: 20px auto;
        padding: 0;
    }
</style>