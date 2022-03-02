import React from "react";

const Todo = (props) => {
    const { todo, onTodoChanged } = props;

    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => {
                    onTodoChanged("update", {
                        ...todo,
                        completed: e.target.checked,
                    });
                }}
            />
            <input
                value={todo.title}
                onChange={(e) =>
                    onTodoChanged("update", {
                        ...todo,
                        title: e.target.value,
                    })
                }
            ></input>
            <button onClick={(e) => onTodoChanged("delete", todo)}>X</button>
        </div>
    );
};

export default Todo;
