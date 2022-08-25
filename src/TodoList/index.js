import React from "react";
import { ListGroup } from "react-bootstrap";

function TodoList(props) {
    return(
        <ListGroup as="ul" className="mt-4">
            {props.children}
        </ListGroup>
    );
};
 
export {TodoList};