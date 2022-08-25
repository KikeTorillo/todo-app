import React from "react";
import { Form } from "react-bootstrap";
function TodoSearch({searchValue, setSearchValue}) {
  const onSearchValueChangue = (event) => {
    setSearchValue(event.target.value);
  };
  return (
          <Form.Control
      className="mt-3"
      placeholder="buscar"
      value={searchValue}
      onChange={onSearchValueChangue}
    />
  );
}

export { TodoSearch };
