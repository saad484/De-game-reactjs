import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function TestState() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "task1" },
    { id: 2, name: "task2" },
    { id: 3, name: "task3" }
  ]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState("");

  const handleDelete = (id) => {
    const tasksCopy = tasks.filter(task => task.id !== id);
    setTasks(tasksCopy);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      return;
    }

    const id = new Date().getTime();
    const name = newTask;
    setTasks([...tasks, { id, name }]);
    setNewTask("");
  }

  const handleEdit = (id) => {
    setEditingTaskId(id);
    setEditedTaskName(tasks.find(task => task.id === id).name);
  }

  const handleSave = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, name: editedTaskName };
      }
      return task;
    });

    setTasks(updatedTasks);
    setEditingTaskId(null);
  }

  const handleChange = (e) => {
    const newValue = e.target.value;
    setEditedTaskName(newValue);
  }

  return (
    <section className="vh-100 d-flex align-items-center" style={{ backgroundColor: '#e2d5de' }}>
      <div className="container py-5">
        <div className="card" style={{ borderRadius: '15px' }}>
          <div className="card-body p-5">
            <h3 className="mb-3 text-center"> Todo List</h3>

            <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center mb-4">
              <div className="form-outline flex-fill">
                <input type="text" id="form3" className="form-control form-control-lg" 
                placeholder="What do you need to do today?" 
                onChange={(e)=>setNewTask(e.target.value)}
                value={newTask}
                // defaultValue = ""
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg ms-2">Add</button>
            </form>

            <ul className="list-group">
              {tasks.map(task => (
                <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center border-0 mb-2">
                  {editingTaskId === task.id ? (
                    <>
                      <input
                        type="text"
                        className="form-control"
                        value={editedTaskName}
                        onChange={handleChange}
                      />
                      <div className="btn-group" role="group">
                        <button className="btn btn-success" onClick={() => handleSave(task.id)}>Save</button>
                      </div>
                    </>
                  ) : (
                    <>
                      {task.name}
                      <div className="btn-group" role="group">
                        <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
                        <button className="btn btn-secondary" onClick={() => handleEdit(task.id)}>Edit</button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestState;
