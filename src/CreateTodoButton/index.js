import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function CreateTodoButton({handleShow}) {
    return(
            <Row>
                <Col className="d-grid gap-2 col-6 mx-auto"> <Button className="mt-3 bi bi-plus-circle" variant="primary"
            onClick={handleShow}
            > </Button></Col>
            </Row>
    );
}

export {CreateTodoButton}; 