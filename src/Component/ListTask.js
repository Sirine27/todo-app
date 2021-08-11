
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { Button } from 'react-bootstrap';


 const ListTask = () => {
    const listTask = useSelector((state)=>state.task.listTasks)
    const [status,setStatus]=useState("all")
    return (
        <div>
            <Button variant="primary" onClick={()=>setStatus("all")} >ALL</Button>
            <Button variant="success"  onClick={()=>setStatus("done")}>Done </Button>
            <Button variant="danger"  onClick={()=>setStatus("undone")}>unDone</Button>
            
         {
             status==="done"
         ? listTask
        .filter((el)=> el.isDone===true)

         .map((el)=> <Task task ={el} key={el.id}/>)
         :status==="undone"
         ? listTask
         .filter((el)=>el.isDone===false)
         .map((el)=> <Task task ={el} key={el.id}/>)
         :listTask.map((el)=><Task task={el} key={el.id}/>)

         }   
        </div>
    )
}

export default ListTask;