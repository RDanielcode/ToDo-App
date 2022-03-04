import React from "react";
import './App.css';
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoContext } from "../TodoContext";
import {Modal} from "../Modal/index"
import {Form} from "../TodoForm/index"
import {TodosLoading} from "../TodosLoading"
import {TodosEmpty} from "../TodosEmpty"
import {TodosError} from "../TodosError"

function AppUi (){

  const {error,
    loading,
    searchedTodo,
    deleteTodos,
    completeTodos, 
    openModal} = React.useContext(TodoContext)
    
    return(
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
            <TodoList>
                {error && <TodosError/>}
                {loading && <TodosLoading/>}
                {(!loading && !searchedTodo.length) && <TodosEmpty/>}
                {searchedTodo.map(todo => (<TodoItem 
                  key ={todo.text} 
                  text = {todo.text} 
                  completed = {todo.completed}
                  onComplete = {()=> completeTodos(todo.text)}
                  onDelete = {()=> deleteTodos(todo.text)}
                />))}
            </TodoList>
  
        {!!openModal && (
          <Modal>
          <Form>

          </Form>
        </Modal>
        )}
        {!loading && <CreateTodoButton/>}
        
      </React.Fragment>
    )
}

export {AppUi};