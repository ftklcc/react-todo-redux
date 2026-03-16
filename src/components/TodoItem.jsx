import '../css/Todo.css'
//React icons
import { FaRegEdit } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosRemoveCircle } from "react-icons/io";

import { useDispatch } from 'react-redux';
import { useState } from 'react';

//*  todoSlice actions
import { removeTodo, toggleTodo, updateTodo } from '../redux/todoSlice';

const TodoItem = ({ todo }) => {
    const { text, id, completed } = todo
    const dispatch = useDispatch();

    //editmode
    const [editMode, setEditMode] = useState(false);
    const [newText, setNewText] = useState(text);

    const saveTodo = () => {
        if (!newText.trim()) return;
        dispatch(updateTodo({ id, text: newText }));
        setEditMode(false);
    }


    return (
        <div className={`todo__card ${completed ? 'line' : ""}`}>



            <article className='todo__left'>
                <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodo(id))} />

                {
                    editMode
                        ? <input
                            type='text'
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                            className='todo__editInput'
                        />
                        : <p> {text} </p>
                }

            </article>



            <article className='todo__right'>

                {
                    editMode
                        ? <FaCircleCheck onClick={saveTodo} className='check_icon' />
                        : <FaRegEdit onClick={() => setEditMode(true)} className='edit_icon' />
                }

                <IoIosRemoveCircle onClick={() => dispatch(removeTodo(id))} className='remove_icon' />
            </article>
        </div>

    )
}

export default TodoItem