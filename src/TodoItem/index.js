import React from "react";
import { Button, ListGroup, Form, Row,Col } from "react-bootstrap";


function TodoItem(props) {

  let variante = "";
  let check = false;
  if (props.completed === true) {
    variante = "success";
    check = true;
  }
  return (
        <ListGroup.Item  as="li" action variant={variante}>
          <Row>
          <Col xs={1}>
        <Form.Check onClick={props.onCompleted} type="checkbox"  defaultChecked={check}/>
        </Col>
      <Col xs={8} sm={9} lg={10}>
      <p className="text-center">{props.text}</p>
      </Col>
        <Col>
        <Button
          variant="danger"
          className="bi bi-x-circle-fill"
          onClick={props.onDeleted}
        ></Button></Col>
          </Row>
         </ListGroup.Item>   
  );
}

export { TodoItem };
