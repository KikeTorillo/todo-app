import React from "react";
import './TodoList.css'

function TodoList(props) {
    return (
        <div className="container-list">
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export { TodoList };