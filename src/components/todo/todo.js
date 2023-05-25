"use client";

import React, { useState } from "react";
import sassy from "./todo.module.scss";

const Todo = () => {
  const dummyTodos = ["one", "two", "three"];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const updateTodoList = (e) => {
    e.preventDefault();

    if (e.target.todo === "") return;

    todos.push(input);
    setTodos(todos);

    setInput("");
  };

  return (
    <section className={sassy.todoApp}>
      <article>
        <form className={sassy.todoForm} onSubmit={updateTodoList}>
          <input
            className={sassy.todoInput}
            name="todo"
            placeholder="Add Todo Here"
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button disabled={!input} className={sassy.todoSubmit}>Submit</button>
        </form>
      </article>
      <article className={sassy.todoList}>
        {todos.map((todo, index) => {
          return (
            <div className={sassy.todo} key={index}>
              <p>{todo}</p>
              <button className={sassy.delete}>X</button>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Todo;
