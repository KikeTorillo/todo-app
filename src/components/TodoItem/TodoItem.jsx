import React from "react";
import './TodoItem.css';

function TodoItem({ text, done, completeTodo, deleteTodo }) {
    return (
        <li className="todoItem">
            <span 
            className={done ? 'checked' : 'uncheck'}
            onClick={completeTodo}
            >
            </span>
            <p>{text}</p>
            <span
            className="deleteTodoButton"
            onClick={deleteTodo}
            >
            </span>
        </li>
    );
}

export { TodoItem }