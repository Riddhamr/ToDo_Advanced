import React, { useState } from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import { useLocalStorageState } from "./Hooks/useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

function App() {
    // const [todoList, setTodoList] = useLocalStorageState(
    //     "todoList-Advance",
    //     []
    // );
    const [todoList, setTodoList] = useState([
        {
            id: "tmp1",
            title: "Hi",
            note: "",
            completed: false,
            flagged: false,
            priority: 3,
            note: "",
        },
        {
            id: "tmp2",
            title: "Hello",
            note: "",
            completed: true,
            flagged: false,
            priority: 0,
            note: "",
        },
    ]);

    const selectAll = (checked) => {
        const newTodo = todoList.map((todo) => ({
            ...todo,
            completed: checked,
        }));
        setTodoList(newTodo);
    };

    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            note: "",
            completed: false,
            flagged: false,
            priority: 0,
        };
        setTodoList((prevList) => [...prevList, newTodo]);
    };

    const onTodoChanged = (type, updateTodo) => {
        let newTodo;
        console.log(updateTodo.title);
        if (type === "update" && updateTodo.title.trim() !== "") {
            console.log("update");
            newTodo = todoList.map((todo) =>
                todo.id === updateTodo.id ? updateTodo : todo
            );
        } else if (type === "delete" || updateTodo.title.trim() === "") {
            console.log("delete", updateTodo);

            newTodo = todoList.filter((todo) => todo.id === updateTodo.id);
        } else {
            throw new Error("Operation type not defined");
        }
        setTodoList(newTodo);
    };

    const onClickClearCompleted = () => {
        const updatedTodo = todoList.filter((todo) => todo.completed === false);
        setTodoList(updatedTodo);
    };

    const emptyList = todoList.length === 0;

    return (
        <div className="App">
            {/* {console.log(todoList)} */}
            <AddTodo
                selectAll={selectAll}
                addTodoItem={addTodoItem}
                emptyList={emptyList}
            />
            <TodoList
                todoList={todoList}
                onTodoChanged={onTodoChanged}
                onClickClearCompleted={onClickClearCompleted}
                emptyList={emptyList}
            />
        </div>
    );
}

export default App;
