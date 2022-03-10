import React from "react";
// import { TodoContext } from "../TodoContext";

function TodoSearch ({searchValue, setSearchValue, loading}){
    // const [searchValue, setSearchValue] = React.useState('');
    // const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const inputFunction = (event) => {
        setSearchValue(event.target.value);
    }
    // console.log(loading)

    return [
        <input className='TodoSearch' 
            placeholder='Add Task'
            value = {searchValue}
            onChange={inputFunction}
            disabled={loading}>
        </input>,
        <p>
            {searchValue}
        </p>
    ]
}

export {TodoSearch};