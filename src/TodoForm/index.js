import React from "react";
import { TodoContext } from "../TodoContext";

function Form(){
    const [newValueTodo, setNewValueTodo] = React.useState('')
    const {addTodo, setOpenModal} = React.useContext(TodoContext);

    const onChange = (event) =>{
        setNewValueTodo(event.target.value)
    }
    const onCancel = () =>{
        setOpenModal(false);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newValueTodo);
        setOpenModal(false);
    }



    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TODO</label>
            <textarea 
                placeholder="Type the task here"
                value={newValueTodo}
                onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
                <button type="button" 
                onClick={onCancel} className="TodoForm-button TodoForm-button-cancel">Cancel</button>

                <button type="submit" className="TodoForm-button TodoForm-button-add">Add</button>
            </div>
        </form>
    )
}

export {Form}