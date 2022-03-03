import React, { useState } from "react";

const AddTodo = (props) => {
    const { emptyList, selectAll, addTodoItem } = props;
    const [value, setValue] = useState("");
    const [checkedAll, setCheckedAll] = useState(false);

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() !== "") {
            addTodoItem(value.trim());
            setCheckedAll(false);
            setValue("");
        }
    };

    const handleCheckAll = (e) => {
        setCheckedAll(e.target.checked);
        selectAll(e.target.checked);
    };

    return (
        <form
            style={{ display: "flex", gap: "20px", padding: "0px 30px" }}
            onSubmit={handleSubmit}
        >
            {!emptyList && (
                <input
                    placeholder="check All"
                    type="checkbox"
                    checked={checkedAll}
                    onChange={handleCheckAll}
                />
            )}
            <input
                style={{ flexGrow: 1 }}
                placeholder="Add Todo Title"
                value={value}
                onChange={handleOnChange}
            ></input>
        </form>
    );
};

export default AddTodo;
