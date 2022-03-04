import { AppUi } from "./AppUi.js";
import React from "react";
import { TodoProvider } from "../TodoContext/index.js";

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
  

  return (
   <TodoProvider>
     <AppUi/>
   </TodoProvider>
  )
}

export default App;
