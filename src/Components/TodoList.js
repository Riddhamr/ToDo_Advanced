import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({ children, ...props }) => {
    const { color, status, todoList, onTodoChanged } = props;
    const [focusTodo, setFocusToDo] = useState("");

    const setFocusHelper = (e, id) => {
        e.stopPropagation();
        setFocusToDo(id);
    };

    return (
        <div onClick={(e) => setFocusHelper(e, "")}>
            <ul
                style={{
                    height: "400px",
                    listStyle: "none",
                    overflow: "scroll",
                    paddingBottom: "30px",
                }}
            >
                {todoList
                    .filter((todo) =>
                        status === "all"
                            ? true
                            : status === "active"
                            ? todo.completed === false
                            : todo.completed === true
                    )
                    .map((todo) => (
                        <li key={todo.id}>
                            <Todo
                                color={color}
                                focusTodo={focusTodo}
                                setFocusHelper={setFocusHelper}
                                todo={todo}
                                onTodoChanged={onTodoChanged}
                            />
                        </li>
                    ))}
                {children && <li key="addTodo">{children}</li>}
            </ul>
        </div>
    );
};

export default TodoList;
