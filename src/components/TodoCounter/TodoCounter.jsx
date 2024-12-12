import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../app/context/TodoContext";

function TodoCounter() {
    const {completedTodos, totalTodos} = useContext(TodoContext);

    return (
        <h2 className="todoCounter">
            Has completado {completedTodos.length} de {totalTodos} todos
        </h2>
    );
}

export { TodoCounter };