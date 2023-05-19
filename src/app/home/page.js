import Comp from "@/components/comp/comp";
import Todo from "@/components/todo/todo"
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <Comp></Comp>
      <Todo></Todo>
    </Fragment>
  );
}