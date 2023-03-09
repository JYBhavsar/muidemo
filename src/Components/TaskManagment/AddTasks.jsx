import React from 'react'

const AddTasks = ({newTask, setNewTask, addTask}) => {
  return (
    <>
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <input type="text" className="form-control" value={newTask} onChange={(e)=> setNewTask(e.target.value)} />
                </div>
                <div className="col-auto">
                    <button className="btn btn-success" onClick={addTask}>Add Task</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddTasks;