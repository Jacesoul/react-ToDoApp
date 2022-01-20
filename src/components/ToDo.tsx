import { IToDo } from "../atoms";

function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>Doing</button>
      <button>Done</button>
      <button>ToDo</button>
    </li>
  );
}

export default ToDo;
