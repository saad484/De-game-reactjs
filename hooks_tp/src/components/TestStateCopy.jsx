<div className="vh-100 gradient-custom">
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