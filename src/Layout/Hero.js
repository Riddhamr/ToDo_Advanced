import React, { useState } from "react";
import TodoList from "../Components/TodoList";
import { v4 as uuidv4 } from "uuid";
import TodoStatus from "../Components/TodoStatus";
import AddTodo from "../Components/AddTodo";

export const Hero = (props) => {
    const { type, todoList, setTodoList } = props;

    const itemLeft = todoList.reduce((count, todo) => {
        return todo.completed === false ? count + 1 : count;
    }, 0);

    const [status, setStatus] = useState("all");
    const [showAddTask, setShowAddTask] = useState(false);

    const selectAll = (checked) => {
        const newTodo = todoList.map((todo) => ({
            ...todo,
            completed: checked,
        }));
        setTodoList(newTodo);
    };

    const addTodoItem = (newTodo) => {
        if (newTodo.title.trim() !== "") {
            newTodo["id"] = uuidv4();
            setTodoList((prevList) => [...prevList, newTodo]);
        }
    };

    const onTodoChanged = (type, updateTodo) => {
        if (updateTodo.title.trim() === "") {
            type = "delete";
        }

        let newTodo;
        if (type === "update") {
            newTodo = todoList.map((todo) =>
                todo.id === updateTodo.id ? updateTodo : todo
            );
        } else if (type === "delete") {
            newTodo = todoList.filter((todo) => todo.id !== updateTodo.id);
        } else {
            throw new Error("Operation type not defined");
        }

        setTodoList(newTodo);
    };

    const onClickClearCompleted = () => {
        const updatedTodo = todoList.filter((todo) => todo.completed === false);
        setTodoList(updatedTodo);
    };

    return (
        <div
            style={{
                margin: "15px 0 5px 12px",
                height: "530px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                key="add button"
                style={{
                    display: "flex",
                    justifyContent: "right",
                    paddingRight: "12px",
                }}
            >
                <button
                    style={{
                        borderRadius: "5px",
                        color: "#d9d9d9",
                        background: "#444",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "4px 10px",
                        margin: 0,
                    }}
                    onClick={() => {
                        console.log("add clicked");
                        setShowAddTask((prev) => !prev);
                    }}
                >
                    Add
                </button>
            </div>
            <header
                name="title bar"
                style={{
                    color: type.color,
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "18px",
                    margin: "15px 0",
                    paddingRight: "12px",
                }}
            >
                <h1>{type.name}</h1>
                <h1>{itemLeft}</h1>
            </header>
            <TodoStatus
                color={type.color}
                completed={todoList.length - itemLeft}
                status={status}
                setStatus={setStatus}
                onClickClearCompleted={onClickClearCompleted}
            />
            {/* <div> */}
            <TodoList
                color={type.color}
                todoList={todoList}
                status={status}
                onTodoChanged={onTodoChanged}
                onClickClearCompleted={onClickClearCompleted}
            >
                {showAddTask && (
                    <AddTodo
                        color={type.color}
                        selectAll={selectAll}
                        addTodoItem={addTodoItem}
                        setShowAddTask={setShowAddTask}
                    />
                )}
            </TodoList>
            {/* </div> */}
        </div>
    );
};
