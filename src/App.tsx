import React, { useContext } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import { TodoContextProvider, TodoContext } from "./store/todo-context";

function App() {
  const todoCtx = useContext(TodoContext);
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
