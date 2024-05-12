// App.tsx
import React, { useState } from "react";
import TodoRow from "./components/TodoRow/TodoRow.tsx";
import Button from "./components/Buttons/Button.tsx";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>(["Hi","I am Sahil Sagar"]);
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
console.log(tasks)
  const handleDeleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="todobox">
        <div className="todo_head">
          <h1>Todo</h1>
        </div>
        <div className="todo_Cont">
          {tasks.map((task, index) => (
            <TodoRow
              key={index}
              label={task}
              onDelete={() => handleDeleteTask(index)}
            />
          ))}
        </div>
        <div className="input_box">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
          />
          <Button variant="large" onClick={handleAddTask} />{" "}
        </div>
      </div>
    </div>
  );
};

export default App;
