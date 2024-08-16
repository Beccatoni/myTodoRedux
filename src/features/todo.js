import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {todos:[]},
    reducers: {
      addTodo: (state, action) => {
        state.todos = [...state.todos, action.payload]
      }, 
      setIsDone: (state, action) => {
        const newTodos = state.todos.map(todo => {
            if (todo.id === action.payload) {
              return {
                ...todo,
                isDone: !todo.isDone
              }
            } else {
              return todo
            }
        })
        state.todos = newTodos
      }
    }
})


export const {addTodo, setIsDone} = todoSlice.actions
export default todoSlice.reducer


