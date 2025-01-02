import { useState, createContext } from 'react'

import { useLocalStorage } from '../../hooks/useLocalStorage'

const TodoContext = createContext();

function TodoProvider({ children }) {
    const fakeTodos = [{ text: 'SOY MAYUSCULA', done: true }, { text: 'revisar lavadora', done: true }, { text: 'ejemplo', done: false }];
    const {
        item: todos,
        saveItem: setTodos,
        loading,
        error
    } = useLocalStorage('TODO_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [filterTodo, setFilterTodo] = useState('progress');
    const [openModal, setOpenModal] = useState(false);
    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => {
        if (todo.done) {
            return todo;
        }
    });

    const searchedTodos = todos.filter((todo) => {
        if (todo.text.toLowerCase().includes(searchValue.toLowerCase())) {
            if (!todo.done && filterTodo === 'progress') {
                return todo;
            } else if (todo.done && filterTodo === 'end') {
                return todo;
            }
        }
    });

    const completeTodo = async (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => {
            return todo.text == text;
        });
        newTodos[todoIndex].done = !newTodos[todoIndex].done;
        setTodos(newTodos);
    };

    const deleteTodo = async (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => {
            return todo.text == text;
        });
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    };

    const addNewTodo = async (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text: text, done: false
        });
        setTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={
            {
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,
                addNewTodo,
                filterTodo,
                setFilterTodo
            }
        }>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }



