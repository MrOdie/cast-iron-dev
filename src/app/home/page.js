import Comp from "@/components/comp/comp";
import Todo from "@/components/TodoApp/TodoList/TodoList"
import { Fragment } from "react";
import sassy from "./home.module.scss";

export default function Page() {
  return (
    <div className={sassy.page}>
      <Todo></Todo>
    </div>
  );
}