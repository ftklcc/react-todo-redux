import React from 'react'
import '../css/Todo.css'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearTodos } from '../redux/todoSlice'




const TodoList = () => {
    const todos = useSelector(store => store.todo.todos)
    const dispatch = useDispatch()

    const clearAllTodos = () => {
        if (todos.length === 0) return;
        if (window.confirm('Are you sure you want to delete all your todos?')) {
            dispatch(clearTodos());
        }
    }

    return (
        <main className='todo__list'>
            {
                todos && todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
            <button
                className='all__clear'
                onClick={clearAllTodos}
            >
                All Clear
            </button>
        </main>
    )
}

export default TodoList