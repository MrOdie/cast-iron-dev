import Comp from "@/components/comp/comp";
import Todo from "@/components/Todo/TodoApp/TodoApp"
import { Fragment } from "react";
import sassy from "./home.module.scss";

export default function Page() {
  return (
    <div className={sassy.page}>
      <Todo></Todo>
    </div>
  );
}