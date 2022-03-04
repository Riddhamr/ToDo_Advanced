import React from "react";
import { useLocalStorageState } from "./Hooks/useLocalStorageState";
import "./app.css";
import { Hero } from "./Layout/Hero";

function App() {
    const [todoList, setTodoList] = useLocalStorageState(
        "todoList-Advance",
        []
    );
    // const [todoList, setTodoList] = useState([
    //     {
    //         id: "tmp1",
    //         title: "Hi",
    //         note: "",
    //         completed: false,
    //         flagged: false,
    //         priority: 3,
    //         note: "",
    //     },
    //     {
    //         id: "tmp2",
    //         title: "Hello",
    //         note: "",
    //         completed: true,
    //         flagged: false,
    //         priority: 0,
    //         note: "",
    //     },
    // ]);

    return (
        <div className="App">
            <div className="App-wrapper">
                <Hero
                    type={{ name: "Reminders", color: "orange" }}
                    todoList={todoList}
                    setTodoList={setTodoList}
                />
            </div>
        </div>
    );
}

export default App;
