import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allCompleted, allDelete } from '../store/todoSlice'
import useAlert from '../hooks/useAlert'


const StaticAction = () => {
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()
    const triggerAlert = useAlert()


    // Her render sırasında hesaplamayı önlemek için sayıları hafızaya alıyoruz
    const stats = useMemo(() => {
        return {
            total: todos.length,
            completed: todos.filter((t) => t.completed).length,
            unCompleted: todos.filter((t) => !t.completed).length
        }
    }, [todos])

    // Tüm Todoları silmek için oluşturulan fonksiyon
    const handleAllDelete = () => {
        if (stats.total === 0) return;
        if (window.confirm("Tümünü silmek istediğinize emin misiniz ?")) {
            dispatch(allDelete())
        }
        triggerAlert('all delete todos', 'info')
    }
    // Tüm todoları check etmek için oluşturulan fonksiyon
    const handleAllCompleted = () => {
        if (stats.total === 0) return;
        dispatch(allCompleted())
        triggerAlert('all completed', 'info')
    }



    return (
        <section className="static-container">
            <article className="static-stats">
                <div className="stat-card all">
                    <span className="label">Hepsi</span>
                    <span className="count">{stats.total}</span>
                </div>
                <div className="stat-card completed">
                    <span className="label">Tamamlanan</span>
                    <span className="count">{stats.completed}</span>
                </div>
                <div className="stat-card uncompleted">
                    <span className="label">Bekleyen</span>
                    <span className="count">{stats.unCompleted}</span>
                </div>
            </article>

            <article className="static-actions">
                <button
                    className="btn-complete"
                    onClick={handleAllCompleted}
                    disabled={stats.total === 0}
                >
                    Hepsini Tamamla
                </button>
                <button
                    className="btn-delete"
                    onClick={handleAllDelete}
                    disabled={stats.total === 0}
                >
                    Hepsini Sil
                </button>
            </article>

        </section>
    )
}

export default StaticAction