import React from "react";

const TodoStatus = (props) => {
    const {
        itemLeft,
        onClickAll,
        onClickActive,
        onClickCompleted,
        onClickClearCompleted,
    } = props;
    return (
        <div
            style={{
                border: "1px solid black",
                display: "flex",
                justifyContent: "space-around",
            }}
        >
            <div>{itemLeft} items left</div>
            <div>
                <button onClick={onClickAll}>All</button>
                <button onClick={onClickActive}>Active</button>
                <button onClick={onClickCompleted}>Completed</button>
            </div>
            <div>
                <button onClick={onClickClearCompleted}>Clear Completed</button>
            </div>
        </div>
    );
};

export default TodoStatus;
