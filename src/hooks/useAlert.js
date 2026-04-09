import React from 'react'
import { useDispatch } from 'react-redux'
import { showAlert } from '../store/alertSlice'

const useAlert = () => {
    const dispatch = useDispatch()
    const triggerAlert = (message, type) => {
        dispatch(showAlert({ message, type }))
    }
    return triggerAlert;
}

export default useAlert