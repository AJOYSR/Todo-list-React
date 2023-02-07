import React from "react";

const TodoList = ({ todos, setTodos, completeTodo, input, setInput }) => {
    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    return (
        <div className="todo-list">
            <div className="contents">
                {/* <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.title}
                            <button
                                className="remove-button"
                                onClick={() => deleteTodo(todo.id)}
                            >
                                &times;
                            </button>
                        </li>
                    ))}
                </ul> */}
                {todos.map((todo, index) => (
                    <div
                        className="todo"
                        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
                    >
                        <input type="checkbox" onClick={() => completeTodo(index)} className="check_box" />
                        <div className="show_todo">
                        {todo.title}
                        </div>
                        <button onClick={() => deleteTodo(index)} className="remove-button">x</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
