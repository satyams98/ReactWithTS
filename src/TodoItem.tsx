import { useContext } from "react";
import { TodoContext } from "./store/todo-context";
const TodoItem: React.FC<{
  todoText: string;
  id: string;
}> = (props) => {
  const todoCtx = useContext(TodoContext);
  const removeTodoHandler: React.MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault();
    todoCtx.removeTodoHandler(props.id);
  };
  return <li onClick={removeTodoHandler}>{props.todoText}</li>;
};
export default TodoItem;
