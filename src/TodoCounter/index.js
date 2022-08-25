import React from "react";

function TodoCounter({completedTodos,total}) {
    return (
        <h2 className="text-center">Has completado {completedTodos} de {total} To dos</h2>
    );
}

export {TodoCounter};