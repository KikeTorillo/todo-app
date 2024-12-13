import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../app/context/TodoContext";

import "./CreateTodoButton.css"

function CreateTodoButton() {
    const { openModal, setOpenModal } = useContext(TodoContext);
    return (
        <span className="createTodoButton"
        onClick={()=> setOpenModal(!openModal)}
        >
        </span>
    );
}

export { CreateTodoButton };