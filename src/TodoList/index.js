import React from "react";

function TodoList (props){
    const renderFunc = props.children || props.render;
    
    return(
        <section className='container'>
            <ul>
                {props.error && props.onError()}
                {props.loading && props.onLoading()}
                {(!props.loading && !props.totalTodos) && props.onEmpty()}
                {(!!props.totalTodos && !props.searchedTodo.length)&& props.onEmptyResult(props.searchText)}
                {(!props.loading && !props.error) && props.searchedTodo.map(todo => renderFunc(todo))}
            </ul>
        </section>
    )
}

export {TodoList};