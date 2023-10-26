import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function TestState() {
    const [tasks, setTasks] = useState([
        { id: 1, name: "task1" },
        { id: 2, name: "task2" },
        { id: 3, name: "task3" }
    ]);
    const [newTask, setNewTask] = useState("");

    const handleDelete = (id) => {
        const tasksCopy = [...tasks];
        const tasksEdit = tasksCopy.filter(task => task.id !== id);
        setTasks(tasksEdit);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const tasksCopy = [...tasks];
        const id = new Date().getTime();
        const name = newTask;
        tasksCopy.push({ id: id, name: name });
        setTasks(tasksCopy);
        setNewTask("");
    }

    const handleChange = (e) => {
        const newValue = e.target.value;
        setNewTask(newValue);
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center">TODO List</h1>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <ul className="list-group">
                        {tasks.map(task => (
                            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {task.name}
                                <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>X</button>
                                <button className="btn btn-secondary">Edit</button>
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={handleSubmit} className="mt-3">
                        <div className="input-group">
                            <input
                                value={newTask}
                                type="text"
                                className="form-control"
                                placeholder="Enter Your task..."
                                onChange={handleChange}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="submit">Add</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TestState;
