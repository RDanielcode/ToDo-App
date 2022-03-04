import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter () {
    const {completedTodos, totalTodos} = React.useContext(TodoContext);
    return(
        <h4 className='TodoCounter'>Completed {completedTodos} of {totalTodos}</h4>
    );
}

export {TodoCounter};