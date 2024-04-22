import Todo from "../Todo";
import React, { useState } from "react";
interface TodoContextValue {
  todoItems: Todo[];
  addTodoHandler: (todo: string) => void;
  removeTodoHandler: (id: string) => void;
}

const TodoContext = React.createContext<TodoContextValue>({
  todoItems: [],
  addTodoHandler: () => {},
  removeTodoHandler: () => {},
});

const TodoContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [todoItems, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => prevTodos.concat(new Todo(text)));
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodoContextValue = {
    todoItems,
    addTodoHandler,
    removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoContextProvider };
