import React, { useState } from "react";

const Todo = (props) => {
    const { todo: todoData, onTodoChanged, focusTodo, setFocusHelper } = props;
    const [todo, setTodo] = useState(todoData);

    return (
        <div
            name="outer"
            style={{
                border: "1px solid black",
                padding: "5px",
                display: "flex",
            }}
        >
            <input
                name="completed"
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => {
                    e.style.height = "5px";
                    e.style.height = e.scrollHeight + "px";
                    setTodo(() => ({
                        ...todo,
                        completed: e.target.checked,
                    }));
                }}
                style={{
                    borderRadius: "50%",
                    height: "18px",
                    width: "18px",
                    border: "1px solid #aaa",
                    appearance: "none",
                }}
            />
            <div>
                <div>
                    <span style={{ color: "red" }}>
                        {"!".repeat(todo.priority)}
                    </span>
                    <input
                        name="title"
                        value={todo.title}
                        onChange={(e) => {
                            setTodo(() => ({
                                ...todo,
                                title: e.target.value,
                            }));
                        }}
                        onClick={(e) => setFocusHelper(e, todo.id)}
                    ></input>
                    <select
                        name="priority"
                        value={todo.priority}
                        onChange={(e) => {
                            setTodo(() => ({
                                ...todo,
                                priority: e.target.value,
                            }));
                        }}
                        onClick={(e) => setFocusHelper(e, todo.id)}
                    >
                        <option value="0">None</option>
                        <option value="3">High</option>
                        <option value="2">Medium</option>
                        <option value="1">Low</option>
                    </select>
                    <button
                        name="delete"
                        onClick={(e) => onTodoChanged("delete", todo)}
                    >
                        X
                    </button>
                </div>
                {(todo.id === focusTodo || todo.note.trim() !== "") && (
                    <div>
                        <textarea
                            name="note"
                            placeholder="note"
                            style={{
                                color: "gray",
                                resize: "none",
                                width: "400px",
                                maxHeight: "100px",
                            }}
                            value={todo.note}
                            onChange={(e) => {
                                setTodo(() => ({
                                    ...todo,
                                    note: e.target.value,
                                }));
                                e.target.style.height = "5px";
                                e.target.style.height =
                                    e.target.scrollHeight + "px";
                            }}
                            onClick={(e) => setFocusHelper(e, todo.id)}
                        ></textarea>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Todo;
