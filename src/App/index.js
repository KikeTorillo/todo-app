import React from "react";
import { AppUI } from "./appUI";

/*const defaultTodos = [
  { text: "cortar cebolla", completed: false },
  { text: "Tomar el curo de intro react", completed: false },
  { text: "llorar con la llorona", completed: false },
];

const defaultTodosString = JSON.stringify(defaultTodos);

localStorage.setItem('TODOS_V1',defaultTodosString) */

//REact.Fragment permite envolver etiquetas sin agregar un
//div al html

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading,error };
}

function App() {
  const {
    item: todos, //de esta manera se renombra el el valor del objeto por otro
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  //const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase());
      return todoText;
    });
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((element) => element.text === text);
    const newTodos = [...todos];
    if (newTodos[todoIndex].completed === false) {
      newTodos[todoIndex].completed = true;
    } else {
      newTodos[todoIndex].completed = false;
    }
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((element) => element.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
