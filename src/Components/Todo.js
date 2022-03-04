import React from "react";

const Todo = (props) => {
    const { color, todo, onTodoChanged, focusTodo, setFocusHelper } = props;

    return (
        <div
            name="outer"
            style={{
                padding: "5px 0",
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
                    height: "15px",
                    width: "15px",
                    margin: "3px",
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "100%",
                    paddingBottom: "5px",
                    marginLeft: "5px",
                    borderBottom: "1px solid grey",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "5px",
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        {todo.priority > 0 && (
                            <span
                                name="todo-priority"
                                style={{ color: color, marginRight: "3px" }}
                            >
                                {"!".repeat(todo.priority)}
                            </span>
                        )}
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
                            style={{
                                color: "#ddd",
                                fontSize: "15px",
                            }}
                        ></input>
                    </div>
                    {todo.id === focusTodo && (
                        <div>
                            <select
                                placeholder="Priority"
                                style={{
                                    borderRadius: "5px",
                                    color: "#d9d9d9",
                                    background: "#333",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    // padding: "3px 5px",
                                    margin: 0,
                                    width: "auto",
                                }}
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
                                style={{
                                    borderRadius: "5px",
                                    color: "#d9d9d9",
                                    background: "#333",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    padding: "3px 5px",
                                    marginRight: "15px",
                                }}
                                name="delete"
                                onClick={(e) => onTodoChanged("delete", todo)}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>

                {(todo.id === focusTodo || todo.note.trim() !== "") && (
                    <div>
                        <textarea
                            name="note"
                            placeholder="note"
                            rows={1}
                            style={{
                                resize: "none",
                                minWidth: "50px",
                                width: "100%",
                                minHeight: "8px",
                                maxHeight: "100px",
                                color: "#aaa",
                                fontSize: "13px",
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
