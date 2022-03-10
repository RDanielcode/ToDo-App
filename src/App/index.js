import React from "react";
import './App.css';
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import {Modal} from "../Modal/index"
import {Form} from "../TodoForm/index"
import {TodosLoading} from "../TodosLoading"
import {TodosEmpty} from "../TodosEmpty"
import {TodosError} from "../TodosError"
import {TodoHeader} from "../TodoHeader"
import {useTodo} from "./useTodo"
import {ChangeAlert} from "../ChangeAlert/index.js"

// let defaultItem = [
//   {
//     text: 'cut onion',
//     completed: false,
//   },

//   {
//     text: 'cut tomato',
//     completed: false,
//   },

//   {
//     text: 'cut apple',
//     completed: false,
//   }
// ]



function App() {
 
  const {error,
    loading,
    searchedTodo,
    deleteTodos,
    completeTodos, 
    openModal, 
    completedTodos,
    totalTodos, 
    searchValue, 
    setSearchValue,
    setOpenModal, 
    addTodo,
    sincronizeTodo, 
    sincronizedTodo} = useTodo()
    
    return(
      <React.Fragment>
        <TodoHeader 
          loading={loading}
        >
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            // loading={loading}
          />
          <TodoSearch
            // loading={loading}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>
        <TodoList
          error={error}
          loading={loading}
          searchedTodo={searchedTodo}
          totalTodos={totalTodos}
          searchText={searchValue}
          sincronizedTodo={sincronizedTodo}
          onError = {()=> <TodosError/>}
          onLoading = {()=> <TodosLoading/>}
          onEmpty = {()=> <TodosEmpty/>}
          onEmptyResult = {(searchText)=> <p>No results for {searchText}</p>}
          render ={todo => (<TodoItem 
            key ={todo.text} 
            text = {todo.text} 
            completed = {todo.completed}
            onComplete = {()=> completeTodos(todo.text)}
            onDelete = {()=> deleteTodos(todo.text)}/>)}
        >

          {/* {todo => (<TodoItem 
            key ={todo.text} 
            text = {todo.text} 
            completed = {todo.completed}
            onComplete = {()=> completeTodos(todo.text)}
            onDelete = {()=> deleteTodos(todo.text)}/>)
          } */}
    
        </TodoList>  
        {!!openModal && (
          <Modal>
          <Form
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          >

          </Form>
        </Modal>
        )}
        {!loading && <CreateTodoButton
          setOpenModal={setOpenModal}
        />}

        <ChangeAlert
          sincronize={sincronizeTodo}
        />
        
      </React.Fragment>
    )
} 


export default App;
