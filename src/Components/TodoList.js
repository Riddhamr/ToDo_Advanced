import React, { useState } from "react";
import Todo from "./Todo";
import TodoStatus from "./TodoStatus";

const TodoList = (props) => {
    const { emptyList, todoList, onTodoChanged, onClickClearCompleted } = props;
    const [status, setStatus] = useState("all");
    const [focusTodo, setFocus] = useState("");

    const itemLeft = todoList.reduce((count, todo) => {
        return todo.completed === false ? count + 1 : count;
    }, 0);

    const setFocusHelper = (e, id) => {
        e.stopPropagation();
        setFocus(id);
    };

    return (
        <div onClick={(e) => setFocusHelper(e, "")}>
            <ul
                style={{
                    height: "300px",
                    // border: "1px solid orange",
                    margin: "10px",
                    padding: "10px",
                    listStyle: "none",
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
                                focusTodo={focusTodo}
                                setFocusHelper={setFocusHelper}
                                todo={todo}
                                onTodoChanged={onTodoChanged}
                            />
                        </li>
                    ))}
            </ul>
            {!emptyList && (
                <TodoStatus
                    itemLeft={itemLeft}
                    onClickAll={() => setStatus("all")}
                    onClickActive={() => setStatus("active")}
                    onClickCompleted={() => setStatus("completed")}
                    onClickClearCompleted={onClickClearCompleted}
                />
            )}
        </div>
    );
};

export default TodoList;
