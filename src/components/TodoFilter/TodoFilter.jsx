import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../app/context/TodoContext";

import "./TodoFilter.css"

function TodoFilter() {
    const { filterTodo, setFilterTodo } = useContext(TodoContext);
    console.log(filterTodo);
    return (
        <div className="containerFilter">
            <button
                className={filterTodo === 'progress' ? 'selected' : ''}
                onClick={() => setFilterTodo('progress')}
            >
                En progreso
            </button>
            <button
                className={filterTodo === 'end' ? 'selected' + ' overButton' : '' + 'overButton'}
                onClick={() => setFilterTodo('end')}
            >
                Finalizado
            </button>
        </div>
    );
}

export { TodoFilter };