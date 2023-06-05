import TodoApp from "@/components/Todo/TodoApp/TodoApp";

import sassy from "./page.module.scss";

export const metadata = {
  title: 'Todo App | React Playground'
}

const Todo = () => {
  return (
    <div className={sassy.todoApp}>
      <TodoApp></TodoApp>
    </div>
    )
}

export default Todo;