import React from "react";

const TodoStatus = (props) => {
    const { color, completed, status, setStatus, onClickClearCompleted } =
        props;

    const buttonStyle = (activeCondition) => {
        return {
            color: color,
            filter: activeCondition ? "brightness(110%)" : "brightness(60%)",
            background: "transparent",
            fontWeight: "bold",
        };
    };

    return (
        <div
            style={{
                // border: "1px solid red",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "10px",
                padding: "0 12px 7px 0",
                borderBottom: "1px solid grey",
            }}
        >
            <div>
                <button
                    style={{
                        color: "#aaa",
                        fontWeight: "bold",
                        cursor: "default",
                        disabled: true,
                    }}
                >
                    {completed} completed
                </button>
                <span
                    style={{
                        color: "#aaa",
                        fontSize: "15px",
                        fontWeight: "bold",
                    }}
                >
                    -
                </span>
                <button
                    disabled={completed === 0}
                    onClick={onClickClearCompleted}
                    style={{
                        ...buttonStyle(completed),
                        cursor: completed ? "pointer" : "default",
                    }}
                >
                    Clear
                </button>
            </div>
            <div>
                <button
                    onClick={() => {
                        setStatus("all");
                    }}
                    style={{
                        ...buttonStyle(status === "all"),
                    }}
                >
                    All
                </button>
                <button
                    onClick={() => {
                        setStatus("active");
                    }}
                    style={{
                        ...buttonStyle(status === "active"),
                    }}
                >
                    Active
                </button>
                <button
                    onClick={() => {
                        setStatus("completed");
                    }}
                    style={{
                        ...buttonStyle(status === "completed"),
                    }}
                >
                    Completed
                </button>
            </div>
        </div>
    );
};

export default TodoStatus;
