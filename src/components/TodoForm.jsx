import React, { useState } from 'react'
import '../css/Todo.css'
import { addTodo } from '../redux/todoSlice';



//React icons
import { LuListTodo } from "react-icons/lu";
import { useDispatch } from 'react-redux';




const TodoForm = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value.trim()) {
            alert('Is not empty value');
            return;
        }

        dispatch(addTodo(value))
        setValue("")
    }

    return (
        <header>
            <div className='header__titile'>
                <h1>Todo App</h1>
                <LuListTodo />
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='e.g'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </header>
    )
}

export default TodoForm