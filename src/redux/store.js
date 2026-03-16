import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

//Redux store oluşturulur ve todo reducer bağlanır.
export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});



/* 
Redux state değiştiğinde çalışır.
amaç todos verisini localStorage'a kaydetmek
*/

store.subscribe(() => {
    //Store içindeki güncel state alınır
    const state = store.getState();
    // Veri localStorage içine kaydedilir
    localStorage.setItem('todos', JSON.stringify(state.todo.todos))
})