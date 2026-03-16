import React from 'react'
import '../css/Todo.css'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'




const TodoList = () => {
    const todos = useSelector(store => store.todo.todos)

    console.log(todos);

    return (
        <main className='todo__list'>
            {
                todos && todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
            <button className='all__clear'>All Clear</button>
        </main>
    )
}

export default TodoList