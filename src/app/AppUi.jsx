import './App.css'
import { TodoCounter } from '../components/TodoCounter/TodoCounter'
import { TodoSearch } from '../components/TodoSearch/TodoSearch'
import { TodoList } from '../components/TodoList/TodoList'
import { TodoItem } from '../components/TodoItem/TodoItem'
import { LoaderTodo } from '../components/LoaderTodo/LoaderTodo'
import { useContext } from 'react'
import { TodoContext } from './context/TodoContext'
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton'
import { Modal } from '../Modals/Modal'
import { TodoForm } from '../components/TodoForm/TodoForm'


function AppUi() {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal
    } = useContext(TodoContext);
    return (
        <>
            <h1>Mis Pendientes</h1>
            <TodoCounter />
            <div className='todoSearch-container'>
                <TodoSearch />
            </div>
            <div className='todoList-container'>
                <TodoList>
                    {loading && <LoaderTodo />}
                    {error && <p>Hubo un error</p>}
                    {(!loading && searchedTodos.length === 0) && <p>Crea tu primer To-do-</p>}
                    {searchedTodos.map((todo) => {
                        return <TodoItem text={todo.text} key={todo.text} done={todo.done} completeTodo={() => completeTodo(todo.text)} deleteTodo={() => deleteTodo(todo.text)} />
                    })}
                </TodoList>
            </div>
            <div className='createTodoButton-container'>
                <CreateTodoButton />
            </div>
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export { AppUi };