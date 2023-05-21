import React from 'react';

const Todo = () => {
    const todos = ["one", "two", "three"];

    return (
        <section>
            {
                todos.map((todo, index) => {
                    return <article key={index}>{todo}</article>
                })
            }
        </section>
    );
}

export default Todo;