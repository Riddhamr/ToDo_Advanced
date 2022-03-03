import React, { useState } from "react";

const Todo = (props) => {
    const { todo, onTodoChanged, focusTodo, setFocusHelper } = props;
    // const [todo, setTodo] = useState(todoData);

    return (
        <div
            name="outer"
            style={{
                border: "1px solid black",
                padding: "5px",
                margin: "5px 0",
                display: "flex",
            }}
        >
            <input
                name="completed"
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => {
                    onTodoChanged("update", {
                        ...todo,
                        completed: e.target.checked,
                    });
                }}
                style={{
                    borderRadius: "50%",
                    height: "18px",
                    width: "18px",
                    border: "1px solid #aaa",
                    margin: "2px 5px",
                    // appearance: "none",
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "5px",
                        justifyContents: "space-between",
                    }}
                >
                    <span style={{ color: "red" }}>
                        {"!".repeat(todo.priority)}
                    </span>
                    <input
                        name="title"
                        value={todo.title}
                        onChange={(e) => {
                            onTodoChanged("update", {
                                ...todo,
                                title: e.target.value,
                            });
                        }}
                        onClick={(e) => setFocusHelper(e, todo.id)}
                    ></input>
                    <select
                        name="priority"
                        value={todo.priority}
                        onChange={(e) => {
                            onTodoChanged("update", {
                                ...todo,
                                priority: e.target.value,
                            });
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
                                resize: "none",
                                width: "300px",
                                minHeight: "30px",
                                maxHeight: "100px",
                            }}
                            value={todo.note}
                            onChange={(e) => {
                                onTodoChanged("update", {
                                    ...todo,
                                    note: e.target.value,
                                });
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
