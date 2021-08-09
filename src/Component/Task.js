
import React from 'react';
import Editt from './Editt';


 const  Task = ({task}) => {
    return (
        <div>
            <input type="checkbox"/>
            <span> {task.text} </span>
            <button>delete</button>
            <Editt task={task} />
          
            
        </div>
    )
}

export default Task;