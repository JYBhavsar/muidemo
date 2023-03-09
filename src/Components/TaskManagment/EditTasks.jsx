import React from 'react'

const EditTasks = ({updateTask, editTask, changeTask, cancelTask}) => {
  return (
    <>
        <div className="container">
            <div className="row my-5">
                <div className="col">
                <input type="text" className="form-control" value={updateTask && updateTask.title} onChange={(e)=> changeTask(e)} />
                </div>
                <div className="col-auto">
                <button className="btn btn-warning mx-2 my-1" onClick={editTask}>Edit</button>
                <button className="btn btn-danger mx-2 my-1"  onClick={cancelTask}>Cancel</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditTasks;