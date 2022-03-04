import React from "react";
import { useLogicalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
    const {
        item:todos, 
        saveItem: saveTodo,
        loading,
        error
      } = useLogicalStorage('TODOS_V1', [])
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter((todo)=> !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodo = [];
    
      if (!searchValue.length >= 1) {
        searchedTodo = todos;
      } else {
        searchedTodo = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })
      }
    
      const completeTodos = (text)=> {
        // Item = {...Item,completed: true}
        // console.log(Item);
        // setTodo(Item)
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodo = [...todos]
        newTodo[todoIndex].completed = true
        saveTodo(newTodo);
      };
    
    
      const deleteTodos = (text)=> {
        // Item = {...Item,completed: true}
        // console.log(Item);
        // setTodo(Item)
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodo = [...todos]
        newTodo.splice(todoIndex, 1)
        saveTodo(newTodo);
      };

      const addTodo = (text)=> {

        const newTodo = [...todos]
        newTodo.push({
          completed: false,
          text
        })
        saveTodo(newTodo);
      };

    return(
        <TodoContext.Provider value={{
            error,
            loading,
            completedTodos,
            totalTodos,
            searchValue,
            searchedTodo,
            setSearchValue,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};