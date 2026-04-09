import TodoForm from './components/TodoForm'
import './css/Todo.css'
import TodoList from './components/TodoList'
import StaticAction from './components/StaticAction'
import AutoAlert from './components/AutoAlert'


const App = () => {


    return (
        <div className='container'>
            <TodoForm />
            <AutoAlert />
            <TodoList />
            <StaticAction />
        </div>
    )
}

export default App