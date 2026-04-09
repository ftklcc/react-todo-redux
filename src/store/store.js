import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'
import alertReducer from './alertSlice'

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        alert: alertReducer
    }
})



store.subscribe(() => {
    const state = store.getState()
    localStorage.setItem('todos', JSON.stringify(state.todos.todos))
})