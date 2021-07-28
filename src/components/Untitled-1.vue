<TodoItem 
            v-for="(item, index) in todos" 
            :key="item.id" 
            :todo="item" 
            <!-- :index="index"  -->
            @completeTodo="$emit('completeTodo', item.id)"
            @deleteTodo="$emit('deleteTodo', item.id, $refs)" 
        />