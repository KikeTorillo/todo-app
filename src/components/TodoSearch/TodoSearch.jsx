import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../app/context/TodoContext";
import './TodoSearch.css'

function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext);
    return (
        <input type="text" placeholder="Buscar To-Do" className="input_field"
        value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        >

        </input>
    );
}

export { TodoSearch };
