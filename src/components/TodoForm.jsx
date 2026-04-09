import React, { useState } from 'react'
import { ListCheck } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import useAlert from '../hooks/useAlert';

const TodoForm = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch()

    //custom hook alerts
    const triggerAlert = useAlert()


    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.trim() === "") {
            triggerAlert('empty value', 'error')
            return;
        }

        dispatch(addTodo(value.trim()))
        setValue("")
        triggerAlert('Add Todo', 'success')
    }

    return (
        <header className='mx'>
            <div className='title'>
                <h1>Todo List App</h1>
                <ListCheck />
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    value={value}
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Todo Giriniz...' />
                <button type='submit'>Add</button>
            </form>
        </header>
    )
}

export default TodoForm