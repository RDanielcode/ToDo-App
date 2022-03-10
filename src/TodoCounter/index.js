import React from "react";
// import { TodoContext } from "../TodoContext";

function TodoCounter ({completedTodos, totalTodos, loading}) {
    // const {completedTodos, totalTodos} = React.useContext(TodoContext);
    return(
        <h4 className={`TodoCounter ${loading && 'TodoCounter--loading'}`}>Completed {completedTodos} of {totalTodos}</h4>
    );
}

export {TodoCounter};