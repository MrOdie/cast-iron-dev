import TodoApp from "@/components/Todo/TodoApp/TodoApp";

import sassy from "./page.module.scss";

const Todo = () => {
  return (
    <div className={sassy.todoApp}>
      <TodoApp></TodoApp>
    </div>
    )
}

export default Todo;