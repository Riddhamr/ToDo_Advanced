import React, { useState, useRef, useEffect } from "react";

const emptyTodo = {
    title: "",
    note: "",
    completed: false,
    flagged: false,
    priority: 0,
};

const AddTodo = (props) => {
    const { color, addTodoItem, setShowAddTask } = props;
    const titleRef = useRef();
    const [todo, setTodo] = useState(emptyTodo);

    const handleOnChange = (e, name, value) => {
        console.log(name, value);
        setTodo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoItem(todo);
        setTodo(emptyTodo);
        setShowAddTask(false);
    };

    useEffect(() => {
        titleRef.current.focus();
    }, []);

    return (
        <form
            name="outer"
            style={{
                padding: "5px 0",
                display: "flex",
            }}
            onSubmit={handleSubmit}
        >
            <div>
                <input
                    name="completed"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => {
                        handleOnChange(e, "completed", e.target.checked);
                    }}
                    style={{
                        height: "15px",
                        width: "15px",
                        margin: "3px",
                    }}
                />
            </div>
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
                        justifyContents: "space-between",
                    }}
                >
                    {todo.priority > 0 && (
                        <span style={{ color: color }}>
                            {"!".repeat(todo.priority)}
                        </span>
                    )}
                    <input
                        name="title"
                        placeholder="Title"
                        value={todo.title}
                        ref={titleRef}
                        onChange={(e) => {
                            handleOnChange(e, "title", e.target.value);
                        }}
                    ></input>
                </div>

                <div>
                    <textarea
                        name="note"
                        placeholder="Notes"
                        style={{
                            resize: "none",
                            width: "300px",
                            minHeight: "30px",
                            maxHeight: "100px",
                        }}
                        value={todo.note}
                        onChange={(e) => {
                            handleOnChange(e, "note", e.target.value);

                            e.target.style.height = "5px";
                            e.target.style.height =
                                e.target.scrollHeight + "px";
                        }}
                    ></textarea>
                </div>
                <div>
                    <select
                        name="priority"
                        placeholder="Priority"
                        style={{
                            borderRadius: "5px",
                            color: "#d9d9d9",
                            background: "#444",
                            border: "0.7px solid #888",
                            fontSize: "12px",
                            fontWeight: "bold",
                            padding: "2px 5px",
                            width: "auto",
                            margin: "0",
                        }}
                        value={todo.priority}
                        onChange={(e) => {
                            handleOnChange(e, "priority", e.target.value);
                        }}
                    >
                        <option value="-1" disabled>
                            Priority
                        </option>
                        <option value="0">None</option>
                        <option value="3">High</option>
                        <option value="2">Medium</option>
                        <option value="1">Low</option>
                    </select>
                    <button
                        style={{
                            borderRadius: "5px",
                            color: "#d9d9d9",
                            background: "#444",
                            border: "0.7px solid #888",
                            fontSize: "12px",
                            fontWeight: "bold",
                            padding: "3px 7px",
                            width: "auto",
                            // margin: "0"
                        }}
                        name="Add"
                        onClick={handleSubmit}
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddTodo;
