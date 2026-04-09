import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideAlert } from '../store/alertSlice'
import '../css/AutoAlert.css'

const AutoAlert = () => {
    const dispatch = useDispatch()
    const { visible, message, type } = useSelector(state => state.alert)

    useEffect(() => {
        if (!visible) return;

        const timer = setTimeout(() => {
            dispatch(hideAlert())
        }, 2000);
        return () => clearTimeout(timer)
    }, [visible, dispatch])

    return (
        <div className={`alert alert--${type}`} >
            {message}
        </div>
    )
}

export default AutoAlert