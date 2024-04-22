import TodoItem from "./TodoItem";
import Todo from "./Todo";
import { useContext } from "react";
import { TodoContext } from "./store/todo-context";
const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <div>
      <ul>
        {todoCtx.todoItems.map((todo: Todo) => (
          <TodoItem key={todo.id} id={todo.id} todoText={todo.text} />
        ))}
      </ul>
    </div>
  );
};
export default Todos;
