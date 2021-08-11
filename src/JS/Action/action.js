import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../Constant/action-type";



export const addTask = (newTask) =>{
    
    return{
        type : ADD_TASK,
        payload : newTask,
    }
};

export const editTask =(id,newTask)=>{
    return {
        type : EDIT_TASK,
        payload : {id, newTask}
    }
};
export const deleteTask = (id, newTask) => {
    return {
        type : DELETE_TASK,
        payload : {id, newTask}
    }
};

export const doneTask =(id)=>{
    return{
        type:DONE_TASK,
        payload:id
    }
};