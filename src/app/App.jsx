import React from "react";
import { TodoProvider } from './context/TodoContext'
import { TodoApp } from '../Pages/TodoApp/TodoApp';

import './App.css';

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App
