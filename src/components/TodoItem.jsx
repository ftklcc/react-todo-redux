import { CircleX, SquarePen, Check } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, removeTodo, editTodo } from '../store/todoSlice'
import useAlert from '../hooks/useAlert'

const TodoItem = ({ todo }) => {
    const { id, text, completed } = todo
    const tirggerAlert = useAlert()

    const [isdelete, setIsDelete] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [newText, setNewText] = useState(text)

    const dispatch = useDispatch()

    useEffect(() => {
        setNewText(text)
    }, [text])


    // Handles smooth deletion with a delay for animation.
    const handleDelete = () => {
        setIsDelete(true)
        setTimeout(() => {
            dispatch(removeTodo(id))
        }, 300);
        tirggerAlert('Delete Todo', 'error')
    }
    //Validates and saves the edited text.
    const handleSave = () => {
        const tirmmedText = newText.trim()
        if (tirmmedText === "") {
            //Reset to original if empty
            setNewText(text);
            setEditMode(false);
            return;
        }
        dispatch(editTodo({ id, text: tirmmedText }))
        setEditMode(false)
        tirggerAlert('Updated Todo', 'info')

    }

    return (
        <li className={`${completed ? 'checked' : ""} todo__item ${isdelete ? 'deleting' : ""}`}>
            <article className='todo__left'>
                <input
                    type="checkbox"
                    onChange={() => dispatch(toggleTodo(id))}
                    checked={completed}

                />
                {
                    editMode
                        ? <input autoFocus className='edit__input' value={newText} onChange={(e) => setNewText(e.target.value)} />
                        : <p> {text} </p>
                }
            </article>
            <article className='todo__right'>
                {
                    editMode
                        ? <Check className='icon check' onClick={handleSave} />
                        : <SquarePen onClick={() => setEditMode(true)} className='icon edit' />

                }

                <CircleX onClick={handleDelete} className='icon trash' />
            </article>
        </li>
    )
}

export default TodoItem