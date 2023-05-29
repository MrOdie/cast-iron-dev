"use client";

import React, { useEffect, useState } from "react";
import sassy from "./todo.module.scss";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const updateTodoList = (e) => {
    // prevent page reload
    e.preventDefault();

    // bit of a null check
    if (e.target.todo === "") return;

    // push new todo to array of todos
    const updatedTodos = [...todos, input];

    // update state of todos
    setTodos(updatedTodos);

    // reset todos
    setInput("");
  };

  const deleteTodo = (todo, i) => {
    if (todos.indexOf(todo) === -1) return;

    const updatedTodos = todos.filter((_, index) => index != i);
    setTodos(updatedTodos);
  }

  return (
    <section className={sassy.todoApp}>
      <h3 className="h1 text-white pad-bottom-1 dark-text-shadow">Todo Application</h3>
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
              <button onClick={() => deleteTodo(todo, index)} className={sassy.delete}>X</button>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Todo;
