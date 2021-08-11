
import React from 'react';
import Editt from './Editt';
import './Task1.css';
import {deleteTask, doneTask} from '../JS/Action/action';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';


 const  Task = ({task}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }
    return (
        <div>
            
            <span className={task.isDone?"done":null}> {task.text} </span>
            <Button variant="secondary" onClick={handleDelete}>delete</Button>
            <Editt task={task} />
            <Button  variant="secondary" onClick={()=>dispatch(doneTask(task.id))}>{task.isDone ? "undone":"done"}</Button>
          
            
        </div>
    )
}

export default Task;