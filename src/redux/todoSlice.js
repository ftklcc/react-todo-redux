import { createSlice } from "@reduxjs/toolkit";

/* 
 *Todo uygulamasının başlangıç state'i.
Uygulama ilk açıldığında todos dizisi boş olacak.
*/
const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,

    reducers: {

        // Yeni bir todo ekler.
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };
            // Yeni todo nesnesi listeye eklenir
            state.todos.push(newTodo);
        },

        //ID'ye göre todo siler
        removeTodo: (state, action) => {

            const id = action.payload;
            //Gönderilen id dışındaki todos tutulur
            state.todos = state.todos.filter(
                (todo) => todo.id !== id
            );

        },

        // tamamlandı durumunu değiştirir
        toggleTodo: (state, action) => {
            const id = action.payload;
            //  ID ile todo bulunur
            const todo = state.todos.find(
                (todo) => todo.id === id
            );

            // completed değeri true/false olarak tersine çevrilir
            if (todo) todo.completed = !todo.completed;
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(t => t.id === id);
            if (todo) todo.text = text;
        },
        clearTodos: (state) => {
            state.todos = [];
        }
    }
});

export const { addTodo, removeTodo, toggleTodo, updateTodo, clearTodos } = todoSlice.actions;

export default todoSlice.reducer;