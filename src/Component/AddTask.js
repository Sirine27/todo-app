import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addTask } from '../JS/Action/action';



const AddTask = () => {

    const [text , setText]= useState("");
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        e.preventDefault();
        if(text.trim()){
            dispatch(addTask({id:Math.random(), text:text,isDone:false}));
            setText("");

        }else {
            alert("can't add an empty task")
        }
    }

    return (
        <div>
           <input placeholder='add task...' value={text} onChange={(e)=>setText(e.target.value)}/>
           <Button variant="secondary" onClick={handleChange}>AddTask</Button>
        </div>
    )
}

export default AddTask; 