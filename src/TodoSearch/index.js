import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch (){
    // const [searchValue, setSearchValue] = React.useState('');
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const inputFunction = (event) => {
        setSearchValue(event.target.value);
    }

    return [
        <input className='TodoSearch' 
        placeholder='Add Task'
        value = {searchValue}
        onChange={inputFunction}>
        </input>,
        <p>
            {searchValue}
        </p>
    ]
}

export {TodoSearch};