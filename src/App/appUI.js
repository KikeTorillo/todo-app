import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Container } from "react-bootstrap";
import { Modal1 } from "../modal";
import { Modal,Form,Button } from "react-bootstrap";

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodos,
  deleteTodos,
  loading,
  error
}) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="mt-5">
      <TodoCounter completedTodos={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
      {error &&  <p>Deseperate, hubo un error.....</p>}
        {loading &&  <p>Estamos cargando, no desesperes.....</p>}
        {(!loading && !searchedTodos.length && <p>Crea tu primer To-do</p>) }
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            completed={todo.completed}
            text={todo.text}
            onCompleted={() => completeTodos(todo.text)}
            onDeleted={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton handleShow={handleShow} />
      <Modal1>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Creacion To do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingrese tarea a realizar</Form.Label>
              <Form.Control
                type="email"
                placeholder="tarea"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
      </Modal1>
    </Container>
  );
}

export { AppUI };
