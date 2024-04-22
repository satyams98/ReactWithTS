import { useRef, useContext } from "react";
import { TodoContext } from "./store/todo-context";
const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmithandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todoCtx.addTodoHandler(enteredText);
  };
  return (
    <form onSubmit={onSubmithandler}>
      <label htmlFor="todo">Enter todo</label>
      <input id="todo" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
