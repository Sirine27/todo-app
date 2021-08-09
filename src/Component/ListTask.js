
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';


 const ListTask = () => {
    const listTask = useSelector((state)=>state.task.listTasks)
    return (
        <div>
         {
         listTask
         .map((el)=> <Task task ={el} key={el.id}/>)
         }   
        </div>
    )
}

export default ListTask;