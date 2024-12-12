import React, { useState } from "react";
import './TodoForm.css'
import { useContext } from "react";
import { TodoContext } from "../../app/context/TodoContext";
import Button from '@mui/material/Button';
function TodoForm() {
    const { openModal, setOpenModal, addNewTodo } = useContext(TodoContext);
    const [textValue, setTextValue] = useState('');
    return (
        <form className="form-container">
            <label>Escribe tu nuevo To-do</label>
            <textarea
                value={textValue}
                onChange={(event) => {
                    setTextValue(event.target.value);
                }} />
            <div className="buttons-container">
                <button
                    className="cancelButton"
                    onClick={() => setOpenModal(!openModal)}
                >
                    Cancelar
                </button>
                <button
                    className="addButton"
                    onClick={() => setOpenModal(!openModal)}
                >
                    Cancelar
                </button>
            </div>

        </form>
    );
}

export { TodoForm }