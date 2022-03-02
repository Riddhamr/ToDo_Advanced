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
        <form onSubmit={handleSubmit}>
            {!emptyList && (
                <input
                    type="checkbox"
                    checked={checkedAll}
                    onChange={handleCheckAll}
                />
            )}
            <input type="text" value={value} onChange={handleOnChange}></input>
        </form>
    );
};

export default AddTodo;
