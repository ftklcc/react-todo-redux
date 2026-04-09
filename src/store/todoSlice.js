import { createSlice } from "@reduxjs/toolkit";

const loadfromStorage = () => {
    const data = localStorage.getItem('todos')
    return data ? JSON.parse(data) : [];
}

const initialState = {
    todos: loadfromStorage()
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.unshift({
                id: Date.now(),
                text: action.payload,
                completed: false
            })
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(
                todo => todo.id === action.payload
            )
            if (todo) todo.completed = !todo.completed

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                todo => todo.id !== action.payload
            )
        },
        editTodo: (state, action) => {
            const { text, id } = action.payload
            const editTodo = state.todos.find(todo => todo.id === id)
            if (editTodo) editTodo.text = text
        },
        allCompleted: (state) => {
            state.todos.forEach(todo => {
                todo.completed = true
            });
        },
        allDelete: (state) => {
            state.todos = []
        }
    }
})


export const { addTodo, toggleTodo, removeTodo, editTodo, allCompleted, allDelete } = todoSlice.actions;
export default todoSlice.reducer;