import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

const Tasks = ({task,doneTask,setUpdateTask,deleteTask}) => {
  return (
    <>
        {task && task.length ? '': 'No Task Available'}

        {task && task.map((task, index)=>{

            return(
                    <div className="container" key={task.id}>
                        <div className="col taskbg">
                            <div className={task.status ? 'done' : '' }>
                                <span className="taskNumber">{index+1 }</span>
                                <span className="taskText">{task.title}</span>
                            </div>
                            <div className="iconsWrap">
                                <span title='Done/Undone Tasks' onClick={()=> doneTask(task.id)}> <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> </span> 
                                {task.status ? null : (
                                    <span title='Edit Tasks' onClick={()=> setUpdateTask({id:task.id,
                                                                title: task.title,
                                                                status: false 
                                                                })}> 
                                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                                    </span> 
                                )}
                                <span title='Remove Tasks' onClick={()=> deleteTask(task.id)}> <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> </span> 
                            </div>
                        </div>
                    </div>
                )
            }) 
        }
    </>

  )
}

export default Tasks
