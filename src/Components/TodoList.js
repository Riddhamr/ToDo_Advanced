import React, { useState } from "react";
import Todo from "./Todo";
import TodoStatus from "./TodoStatus";

const TodoList = (props) => {
    const { emptyList, todoList, onTodoChanged, onClickClearCompleted } = props;
    const [status, setStatus] = useState("all");

    const itemLeft = todoList.reduce((count, todo) => {
        return todo.completed === false ? count + 1 : count;
    }, 0);

    return (
        <div>
            <ul>
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
                            <Todo todo={todo} onTodoChanged={onTodoChanged} />
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
